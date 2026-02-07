<script setup lang="ts">
// Contribute page - 贡献页面，包括Call-for-abstracts和Partner Journals
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Helper function to get image URL
const getImageUrl = (name: string) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

// 滚动到锚点
const scrollToAnchor = () => {
  const hash = route.hash;
  if (hash) {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
};

onMounted(() => {
  scrollToAnchor();
});

// 监听路由变化
import { watch } from 'vue';
watch(() => route.hash, () => {
  scrollToAnchor();
});

interface Guideline {
  number: string;
  title: string;
  content: string;
  details?: string[];
}

interface Journal {
  title: string;
  url: string;
  url2?: string;
  description: string;
  image?: string;
  reverse?: boolean;
}

// Call for Abstracts Guidelines
const guidelines = ref<Guideline[]>([
  {
    number: '1',
    title: 'Language:',
    content: 'All abstracts must be written and presented in English.'
  },
  {
    number: '2',
    title: 'Length & Format:',
    content: 'Abstracts must be a maximum of 500 words (excluding references, title, and keywords). Submissions must be uploaded in Microsoft Word (.doc or .docx) format.'
  },
  {
    number: '3',
    title: 'Required Content:',
    content: 'Your abstract document must include:',
    details: [
      'Title: A clear and concise title.',
      'Author Information: Full names, affiliations, and email addresses for all authors. The presenting author should be clearly indicated.',
      'Abstract Text: A structured summary outlining the research context, objectives, methodology, key findings/expected results, and relevance to the chosen conference sub-theme.',
      'Keywords: Provide 3-5 keywords.',
      'References: Include 3-5 key references that situate your work within the relevant literature.',
      'Visual: At least one (1) image, figure, or diagram that supports your abstract. Please ensure you have the right to publish this image.'
    ]
  },
  {
    number: '4',
    title: 'Review Process:',
    content: 'All abstracts will undergo a double-blind peer review by the IFoU 2026 International Scientific Committee. Evaluation will be based on originality, clarity, scholarly rigor, and relevance to the conference themes.'
  },
  {
    number: '5',
    title: 'Publication Opportunity:',
    content: 'Authors of accepted abstracts will be invited to present their work at the conference and will subsequently be eligible to submit a full paper for consideration in the official IFoU 2026 Conference Proceedings or affiliated journal special issues (see partner journals below).'
  }
]);

// Partner Journals
const partnerJournals = ref<Journal[]>([
  {
    title: 'China City Planning Review',
    url: 'https://www.ccprjournal.com.cn',
    url2: 'https://www.sciopen.com/journal/1002-8447',
    description: 'As a professional and academic English periodical in the area of urban planning and design in China, China City Planning Review (CCPR) was firstly publicized in 1985 right after China initiated its policies of reforms and opening-up. It is supervised by the Ministry of Housing and Urban-Rural Development, organized by the Urban Planning Society of China, and supported by the Beijing Tsinghua Tongheng Urban Planning & Design Institute and the School of Architecture of Tsinghua University.\n\nCCPR aims at building up an academic platform for worldwide readers to get the knowledge about urban planning and development in and beyond China. Articles in CCPR mainly cover various studies on Chinese cities from the perspective of urban planning and design, including status quos, problems, trends, planning strategies and relative policies of their development. It offers readers with different opinions and criticism from both home and abroad, giving a full understanding of what has happened or is happening in cities of China and other countries. Up to now, CCPR has been indexed by CNKI, CSCD, EBSCO, ProQuest, Wanfang, and SciOpen databases and subscribed by a great number of individuals and various institutions across the world.',
    image: getImageUrl('journal1.png'),
    reverse: false
  },
  {
    title: 'Urban Design',
    url: 'https://urbandesign.tsinghuajournals.com/CN/2096-1235/home.shtml',
    description: 'The Journal of Urban Design is committed to presenting the most recent advancements in research, theory, practice, and pedagogy within the field of urban design. With a particular emphasis on offering support for theoretical and professional innovation in urban design in China, our goal is to establish a global academic platform for the exploration and exchange of pioneering themes in urban design. We prioritize innovation and practical application, featuring main columns such as \'Theory\', \'Method\', \'Design\', \'Review\', and \'Teaching Report\', thereby advancing both academic discourse and practical engagement worldwide.\n\nThe Journal of Urban Design is an academic and professional publication, supervised by the Ministry of Education of P. R. China and sponsored by Tsinghua University. The audiences can be professionals, scholars, as well as teachers and students in universities in the fields of architecture, urban-rural planning, landscape architecture and others.',
    image: getImageUrl('journal2.png'),
    reverse: true
  },
  {
    title: 'Urban Planning International',
    url: 'https://www.upi-planning.org.cn/',
    url2: 'https://qwcg.cbpt.cnki.net/EditorCN/index.aspx?t=1',
    description: 'As the only national academic journal in China focusing on overseas urban planning theory and practice, Urban Planning International was founded in 1979. It is supervised by the Ministry of Housing and Urban-Rural Development and sponsored by China Academy of Urban Planning and Design. UPI is a Chinese Core Journal, indexed in the PKU Core Journals, CSCD, CSSCI Extended Edition, AMI, RCCSE, WJCI, and IST databases, with a large number of individuals and institutional subscribers worldwide.\n\nAdhering to the editorial philosophy of a comprehensive perspective, constructive advocacy, and diversified exchanges, UPI keeps abreast of international theoretical and practical advances in the discipline and closely aligns with the needs of China\'s urban-rural development. The journal consistently strives to build a communication bridge for urban planners and builders at home and abroad. It focuses on in-depth exploration of theories, methodologies, and design practices in urban-rural studies and planning research. Each issue features a hot or key theme and provides accurate, timely updates on global urban planning developments.',
    image: getImageUrl('journal3.png'),
    reverse: false
  }
]);
</script>

<template>
  <div class="contribute-page">
    <div class="container">
      <!-- Call for Abstract Section -->
      <section id="call-for-abstracts" class="call-for-abstract-section">
        <h2 class="section-title">Call-for-abstract</h2>
        
        <div class="intro-text">
          <p>
            The International Forum on Urbanism (IFoU) is pleased to announce the Call for Abstracts for its 18th conference. 
            We seek abstract submissions that engage deeply with the main theme and its five core sub-themes, offering reflection, 
            proposing re-creation, and outlining pathways for urban regeneration.
          </p>
        </div>

        <h3 class="subsection-title">Abstract Submission Guidelines:</h3>
        
        <p class="guidelines-intro">
          Prospective authors are invited to submit original abstracts for peer review. Submissions must adhere to the following requirements:
        </p>

        <div class="guidelines-list">
          <div v-for="guideline in guidelines" :key="guideline.number" class="guideline-item">
            <h4 class="guideline-title">
              <span class="guideline-number">{{ guideline.number }}.</span>
              <span class="guideline-title-text">{{ guideline.title }}</span>
            </h4>
            <p class="guideline-content">{{ guideline.content }}</p>
            <ul v-if="guideline.details" class="guideline-details">
              <li v-for="(detail, index) in guideline.details" :key="index">{{ detail }}</li>
            </ul>
          </div>
        </div>

        <div class="submission-button-wrapper">
          <a href="#" class="submission-button">Click Here For Submission</a>
        </div>
      </section>

      <!-- Partner Journals Section -->
      <section id="partner-journals" class="partner-journals-section">
        <h2 class="section-title">Partner Journals</h2>

        <div class="journals-list">
          <div v-for="(journal, index) in partnerJournals" :key="index" class="journal-item" :class="{ 'reverse-layout': journal.reverse }">
            <div class="journal-image-wrapper" v-if="journal.image">
              <img :src="journal.image" :alt="journal.title" class="journal-image" />
            </div>
            
            <div class="journal-text-content">
              <h3 class="journal-title">{{ journal.title }}</h3>
              
              <div class="journal-links" v-if="journal.url || journal.url2">
                <a v-if="journal.url" :href="journal.url" target="_blank" rel="noopener noreferrer" class="journal-link">{{ journal.url }}</a>
                <a v-if="journal.url2" :href="journal.url2" target="_blank" rel="noopener noreferrer" class="journal-link">{{ journal.url2 }}</a>
              </div>

              <div class="journal-description">
                <p v-for="(paragraph, pIndex) in journal.description.split('\n\n')" :key="pIndex" :class="{ 'full-width': pIndex === journal.description.split('\n\n').length - 1 && !journal.reverse }">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="journals-footer">
          <p>More journals will be engaged soon...</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="less">
.contribute-page {
  width: 100%;
  padding: var(--spacing-3xl) 0;
  background-color: var(--background-white);
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Section Title - Purple Background */
.section-title {
  display: inline-block;
  background-color: var(--primary-purple);
  color: var(--text-white);
  padding: 2px 2px;
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  border-radius: 0;
  margin-bottom: var(--spacing-2xl);
  line-height: 0.9;
}

/* Call for Abstract Section */
.call-for-abstract-section {
  margin-bottom: 8rem;
  padding-bottom: 6rem;
  border-bottom: 1px solid #E0E0E0;
  scroll-margin-top: 80px;
}

.intro-text {
  margin-bottom: var(--spacing-2xl);
  
  p {
    font-size: var(--font-size-base);
    font-weight: 300;
    color: var(--text-secondary);
    line-height: 1.6;
    text-align: justify;
  }
}

.subsection-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.guidelines-intro {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1;
  text-align: justify;
  margin-bottom: var(--spacing-2xl);
}

.guidelines-list {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-xl);
}

.guideline-item {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-lg);
  position: relative;
}

.guideline-title {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-xs);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-body);
  color: var(--primary-purple);
  margin: 0 0 0 0;
  line-height: 1.4;
}

.guideline-number {
  color: var(--primary-purple);
}

.guideline-title-text {
  color: var(--primary-purple);
}

.guideline-content {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  text-align: justify;
  margin: 0;
}

.guideline-details {
  list-style: none;
  padding-left: var(--spacing-lg);
  margin: 0;
  display: flex;
  flex-direction: column;
  
  li {
    font-size: var(--font-size-base);
    font-weight: 300;
    color: var(--text-secondary);
    line-height: 1.6;
    text-align: justify;
    position: relative;
    padding-left: var(--spacing-md);
    margin-bottom: 0;
    
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--text-secondary);
    }
  }
}

/* Submission Button */
.submission-button-wrapper {
  display: flex;
  justify-content: center;
}

.submission-button {
  display: inline-block;
  background-color: #FF4E72;
  color: #FFFFFF;
  padding: var(--spacing-md) var(--spacing-3xl);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-family-heading);
  text-decoration: none;
  border-radius: 0;
  transition: all var(--transition-base);
  
  &:hover {
    background-color: #660874;
  }
}

/* Partner Journals Section */
.partner-journals-section {
  margin-bottom: var(--spacing-3xl);
  scroll-margin-top: 80px;
}

.journals-list {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-bottom: var(--spacing-3xl);
}

.journal-item {
  position: relative;
  overflow: hidden;
  
  /* 第二个杂志使用flex左右布局 */
  &.reverse-layout {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
    flex-direction: row-reverse;
    overflow: visible;
    
    .journal-image-wrapper {
      float: none;
      width: 240px;
      margin: 0;
      flex-shrink: 0;
    }
    
    .journal-text-content {
      flex: 1;
    }
    
    .journal-description p.full-width {
      clear: none;
    }
  }
}

.journal-image-wrapper {
  width: 160px;
  float: left;
  margin-right: 2rem;
  margin-bottom: 1rem;
}

.journal-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

.journal-title {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-xs) 0;
  line-height: 1.3;
}

.journal-links {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: var(--spacing-md);
}

.journal-link {
  font-size: 0.875rem;
  font-weight: 400;
  color: #660874;
  text-decoration: none;
  line-height: 1.5;
  word-break: break-all;
  
  &:hover {
    text-decoration: underline;
  }
}

.journal-description {
  p {
    font-size: var(--font-size-base);
    font-weight: 300;
    color: var(--text-secondary);
    line-height: 1.6;
    text-align: justify;
    margin: 0 0 var(--spacing-md) 0;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    &.full-width {
      clear: both;
      width: 100%;
    }
  }
}

.journals-footer {
  margin-top: var(--spacing-2xl);
  
  p {
    font-size: var(--font-size-lg);
    font-weight: 400;
    color: var(--text-secondary);
    margin: 0;
    text-align: left;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contribute-page {
    padding: var(--spacing-2xl) 0;
  }
  
  .call-for-abstract-section {
    margin-bottom: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }
  
  .section-title {
    font-size: var(--font-size-2xl);
  }
  
  .subsection-title {
    font-size: var(--font-size-xl);
  }
  
  .guideline-title {
    font-size: var(--font-size-base);
  }
  
  .journals-list {
    gap: var(--spacing-3xl);
  }
  
  .journal-item {
    overflow: visible;
    
    &.reverse-layout {
      flex-direction: column !important;
      gap: var(--spacing-lg);
      
      .journal-image-wrapper {
        width: 100%;
        max-width: 240px;
        margin: 0 auto;
      }
    }
  }
  
  .journal-image-wrapper {
    float: none !important;
    width: 100%;
    max-width: 200px;
    margin: 0 auto var(--spacing-lg) auto;
    display: block;
  }
  
  .journal-title {
    font-size: var(--font-size-xl);
    clear: both;
  }
  
  .journal-description p.full-width {
    clear: none;
  }
  
  .journals-footer p {
    font-size: var(--font-size-base);
    text-align: center;
  }
  
  .submission-button {
    padding: var(--spacing-sm) var(--spacing-2xl);
    font-size: var(--font-size-base);
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: var(--font-size-xl);
  }
  
  .subsection-title {
    font-size: var(--font-size-lg);
  }
  
  .journal-title {
    font-size: var(--font-size-lg);
  }
}
</style>
