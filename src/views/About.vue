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

// Organising Committee data
interface CommitteeMember {
  name: string;
  title: string;
}

const chairPersons = ref<CommitteeMember[]>([
  { name: 'ZHANG Yue', title: 'Professor and Chairman of Faculty Council' },
  { name: 'WU Tinghai', title: 'Professor and Department Head of Urban Planning & Design' },
  { name: 'LIU Jian', title: 'Professor' }
]);

const chiefSecretaries = ref<CommitteeMember[]>([
  { name: 'LIANG Sisi', title: 'Professor and Associate Dean' },
  { name: 'ZHANG Ye', title: 'Associate Professor and Assistant Dean' }
]);

const executiveSecretary = ref<CommitteeMember>({
  name: 'LAI Yuan',
  title: 'Associate Professor'
});

const viceSecretaries = ref<CommitteeMember[]>([
  { name: 'TANG Yan', title: 'Professor and Vice Department Head of Urban Planning & Design' },
  { name: 'YUAN Lin', title: 'Associate Professor and Vice Chairman of Faculty Council' },
  { name: 'WANG Ying', title: 'Associate Professor and Vice Department Head of Urban Planning & Design' },
  { name: 'HUANG He', title: 'Associate Professor and Vice Department Head of Urban Planning & Design' },
  { name: 'CHEN Yulin', title: 'Associate Professor and Vice Department Head of Urban Planning & Design' }
]);

// Scientific Committee data
const scientificCommittee = ref<CommitteeMember[]>([
  { name: 'Carmen Mendoza ARROYO', title: 'Doctor, Universitat Internacional de Catalunya' },
  { name: 'Henco BEKKERING', title: 'Emeritus Professor, Delft University of Technology' },
  { name: 'Gerhard BRUYNS', title: 'Associate Professor, Hong Kong Polytechnic University' },
  { name: 'Jin BAEK', title: 'Professor, Seoul National University' },
  { name: 'Lorenzo CHELLERI', title: 'Doctor, Universitat Internacional de Catalunya' },
  { name: 'CHANG Hsueh Sheng', title: 'Professor, National Cheng Kung University' },
  { name: 'João Pedro T.A. COSTA', title: 'Professor, Universidade de Lisboa' },
  { name: 'CAI Jia Xiu', title: 'Assistant Professor, Chinese University of Hong Kong' },
  { name: 'CHEN Yulin', title: 'Associate Professor, Tsinghua University' },
  { name: 'DAI Jian', title: 'Professor, Beijing University of Technology' },
  { name: 'DING Wowo', title: 'Professor, Nanjing University' },
  { name: 'Erwin FÄHMI', title: 'Doctor, Tarumanagara University' },
  { name: 'Carlos GOTLIEB', title: 'Professor, École Nationale Supérieure d\'Architecture et de Paysage de Bordeaux' },
  { name: 'HENG Chye Kiang', title: 'Professor, National University of Singapore' },
  { name: 'HSIA Chu-Joe', title: 'Emeritus Professor, National Taiwan University' },
  { name: 'Peter HASDELL', title: 'Professor, Hong Kong Polytechnic University' },
  { name: 'HUANG He', title: 'Associate Professor, Tsinghua University' },
  { name: 'HUI Xiaxi', title: 'Lecturer, Beijing University of Technology' },
  { name: 'Miya IRAWTI', title: 'Doctor, Tarumanagara University' },
  { name: 'Flavio JANCHES', title: 'Professor, University of Buenos Aires' },
  { name: 'KANG Min-Jay', title: 'Doctor, National Taiwan University' },
  { name: 'LIU Jian', title: 'Professor, Tsinghua University' },
  { name: 'LIANG Sisi', title: 'Professor, Tsinghua University' },
  { name: 'LAI Yuan', title: 'Associate Professor, Tsinghua University' },
  { name: 'Astrid LEY', title: 'Professor, University of Stuttgart' },
  { name: 'LU Andong', title: 'Professor, Nanjing University' },
  { name: 'MAO Qizhi', title: 'Emeritus Professor, Tsinghua University' },
  { name: 'Manfredo MANFREDINI', title: 'Associate Professor, The University of Auckland' },
  { name: 'Yukio NISHIMURA', title: 'Professor, Kokugakuin University' },
  { name: 'Camilo Pinilla Castro', title: 'Professor, Universidad Nacional de Colombia' },
  { name: 'QU Lei', title: 'Assistant Professor, Delft University of Technology' },
  { name: 'Jürgen ROSEMANN', title: 'Emeritus Professor, Delft University of Technology' },
  { name: 'Jo SANTOSO', title: 'Emeritus Professor, Tarumanagara University' },
  { name: 'JOAQUÍN SABATÉ BEL', title: 'Professor, Polytechnic University of Catalonia' },
  { name: 'Diego SEPÚLVEDA', title: 'Associate Professor, Delft University of Technology' },
  { name: 'Wita SIMATUPANG', title: 'Lecturer, Tarumanagara University' },
  { name: 'Filipa Serpa', title: 'Associate Professor, Universidade de Lisboa' },
  { name: 'Thorsten Schuetze', title: 'Professor, SungKyunKwan University' },
  { name: 'Adolf SOTOCA', title: 'Professor, Polytechnic University of Catalonia' },
  { name: 'TSOU Jinyeu', title: 'Emeritus Professor, The Chinese University of Hong Kong' },
  { name: 'Hendrik TIEBEN', title: 'Professor, The Chinese University of Hong Kong' },
  { name: 'TANG Yan', title: 'Professor, Tsinghua University' },
  { name: 'Machiel VAN DORST', title: 'Professor, Delft University of Technology' },
  { name: 'Jeroen VAN AMEIJDE', title: 'Associate Professor, Chinese University of Hong Kong' },
  { name: 'Paola VIGANÒ', title: 'Professor, École Polytechnique Fédérale de Lausanne (EPFL)' },
  { name: 'WU Liangyong', title: 'Emeritus Professor, Tsinghua University' },
  { name: 'WU Tinghai', title: 'Professor, Tsinghua University' },
  { name: 'WANG Ying', title: 'Associate Professor, Tsinghua University' },
  { name: 'WANG Chiu-Yuan, Vivienne', title: 'Doctor, IFoU' },
  { name: 'Uoosang YOO', title: 'Professor, Chonnam National University' },
  { name: 'YUAN Lin', title: 'Associate Professor, Tsinghua University' },
  { name: 'ZHANG Yue', title: 'Professor, Tsinghua University' },
  { name: 'ZHANG Li', title: 'Professor, Tsinghua University' },
  { name: 'ZHANG Ye', title: 'Associate Professor, Tsinghua University' },
  { name: 'ZHOU Minghao', title: 'Associate Professor, Tongji University' }
]);
</script>

<template>
  <div class="about-page">
    <div class="container">

      <!-- Host Section -->
      <section id="host" class="host-section">
        <h1 class="page-title">
          <span class="title-bg">Host</span>
        </h1>

        <div class="host-content">
          <p class="host-paragraph">
            The 18th International Forum on Urbanism (IFoU 2026) will be hosted by the School of Architecture at
            Tsinghua University (Tsinghua SA), an institution whose history is integral to the development of modern
            architectural and urban planning education in China. Founded in 1946 by the renowned architectural pioneer
            Prof. Liang Sicheng, the School's intellectual legacy has been shaped by two transformative visions. Its
            foundational decades were guided by Liang's "Theory of Physical Environment," later evolving under Prof. Wu
            Liangyong's holistic framework of the "Sciences of Human Settlements." This philosophy of integrating
            rigorous education with pioneering research and practice to address complex human settlement challenges
            remains central to its mission today.
          </p>

          <!-- Host Images -->
          <div class="host-images">
            <div class="host-image-item">
              <img src="/src/assets/images/host2.jpg" alt="Tsinghua University Gate" class="host-image" />
            </div>
            <div class="host-image-item">
              <img src="/src/assets/images/host4.png" alt="Tsinghua University Building" class="host-image" />
            </div>
          </div>

          <p class="host-paragraph">
            Consistently ranked as the leading architecture school in China, Tsinghua SA combines a distinguished
            faculty—over 80% holding doctoral degrees—with a tradition of attracting the nation's top students. Its work
            spans critical fields from urban and rural planning, heritage conservation, and sustainable design to
            digital technologies and building science. The School has played a pivotal role in major national projects
            and continues to drive academic frontiers through extensive government and international research.
          </p>

          <!-- Department Section -->
          <h2 class="department-title">
            <span class="department-title-bg">Department of Urban Planning and Design</span>
          </h2>

          <p class="host-paragraph">
            Urban planning education in Tsinghua SA started in 1947 with the opening of the Urban Planning course by
            Prof. Liang Sicheng. In 1951, Prof. Wu Liangyong set up the urban planning group, and in 1952, the School
            enrolled both undergraduate and post-graduate programs in urban planning. Since the founding of Tsinghua SA
            in 1988, the department is mainly responsible for teaching and research in urban planning, providing
            undergraduate, master's and PhD programs. The department has full-time faculty in six research orientations:
            Human Settlements Sciences, Housing and Community, Urban Regeneration & Urban Design, Urban Heritage &
            Sustainable Development, Urban and Rural Planning & Governance, and Urban Information System. It is in a
            leading position in the research fields of Global and Regional Urbanization, Planning and Practice of Future
            Cities, Sustainable Rural Planning & Design, Cultural Heritage Conservation, Participatory Community
            Planning in China, and has already entered the international first class. The Department of Urban Planning
            and Design has hosted multiple research and practice platforms, including the Institute of Architecture and
            Urban Studies at Tsinghua University, the China Urban Research Institute, and the Beijing Key Laboratory of
            Smart Planning in the Capital Region. In addition, it has established or hosted international academic
            journal <em>China City Planning Review</em>, as well as Chinese academic journals such as Urban and Regional
            Planning Research, and Urban Design.
          </p>
        </div>
      </section>

      <!-- Organising Committee Section -->
      <section id="organising" class="organising-section">
        <h1 class="page-title">
          <span class="title-bg">Organising Committee</span>
        </h1>

        <div class="committee-content">
          <!-- Chair Persons -->
          <div class="committee-group">
            <h2 class="group-title">Chair Persons</h2>
            <div class="member-list">
              <p v-for="(member, index) in chairPersons" :key="index" class="member-item">
                <strong>{{ member.name }}</strong>, {{ member.title }}
              </p>
            </div>
          </div>

          <!-- Chief Secretary -->
          <div class="committee-group">
            <h2 class="group-title">Chief Secretary</h2>
            <div class="member-list">
              <p v-for="(member, index) in chiefSecretaries" :key="index" class="member-item">
                <strong>{{ member.name }}</strong>, {{ member.title }}
              </p>
            </div>
          </div>

          <!-- Executive Secretary -->
          <div class="committee-group">
            <h2 class="group-title">Executive Secretary</h2>
            <div class="member-list">
              <p class="member-item">
                <strong>{{ executiveSecretary.name }}</strong>, {{ executiveSecretary.title }}
              </p>
            </div>
          </div>

          <!-- Vice Secretary -->
          <div class="committee-group">
            <h2 class="group-title">Vice Secretary</h2>
            <div class="member-list">
              <p v-for="(member, index) in viceSecretaries" :key="index" class="member-item">
                <strong>{{ member.name }}</strong>, {{ member.title }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Scientific Committee Section -->
      <section id="scientific" class="scientific-section">
        <h1 class="page-title">
          <span class="title-bg">Scientific Committee</span>
        </h1>

        <p class="committee-note">(Sorted by Last Name Alphabetically)</p>

        <div class="scientific-list">
          <p v-for="(member, index) in scientificCommittee" :key="index" class="scientific-member">
            <strong>{{ member.name }}</strong>, {{ member.title }}
          </p>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped lang="less">
.about-page {
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

/* Organising Committee Section */
.organising-section {
  margin-bottom: 10rem;
  margin-top: var(--spacing-3xl);
  scroll-margin-top: 80px;
}

.committee-content {
  width: 100%;
}

.committee-group {
  margin-bottom: var(--spacing-xl);

  &:last-child {
    margin-bottom: 0;
  }
}

.group-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-body);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-lg) 0;
}

.member-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.member-item {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;

  strong {
    font-weight: 500 !important;
    color: #545454 !important;
  }
}

/* Scientific Committee Section */
.scientific-section {
  margin-bottom: 10rem;
  scroll-margin-top: 80px;
}

.committee-note {
  font-size: var(--font-size-sm);
  font-weight: 300;
  color: var(--text-secondary);
  font-style: italic;
  margin: 0 0 var(--spacing-xl) 0;
}

.scientific-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.scientific-member {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;

  strong {
    font-weight: 500 !important;
    color: #545454 !important;
  }
}

/* Host Section */
.host-section {
  scroll-margin-top: 80px;
}

.host-content {
  width: 100%;
}

.host-paragraph {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  text-align: justify;
  margin-bottom: var(--spacing-xl);

  &:last-child {
    margin-bottom: 0;
  }

  em {
    font-style: italic;
  }
}

/* Host Images */
.host-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.host-image-item {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.host-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

/* Department Title */
.department-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  margin-top: var(--spacing-2xl);
  line-height: 1.2;

  .department-title-bg {
    display: inline-block;
    background-color: #FF4E72;
    color: var(--text-white);
    padding: 2px 2px;
    line-height: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-page {
    padding: var(--spacing-2xl) 0;
  }

  .container {
    padding: 0 var(--spacing-lg);
  }

  .page-title {
    font-size: var(--font-size-3xl);
  }

  .department-title {
    font-size: var(--font-size-xl);
  }

  .host-images {
    grid-template-columns: 1fr;
  }
}
</style>
