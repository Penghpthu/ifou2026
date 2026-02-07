<script setup lang="ts">
// Footer component - 网站底部，包含logo、版权信息和联系方式

// 导入logo图片
let logoLight = ''
let schoolLogo = ''

try {
  logoLight = new URL('../assets/images/logo-light.png', import.meta.url).href
} catch (e) {
  console.log('Logo light image not found')
}

try {
  schoolLogo = new URL('../assets/images/school-logo.png', import.meta.url).href
} catch (e) {
  console.log('School logo image not found')
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Left: Both Logos -->
        <div class="footer-left">
          <div class="logos-group">
            <!-- IFoU Logo -->
            <div class="logo-item">
              <a href="https://ifou.org/#/" target="_blank" rel="noopener noreferrer" class="logo-link">
                <img v-if="logoLight" :src="logoLight" alt="International Forum on Urbanism" class="footer-logo-ifou" />
                <div v-else class="footer-logo-placeholder">
                  <strong>INTERNATIONAL<br>FORUM ON<br>URBANISM</strong>
                </div>
              </a>
            </div>

            <!-- School Logo -->
            <div class="logo-item">
              <a href="https://www.arch.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer" class="logo-link">
                <img v-if="schoolLogo" :src="schoolLogo" alt="School of Architecture, Tsinghua University" class="footer-logo-school" />
                <div v-else class="footer-school-placeholder">
                  <p>School of Architecture, Tsinghua University</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Copyright -->
        <div class="footer-right">
          <p class="copyright">&copy; {{ currentYear }} International Forum on Urbanism</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="less">
.footer {
  width: 100%;
  background-color: #EEEEEE;
  margin-top: auto;
  padding: var(--spacing-2xl) 0;
}

.footer-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--spacing-2xl);
}

/* Left Section - Both Logos */
.footer-left {
  flex: 0 0 auto;
}

.logos-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.logo-item {
  display: flex;
  align-items: center;
}

.logo-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.75;
  }
}

/* IFoU Logo */
.footer-logo-ifou {
  height: 65px;
  width: auto;
  object-fit: contain;
}

.footer-logo-placeholder {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: #5A1B1B;
  line-height: 1.3;
  text-align: left;
}

/* School Logo */
.footer-logo-school {
  height: 65px;
  width: auto;
  object-fit: contain;
}

.footer-school-placeholder {
  text-align: left;
  color: var(--text-secondary);
  
  strong {
    display: block;
    font-size: var(--font-size-base);
    color: var(--text-primary);
    margin-bottom: var(--spacing-xs);
  }
  
  p {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    margin: 0;
  }
}

/* Right Section - Copyright */
.footer-right {
  flex: 0 0 auto;
  text-align: right;
  display: flex;
  align-items: flex-end;
}

.copyright {
  font-size: var(--font-size-sm);
  color: #999999;
  margin: 0;
  white-space: nowrap;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    gap: var(--spacing-lg);
  }

  .logos-group {
    gap: var(--spacing-sm);
  }

  .footer-logo-ifou,
  .footer-logo-school {
    height: 50px;
  }

  .copyright {
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-lg) 0;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg);
  }

  .footer-left {
    width: 100%;
  }

  .logos-group {
    justify-content: center;
    gap: var(--spacing-xs);
  }

  .footer-right {
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .footer-logo-ifou,
  .footer-logo-school {
    height: 45px;
  }

  .copyright {
    white-space: normal;
  }
}

@media (max-width: 480px) {
  .logos-group {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .footer-logo-ifou,
  .footer-logo-school {
    height: 40px;
  }

  .footer-logo-placeholder {
    font-size: 10px;
  }
}
</style>

