<script setup lang="ts">
// Style Guide - 样式指南页面（供开发参考）
</script>

<template>
  <div class="style-guide">
    <div class="container">
      <h1 class="text-center text-purple">IFoU 2026 - 样式指南</h1>
      
      <!-- 颜色示例 -->
      <section class="section">
        <h2 class="section-title">配色方案</h2>
        <div class="color-grid">
          <div class="color-item">
            <div class="color-box" style="background-color: #5B1B7E;"></div>
            <p>主紫色<br>#5B1B7E</p>
          </div>
          <div class="color-item">
            <div class="color-box" style="background-color: #E91E8C;"></div>
            <p>玫红色<br>#E91E8C</p>
          </div>
          <div class="color-item">
            <div class="color-box" style="background-color: #7B2D9E;"></div>
            <p>辅助紫色<br>#7B2D9E</p>
          </div>
          <div class="color-item">
            <div class="color-box" style="background-color: #F5E6FF;"></div>
            <p>浅紫色<br>#F5E6FF</p>
          </div>
        </div>
      </section>

      <!-- 按钮示例 -->
      <section class="section">
        <h2 class="section-title">按钮样式</h2>
        <div class="button-examples">
          <button class="btn btn-primary">主按钮 Primary</button>
          <button class="btn btn-secondary">次要按钮 Secondary</button>
          <button class="btn btn-outline">轮廓按钮 Outline</button>
          <button class="submission-button">Submission Button</button>
        </div>
      </section>

      <!-- 标题示例 -->
      <section class="section">
        <h2 class="section-title">标题层级</h2>
        <h1>标题 H1 - 48px</h1>
        <h2>标题 H2 - 36px</h2>
        <h3>标题 H3 - 30px</h3>
        <h4>标题 H4 - 24px</h4>
        <h5>标题 H5 - 20px</h5>
        <h6>标题 H6 - 18px</h6>
      </section>

      <!-- 编号列表示例 -->
      <section class="section">
        <h2 class="section-title">编号列表</h2>
        <div class="numbered-item">
          <div class="numbered-item-number">01</div>
          <div class="numbered-item-content">
            <h3>第一个主题</h3>
            <p>这是第一个主题的详细描述内容，展示了编号列表的样式效果。</p>
          </div>
        </div>
        <div class="numbered-item">
          <div class="numbered-item-number">02</div>
          <div class="numbered-item-content">
            <h3>第二个主题</h3>
            <p>这是第二个主题的详细描述内容，展示了编号列表的样式效果。</p>
          </div>
        </div>
      </section>

      <!-- 卡片示例 -->
      <section class="section">
        <h2 class="section-title">卡片样式</h2>
        <div class="cards-grid">
          <div class="card">
            <h3>标准卡片</h3>
            <p>这是一个标准卡片的示例，带有悬停效果。</p>
          </div>
          <div class="theme-card">
            <div class="theme-card-number">01</div>
            <h3>主题卡片</h3>
            <p>这是一个主题卡片的示例，带有编号和悬停效果。</p>
          </div>
        </div>
      </section>

      <!-- 日期表格示例 -->
      <section class="section">
        <h2 class="section-title pink">重要日期</h2>
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
            <tr>
              <td>15/05/2026</td>
              <td>Notification of abstract acceptance</td>
            </tr>
            <tr>
              <td>01/06/2026</td>
              <td>Registration opens</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 工具类示例 -->
      <section class="section bg-light">
        <h2 class="section-title">工具类示例</h2>
        <p class="text-purple">紫色文字 (.text-purple)</p>
        <p class="text-pink">粉色文字 (.text-pink)</p>
        <p class="text-center">居中文字 (.text-center)</p>
        <div class="mt-xl mb-xl">
          <p>上下外边距 XL (.mt-xl .mb-xl)</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="less">
.style-guide {
  padding: var(--spacing-3xl) 0;
}

.section {
  margin-bottom: var(--spacing-3xl);
  padding: var(--spacing-xl);
  background-color: var(--bg-white);
  border-radius: var(--radius-lg);
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.color-item {
  text-align: center;
}

.color-box {
  width: 100%;
  height: 100px;
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-sm);
  box-shadow: var(--shadow-md);
}

.button-examples {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  margin-top: var(--spacing-lg);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

@media (max-width: 768px) {
  .button-examples {
    flex-direction: column;
  }
  
  .button-examples button {
    width: 100%;
  }
}
</style>

