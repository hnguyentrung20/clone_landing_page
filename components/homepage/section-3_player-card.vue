<template>
  <section class="section-3-player-card">
    <h2 class="section-3-player-card__title">{{
      t('landing.section3.title')
    }}</h2>
    <p class="section-3-player-card__description">
      {{ t('landing.section3.description') }}
    </p>
    <div class="section-3-player-card__container">
      <div
        v-for="card in playerCards"
        :key="card.id"
        class="section-3-player-card__card"
      >
        <div class="section-3-player-card__card-wrapper">
          <img
            class="section-3-player-card__card-image"
            :src="card.image"
            :alt="card.name"
          >
          <div class="section-3-player-card__card-content">
            <h3 class="section-3-player-card__card-title">{{ card.name }}</h3>
            <p class="section-3-player-card__card-description">{{
              card.description
            }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { useI18n } from 'vue-i18n';

  export default {
    setup() {
      const { t } = useI18n();
      return { t };
    },
    data() {
      return {
        playerCards: [
          {
            id: 0,
            name: 'E-Space',
            image: '/assets/imgs/e-space.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 1,
            name: 'Kingland',
            image: '/assets/imgs/kingland.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 2,
            name: 'The Last Game',
            image: '/assets/imgs/the-last-game.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 3,
            name: 'G-Dragon',
            image: '/assets/imgs/G-Dragon.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 4,
            name: 'Pirates',
            image: '/assets/imgs/pirates.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 5,
            name: 'Witch Party',
            image: '/assets/imgs/witch-party.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 6,
            name: 'Rocky',
            image: '/assets/imgs/Rocky.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 7,
            name: 'Blue Fire',
            image: '/assets/imgs/Blue Fire.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 8,
            name: 'Magic Tree',
            image: '/assets/imgs/magic-tree.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 9,
            name: 'Aborigines',
            image: '/assets/imgs/Aborigines.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 10,
            name: 'Cinderella',
            image: '/assets/imgs/Cinderella.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 11,
            name: 'Egypt Game',
            image: '/assets/imgs/Egypt Game.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .section-3-player-card {
  padding: 2rem;

  margin-bottom: 40px;
  @media (min-width: $breakpoint-md) {
    margin-bottom: 128px;
  }

  &__title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  &__description {
    text-align: center;
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
  }

  &__container {
    gap: 20px;
    column-count: 2;
    > * {
      margin-bottom: 20px;
    }
  }

  &__card {
    break-inside: avoid;
    position: relative;

    &:nth-child(7) {
      padding-top: 36px;
    }

    &-wrapper {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0px 4px 10px 0px #00000040;
    }

    &-image {
      aspect-ratio: 41/67;
      position: relative  ;
      object-fit: cover;
      z-index: 1;
      width: 100%;
      background-color: gray;
    }

    &-content {
      position: absolute;
      left: 0;
      width: 100%;
      height: fit-content;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1.5rem;
      color: white;
      z-index: 2;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    }

    &-title {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    &-description {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
}

@media (min-width: $breakpoint-md) {
  .section-3-player-card {
    &__container {
      column-count: 3;
      column-gap: 30px;

      > * {
        margin-bottom: 30px;
      }
    }
  }
  .section-3-player-card__card:nth-child(5) {
    padding-top: 70px;
  }
}

@media (min-width: $breakpoint-xl) {
  .section-3-player-card {
    &__container {
      column-count: 4;
      column-gap: 40px;
      > * {
        margin-bottom: 40px;
      }
    }
  }
  .section-3-player-card__card:nth-child(5) {
    padding-top: 0px;
  }

  .section-3-player-card__card:nth-child(4) {
    padding-top: 118px;
  }

  .section-3-player-card__card:nth-child(10) {
    padding-top: 118px;
  }
}
</style>
