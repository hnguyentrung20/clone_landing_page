<template>
  <div class="countdown-container" :class="{ 'is-loading': isLoading }">
    <div class="countdown-item">
      <div class="countdown-value">{{ days }}</div>
      <div class="countdown-label">Days</div>
    </div>
    <div class="countdown-separator">:</div>
    <div class="countdown-item">
      <div class="countdown-value">{{ hours }}</div>
      <div class="countdown-label">Hours</div>
    </div>
    <div class="countdown-separator">:</div>
    <div class="countdown-item">
      <div class="countdown-value">{{ minutes }}</div>
      <div class="countdown-label">Minutes</div>
    </div>
    <div class="countdown-separator">:</div>
    <div class="countdown-item">
      <div class="countdown-value">{{ seconds }}</div>
      <div class="countdown-label">Second</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        interval: null,
        isLoading: true,
      };
    },
    mounted() {
      this.interval = setInterval(this.updateCountdown, 1000);
      this.updateCountdown();
    },
    beforeUnmount() {
      clearInterval(this.interval);
    },
    methods: {
      updateCountdown() {
        const targetDate = new Date('May 12, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
          this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
          this.hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          this.minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
        } else {
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
        }
        this.isLoading = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
.countdown-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 26px 39px;
  margin: 20px 0;
  color: $text-color;
  opacity: 1;
  transition: opacity 0.3s ease;
  max-width: 756px;
  width: 100%;
  justify-content: space-between;
  &.is-loading {
    opacity: 0;
  }
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  width: calc((100% - 20px * 3) / 4);
  .countdown-value {
    font-family: 'Playfair Display';
    font-weight: 900;
    font-size: 60px;
    line-height: 64px;
    letter-spacing: 4.8px;
    text-align: center;
  }

  .countdown-label {
    font-size: 14px;
    margin-top: 5px;
  }

}


.countdown-separator {
  font-size: 36px;
  font-weight: bold;
  margin: 0 5px;
  align-self: flex-start;
  padding-top: 5px;
}
</style>
