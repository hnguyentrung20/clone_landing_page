<template>
  <section class="section-2-about">
    <div class="section-2-about__container">
      <div class="section-2-about__top">
        <div class="section-2-about__top-first">
          <h2 class="section-2-about__title">{{
            t('landing.section2.title')
          }}</h2>
          <p class="section-2-about__description">
            {{ t('landing.section2.description') }}
          </p>

          <div class="section-2-about__stats">
            <div class="section-2-about__stat-item">
              <h3 class="section-2-about__stat-number"
                >{{ 600 }}
                <span class="section-2-about__stat-suffix">M</span>
                <span class="section-2-about__plus-suffix">+</span>
              </h3>
              <p class="section-2-about__stat-label">{{
                t('landing.section2.users')
              }}</p>
            </div>

            <div class="section-2-about__stat-item">
              <h3 class="section-2-about__stat-number"
                >135
                <span class="section-2-about__plus-suffix">+</span>
              </h3>
              <p class="section-2-about__stat-label"
                >{{ t('landing.section2.games') }}
              </p>
            </div>
          </div>
        </div>

        <div class="section-2-about__top-second">
          <div class="section-2-about__features">
            <div class="section-2-about__feature">
              <div class="section-2-about__feature-icon">
                <IconsCalenderTick />
              </div>
              <div class="section-2-about__feature-content">
                <h4 class="section-2-about__feature-title">{{
                  t('landing.section2.24hours.title')
                }}</h4>
                <p class="section-2-about__feature-description">{{
                  t('landing.section2.24hours.description')
                }}</p>
              </div>
            </div>

            <div class="section-2-about__feature">
              <div class="section-2-about__feature-icon">
                <IconsPenTool />
              </div>
              <div class="section-2-about__feature-content">
                <h4 class="section-2-about__feature-title">{{
                  t('landing.section2.design.title')
                }}</h4>
                <p class="section-2-about__feature-description">{{
                  t('landing.section2.design.description')
                }}</p>
              </div>
            </div>

            <div class="section-2-about__feature">
              <div class="section-2-about__feature-icon">
                <IconsPeople />
              </div>
              <div class="section-2-about__feature-content">
                <h4 class="section-2-about__feature-title">{{
                  t('landing.section2.team.title')
                }}</h4>
                <p class="section-2-about__feature-description">{{
                  t('landing.section2.team.description')
                }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-2-about__bottom">
        <GlobalBranches />
      </div>
    </div>
  </section>
</template>

<script>
  import GlobalBranches from '@/components/ui/GlobalBranches.vue';
  import { useI18n } from 'vue-i18n';
  export default {
    name: 'AboutSection',
    components: {
      GlobalBranches,
    },
    setup() {
      const { t } = useI18n();
      return { t };
    },
  };
</script>

<style lang="scss" scoped>
  .section-2-about {
  margin-bottom: 40px;
  @media (min-width: $breakpoint-md) {
    margin-bottom: 128px;
  }
}

.section-2-about__container {
  max-width: 1160px;
  margin: 0 auto;
}

.section-2-about__top {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.section-2-about__top-first {
  flex: 1;
  padding-inline: 1rem;

}

.section-2-about__title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #000;
}

.section-2-about__description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 3rem;
  max-width: 800px;
}

.section-2-about__stats {
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
}

.section-2-about__stat-item {
  text-align: center;
}

.section-2-about__stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: #0099ff;
  margin: 0;
}

.section-2-about__stat-suffix {
  font-size: 2rem;
}

.section-2-about__plus-suffix {
  font-size: 3.5rem;
}

.section-2-about__stat-label {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0px;
  margin-top: 0.5rem;
  color: #333;
}

.section-2-about__top-second {
  flex: 1;
  background-color: #EEEEEE;
  padding-inline: 1rem;
  padding-block: 2.5rem;
}

.section-2-about__features {
  display: flex;
  flex-direction: column;
  gap: 2rem;

}

.section-2-about__feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.section-2-about__feature-icon {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e6f5ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0099ff;
  flex-shrink: 0;
  aspect-ratio: 1;
}

.section-2-about__feature-title {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0px;
  margin-bottom: 0.75rem;
  color: #333;
}

.section-2-about__feature-description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #666;
  margin: 0;
}

.section-2-about__top {
  display: flex;
  gap: 2rem;
}

/* Responsive adjustments */
@media (min-width: $breakpoint-md) {
  .section-2-about__stats {
    justify-content: flex-start;
  }

  .section-2-about__top-second {
    padding-block: 6.4375rem;
    padding-inline: 4.6875rem;
  }
  .section-2-about__feature-title{
    margin-bottom: 0.55rem;
  }
}
</style>
