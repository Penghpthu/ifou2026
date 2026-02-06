<script setup lang="ts">
// Themes page - 会议主题介绍页面
import { ref } from 'vue';

// Helper function to get image URL
const getImageUrl = (name: string) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

// Theme data structure
interface Theme {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  topics?: Topic[];
  image: string;
  speakerImage: string;
  speakerName: string;
  speakerTitle: string;
  speakerBio: string;
  reverse?: boolean; // For alternating layout
}

interface Topic {
  text: string;
}

const themes = ref<Theme[]>([
  {
    id: 1,
    number: 'Theme 01',
    title: 'Integrating',
    subtitle: 'Urban-Rural Coordination and Regional Development',
    description: 'Integrating – Urban-Rural Coordination and Regional Development: Critically examine and propose AI-enhanced planning approaches advancing urban-rural integration and sustainable regional development.\n\nThis stream critically examines and proposes planning approaches to advance urban-rural integration and foster sustainable regional development. We aim to redefine regional prosperity beyond GDP by focusing on the creation of green, resilient, and equitable regional systems. In these systems, resources, labor, and ecosystem services are orchestrated and flow in a balanced and sustainable manner.',
    topics: [
      { text: 'Spatial analytics for modeling dynamic urban-rural linkages and interdependencies.' },
      { text: 'Algorithmic tools for optimizing regional resource allocation (e.g., energy, water, food, green infrastructure) and network planning.' },
      { text: 'Scenario planning for regional development under climate uncertainty.' },
      { text: 'Envisioning green regions with nature-based spatial planning.' },
      { text: 'Critical assessments of "smart region" initiatives and their impacts on collaborative governance and cross-regional decision-making.' }
    ],
    image: getImageUrl('0101.png'),
    speakerImage: getImageUrl('0102.png'),
    speakerName: 'Yuan Lin',
    speakerTitle: 'Associate Professor, the Department of Urban Planning and Design, Tsinghua University School of Architecture',
    speakerBio: 'Yuan Lin is an Associate Professor in the Department of Urban Planning and Design at the Tsinghua University School of Architecture. His research centers on urban-rural ecological planning and the theory and practice of spatial planning for human-nature symbiosis. His recent projects investigate the natural system of traditional human settlements, the concept of the future "nature-city," and watershed spatial planning and ecological restoration. His work has earned him recognition as a Young Scientific and Technological Talent in Territorial Spatial Planning by the Ministry of Natural Resources, and he is a recipient of the inaugural Natural Resources Youth Science and Technology Award.',
    reverse: false
  },
  {
    id: 2,
    number: 'Theme 02',
    title: 'Preserving',
    subtitle: 'Cultural Heritage and Ecological Diversity',
    description: 'Preserving – Cultural Heritage and Ecological Diversity: Interrogate how cities can act as responsible stewards of tangible/intangible heritage and biodiversity amidst rapid change.\n\nThis theme centers on practical applications and technical methodologies in the conservation and adaptive reuse of cultural heritage and biodiversity conservation, placing specific emphasis on artificial intelligence (AI) as an innovative tool.',
    topics: [
      { text: 'Cultural heritage conservation and adaptive reuse in the context of climate change and sustainable development' },
      { text: 'Integration of heritage conservation with urban planning' },
      { text: 'Inclusive cultural heritage' },
      { text: 'Socio-economic value assessment of cultural heritage' },
      { text: 'AI applications in sustainable cultural heritage' },
      { text: 'Biodiversity conservation' },
      { text: 'Planning and design of urban green infrastructure' },
      { text: 'AI applications in biodiversity conservation' }
    ],
    image: getImageUrl('0201.png'),
    speakerImage: getImageUrl('0202.png'),
    speakerName: 'He Huang',
    speakerTitle: 'Associate Professor, Deputy Chair of the Department of Urban Planning, Tsinghua University School of Architecture',
    speakerBio: 'Huang He is an Associate Professor at the School of Architecture, Tsinghua University, where she also holds the position of Deputy Chair of the Department of Urban Planning. Her research and teaching focus on urban design and culture-led urban regeneration, with a particular emphasis on the conservation and adaptive reuse of cultural heritage.\n\nShe has published 7 monographs and dozens of papers, among which "Cultural Planning: A Strategy for Overall Urban Development Based on Cultural Resources" is recognized as a highly cited book by the China Knowledge Infrastructure Project.\n\nShe holds multiple academic positions, including Deputy Secretary-General and Member of the Council of the Urban Design Branch of the Architectural Society of China, Deputy Director of the Academic Committee on Urban Regeneration and Planning Implementation of the Council of the Beijing Society. Additionally, she acts as Associate Editor of the journal Urban Design.',
    reverse: true
  },
  {
    id: 3,
    number: 'Theme 03',
    title: 'Engaging',
    subtitle: 'Inclusive Housing and Community Development',
    description: 'Foreground equity and justice in the discourse on technology-driven urban regeneration.\n\nThis stream critically examines AI\'s dual potential - to exacerbate spatial inequality or serves as an empowerment tool – with a focus on socially integrated community development, affordable housing, participatory planning, and social capital strengthening in diverse communities.',
    topics: [
      { text: 'Developing inclusive housing policies and predictive tools to identify displacement risks.' },
      { text: 'Promoting practices of community land trusts and cooperative housing models.' },
      { text: 'Designing socially responsive, climate-adapted, and cost-effective housing typologies.' },
      { text: 'Utilizing participatory platforms using civic tech for inclusive planning and budget allocation.' },
      { text: 'Leveraging AI and emerging technologies for community development and housing equity, addressing ethical challenges in bias, privacy, and accountability.' }
    ],
    image: getImageUrl('0301.png'),
    speakerImage: getImageUrl('0302.png'),
    speakerName: 'Yulin Chen',
    speakerTitle: 'Associate Professor, Tsinghua University School of Architecture',
    speakerBio: 'Yulin Chen is an Associate Professor in the Department of Urban Planning and Design at Tsinghua University\'s School of Architecture. She is a SPURS fellow at MIT and an Outstanding Young Talent in Beijing. With a multidisciplinary background spanning architecture, urban planning, and sociology, her research interests include inclusive urbanization, megacity governance, and housing and community planning, with a particular focus on China\'s urbanization from the perspective of migrant integration and its spatial responses. She serves on the Academic Committee of the Urban Planning Society of China and the Community Research Committee of the Chinese Sociological Association. She has led many projects funded by the NSFC and NSSFC. She has published more than 70 papers and received multiple paper awards from the Urban Planning Society of China and the Chinese Sociological Association. Her new book, Inclusive Urban Renewal, proposes governance strategies for the regularization of informal housing from both domestic and international perspectives.',
    reverse: false
  },
  {
    id: 4,
    number: 'Theme 04',
    title: 'Responding',
    subtitle: 'Smart Governance and Climate Resilience',
    description: 'Debate and shape the next generation of urban intelligence systems for effective and adaptive governance.',
    topics: [
      { text: 'AI-integrated Urban Operating Systems for real-time management of mobility, energy, and emergency services.' },
      { text: 'Predictive analytics and simulation for extreme weather event modeling and infrastructure resilience planning.' },
      { text: 'Blockchain and AI for transparent climate finance and carbon credit tracking at the city level.' },
      { text: 'Social media and IoT data fusion via AI for crowdsourced environmental monitoring and crisis communication.' },
      { text: 'Critical analyses of algorithmic governance, public accountability, and digital divides in smart city programs.' }
    ],
    image: getImageUrl('0401.png'),
    speakerImage: getImageUrl('0402.png'),
    speakerName: 'Tang Yan',
    speakerTitle: 'Professor and doctoral supervisor, Department of Urban Planning and Design, Tsinghua University School of Architecture',
    speakerBio: 'Tang Yan is a professor and doctoral supervisor in the Department of Urban Planning and Design at Tsinghua University\'s School of Architecture, and serves as the Director of Editorial Department for China City Planning Review, the English journal of the China Urban Planning Society. She is a recipient of the Ministry of Education\'s Young Talent Program and a Humboldt Research Fellow, with research focusing on urban renewal, urban design, and urban-rural planning governance. She has authored over ten books, including Urban Regeneration in China: Institutional Innovation in Guangzhou, Shenzhen, and Shanghai and Chinese Urban Planning and Construction: From Historical Wisdom to Modern Miracles. Her scholarly contributions have been recognized with prestigious awards such as the First Prize of the National Outstanding Urban Planning and Design Award, a Silver Medal at the Paris International Exhibition of Inventions, and the Gold Medal in Urban Design at the Singapore Institute of Planners Awards.',
    reverse: true
  },
  {
    id: 5,
    number: 'Theme 05',
    title: 'Shaping',
    subtitle: 'Design Thinking and AI Empowerment',
    description: 'Investigate AI\'s transformative potential as a collaborative tool in the urban design and regeneration process. Moving beyond automation, this stream focuses on the synergistic "co-creation" between human intuition and machine intelligence, integrating design thinking and analytical insights, exploring new tools for generative design, performance simulation, and evidence-based decision support that enhance creative outcomes.',
    topics: [
      { text: 'AI as a design collaborator in architectural ideation, form-finding, and material optimization.' },
      { text: 'Big data and AI-based urban analytics, and machine learning analysis to inform regenerative design feedback loops.' },
      { text: 'Generative AI for exploring optimal spatial configurations based on multi-objective criteria (solar gain, social interaction, density).' },
      { text: 'Immersive VR/AR environments powered by AI for real-time participatory design review and digital prototyping.' },
      { text: 'Philosophical and pedagogical discussions on balancing computational logic with cultural meaning and aesthetic value in planning education and practice.' }
    ],
    image: getImageUrl('0501.png'),
    speakerImage: getImageUrl('0502.png'),
    speakerName: 'Yuan Lai',
    speakerTitle: 'Associate Professor and doctoral supervisor, Department of Urban Planning and Design, Tsinghua University School of Architecture',
    speakerBio: 'Yuan Lai is an Associate Professor and doctoral supervisor in the Department of Urban Planning and Design at Tsinghua University\'s School of Architecture. His research sits at the intersection of urban informatics, urban planning, and smart cities. He serves as the deputy secretary-general of the Technology Innovation Center for Smart Human Settlements and Spatial Planning & Governance, China Ministry of Natural Resources, as the deputy secretary-general of the Expert Committee in Digital Twins and Future Cities, Chinese Society for Urban Studies. A former Lecturer in Urban Science at MIT, his work is supported by organizations like the NSF and NSFC and has been published in leading journals such as Nature Cities and Landscape and Urban Planning. An award-winning researcher recognized by the UN, he holds a Ph.D. in Urban Systems from NYU.',
    reverse: false
  }
]);
</script>

<template>
  <div class="themes-page">
    <div class="container">
      <!-- Themes List -->
      <div class="themes-wrapper">
        <div 
          v-for="theme in themes" 
          :key="theme.id" 
          class="theme-block"
        >
          <!-- Theme Content - Full Width -->
          <div class="theme-content">
            <h2 class="section-title">{{ theme.number }}</h2>
            <h3 class="theme-title">{{ theme.title }}</h3>
            <h4 class="theme-subtitle">{{ theme.subtitle }}</h4>
            <div class="theme-description-wrapper">
              <p v-for="(paragraph, index) in theme.description.split('\n\n')" :key="index" class="theme-description">
                {{ paragraph }}
              </p>
            </div>
            
            <!-- Topics List (if exists) -->
            <div v-if="theme.topics && theme.topics.length > 0" class="topics-section">
              <h5 class="topics-title">Potential topics include, but are not limit to:</h5>
              <ul class="topics-list">
                <li v-for="(topic, index) in theme.topics" :key="index" class="topic-item">
                  {{ topic.text }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Theme Image - Full Width -->
          <div class="theme-image-wrapper">
            <img :src="theme.image" :alt="theme.title" class="theme-image" />
          </div>

          <!-- Keynote Speaker Section - Full Width -->
          <div class="keynote-speaker">
            <div class="speaker-photo-wrapper">
              <img :src="theme.speakerImage" :alt="theme.speakerName" class="speaker-photo" />
            </div>
            <div class="speaker-info">
              <h5 class="speaker-name">{{ theme.speakerName }}</h5>
              <p class="speaker-title">{{ theme.speakerTitle }}</p>
              <p class="speaker-bio">{{ theme.speakerBio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.themes-page {
  width: 100%;
  padding: var(--spacing-3xl) 0;
  background-color: var(--background-white);
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.themes-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xl);
}

/* Theme Block - Vertical Layout */
.theme-block {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
  margin-bottom: 6rem;
  padding-bottom: 6rem;
  border-bottom: 1px solid #E0E0E0;
  
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
}

/* Theme Content - Full Width */
.theme-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
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
  margin-bottom: var(--spacing-lg);
  line-height: 0.9;
  align-self: flex-start;
}

/* Theme Title - Pink */
.theme-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  color: var(--primary-pink);
  line-height: 0.8;
  letter-spacing: -0.02em;
}

/* Theme Subtitle - Black */
.theme-subtitle {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-family-heading);
  color: var(--text-primary);
  line-height: 0.8;
  margin-bottom: var(--spacing-md);
}

/* Theme Description */
.theme-description-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.theme-description {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  text-align: justify;
  margin: 0;
}

/* Topics Section */
.topics-section {
  margin-top: var(--spacing-md);
}

.topics-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.4;
}

.topics-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.topic-item {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.3;
  padding-left: var(--spacing-md);
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--text-secondary);
  }
}

/* Theme Image - Full Width */
.theme-image-wrapper {
  width: 100%;
  overflow: hidden;
}

.theme-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

/* Keynote Speaker Section - Full Width */
.keynote-speaker {
  width: 100%;
  display: flex;
  gap: var(--spacing-xl);
  align-items: flex-start;
}

.speaker-photo-wrapper {
  flex: 0 0 200px;
  width: 200px;
}

.speaker-photo {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0;
  display: block;
}

.speaker-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.speaker-name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: var(--spacing-xs);
}

.speaker-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

.speaker-bio {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.5;
  text-align: justify;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .theme-block {
    gap: var(--spacing-xl);
  }
}

@media (max-width: 768px) {
  .themes-page {
    padding: var(--spacing-2xl) 0;
  }
  
  .themes-wrapper {
    gap: var(--spacing-3xl);
  }
  
  .theme-block {
    margin-bottom: var(--spacing-2xl);
  }
  
  .section-title {
    font-size: var(--font-size-2xl);
    padding: 2px 4px;
  }
  
  .theme-title {
    font-size: var(--font-size-2xl);
  }
  
  .theme-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .keynote-speaker {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .speaker-photo-wrapper {
    flex: 0 0 auto;
    width: 150px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: var(--font-size-xl);
  }
  
  .theme-title {
    font-size: var(--font-size-xl);
  }
  
  .theme-subtitle {
    font-size: var(--font-size-base);
  }
  
  .speaker-photo-wrapper {
    width: 120px;
  }
}
</style>
