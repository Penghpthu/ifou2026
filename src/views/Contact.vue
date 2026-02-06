<script setup lang="ts">
// Contact page - 联系页面，包含邮件联系方式
const emailAddress = 'ifou2026@tsinghua.edu.cn';
</script>

<template>
  <div class="contact-page">
    <div class="container">
      
      <div class="contact-content">
        <p class="contact-text">
          For inquiries, please contact 
          <a :href="`mailto:${emailAddress}`" class="email-link">{{ emailAddress }}</a>
          <a :href="`mailto:${emailAddress}`" class="email-button" aria-label="Send email">
            <svg 
              class="email-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped lang="less">
.contact-page {
  background-color: var(--bg-primary);
  padding: var(--spacing-3xl) 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-2xl);
  width: 100%;
}

.contact-content {
  width: 100%;
}

.contact-text {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.email-link {
  color: var(--text-primary);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--primary-purple);
    text-decoration: underline;
  }
}

.email-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #E0E0E0;
  border-radius: 50%;
  color: #666666;
  text-decoration: none;
  transition: all var(--transition-base);
  cursor: pointer;
  margin-left: var(--spacing-xs);
  flex-shrink: 0;
  
  &:hover {
    background-color: var(--primary-purple);
    color: var(--text-white);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
}

.email-icon {
  width: 18px;
  height: 18px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-page {
    padding: var(--spacing-2xl) 0;
  }
  
  .container {
    padding: 0 var(--spacing-lg);
  }
  
  .contact-text {
    font-size: var(--font-size-sm);
    flex-wrap: wrap;
  }
  
  .email-button {
    width: 28px;
    height: 28px;
  }
  
  .email-icon {
    width: 16px;
    height: 16px;
  }
}
</style>
