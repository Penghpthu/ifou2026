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

// Registration fee data
interface FeeRow {
  category: string;
  internationalStudents: string;
  internationalScholars: string;
  domesticStudents: string;
  domesticScholars: string;
}

const registrationFees = ref<FeeRow[]>([
  {
    category: 'Early Bird /\nDiscounted Rate',
    internationalStudents: '160*',
    internationalScholars: '200',
    domesticStudents: '1,200',
    domesticScholars: '1,600'
  },
  {
    category: 'Standard /\nFull Rate',
    internationalStudents: '200',
    internationalScholars: '250',
    domesticStudents: '1,500',
    domesticScholars: '2,000'
  }
]);
</script>

<template>
  <div class="attend-page">
    <div class="container">
      
      <!-- Registration Section -->
      <section id="registration" class="registration-section">
        <h1 class="page-title">
          <span class="title-bg">Registration</span>
        </h1>

        <div class="registration-content">
          <h2 class="section-subtitle">Registration Fees</h2>

          <!-- Registration Fees Table -->
          <div class="fees-table-wrapper">
            <table class="fees-table">
              <thead>
                <tr>
                  <th class="category-col">Category</th>
                  <th>International Students<br>(EUR)</th>
                  <th>International Scholars<br>(EUR)</th>
                  <th>Domestic Students (CNY)</th>
                  <th>Domestic Scholars (CNY)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(fee, index) in registrationFees" :key="index">
                  <td class="category-cell">{{ fee.category }}</td>
                  <td class="fee-cell">{{ fee.internationalStudents }}</td>
                  <td class="fee-cell">{{ fee.internationalScholars }}</td>
                  <td class="fee-cell">{{ fee.domesticStudents }}</td>
                  <td class="fee-cell">{{ fee.domesticScholars }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="table-note">*IFoU Member Institution Discount 20%</p>
        </div>
      </section>

      <!-- Conference Venue Section -->
      <section id="conference-venue" class="venue-section">
        <h1 class="page-title">
          <span class="title-bg">Conference Venue</span>
        </h1>

        <div class="venue-content">
          <p class="venue-paragraph">
            IFoU 2026 will be hosted in Beijing, a global metropolis that embodies the profound dialogue between ancient heritage and cutting-edge innovation. Beijing, excels in integrating AI into urban life, as showcased at the 2025 Global Digital Economy Conference with projects like the "Digital Central Axis," which digitally preserves its 7.8-kilometer historical core. The city is also a proving ground for intelligent, large-scale urban regeneration. The transformative "Huinan Action Plan" has revitalized the massive Huinan-an AI-technology-enhanced model for mega-city renewal—is taking shape. These practices dialogue with varied, tangible case studies—from Dashilan to Beijing Winterized to Beijing Fun, challenging future generations of urbanists and inspiring future urbanists to rethink growth, scale, legacy, place-making and inclusivity. The conference is a unique opportunity for the conference to engage with these contexts.
          </p>

          <!-- Venue Images -->
          <div class="venue-images">
            <div class="venue-image-item">
              <img src="/src/assets/images/host1.jpg" alt="Tsinghua University" class="venue-image" />
            </div>
            <div class="venue-image-item">
              <img src="/src/assets/images/host3.jpg" alt="Tsinghua University Campus" class="venue-image" />
            </div>
          </div>

          <p class="venue-paragraph">
            The conference will be held at Tsinghua University, one of China's most prestigious institutions. Its campus is a built example of modern Chinese architectural and academic history, offering an inspiring environment for scholarly exchange. The campus's core is defined by the iconic "Four Great Buildings"—the Library, Gymnasium, Science Hall, and Auditorium—designed in the early 20th century by American architect Henry Murphy in collaboration with China's first registered architect, Zhuang Jun. The historic faculty compounds, once home to architectural pioneers Liang Sicheng and Lin Huiyin, further cement the campus as a profound case study in preserving cultural memory within a living academic environment.
          </p>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped lang="less">
.attend-page {
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

/* Registration Section */
.registration-section {
  margin-bottom: 10rem;
  scroll-margin-top: 80px;
}

.registration-content {
  width: 100%;
}

.section-subtitle {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-body);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-xl) 0;
}

/* Registration Fees Table */
.fees-table-wrapper {
  width: 100%;
  overflow-x: auto;
  margin-bottom: var(--spacing-md);
}

.fees-table {
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: var(--spacing-md) var(--spacing-lg);
    text-align: center;
    border: none;
    border-bottom: 1px solid #E0E0E0;
    font-size: var(--font-size-base);
    font-family: var(--font-family-body);
  }
  
  thead {
    th {
      font-weight: var(--font-weight-semibold);
      color: var(--text-primary);
      line-height: 1.4;
      border-bottom: 2px solid #E0E0E0;
    }
  }
  
  tbody {
    td {
      color: var(--text-secondary);
      font-weight: 300;
    }
  }
  
  .category-col {
    text-align: left;
  }
  
  .category-cell {
    text-align: left;
    font-weight: var(--font-weight-medium);
    color: var(--text-primary);
    white-space: pre-line;
  }
  
  .fee-cell {
    font-weight: 500;
  }
}

.table-note {
  font-size: var(--font-size-base);
  font-weight: 400;
  color: var(--text-primary);
  margin: var(--spacing-xl) 0 0 0;
  font-family: var(--font-family-body);
}

/* Conference Venue Section */
.venue-section {
  scroll-margin-top: 80px;
}

.venue-content {
  width: 100%;
}

.venue-paragraph {
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  text-align: justify;
  margin-bottom: var(--spacing-2xl);
  
  &:last-child {
    margin-bottom: 0;
  }
}

/* Venue Images */
.venue-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

.venue-image-item {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.venue-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .attend-page {
    padding: var(--spacing-2xl) 0;
  }
  
  .container {
    padding: 0 var(--spacing-lg);
  }
  
  .page-title {
    font-size: var(--font-size-3xl);
  }
  
  .fees-table {
    font-size: var(--font-size-sm);
    
    th, td {
      padding: var(--spacing-sm) var(--spacing-md);
    }
  }
  
  .venue-images {
    grid-template-columns: 1fr;
  }
}
</style>
