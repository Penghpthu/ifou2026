# 🚀 IFoU 2026 网站部署指南

## 📦 构建状态

✅ 项目已成功构建
- 构建输出目录: `dist/`
- 构建时间: ~1s
- 总大小: ~5MB (包含所有资源)

---

## 方案一：Vercel 部署 (推荐 ⭐)

### 为什么选择 Vercel？
- ✅ 完全免费
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ 自动部署（Git 集成）
- ✅ 零配置

### 步骤：

#### 1. 安装 Vercel CLI
```bash
npm install -g vercel
```

#### 2. 登录 Vercel
```bash
vercel login
```

#### 3. 部署项目
```bash
cd /Users/php/Desktop/ifou2026
vercel
```

#### 4. 跟随提示完成设置：
- Setup and deploy? **Yes**
- Which scope? 选择您的账户
- Link to existing project? **No**
- Project name? `ifou2026` (或自定义)
- In which directory? `.` (当前目录)
- Override settings? **No**

#### 5. 生产环境部署
```bash
vercel --prod
```

### 自动部署设置

1. 将代码推送到 GitHub
2. 在 Vercel 网站 (https://vercel.com) 导入 GitHub 项目
3. Vercel 会自动检测为 Vite 项目
4. 每次推送代码，自动触发部署

### Vercel 配置文件 (可选)

创建 `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 方案二：Netlify 部署

### 步骤：

#### 1. 安装 Netlify CLI
```bash
npm install -g netlify-cli
```

#### 2. 登录 Netlify
```bash
netlify login
```

#### 3. 初始化项目
```bash
netlify init
```

#### 4. 部署
```bash
netlify deploy --prod
```

### Netlify 配置文件

创建 `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 方案三：GitHub Pages 部署

### 步骤：

#### 1. 更新 `vite.config.ts`

添加 base 路径:
```typescript
export default defineConfig({
  plugins: [vue()],
  base: '/ifou2026/',  // 替换为您的仓库名
})
```

#### 2. 创建部署脚本

创建 `deploy.sh`:
```bash
#!/usr/bin/env sh

# 构建
npm run build

# 进入构建输出目录
cd dist

# 如果是部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
```

#### 3. 运行部署
```bash
chmod +x deploy.sh
./deploy.sh
```

#### 4. 在 GitHub 仓库设置
- Settings → Pages
- Source: `gh-pages` branch
- 保存

---

## 方案四：传统服务器部署

### 使用 Nginx

#### 1. 构建项目
```bash
npm run build
```

#### 2. 上传 dist 目录到服务器
```bash
scp -r dist/* user@your-server:/var/www/ifou2026
```

#### 3. Nginx 配置

创建 `/etc/nginx/sites-available/ifou2026`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/ifou2026;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
}
```

#### 4. 启用站点
```bash
sudo ln -s /etc/nginx/sites-available/ifou2026 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 📊 性能优化建议

### 1. 图片优化
当前图片较大，建议：
```bash
# 安装图片优化工具
npm install -D vite-plugin-imagemin

# 配置 vite.config.ts
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    vue(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [{ removeViewBox: false }]
      }
    })
  ]
})
```

### 2. 代码分割
已自动实现，无需额外配置

### 3. CDN 加速
- Vercel/Netlify 自带全球 CDN
- 自建服务器可使用 Cloudflare CDN

---

## 🔒 环境变量配置

### 创建 `.env.production`
```env
VITE_APP_TITLE=IFoU 2026
VITE_API_URL=https://api.ifou2026.com
```

### 在代码中使用
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## ✅ 部署检查清单

### 部署前：
- [ ] 运行 `npm run build` 确保无错误
- [ ] 本地预览构建结果: `npm run preview`
- [ ] 检查所有页面功能正常
- [ ] 测试移动端响应式
- [ ] 检查图片和字体加载

### 部署后：
- [ ] 测试所有路由可访问
- [ ] 测试导航栏功能
- [ ] 测试锚点链接
- [ ] 测试邮件链接
- [ ] 检查控制台无错误
- [ ] 测试不同浏览器兼容性
- [ ] 使用 Lighthouse 检查性能

---

## 🌐 域名配置

### 自定义域名设置

#### Vercel:
1. 在项目设置中添加域名
2. 配置 DNS 记录:
   ```
   Type: CNAME
   Name: www (或 @)
   Value: cname.vercel-dns.com
   ```

#### Netlify:
1. 在项目设置中添加域名
2. 配置 DNS 记录:
   ```
   Type: CNAME
   Name: www
   Value: xxx.netlify.app
   ```

---

## 📱 PWA 支持 (可选)

### 添加 PWA 功能

#### 1. 安装插件
```bash
npm install -D vite-plugin-pwa
```

#### 2. 配置 vite.config.ts
```typescript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'IFoU 2026',
        short_name: 'IFoU',
        description: '18th International Forum on Urbanism',
        theme_color: '#660874',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

---

## 🐛 常见问题

### 1. 页面刷新后 404
**解决方案**: 配置服务器重写规则，将所有请求指向 index.html

### 2. 图片无法加载
**检查**: 
- 图片路径是否正确
- 是否使用了正确的导入方式
- 构建后图片是否在 dist 目录

### 3. 路由不工作
**检查**:
- Vue Router 模式设置
- 服务器重写规则
- base 路径配置

---

## 📞 技术支持

如有部署问题，请参考：
- Vercel 文档: https://vercel.com/docs
- Netlify 文档: https://docs.netlify.com
- Vite 文档: https://vitejs.dev/guide/static-deploy.html

---

## 🎉 部署完成后

### 分享您的网站
部署成功后，您将获得一个URL，例如：
- Vercel: `https://ifou2026.vercel.app`
- Netlify: `https://ifou2026.netlify.app`
- 自定义域名: `https://www.ifou2026.com`

### 性能监控
使用以下工具监控网站性能：
- Google Analytics
- Vercel Analytics
- Lighthouse CI

---

**祝部署顺利！🚀**

