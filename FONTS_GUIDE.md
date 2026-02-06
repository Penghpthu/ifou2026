# 字体使用指南

## 字体配置概览

项目使用两套专业字体，针对不同类型的内容：

### 🎨 Alexandria - 重点文字
用于标题、按钮和重要元素

### 📝 Roboto - 正文文字
用于段落、描述性文本和普通内容

---

## 字体文件位置

所有字体文件位于：`/src/assets/fonts/`

### Alexandria 字体文件
- `Alexandria-ExtraLight.ttf` (200)
- `Alexandria-Light.ttf` (300)
- `Alexandria-Regular.ttf` (400)
- `Alexandria-Medium.ttf` (500)
- `Alexandria-SemiBold.ttf` (600)
- `Alexandria-Bold.ttf` (700)
- `Alexandria-ExtraBold.ttf` (800)

### Roboto 字体文件
- `Roboto-Light.ttf` (300)
- `Roboto-LightItalic.ttf` (300 italic)
- `Roboto-Regular.ttf` (400)
- `Roboto-Italic.ttf` (400 italic)
- `Roboto-Medium.ttf` (500)
- `Roboto-MediumItalic.ttf` (500 italic)

---

## 字体应用规则

### ✅ Alexandria 字体应用于：

#### 1. 所有标题
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-heading); /* Alexandria */
}
```

**适用元素：**
- 页面主标题
- 章节标题
- 卡片标题
- 导航链接标题

#### 2. 所有按钮
```css
.btn {
  font-family: var(--font-family-button); /* Alexandria */
}
```

**适用元素：**
- 主按钮 (.btn-primary)
- 次要按钮 (.btn-secondary)
- 提交按钮 (.submission-button)
- 轮廓按钮 (.btn-outline)

#### 3. 编号和徽章
```css
.numbered-item-number,
.theme-card-number {
  font-family: var(--font-family-heading); /* Alexandria */
}
```

**适用元素：**
- 主题编号（01, 02, 03...）
- 卡片编号
- 数字标记

#### 4. 特殊标签
```css
.section-title {
  font-family: var(--font-family-heading); /* Alexandria */
}
```

**适用元素：**
- Call-for-abstract 标签
- Important dates 标签
- 其他章节标签

#### 5. Logo 和品牌元素
```css
.logo-main,
.logo-subtitle {
  font-family: var(--font-family-heading); /* Alexandria */
}
```

---

### ✅ Roboto 字体应用于：

#### 1. 所有段落文本
```css
p {
  font-family: var(--font-family-primary); /* Roboto */
}
```

**适用元素：**
- 正文段落
- 介绍文字
- 说明文字

#### 2. 列表内容
```css
ul, ol, li {
  font-family: var(--font-family-primary); /* Roboto */
}
```

**适用元素：**
- 无序列表
- 有序列表
- 列表项描述

#### 3. 表格内容
```css
table, td, th {
  font-family: var(--font-family-primary); /* Roboto */
}
```

**适用元素：**
- 表格单元格
- 表格内容文字
- 日期表格

#### 4. 普通链接文字
```css
a {
  font-family: var(--font-family-primary); /* Roboto */
}
```

#### 5. 表单元素
```css
input, textarea, select {
  font-family: var(--font-family-primary); /* Roboto */
}
```

---

## CSS 变量

在 `global.css` 中定义的字体变量：

```css
:root {
  /* Roboto - 用于正文 */
  --font-family-primary: 'Roboto', -apple-system, BlinkMacSystemFont, 
                         'Segoe UI', 'PingFang SC', 'Microsoft YaHei', 
                         sans-serif;
  
  /* Alexandria - 用于标题 */
  --font-family-heading: 'Alexandria', -apple-system, BlinkMacSystemFont, 
                         'Segoe UI', 'PingFang SC', 'Microsoft YaHei', 
                         sans-serif;
  
  /* Alexandria - 用于按钮 */
  --font-family-button: 'Alexandria', -apple-system, BlinkMacSystemFont, 
                        'Segoe UI', sans-serif;
}
```

---

## 字重使用指南

### Alexandria 字重建议

- **ExtraLight (200)**: 非常轻的装饰性文字
- **Light (300)**: 副标题、轻量级标题
- **Regular (400)**: 导航链接、普通标题
- **Medium (500)**: 卡片标题、重要链接
- **SemiBold (600)**: 次要标题
- **Bold (700)**: 主标题、重点按钮
- **ExtraBold (800)**: 超大标题、特殊强调

### Roboto 字重建议

- **Light (300)**: 引言、副标题
- **Regular (400)**: 正文段落、普通文字
- **Medium (500)**: 强调文字、重要段落
- **Italic**: 引用、强调、外文

---

## 实际应用示例

### 示例 1: 页面主标题
```vue
<h1 class="main-title">
  <span class="title-main">Urbanism & AI For Better Human Settlements:</span>
  <span class="title-sub">Reflection, Re-creation, and Regeneration</span>
</h1>
```

**字体**: Alexandria Bold (700)
**颜色**: 紫色 + 粉色

### 示例 2: 正文段落
```vue
<p>
  The 18th Conference of International Forum on Urbanism will be held 
  at School of Architecture, Tsinghua University in Beijing...
</p>
```

**字体**: Roboto Regular (400)
**颜色**: 灰色 (#666666)

### 示例 3: 编号主题
```vue
<div class="theme-item">
  <div class="theme-number">01</div>  <!-- Alexandria Bold -->
  <div class="theme-content">
    <h3>Theme Title</h3>  <!-- Alexandria SemiBold -->
    <p>Description...</p>  <!-- Roboto Regular -->
  </div>
</div>
```

### 示例 4: 按钮
```vue
<button class="btn btn-primary">Submit Your Abstract</button>
```

**字体**: Alexandria SemiBold (600)
**效果**: 大写字母，字母间距

---

## 字体加载性能

### 优化策略

1. **font-display: swap**
   - 使用系统字体立即显示文字
   - 自定义字体加载后切换
   - 避免文字闪烁 (FOIT)

2. **后备字体栈**
   - 系统字体作为后备
   - 确保各平台兼容性
   - 中文字体支持

3. **字体子集化**（可选）
   - 如需优化，可以创建仅包含使用字符的字体子集
   - 减小文件大小
   - 提升加载速度

---

## 浏览器兼容性

### 支持的格式
- **TrueType (.ttf)**: ✅ 所有现代浏览器

### 字体格式优先级
```css
@font-face {
  src: url('../fonts/Alexandria-Regular.ttf') format('truetype');
}
```

---

## 调试和验证

### 检查字体是否正确加载

#### 方法 1: 浏览器开发工具
1. 打开开发者工具 (F12)
2. 转到 Network 标签
3. 筛选 "Font" 类型
4. 检查 .ttf 文件是否成功加载

#### 方法 2: 元素检查
1. 右键点击文字元素
2. 选择 "检查"
3. 在 Computed 标签中查看 font-family
4. 确认使用的字体

#### 方法 3: Console 验证
```javascript
// 检查元素使用的字体
getComputedStyle(document.querySelector('h1')).fontFamily
// 应该返回: "Alexandria, ..."

getComputedStyle(document.querySelector('p')).fontFamily
// 应该返回: "Roboto, ..."
```

---

## 常见问题

### Q: 字体没有加载？
**A**: 检查：
1. 字体文件路径是否正确
2. 文件名大小写是否匹配
3. 浏览器控制台是否有 404 错误

### Q: 中文显示不正常？
**A**: 
- Alexandria 和 Roboto 不包含中文字符
- 系统会自动使用后备字体（PingFang SC 或 Microsoft YaHei）
- 这是正常行为

### Q: 如何添加新的字重？
**A**: 
1. 将新的 .ttf 文件放到 fonts 目录
2. 在 global.css 中添加 @font-face 声明
3. 指定正确的 font-weight 值

### Q: 如何更改特定元素的字体？
**A**: 
```css
.my-element {
  font-family: var(--font-family-heading); /* 使用 Alexandria */
}
```

---

## 最佳实践

1. ✅ **保持一致性**: 遵循既定的字体规则
2. ✅ **使用变量**: 通过 CSS 变量管理字体
3. ✅ **适当字重**: 根据内容重要性选择字重
4. ✅ **可读性优先**: 确保文字清晰易读
5. ⚠️ **避免过多字重**: 限制每个字体家族使用 3-4 个字重
6. ⚠️ **注意对比度**: 轻字重在小尺寸下可能难以阅读

---

## 更新历史

- **2026-02-04**: 初始字体配置
  - 添加 Alexandria 字体（7个字重）
  - 添加 Roboto 字体（6个变体）
  - 配置字体变量和应用规则

---

## 相关文件

- **字体文件**: `/src/assets/fonts/`
- **全局样式**: `/src/assets/styles/global.css`
- **组件样式**: `/src/assets/styles/components.css`
- **样式指南**: `/STYLES.md`

