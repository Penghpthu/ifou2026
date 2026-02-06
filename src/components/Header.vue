<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// Header component - 网站头部，包含banner和导航栏

// 获取当前路由
const route = useRoute()

// 尝试导入banner图片，如果不存在则使用空字符串
let bannerImage = ''
try {
  bannerImage = new URL('../assets/images/visual.png', import.meta.url).href
} catch (e) {
  // 图片不存在时使用渐变背景
  console.log('Banner image not found, using gradient background')
}

// 导航栏滚动固定
const isNavFixed = ref(false)
const navbarOffset = ref(0)

const handleScroll = () => {
  // 当滚动距离大于等于导航栏原始位置时，固定导航栏
  if (window.scrollY >= navbarOffset.value) {
    isNavFixed.value = true
  } else {
    isNavFixed.value = false
  }
}

onMounted(() => {
  // 延迟获取导航栏位置，确保 DOM 完全渲染
  setTimeout(() => {
    const bannerWrapper = document.querySelector('.banner-wrapper') as HTMLElement
    const navbar = document.querySelector('.navbar') as HTMLElement
    
    if (bannerWrapper && navbar) {
      // 获取 banner 的高度（包括图片）
      const bannerHeight = bannerWrapper.offsetHeight
      // 导航栏的高度
      const navbarHeight = navbar.offsetHeight
      // 导航栏应该在 banner 底部，所以固定点是 banner 高度减去导航栏高度
      navbarOffset.value = bannerHeight - navbarHeight
    }
  }, 100)
  
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

interface MenuItem {
  label: string
  path: string
  submenu?: { label: string; path: string; disabled?: boolean }[]
}

const menuItems = ref<MenuItem[]>([
  { label: 'Home', path: '/' },
  { label: 'Themes', path: '/themes' },
  { label: 'Keynote Speakers', path: '/keynote-speakers' },
  {
    label: 'Contribute',
    path: '/contribute',
    submenu: [
      { label: 'Call-for-abstracts', path: '/contribute#call-for-abstracts' },
      { label: 'Partner Journals', path: '/contribute#partner-journals' }
    ]
  },
  {
    label: 'Programme',
    path: '/programme',
    submenu: [
      { label: 'Conference Programme', path: '/programme#conference-programme' },
      { label: 'Excursions', path: '/programme#excursions' }
    ]
  },
  {
    label: 'Attend',
    path: '/attend',
    submenu: [
      { label: 'Registration', path: '/attend#registration' },
      { label: 'Conference Venue', path: '/attend#conference-venue' },
      { label: 'Hotels', path: '/attend#hotels', disabled: true },
      { label: 'Transport', path: '/attend#transport', disabled: true },
      { label: 'VISA', path: '/attend#visa', disabled: true }
    ]
  },
  {
    label: 'About',
    path: '/about',
    submenu: [
      { label: 'Host', path: '/about#host' },
      { label: 'Organising Committee', path: '/about#organising' },
      { label: 'Scientific Committee', path: '/about#scientific' }
    ]
  },
  { label: 'Contact', path: '/contact' }
])

const activeMenu = ref<string | null>(null)
const mobileMenuOpen = ref(false)

// 判断是否为当前页面
const isActive = (itemPath: string) => {
  if (itemPath === '/' && route.path === '/') {
    return true
  }
  if (itemPath !== '/' && route.path === itemPath) {
    return true
  }
  // 对于有子菜单的项目，如果当前路径以该路径开头，也算激活
  if (itemPath !== '/' && route.path.startsWith(itemPath)) {
    return true
  }
  return false
}

// Toggle submenu (reserved for future use)
// const toggleSubmenu = (label: string) => {
//   activeMenu.value = activeMenu.value === label ? null : label
// }

const closeSubmenu = () => {
  activeMenu.value = null
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="header">
    <!-- Banner Section with Navigation -->
    <div class="banner-wrapper">
      <div class="banner">
        <img v-if="bannerImage" :src="bannerImage" alt="IFoU 2026 Conference Banner" class="banner-image" />
        <div class="banner-background" v-else>
          <!-- 临时占位背景，显示提示信息 -->
          <div class="placeholder-content">
            <h1>IFoU 2026</h1>
          </div>
        </div>
      </div>

      <!-- Navigation Bar - Positioned at bottom of banner -->
      <nav class="navbar" :class="{ 'nav-fixed': isNavFixed }">
        <div class="container">
          <div class="nav-wrapper">
          <!-- Mobile Menu Toggle -->
          <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <!-- Navigation Menu -->
          <ul class="nav-menu" :class="{ 'mobile-open': mobileMenuOpen }">
            <li
              v-for="item in menuItems"
              :key="item.label"
              class="nav-item"
              :class="{ 
                'has-submenu': item.submenu,
                'active': isActive(item.path)
              }"
              @mouseenter="item.submenu && (activeMenu = item.label)"
              @mouseleave="closeSubmenu"
            >
              <router-link :to="item.path" class="nav-link">
                {{ item.label }}
                <span v-if="item.submenu" class="dropdown-arrow">▼</span>
              </router-link>
              
              <!-- Dropdown Menu -->
              <ul v-if="item.submenu" class="submenu" :class="{ active: activeMenu === item.label }">
                <li v-for="subitem in item.submenu" :key="subitem.label" class="submenu-item">
                  <router-link 
                    v-if="!subitem.disabled" 
                    :to="subitem.path" 
                    class="submenu-link"
                  >
                    {{ subitem.label }}
                  </router-link>
                  <span 
                    v-else 
                    class="submenu-link disabled"
                  >
                    {{ subitem.label }}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="less">
/* Header - No background */
.header {
  background: transparent;
  box-shadow: none;
}

/* Banner Wrapper */
.banner-wrapper {
  position: relative;
  width: 100%;
}

/* Banner Section */
.banner {
  position: relative;
  width: 100%;
  min-height: 200px;
  overflow: visible;
  background: transparent;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  object-position: center top;
}

.banner-background {
  width: 100%;
  min-height: 200px;
  background: linear-gradient(135deg, #F5E6FF 0%, #E8D5FF 25%, #D4B5E8 50%, #E8D5FF 75%, #F5E6FF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  text-align: center;
  color: var(--primary-purple);
  
  h1 {
    font-size: var(--font-size-4xl);
    margin-bottom: var(--spacing-md);
  }
  
  p {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
  }
}

/* Navigation Bar */
.navbar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all var(--transition-base);
  
  &.nav-fixed {
    position: fixed;
    top: 0;
    bottom: auto;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);

  }
}

.nav-wrapper {
  position: relative;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-xl);
  color: #5A5A5A;
  text-decoration: none;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-light);
  white-space: nowrap;
  background-color: transparent;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
}

.nav-item {
  &.active .nav-link {
    background-color: #FFFFFF;
    color: #FF4E71;
    font-weight: var(--font-weight-semibold);
    
    &:hover {
      background-color: #FFFFFF;
      color: #FF4E71;
    }
  }
}

.dropdown-arrow {
  font-size: 0.6em;
  margin-left: var(--spacing-xs);
  transition: transform var(--transition-base);
  
  .nav-item:hover & {
    transform: rotate(180deg);
  }
}

/* Submenu */
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 100%;
  width: max-content;
  background-color: rgba(255, 255, 255, 0.98);
  list-style: none;
  margin: 0;
  padding: var(--spacing-xs) 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--transition-base);
  z-index: 1001;
  backdrop-filter: blur(10px);
  
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.submenu-item {
  padding: 0;
}

.submenu-link {
  display: block;
  padding: var(--spacing-sm) var(--spacing-xl);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-fast);
  white-space: nowrap;
  
  &:hover {
    background-color: rgba(233, 30, 140, 0.1);
    color: var(--primary-pink);
  }
  
  &.disabled {
    color: #CCCCCC;
    cursor: not-allowed;
    
    &:hover {
      background-color: transparent;
      color: #CCCCCC;
    }
  }
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  padding: var(--spacing-sm);
  cursor: pointer;
}

.mobile-menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--primary-purple);
  transition: all var(--transition-base);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .nav-link {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-sm);
  }
}

@media (max-width: 768px) {
  .banner {
    min-height: 150px;
  }

  .banner-background {
    min-height: 150px;
  }

  /* Mobile Navigation */
  .mobile-menu-toggle {
    display: flex;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--bg-white);
    box-shadow: var(--shadow-lg);
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-base);
  }

  .nav-menu.mobile-open {
    max-height: 600px;
  }

  .nav-item {
    width: 100%;
    border-bottom: 1px solid var(--border-light);
  }

  .nav-link {
    justify-content: space-between;
    padding: var(--spacing-md) var(--spacing-lg);
  }

  .submenu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background-color: var(--bg-light);
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-base);
  }

  .submenu.active {
    max-height: 400px;
  }

  .submenu-link {
    padding-left: var(--spacing-2xl);
  }
}

@media (max-width: 480px) {
  .banner {
    min-height: 150px;
  }

  .banner-background {
    min-height: 150px;
  }

  .placeholder-content h1 {
    font-size: var(--font-size-2xl);
  }

  .placeholder-content p {
    font-size: var(--font-size-sm);
  }
}
</style>

