<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Scroll to anchor on mount and when hash changes
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

watch(() => route.hash, () => {
  scrollToAnchor();
});

// Excursion data
interface Excursion {
  title: string;
  subtitle: string;
  paragraphs: string[];
  image: string;
}

const excursions = ref<Excursion[]>([
  {
    title: 'Beijing City Sub-center',
    subtitle: 'Tongzhou Green Heart Park',
    paragraphs: [
      'The construction of the Beijing City Sub-center was proposed to adjust Beijing\'s spatial layout, address urban challenges, expand new development spaces, promote the coordinated development of the Beijing-Tianjin-Hebei region, and explore optimized development models for densely populated and economically concentrated areas. The planning area covers the original Tongzhou New Town construction zone, with a total area of approximately 155 square kilometers, driving the coordinated development of Tongzhou district, with a total area of about 906 square kilometers, further driving the coordinated development of the three northern counties of Langfang.',
      'Tongzhou Green Heart Park is the ecological landmark of the Beijing City Sub-center. As the core of Beijing\'s first national industrial area, it has now been transformed into a thriving urban forest through ecological restoration. The park is located near the thousand-year-old Beijing-Hangzhou Grand Canal, with interconnected water systems blending the new center with historic heritage. Integrating key facilities such as the Beijing City Library, the Beijing Grand Canal Museum together form a "cultural museum cluster," serving as a new artistic landmark. Integrating ecology, history, and culture, it is not only a green space for public enjoyment but also a vivid example of urban renewal from an "industrial rust belt" to a "lifestyle belt."',
      'This half-day field research will commence with a coach journey from Tsinghua University to the Beijing Sub-Center. The tour is designed to provide a direct, on-site understanding of the Sub-Center\'s development through visits to its key landmarks. The itinerary centers on the Beijing Green Heart Forest Park, where participants will observe the preserved structures of the former Dongfang Chemical Plant and the historical Grand Canal locks integrated into the landscape, offering insight into the area\'s industrial heritage. The group will then proceed to the nearby Cultural Cluster to visit the Beijing Art Center, the Beijing City Library, and the Beijing Grand Canal Museum. This focused itinerary provides a firsthand experience of the Sub-Center\'s planning vision and its tangible transformation from an industrial base into a new ecological and cultural hub.'
    ],
    image: '/src/assets/images/excursion1.png'
  },
  {
    title: 'Liangma River International Style Waterfront',
    subtitle: '',
    paragraphs: [
      'Liangma River, situated in the core area of Chaoyang District, stands as an exemplary model of urban waterfront revitalization and urban regeneration in Beijing in recent years. Once an ordinary, polluted, and largely inaccessible urban waterway, it has been transformed into an international-style waterfront that integrates ecological, leisure, cultural, and commercial functions. Through the joint efforts of the municipal government, property owners along the riverbanks, local residents, and other stakeholders, a series of projects—including dredging, water quality improvement, landscape lighting, and the connection of riverside walkways—have given Liangma River a completely new look. This transformation has not only enhanced the quality of the urban environment but also redefined the relationship between the city\'s people and their river—truly allowing Liangma River to shine.',
      'The half-day field visit will offer a unique spatial experience along the waterfront of Liangma River. Professional designers will provide detailed introductions regarding the project\'s implementation, design concepts, achievements, as well as the challenges overcome. The comprehensive improvement project of Liangma River spans approximately eight kilometers, while the tour route will mainly focus on the most vibrant section of the entire river stretch, including the embassy district, commercial areas, and urban parks. Visitors can explore the vibrant riverbanks adorned with green spaces, public plazas, stylish dining spots, and art installations, and experience firsthand how Liangma River has transformed into a beloved urban oasis—where Beijing\'s modern vitality and livable charm are on full display.'
    ],
    image: '/src/assets/images/excursion2.png'
  },
  {
    title: 'Qianmen Area',
    subtitle: '',
    paragraphs: [
      'Situated at the southern end of Beijing\'s Central Axis, south of Tiananmen Square, the Qianmen Area is a core component of the Beijing Central Axis (inscribed on the World Heritage List in 2024), standing as an iconic hub of traditional Beijing culture. Boasting a 600-year history tracing back to the Yuan Dynasty, Qianmen once thrived during the Ming Dynasty and attained remarkable commercial prosperity during the Qing period. Its core landmarks encompass Zhengyangmen (Qianmen) Tower & Arrow Tower—the only well-preserved city gate in Beijing\'s inner city—Qianmen Street, Dashilan, Xianyukou, and Yangmeizhu Xiejie. These landmarks house a rich tapestry of cultural heritage, ranging from Ming-Qing architectural relics and time-honored brands (including Tongrentang and Ruifuxiang) to guild halls and the birthplace of Peking Opera. Following extensive renovations launched in 2005, the area has struck a harmonious balance between tradition and modernity. Developments such as Beijing Fun integrate historic structures with contemporary commercial elements.',
      'This tour route aims to explore cultural heritage protection and adaptive reuse. Its core attractions include：',
      '<strong>Zhengyangmen (Qianmen) Arrow Towers:</strong> Completed in 1439 during the Ming Dynasty, Zhengyangmen Arrow Tower form the only well-preserved city gate complex in Beijing\'s inner city. As a pivotal component of the Beijing Central Axis (a 2024 World Heritage Site), it served dual defensive and ceremonial roles in the Ming and Qing dynasties. Designated a national key cultural relic in 1988, the complex underwent renovations and reopened to the public in late 2024, embodying traditional Chinese urban defense and architectural art.',
      '<strong>Qianmen Street:</strong> Stretching 845 meters, Qianmen Street lies at the core of the Qianmen Area, serving as an imperial thoroughfare for emperors\' heaven-worshipping rituals in the Ming and Qing dynasties. Linchpin of traditional commerce, it houses over 10 time-honored brands like Tongrentang and Ruifuxiang. Following major 2008 renovations, it remains a pedestrian street, blending ancient charm with modern vitality, and stands as an iconic window to Beijing\'s commercial culture.',
      '<strong>Dashila:</strong> As one of China\'s first historical and cultural blocks, it is hailed as the "Concentration Area of Time-Honored Brands," housing Ruifuxiang, Neiliansheng and other renowned shops. It also witnessed Peking Opera\'s birth with historic theaters. Renovated in 2007, it retains traditional architectural charm, blending time-honored commerce with cultural vitality, embodying the essence of old Beijing\'s commercial culture.',
      '<strong>Yangmeizhu Xiejie:</strong> Adjacent to Qianmen Street and east of Dashila, Yangmeizhu Xiejie is a historic Ming-era alley now a hub of creative vitality. It blends well-preserved courtyards with niche cultural and creative shops, featuring Beijing-style cultural products like enamel mugs and ancient porcelain fragment artworks. Its "micro-renewal" model integrates heritage with immersive experiences, embodying a unique balance of old Beijing charm and modern creativity.',
      '<strong>Beijing Fun:</strong> adjacent to Qianmen Street and Yangmeizhu Xiejie, Beijing Fun is a landmark urban renewal project opened in 2017. It blends preserved heritage buildings like 1905 Quanyechang with contemporary architecture. Home to PageOne bookstore and MUJI Hotel, it serves as a "Chinese Lifestyle Experience Zone," integrating culture, art, commerce and immersive experiences.'
    ],
    image: '/src/assets/images/excursion3.png'
  },
  {
    title: 'Shougang Park',
    subtitle: '',
    paragraphs: [
      'Once a century-old steel production site established in 1919, Shougang Park has been transformed into Beijing\'s iconic urban renewal landmark. Following the plant\'s relocation in 2005 for environmental considerations, this 8.63 km² industrial complex underwent a remarkable metamorphosis, catalyzed by the 2022 Winter Olympics. The park exemplifies innovative industrial heritage revitalization, preserving blast furnaces, cooling towers, and steel structures while repurposing them into cultural, commercial, and recreational spaces. Designated as China\'s first C40 "Climate Positive Development" project, it demonstrates how "industrial rust belts" can evolve into vibrant "urban showcases" through ecological restoration, low-carbon development, and creative adaptive reuse—offering a globally significant model for post-industrial transformation.',
      'The trip of Shougang Park aimed to explore the urban regeneration strategies and spatial transformation of the area in the context of the post-industrial era. Participants will first visit the No. 3 Blast Furnace, now converted into a premier MICE venue hosting fashion weeks and international conferences, illustrating heritage-led cultural revitalization. The itinerary continues to the Shougang Big Air—the permanent Olympic ski jump venue integrated with industrial structures—demonstrating how mega-events catalyze urban transformation. We will then walk along Shougang Highline Park, a converted elevated industrial corridor transformed into a linear greenway. From this unique vantage point, participants will enjoy panoramic views of Shijingshan Hill rising in the distance and observe the Yongding River, known as "Beijing\'s Mother River," winding through the landscape below. This elevated perspective reveals how the park\'s planning reconciles post-industrial transformation with hydrological systems and urban ecology.'
    ],
    image: '/src/assets/images/excursion4.png'
  }
]);
</script>

<template>
  <div class="programme-page">
    <div class="container">
      
      <!-- Conference Programme Section -->
      <section id="conference-programme" class="conference-section">
        <h1 class="page-title">
          <span class="title-bg">Conference Programme</span>
        </h1>
        <p class="in-progress">In progress...</p>
      </section>

      <!-- Excursions Section -->
      <section id="excursions" class="excursions-section">
        <h1 class="page-title">
          <span class="title-bg">Excursions</span>
        </h1>

        <div class="excursions-list">
          <div 
            v-for="(excursion, index) in excursions" 
            :key="index" 
            class="excursion-item"
          >
            <!-- Excursion Title -->
            <h2 class="excursion-title">
              <span class="excursion-title-bg">
                {{ excursion.title }}
                <template v-if="excursion.subtitle">：{{ excursion.subtitle }}</template>
              </span>
            </h2>

            <!-- Excursion Content -->
            <div class="excursion-content">
              <p 
                v-for="(paragraph, pIndex) in excursion.paragraphs" 
                :key="pIndex"
                class="excursion-paragraph"
                v-html="paragraph"
              >
              </p>
            </div>

            <!-- Excursion Image -->
            <div class="excursion-image-wrapper">
              <img 
                :src="excursion.image" 
                :alt="excursion.title" 
                class="excursion-image"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped lang="less">
.programme-page {
  min-height: 100vh;
  background-color: var(--bg-primary);
  padding: var(--spacing-3xl) 0;
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-2xl);
}

/* Page Title */
.page-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  margin-top: 0;
  margin-bottom: var(--spacing-2xl);
  line-height: 1.2;
  
  .title-bg {
    display: inline-block;
    background-color: var(--primary-purple);
    color: var(--text-white);
    padding: 2px 2px;
    line-height: 0.9;
  }
}

/* Conference Programme Section */
.conference-section {
  margin-bottom: var(--spacing-5xl);
  scroll-margin-top: 80px;
}

.in-progress {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  padding-bottom: var(--spacing-3xl);
}

/* Excursions Section */
.excursions-section {
  scroll-margin-top: 80px;
}

.excursions-list {
  display: flex;
  flex-direction: column;
}

.excursion-item {
  margin-bottom: var(--spacing-4xl);
  
  &:last-child {
    margin-bottom: 0;
  }
}

/* Excursion Title */
.excursion-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  margin-bottom: var(--spacing-xl);
  line-height: 1.2;
  
  .excursion-title-bg {
    display: inline-block;
    background-color: #FF4E72;
    color: var(--text-white);
    padding: 2px 2px;
    line-height: 1;
  }
}

/* Excursion Content */
.excursion-content {
  margin-bottom: var(--spacing-2xl);
}

.excursion-paragraph {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  text-align: justify;
  margin-bottom: var(--spacing-lg);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  :deep(strong) {
    font-weight: 500 !important;
    color: #545454 !important;
  }
}

/* Excursion Image */
.excursion-image-wrapper {
  width: 100%;
  margin-bottom: var(--spacing-3xl);
  
  .excursion-item:last-child & {
    margin-bottom: 0;
  }
}

.excursion-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive Design */
@media (max-width: 768px) {
  .programme-page {
    padding: var(--spacing-2xl) 0;
  }
  
  .container {
    padding: 0 var(--spacing-lg);
  }
  
  .page-title {
    font-size: var(--font-size-3xl);
  }
  
  .excursion-title {
    font-size: var(--font-size-xl);
    
    .excursion-title-bg {
      padding: 3px 6px;
    }
  }
}
</style>
