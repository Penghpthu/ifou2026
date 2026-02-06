# Header 组件使用指南

## 组件概述

Header 组件包含两个主要部分：
1. **Banner区域** - 展示会议主题和基本信息
2. **导航栏** - 提供网站各页面的访问链接

## Banner 设计

### 视觉元素
- **背景图片**: `src/assets/images/visual.png`（如不存在则显示渐变背景）
- **主标题**: "Urbanism & AI"
- **副标题**: "For Better Human Settlement"
- **Logo**: "IFCU 2006-2026"
- **会议信息**: "The 18th Conference of International Forum on Urbanism"
- **时间地点**: "Beijing | October 16-19, 2026"

### 颜色使用
- 主紫色: `#660874`
- 玫红色: `#FF4E71`

## 导航栏结构

### 菜单项

1. **Home** (首页)
   - 路径: `/`
   - 无下拉菜单

2. **Themes** (会议主题)
   - 路径: `/themes`
   - 无下拉菜单

3. **Keynote Speakers** (主讲嘉宾)
   - 路径: `/keynote-speakers`
   - 无下拉菜单

4. **Contribute** (贡献)
   - 路径: `/contribute`
   - 下拉菜单:
     - Call-for-abstracts (`/contribute/call-for-abstracts`)
     - Partner Journals (`/contribute/partner-journals`)

5. **Programme** (议程)
   - 路径: `/programme`
   - 下拉菜单:
     - Conference Programme (`/programme/conference`)
     - Excursions (`/programme/excursions`)

6. **Attend** (参会信息)
   - 路径: `/attend`
   - 下拉菜单:
     - Registration (`/attend/registration`)
     - Conference Venue (`/attend/venue`)
     - Hotels (`/attend/hotels`)
     - Transport (`/attend/transport`)
     - VISA (`/attend/visa`)

7. **About** (关于)
   - 路径: `/about`
   - 下拉菜单:
     - Host (`/about/host`)
     - Organising Committee (`/about/organising`)
     - Scientific Committee (`/about/scientific`)

8. **Contact** (联系)
   - 路径: `/contact`
   - 无下拉菜单

## 交互行为

### 桌面端
- 鼠标悬停在有下拉菜单的项目上时，自动显示下拉菜单
- 鼠标移出后，下拉菜单自动隐藏
- 下拉菜单有淡入淡出动画效果
- 导航栏在滚动时固定在顶部（sticky定位）

### 移动端
- 显示汉堡菜单按钮（三条横线）
- 点击按钮展开/收起菜单
- 菜单以垂直方式展示
- 下拉菜单在父菜单下方直接展开
- 无需鼠标悬停，点击菜单项展开子菜单

## 响应式断点

- **桌面**: >= 769px
- **平板**: 481px - 768px  
- **移动**: <= 480px

### 不同屏幕的调整

#### 移动端 (≤ 768px)
- Banner高度: 300px
- Banner内容纵向排列，居中对齐
- Logo字体缩小
- 导航栏改为移动菜单
- 会议信息标签不旋转

#### 平板 (769px - 1024px)
- Banner高度: 350px
- 字体大小适度缩小
- 导航栏保持水平布局但间距缩小

## 如何自定义

### 修改颜色
在 `src/assets/styles/global.css` 中修改 CSS 变量：
```css
--primary-purple: #660874;
--primary-pink: #FF4E71;
```

### 修改菜单结构
在 `Header.vue` 的 `menuItems` 数组中添加或修改菜单项：
```typescript
const menuItems = ref<MenuItem[]>([
  { 
    label: '新菜单', 
    path: '/new-page',
    submenu: [
      { label: '子菜单1', path: '/new-page/sub1' }
    ]
  }
])
```

### 更换Banner图片
1. 将新图片放到 `src/assets/images/` 文件夹
2. 重命名为 `visual.png` 或修改 Header.vue 中的导入路径
3. 建议尺寸: 1920x400px 或更大

## 技术细节

### 依赖
- Vue 3 Composition API
- TypeScript
- CSS Variables

### 主要功能
- 响应式设计
- 下拉菜单
- 粘性导航
- 移动端汉堡菜单
- 平滑过渡动画
- 图片懒加载

### 可访问性
- 语义化HTML标签
- ARIA标签支持
- 键盘导航友好
- 足够的颜色对比度

## 维护建议

1. 定期检查所有链接是否有效
2. 确保下拉菜单项不超过7-8个（用户体验最佳）
3. 保持导航栏高度一致
4. 在不同设备上测试响应式效果
5. 优化Banner图片大小以提升加载速度

