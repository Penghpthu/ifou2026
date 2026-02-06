# IFoU 2026 Conference Website Architecture

## 文件夹结构
/src
  /assets         # 存放静态资源，如图片、字体、样式等
    /images       # 存放图片文件
    /styles       # 存放全局样式
  /components     # 存放可复用的 Vue 组件
    Header.vue    # 网站头部，包含导航栏
    Footer.vue    # 网站底部，包含联系方式和社交媒体链接
  /views          # 存放页面组件
    Home.vue      # 首页，展示关键信息及最新更新
    Themes.vue    # 会议主题介绍页面
    KeynoteSpeakers.vue  # 会议主讲嘉宾页面
    Contribute.vue    # 贡献页面，包括Call-for-abstracts和Partner Journals
    Programme.vue     # 会议议程页面，包括Conference Programme和Excursions
    Attend.vue        # 参会信息页面，包括Registration、Conference Venue、Hotels、Transport、VISA等
    About.vue         # 会议组织者信息页面，包括Host、Organising Committee、Scientific Committee等
    Contact.vue       # 联系页面，包含联系方式
  /router          # 路由配置文件
    index.ts       # 配置所有页面路径
  /store           # 状态管理
    index.ts       # 管理网站的全局状态，如用户的登录状态、页面内容等
  /types           # TypeScript 类型定义
    index.ts       # 定义各页面的数据结构类型
  App.vue          # Vue 根组件，包含全局布局结构
  main.ts          # 项目入口文件，初始化Vue实例
/public            # 存放静态文件，直接部署的资源
  /index.html      # 入口HTML文件
  /favicon.ico     # 网站图标


## 每个文件夹与文件的作用

### `/src`

#### `/assets`
- **/images**: 存放网站使用的所有图片文件。
- **/styles**: 存放全局CSS样式文件，包含统一的字体、颜色和布局样式等。

#### `/components`
- **Header.vue**: 网站的头部组件，包含导航栏、logo和全局搜索等。
- **Footer.vue**: 网站的底部组件，包含版权信息、社交媒体链接和联系方式。

#### `/views`
- **Home.vue**: 首页，展示会议的关键信息，包括会议信息、时间表和最新更新内容。
- **Themes.vue**: 会议主题页面，介绍会议的各个主题，展示与主题相关的详细信息。
- **KeynoteSpeakers.vue**: 展示会议主讲嘉宾的详细信息，如个人简介、演讲内容等。
- **Contribute.vue**: 贡献页面，包含Call-for-abstracts和Partner Journals的相关信息。
- **Programme.vue**: 会议议程页面，展示所有的会议安排、研讨会等内容。
- **Attend.vue**: 参会信息页面，展示报名信息、地点、住宿、交通等相关内容。
- **About.vue**: 组织页面，展示会议的主办方、组织委员会和科学委员会的成员信息。
- **Contact.vue**: 联系页面，包含会议的联系方式，地图等信息。

#### `/router`
- **index.ts**: 配置网站的路由信息，指定每个页面的访问路径和组件。

#### `/store`
- **index.ts**: Vuex 状态管理，管理全局状态，比如当前激活的页面、用户的偏好设置等。

#### `/types`
- **index.ts**: 用于定义项目中使用的 TypeScript 类型，包括各个页面的结构、数据格式等。

### `/public`
- **index.html**: 网站的根HTML文件，用于挂载Vue应用。
- **favicon.ico**: 网站的图标，显示在浏览器标签栏。

## 页面内容及作用

1. **Home 页面**:
   - 展示网站的关键信息，如会议的时间、地点、主要活动和最新动态。
   - 提供动态更新的模块，以便随时更新会议相关信息。

2. **Themes 页面**:
   - 介绍会议的各个主题。
   - 包括关于主题的详细信息，可能会有图片或相关链接。

3. **Keynote Speakers 页面**:
   - 展示会议主要嘉宾的信息，包括照片、简介、演讲题目等。

4. **Contribute 页面**:
   - 提供Call-for-abstracts和Partner Journals的信息。
   - 用户可以查看提交摘要的要求和期刊合作的相关信息。

5. **Programme 页面**:
   - 展示会议的详细日程安排。
   - 包含会议的分会场、主题讨论、工作坊和Excursions信息。

6. **Attend 页面**:
   - 提供参会的具体信息，包括注册、交通、住宿等。

7. **About 页面**:
   - 提供会议的主办方、组织委员会和科学委员会的详细信息。

8. **Contact 页面**:
   - 提供会议的联系方式。

## 总结
该架构设计使得每个页面都有独立的组件，并且通过Vuex状态管理和路由配置有效组织整个项目。每个页面的内容和功能清晰分离，便于后期的维护和扩展。
