# Banner 图片占位说明

## 当前状态

由于 `visual.png` 图片文件尚未添加到项目中，Header 组件当前使用**渐变背景占位符**作为临时替代方案。

## ⚠️ 重要说明

Banner 图片本身应该包含所有的文字和设计元素：
- "Urbanism & AI" 标题
- "For Better Human Settlement" 副标题
- "IFCU 2006-2026" Logo
- "The 18th Conference of International Forum on Urbanism"
- "Beijing | October 16-19, 2026"
- 背景装饰元素（建筑剪影、曲线等）

**代码中不会在图片上叠加任何文字**，因此图片必须是完整的设计稿。

## 背景效果

当前显示的渐变背景占位符：
- 紫色调渐变
- 显示提示信息，提醒添加图片
- 仅用于开发测试

## 如何添加真实 Banner 图片

### 步骤 1: 准备图片
从您提供的视觉效果图中提取 banner 图片，或准备类似的图片：
- **推荐尺寸**: 1920 x 400 像素（最小）
- **格式**: PNG, JPG, 或 WebP
- **内容**: 包含"Urbanism & AI"主题、北京地标建筑（如天坛）、现代城市元素

### 步骤 2: 添加到项目
1. 将图片文件重命名为 `visual.png`
2. 放置到 `src/assets/images/` 文件夹
3. 刷新浏览器

### 步骤 3: 验证
- 打开 http://localhost:5173/
- Banner 区域应该显示您的图片
- 确保文字内容仍然清晰可读

## 图片要求

### 尺寸建议
- **宽度**: 1920px - 2560px
- **高度**: 400px - 500px
- **宽高比**: 约 4:1 或 5:1

### 内容要求
根据视觉效果图，banner **必须完整包含**：
1. 淡紫色/灰色调背景
2. 北京标志性建筑剪影（天坛、现代建筑）
3. **所有文字内容已排版好**：
   - "Urbanism & AI" 主标题（左上，紫色）
   - "For Better Human Settlement" 副标题（左上，紫色）
   - "IFCU 2006-2026" Logo（左侧，紫色+粉色）
   - 会议信息标签（右侧，粉色背景）
   - "Beijing | October 16-19, 2026" （右下）
4. 粉色曲线装饰元素（右侧）

### 优化建议
- 使用 WebP 格式以减小文件大小
- 压缩图片但保持视觉质量
- 文件大小控制在 500KB 以内
- 使用响应式图片（提供多个尺寸）

## 暂时跳过此步骤

如果您暂时没有准备好图片，可以：
1. 继续使用当前的渐变背景
2. 稍后再添加图片
3. Header 组件会自动检测并加载图片

系统已经配置为自动处理图片存在与否的情况，不会影响开发进度。

## 技术细节

### 图片显示方式
Header 组件使用以下设置确保图片完整显示：
```css
.banner-image {
  width: 100%;
  height: auto;
  object-fit: contain;  /* 不裁剪，完整显示 */
  object-position: center top;
}
```

### 条件渲染
```vue
<img v-if="bannerImage" :src="bannerImage" ... />
<div v-else class="banner-background">占位符</div>
```

这确保了：
- ✅ 图片存在时：完整显示，不裁剪，不变形
- ✅ 图片不存在时：显示渐变背景占位符
- ✅ Banner区域无文字叠加（图片自带所有内容）
- ✅ 导航栏背景半透明，带毛玻璃效果
- ✅ 无需修改代码即可切换

### 导航栏样式
```css
.navbar {
  background-color: rgba(232, 232, 232, 0.95);
  backdrop-filter: blur(10px);  /* 毛玻璃效果 */
}
```

