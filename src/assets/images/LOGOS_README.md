# Footer Logo 图片说明

## 所需图片文件

Footer 组件需要以下两个 logo 图片：

### 1. logo-light.png
- **路径**: `src/assets/images/logo-light.png`
- **用途**: IFoU (International Forum on Urbanism) Logo
- **位置**: Footer 左侧
- **建议尺寸**: 
  - 高度: 80px - 120px
  - 宽度: 自动（保持宽高比）
- **格式**: PNG（支持透明背景）
- **描述**: 深色系的 IFoU logo，包含文字 "INTERNATIONAL FORUM ON URBANISM"

### 2. school-logo.png
- **路径**: `src/assets/images/school-logo.png`
- **用途**: 清华大学建筑学院 Logo
- **位置**: Footer 中央
- **建议尺寸**:
  - 高度: 80px - 120px
  - 宽度: 自动（保持宽高比）
- **格式**: PNG（支持透明背景）
- **描述**: 清华大学建筑学院的组合logo，包含：
  - 清华大学校徽
  - 建筑图案
  - 中文名称：清华大学建筑学院
  - 英文名称：School of Architecture, Tsinghua University

## 当前状态

如果图片文件不存在，系统会显示**文字占位符**：

### 左侧占位符：
```
INTERNATIONAL
FORUM ON
URBANISM
```

### 中央占位符：
```
清华大学建筑学院
School of Architecture, Tsinghua University
```

## 如何添加Logo

### 步骤 1: 准备图片
1. 从视觉效果图中提取或准备 logo 图片
2. 确保图片格式为 PNG（推荐）或 JPG
3. 优化图片大小（建议 < 100KB）

### 步骤 2: 命名文件
- IFoU Logo → `logo-light.png`
- 清华Logo → `school-logo.png`

### 步骤 3: 放置文件
将两个文件放到：`src/assets/images/` 文件夹

### 步骤 4: 验证
1. 刷新浏览器
2. 滚动到页面底部
3. 查看 logo 是否正确显示

## 图片规格建议

### 文件格式
- **首选**: PNG（支持透明背景）
- **备选**: JPG, WebP

### 尺寸要求
- **桌面端**: 高度 80px
- **平板端**: 高度 60px
- **移动端**: 高度 40-50px

（代码会自动调整）

### 优化建议
1. 使用矢量图转PNG，确保清晰度
2. 移除不必要的透明边距
3. 压缩文件大小但保持质量
4. 确保在浅色背景上可见（Footer背景为 #E8E8E8）

## 背景色信息

Footer 背景色：`#E8E8E8`（浅灰色）

Logo 应该：
- 深色系（与浅灰背景形成对比）
- 或带有边框轮廓
- 避免使用纯白色（不可见）

## 响应式行为

Footer 在不同屏幕尺寸的布局：

### 桌面端 (>768px)
```
[IFoU Logo]    [School Logo]    [© 2026 ...]
  左对齐           居中              右对齐
```

### 移动端 (≤768px)
```
    [IFoU Logo]
       居中
    
    [School Logo]
       居中
    
    [© 2026 ...]
       居中
```

## 技术实现

Footer 组件使用以下逻辑加载图片：

```javascript
try {
  logoLight = new URL('../assets/images/logo-light.png', import.meta.url).href
} catch (e) {
  // 图片不存在时显示占位符
}
```

```vue
<img v-if="logoLight" :src="logoLight" alt="..." />
<div v-else class="footer-logo-placeholder">占位符</div>
```

## 注意事项

1. ✅ 图片文件名必须完全匹配（区分大小写）
2. ✅ 放置在正确的文件夹 `src/assets/images/`
3. ✅ 确保图片在浅灰色背景上清晰可见
4. ✅ Logo 应该是横向排列的，不要太高
5. ⚠️ 避免使用过大的文件（建议 < 100KB）
6. ⚠️ 确保有合法的使用权限

## 暂时跳过

如果暂时没有准备好图片：
- ✅ 占位符会自动显示
- ✅ Footer 功能不受影响
- ✅ 稍后可以随时添加图片
- ✅ 添加后刷新浏览器即可看到

系统已配置为优雅降级，不会因为图片缺失而出错。

