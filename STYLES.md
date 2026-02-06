# IFoU 2026 Conference Website - 样式系统说明

## 样式文件结构

```
/src/assets/styles/
  ├── global.css        # 全局样式、CSS变量、基础样式
  └── components.css    # 组件样式、特殊效果样式
```

## 配色方案

基于官方视觉效果图的配色：

### 主色调
- **主紫色 (Primary Purple)**: `#5B1B7E` - IFCU品牌色，用于标题、重要文字
- **玫红色 (Primary Pink)**: `#E91E8C` - 强调色，用于按钮、编号、装饰元素

### 辅助色
- **辅助紫色**: `#7B2D9E`
- **浅紫色背景**: `#F5E6FF`

### 文字颜色
- **主文字**: `#2D2D2D`
- **次要文字**: `#666666`
- **浅色文字**: `#999999`
- **白色文字**: `#FFFFFF`

### 背景颜色
- **白色**: `#FFFFFF`
- **浅色**: `#F8F8F8`
- **灰色**: `#E5E5E5`

## 字体系统

### 字体家族
```css
--font-family-primary: 'Helvetica Neue', 'Arial', 'PingFang SC', 'Microsoft YaHei', sans-serif;
```

### 字体大小
- **xs**: 12px (0.75rem)
- **sm**: 14px (0.875rem)
- **base**: 16px (1rem)
- **lg**: 18px (1.125rem)
- **xl**: 20px (1.25rem)
- **2xl**: 24px (1.5rem)
- **3xl**: 30px (1.875rem)
- **4xl**: 36px (2.25rem)
- **5xl**: 48px (3rem)

### 字体粗细
- **normal**: 400
- **medium**: 500
- **semibold**: 600
- **bold**: 700

## 间距系统

统一的间距变量：
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)

## 组件样式

### 按钮类

#### 主按钮 (Primary Button)
```html
<button class="btn btn-primary">Click Here</button>
```
- 背景：玫红色 (#E91E8C)
- 文字：白色
- 悬停：加深、上移、阴影

#### 次要按钮 (Secondary Button)
```html
<button class="btn btn-secondary">Learn More</button>
```
- 背景：主紫色 (#5B1B7E)
- 文字：白色

#### 轮廓按钮 (Outline Button)
```html
<button class="btn btn-outline">Register</button>
```
- 背景：透明
- 边框：主紫色
- 悬停：紫色背景

### 编号列表

用于主题、议程等内容：

```html
<div class="numbered-item">
  <div class="numbered-item-number">01</div>
  <div class="numbered-item-content">
    <h3>标题</h3>
    <p>内容描述</p>
  </div>
</div>
```

### 卡片

```html
<div class="card">
  <!-- 内容 -->
</div>
```

### 主题卡片

```html
<div class="theme-card">
  <div class="theme-card-number">01</div>
  <h3>主题标题</h3>
  <p>主题描述</p>
</div>
```

## 工具类

### 文字对齐
- `.text-center` - 居中对齐

### 文字颜色
- `.text-purple` - 紫色文字
- `.text-pink` - 粉色文字

### 背景颜色
- `.bg-light` - 浅色背景
- `.bg-purple` - 紫色背景

### 间距工具类

**Margin:**
- `.mt-sm`, `.mt-md`, `.mt-lg`, `.mt-xl` (margin-top)
- `.mb-sm`, `.mb-md`, `.mb-lg`, `.mb-xl` (margin-bottom)

**Padding:**
- `.pt-sm`, `.pt-md`, `.pt-lg`, `.pt-xl` (padding-top)
- `.pb-sm`, `.pb-md`, `.pb-lg`, `.pb-xl` (padding-bottom)

## 特殊组件

### Hero Banner（页眉横幅）

```html
<div class="hero-banner">
  <div class="container">
    <!-- 内容 -->
  </div>
  <div class="decorative-curve">
    <span class="decorative-curve-text">Text on curve</span>
  </div>
</div>
```

### Section Title（章节标题）

```html
<h2 class="section-title">Call-for-abstract</h2>
<h2 class="section-title pink">Important dates</h2>
```

### 日期表格

```html
<table class="dates-table">
  <thead>
    <tr>
      <th>日期</th>
      <th>事件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>15/04/2026</td>
      <td>Deadline of abstract submission</td>
    </tr>
  </tbody>
</table>
```

## 响应式设计

### 断点
- **移动设备**: < 480px
- **平板设备**: < 768px
- **桌面设备**: < 1024px
- **大屏设备**: >= 1024px

### 响应式调整
- 容器宽度自适应
- 字体大小按屏幕尺寸缩放
- 间距在小屏幕上减小
- 编号列表在移动端改为纵向排列

## CSS 变量使用示例

```css
/* 在组件中使用 CSS 变量 */
.my-component {
  color: var(--primary-purple);
  padding: var(--spacing-lg);
  font-size: var(--font-size-xl);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}
```

## 注意事项

1. **颜色一致性**: 始终使用 CSS 变量而不是硬编码颜色值
2. **间距统一**: 使用间距变量确保整站间距一致
3. **过渡动画**: 所有交互元素应有平滑过渡效果
4. **可访问性**: 确保颜色对比度符合 WCAG 标准
5. **响应式优先**: 所有组件都应考虑移动端显示效果

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

支持现代 CSS 特性，包括：
- CSS Grid
- Flexbox
- CSS Variables
- CSS Transitions
- CSS Transform

