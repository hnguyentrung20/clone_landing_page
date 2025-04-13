<template>
  <div ref="globalBranches" class="global-branches">
    <div class="container">
      <div class="witch-container">
        <img src="/assets/imgs/witch.png" alt="Witch" class="witch-image" />
      </div>
      <div ref="mapContainer" class="map-container">
        <img src="/assets/imgs/globle.png" alt="Global Map" class="globe-map" />
        <div
          v-for="location in locationsWithTilt"
          :class="['location-pins-container', { active: isVisible }]"
          :key="location.id"
          :style="{
            top: location.top + '%',
            left: location.left + '%',
            transitionDelay: location.id * 0.1 + 's',
          }"
        >
          <LocationSharper
            :style="{
              transform: `translate(-50%, -100%) rotate(${location.tilt}deg)`,

            }"
            :size="location.size"
            :class="['location-pins', location.size]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LocationSharper from '../icons/LocationSharper.vue';
  export default {
    name: 'GlobalBranches',
    components: { LocationSharper },
    data() {
      return {
        locations: [
          {
            id: 0,
            top: 33,
            left: 24,
            size: 'xl',
          },
          {
            id: 1,
            top: 35,
            left: 20,
            size: 'sm',
          },
          {
            id: 2,
            top: 59,
            left: 26,
            size: 'md',
          },
          {
            id: 3,
            top: 18,
            left: 28,
            size: 'md',
          },
          {
            id: 4,
            top: 30,
            left: 50,
            size: 'sm',
          },
          {
            id: 5,
            top: 18,
            left: 39,
            size: 'sm',
          },
          {
            id: 6,
            top: 15,
            left: 41,
            size: 'sm',
          },
          {
            id: 7,
            top: 8,
            left: 40,
            size: 'sm',
          },
          {
            id: 8,
            top: 25,
            left: 80,
            size: 'sm',
          },
          {
            id: 9,
            top: 35,
            left: 66,
            size: 'md',
          },
          {
            id: 10,
            top: 47,
            left: 69,
            size: 'sm',
          },
          {
            id: 11,
            top: 47,
            left: 69,
            size: 'sm',
          },
          {
            id: 12,
            top: 42,
            left: 73,
            size: 'sm',
          },
          {
            id: 13,
            top: 56,
            left: 74,
            size: 'sm',
          },
          {
            id: 14,
            top: 68,
            left: 81,
            size: 'sm',
          },
        ],
        isVisible: false,
      };
    },
    computed: {
      locationsWithTilt() {
        return this.locations.map((location) => {
          // Calculate tilt based on left position
          // Further from center = more tilt
          const centerPoint = 50;
          const maxTilt = 50; // maximum tilt in degrees
          const distanceFromCenter = location.left - centerPoint;
          const tiltFactor = distanceFromCenter / centerPoint; // normalized distance (-1 to 1)

          // Apply smooth tilt algorithm: more tilt as pins get further from center
          // Negative values tilt left, positive values tilt right
          const tilt =
            tiltFactor * maxTilt * (0.5 + Math.abs(tiltFactor) * 0.5);

          return {
            ...location,
            tilt: tilt,
          };
        });
      },
    },
    mounted() {
      window.addEventListener('scroll', this.checkVisibility);
      // Call once to check initial visibility
      this.checkVisibility();
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.checkVisibility);
    },
    methods: {
      checkVisibility() {
        if (!this.$refs.mapContainer) return;

        const mapRect = this.$refs.mapContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the middle point of the element
        const elementHeight = mapRect.height;
        const elementMiddle = mapRect.top + elementHeight / 2;

        // Check if the middle point of the element is in the viewport
        if (elementMiddle > 0 && elementMiddle < windowHeight) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .global-branches {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
}

.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.map-container {
  position: relative;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    // background-color: black;
    pointer-events: none;
    z-index: 10;
  }
  .globe-map {
    width: 100%;
    object-fit: contain;
    object-position: center;
    position: relative;
    max-height: 428px;
  }
}

.witch-container {
  position: relative;
  z-index: 2;
  max-width: 533px;
  width: 50vw;
  margin-bottom: -10%;
  .witch-image {
    width: 100%;
    object-fit: contain;
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(20px, 20px);
    }
    50% {
      transform: translate(0, -20px);
    }
    75% {
      transform: translate(-20px, 20px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
}

.location-pins-container {
  z-index: 20;

  transition: transform 0.5s ease;
  opacity: 0;
  transition: opacity 400ms;
  position: absolute;
  transform-origin: center bottom;
  &.active {
    opacity: 1;
  }
}

.location-pins {
  fill: $primary-color;

  &.xl {
    height: 75px;
  }

  &.sm {
    height: 25px;
  }

  &.md {
    height: 50px;
  }
}
</style>
