<template>
  <footer class="footer">
    <div class="background-image"/>
    <div class="footer-content">
      <div class="logo-social-section">
        <div class="logo">
          <Logo />
        </div>
        <div class="social-links">
          <a href="#" class="social-link"><TwitterLogo /></a>
          <a href="#" class="social-link"><FacebookLogo /></a>
          <a href="#" class="social-link"><LinkedInLogo /></a>
        </div>
      </div>

      <div class="address-section">
        <h2>Address</h2>
        <div class="address">
          <div class="address-icon">
            <Location />
          </div>
          <div class="address-text">
            <p
              >Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
              US</p
            >
            <p
              >20 Phan Dang Luu street, Hai Chau District, Danang city,
              Vietnam</p
            >
          </div>
        </div>
        <div class="phone">
          <div class="phone-icon">
            <Mobile />
          </div>
          <div class="phone-text">
            <p>(+1) 555-0108-000 or (+236) 555-0108</p>
          </div>
        </div>
      </div>

      <div class="subscribe-section">
        <h2>Subscribe</h2>
        <p
          >Subscribe to our newsletter and be the first to know about our
          updates</p
        >
        <div class="subscribe-form">
          <input type="email" placeholder="Enter your email" >
          <button type="submit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="copyright">
      <span>2017 Copyright. Policy.</span>
    </div>
  </footer>
</template>

<script>
  import Logo from '~/components/icons/Logo.vue';
  import TwitterLogo from '~/components/icons/Twitter-logo.vue';
  import FacebookLogo from '~/components/icons/Facebook-logo.vue';
  import LinkedInLogo from '~/components/icons/LinkedIn-logo.vue';
  import Location from '~/components/icons/Location.vue';
  import Mobile from '~/components/icons/Mobile.vue';

  export default {
    name: 'LayoutFooter',
    components: {
      Logo,
      TwitterLogo,
      FacebookLogo,
      LinkedInLogo,
      Location,
      Mobile,
    },
  };
</script>

<style lang="scss">
  .footer {
    // background-color: #121f6b;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .background-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-image: url('/assets/imgs/footer-background.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: linear-gradient(to bottom, #000AFF, rgba(0, 10, 255, 0));
        pointer-events: none;
        z-index: 1;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: #00000080;
        pointer-events: none;
        z-index: 1;
      }
    }

    .container {
      padding: 3rem 1.5rem;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    .footer-content {
      max-width: calc(1200px + 16px);
      display: flex;
      flex-direction: column;
      gap: 4.25rem;
      padding: 40px 16px 62px;
      width: 100%;
      position: relative;

      & > * {
        position: relative;
        z-index: 2;
      }
    }



    .logo-social-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
      font-weight: 600;
    }

    .logo {
      width: 160px;
    }

    .social-links {
      display: flex;
      width: fit-content;
      gap: 1.5rem;
      margin: 1.5rem 0;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: transparent;
      border-radius: 3px;
      color: white;
      transition: all 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    .address,
    .phone {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .address-icon,
    .phone-icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: flex-start;
      justify-content: center;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    .address-text,
    .phone-text {
      p {
        margin-bottom: 0.5rem;
        line-height: 1.5;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .subscribe-form {
      display: flex;
      margin-top: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      overflow: hidden;
    }

    .subscribe-form input {
      flex: 1;
      background-color: transparent;
      border: none;
      padding: 0.75rem 1rem;
      color: white;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      &:focus {
        outline: none;
      }
    }

    .subscribe-form button {
      width: 40px;
      background-color: transparent;
      border: none;
      border-left: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    .copyright {
      padding-block: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
      font-size: 0.875rem;
      width: 100%;
      color: $text-white-color;
      background-color: black;
      font-weight: 400;
      z-index: 2;
    }
  }

  // Desktop Layout
  @media (min-width: $breakpoint-lg) {
    .footer {
      .footer-content {
        padding: 104px 16px 100px;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .logo-social-section {
        flex: 1;
        min-width: 163px;


        .logo {
          width: 163px;
        }
      }

      .address-section,
      .subscribe-section {
        flex: 2;
        margin-left: 2rem;
        max-width: 410px;
      }

      .copyright {
        padding-bottom: 27px;
      }

      h2 {
        margin-bottom: 2.5rem;
      }
    }
  }
</style>
