<script setup lang="ts">
import { ref } from 'vue'

interface Speaker {
  name: string
  titles: string[]
  bio: string
  image: string
}

const speakers = ref<Speaker[]>([
  {
    name: 'Carlo Ratti',
    titles: [
      'Professor, MIT and Politecnico di Milano',
      'Director, Senseable City Lab',
      'Founding Partner, CRA-Carlo Ratti Associati'
    ],
    bio: 'Carlo Ratti is an architect and engineer who leads the design and innovation practice CRA-Carlo Ratti Associati and teaches at the Massachusetts Institute of Technology, where he directs the MIT Senseable City Lab. He is also a professor at the Politecnico di Milano. He graduated from the Politecnico di Torino and the École Nationale des Ponts et Chaussées in Paris, and later earned an M.Phil. and Ph.D. from the University of Cambridge. His work has been exhibited at venues including La Biennale di Venezia, the Design Museum in Barcelona, the Science Museum in London, and the Museum of Modern Art in New York. He was the Curator of the 2025 Venice Architecture Biennale.',
    image: new URL('../assets/images/carloratti.jpg', import.meta.url).href
  },
  {
    name: 'Zhang Li',
    titles: [
      'Professor, School of Architecture, Tsinghua University',
      'Dean, School of Architecture, Tsinghua University',
      'Dean, Zijing College, Tsinghua University'
    ],
    bio: 'ZHANG Li is currently the Vice-President [Region IV] of UIA, a standing board member of the Architectural Society of China. ZHANG Li is a pioneer in Urban Ergonomics, an interdisciplinary domain merging digital technology, urban research and design, focusing on the cognitive processes of urban experience. ZHANG Li\'s design works cover a wide range of scales, from urban designs, buildings to microcosm interventions. He and TeamMinus have won over thirty national and international awards in the past decade. In late 2021, he has been elected as National Master of Engineering Design and Geotechnique Investigation. In 2022, he is the laureate of 11th Liang Sicheng Architecture Prize, which is the most prestigious Chinese award for architects and architecture scholars. He is the Architect-in-Chief of Zhangjiakou Zone, and Shougang Big Air, both for Beijing 2022 Olympic Winter Games. He is also the curator of China Pavilion in Venice Architecture Biennale 2020[2021].',
    image: new URL('../assets/images/zhangli.jpg', import.meta.url).href
  },
  {
    name: 'Zhang Jie',
    titles: [
      'Professor, School of Architecture, Tsinghua University',
      'Honorary Dean, School of Architecture and Urban Planning, Beijing University of Civil Engineering and Architecture',
      'National Master of Engineering Design and Geotechnique Investigation in China'
    ],
    bio: 'ZHANG Jie is a professor and architect in the field of heritage conservation and urban regeneration at Tsinghua University. He has been lecturing at School of Architecture, Tsinghua University in China since 1992 and has been the dean of the School of Architecture and Urban Planning at Beijing University of Civil Engineering and Architecture since 2020. He is a Chartered Member of RIBA, an Honorary Membership of ICOMOS and a chairholder of the UNESCO on Heritage Conservation Planning and Sustainable Social Development. Prof. ZHANG Jie\'s research lies in the inter-discipline of architecture and conservation and in investigating a sustainable development model for cities undergoing drastic changes, considering culture, ecology, economy, and community improvement in the context of rapid urbanization. He has published 20 academic monographs and more than 100 academic papers. He has won the RIBA International Awards for Excellence, Award of Distinction and Award for New Design in Heritage Contexts in UNESCO Asia-Pacific Awards for Cultural Heritage Conservation, and more than 40 other awards by his representative works, including Conservation of Sanfang Qixiang, Jingdezhen Taoxichuan Industrial Park and Tsinghua University Nankou National Key Laboratory Base. He was awarded National Master of Engineering Design and Geotechnique Investigation in China in 2020. His works were displayed in the Chinese Architecture Exhibition of the 27th World Congress of Architects, the China Pavilion at Venice Biennale 2020, and China, Architecture exhibition in Lyon, France.',
    image: new URL('../assets/images/zhangjie.jpg', import.meta.url).href
  },
  {
    name: 'Zhang Pengju',
    titles: [
      'Professor, Inner Mongolia University of Technology'
    ],
    bio: 'Zhang Pengju is a Professor and PhD Supervisor, Academician of the Chinese Academy of Engineering, and a National Master of Engineering Survey and Design. He serves as Chair of the Western New Regional Architecture Committee of the Architectural Society of China; Director of the International Joint Laboratory of Human Settlement Science for the Eurasian Grassland Belt; Director of the Key Laboratory of Grassland Human Settlement Systems of Inner Mongolia Autonomous Region; and Chair of the Academic Committee of Inner Mongolia University of Technology. His work focuses on regional architecture education, research, and practice. He has advanced the theoretical foundations, methodologies, and practical pathways of Chinese regional architecture, established the localized construction theory of "Plain Construction," and developed the framework for grassland human settlement systems. His work has received major international awards, including the Aga Khan Award for Architecture and the Architecture Gold Medal of the Architects Regional Council Asia (ARCASIA).',
    image: new URL('../assets/images/zhangpengju.jpg', import.meta.url).href
  }
])
</script>

<template>
  <div class="keynote-speakers-page">
    <div class="container">
      <!-- Page Title -->
      <h1 class="page-title">
        <span class="title-bg">Keynote Speakers</span>
      </h1>

      <!-- Speakers List -->
      <div class="speakers-list">
        <div v-for="(speaker, index) in speakers" :key="index" class="speaker-item">
          <div class="speaker-image-wrapper">
            <img :src="speaker.image" :alt="speaker.name" class="speaker-image" />
          </div>
          <div class="speaker-info">
            <h2 class="speaker-name">{{ speaker.name }}</h2>
            <div class="speaker-titles">
              <p v-for="(title, i) in speaker.titles" :key="i" class="speaker-title">{{ title }}</p>
            </div>
            <p class="speaker-bio">{{ speaker.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.keynote-speakers-page {
  min-height: 100vh;
  background-color: var(--bg-primary);
  padding: var(--spacing-3xl) 0;
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-2xl);
}

/* Page Title - 与 About.vue 保持一致 */
.page-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  margin-top: 0;
  margin-bottom: var(--spacing-3xl);
  line-height: 1.2;

  .title-bg {
    display: inline-block;
    background-color: var(--primary-purple);
    color: var(--text-white);
    padding: 2px 2px;
    line-height: 0.9;
  }
}

/* Speakers List */
.speakers-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  margin-bottom: 10rem;
}

.speaker-item {
  display: flex;
  flex-direction: column;
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--border-color);

  &:not(:last-child) {
    margin-bottom: var(--spacing-xl);
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.speaker-image-wrapper {
  width: 200px;
  height: 267px;
  overflow: hidden;
  border-radius: var(--radius-sm);
  background: var(--bg-light);
  flex-shrink: 0;
  margin-bottom: var(--spacing-lg);
}

.speaker-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.speaker-info {
  display: flex;
  flex-direction: column;
}

.speaker-name {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  color: var(--primary-purple);
  margin: 0 0 var(--spacing-sm) 0;
  line-height: 1.3;
}

.speaker-titles {
  margin-bottom: var(--spacing-md);
}

.speaker-title {
  font-size: var(--font-size-base);
  font-weight: 300;
  font-style: italic;
  color: var(--text-secondary);
  margin: 0 0 var(--spacing-xs) 0;
  line-height: 1.6;
  font-family: var(--font-family-body);

  &:last-child {
    margin-bottom: 0;
  }
}

.speaker-bio {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  text-align: justify;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .keynote-speakers-page {
    padding: var(--spacing-2xl) 0;
  }

  .container {
    padding: 0 var(--spacing-lg);
  }

  .page-title {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-2xl);
  }



  .speaker-item {
    padding-bottom: var(--spacing-lg);
    
    &:not(:last-child) {
      margin-bottom: var(--spacing-lg);
    }
  }

  .speaker-image-wrapper {
    width: 180px;
    height: 240px;
    margin-bottom: var(--spacing-md);
  }

  .speaker-name {
    font-size: var(--font-size-xl);
  }

  .speaker-title {
    font-size: var(--font-size-sm);
  }

  .speaker-bio {
    font-size: var(--font-size-sm);
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-md);
  }



  .speaker-image-wrapper {
    width: 150px;
    height: 200px;
    margin-bottom: var(--spacing-md);
  }
}
</style>

