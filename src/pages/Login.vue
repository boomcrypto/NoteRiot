<template>
  <div>
    <header id="header" class="header">
      <div class="wr" style="color: #fff; font-weight: 400">
        <a id="headerLogo" href="/" class="header__logoImg">
          <img src="/images/logo-horizontal-transparent.png" width="300" />
        </a>
        <nav id="headerNav" class="header__nav">
          <div class="header__navCtas">
            <a
              @click="signIn"
              class="btn btn--b btn--primary"
              style="color: rgba(88, 47, 107, 1); background-color: #fff"
              >Login / Register</a
            >
          </div>
        </nav>
        <nav id="headerMenu" class="header__nav header__nav--hidden">
          <button
            id="headerMenuButton"
            class="btn btn--b btn--primary"
            style="color: rgba(88, 47, 107, 1); background-color: #fff"
          >
            Menu
          </button>
        </nav>
        <nav id="headerDrawer" class="headerMenu">
          <div id="headerDrawerBackdrop" class="headerMenu__backdrop"></div>
          <ul class="headerMenu__links">
            <li>
              <a
                @click="signIn"
                class="btn btn--b btn--primary"
                style="color: #fff; background-color: rgba(88, 47, 107, 1)"
                >Login / Register</a
              >
            </li>
          </ul>
          <button id="headerDrawerClose" class="headerMenu__close btn">
            Close
          </button>
        </nav>
      </div>
    </header>
    <div
      id="hero"
      class="section section--hero section--left"
      style="
        background-color: rgba(88, 47, 107, 1);
        padding-bottom: 60px;
        padding-top: 60px;
      "
    >
      <div class="wr heroWr heroWr--left">
        <div class="heroWrapper heroWrapper--left heroWrapper--pd">
          <h1
            class="hero__title"
            style="color:#fff;font-weight:700;font-family:&#x27;Roboto Condensed&#x27;, sans-serif"
          >
            Easy to use note taking
          </h1>
          <h2
            class="hero__subtitle"
            style="color: #fff; font-weight: 400; font-size: 1.7rem"
          >
            True user-owned data. Cloud convenience. Strong encryption. No
            central servers.
          </h2>
        </div>
        <div class="pd pd--right pd--dark">
          <div class="pd__crossPlatform">
            <div class="pd__laptop">
              <div class="pd__laptop__screen">
                <img src="/images/laptop.png" srcset="/images/laptop.png 2x" />
              </div>
            </div>
            <div class="pd__sp pd__sp--small">
              <div class="pd__sp__screen">
                <img src="/images/mobile.png" srcset="/images/mobile.png 2x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="zigzag"
      class="section section--zigzag section--center dark"
      style="
        background-color: rgba(255, 255, 255, 1);
        padding-bottom: 60px;
        padding-top: 60px;
        --wr-max: 1030px;
      "
    >
      <div class="wr">
        <h2
          class="color weight-title-h font-title section__title center standalone"
        >
          Features
        </h2>
        <div class="zigzag">
          <div class="zigzagItem zigzagItem--right">
            <div class="zigzagItem__content">
              <span class="zigzagItem__number">#1</span>
              <h3 class="zigzagItem__title color weight-text-m">
                Accessible Everywhere
              </h3>
              <div class="zigzagItem__text">
                <p>Access your notes on your desktop, phone, or tablet.</p>
              </div>
            </div>
            <div class="zigzagItem__graphic">
              <img
                src="/images/undraw_in_sync_xwsa.svg"
                class="media media--image"
                srcset="/images/undraw_in_sync_xwsa.svg 2x"
              />
            </div>
          </div>
          <div class="zigzagItem zigzagItem--left">
            <div class="zigzagItem__graphic">
              <img
                src="/images/undraw_content_creator_xeju.svg"
                class="media media--image"
                srcset="/images/undraw_content_creator_xeju.svg 2x"
              />
            </div>
            <div class="zigzagItem__content">
              <span class="zigzagItem__number">#2</span>
              <h3 class="zigzagItem__title color weight-text-m">
                Markdown or WYSIWYG
              </h3>
              <div class="zigzagItem__text">
                <p>
                  What You See Is What You Get (WYSIWYG) mode allow you to be
                  productive immediatly without learning Markdown. Read, write,
                  and preview the formatting of your notes. Convert to other
                  formats easily.
                </p>
              </div>
            </div>
          </div>
          <div class="zigzagItem zigzagItem--right">
            <div class="zigzagItem__content">
              <span class="zigzagItem__number">#3</span>
              <h3 class="zigzagItem__title color weight-text-m">Secure</h3>
              <div class="zigzagItem__text">
                <p>
                  All of your data stays encrypted on the storage location of
                  your choice. Only you hold the keys.
                </p>
              </div>
              <!-- <a
                class="btn btn--b btn--primary"
                style="color:#fff;background-color:rgba(88,47,107,1)"
                @click="signIn"
              >Login / Register</a> -->
            </div>
            <div class="zigzagItem__graphic">
              <img
                src="/images/undraw_security_o890.svg"
                class="media media--image"
                srcset="/images/undraw_security_o890.svg 2x"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="features2"
      class="section section--features section--center dark"
      style="
        background-color: rgba(255, 255, 255, 1);
        padding-bottom: 60px;
        padding-top: 60px;
        --wr-max: 1030px;
      "
    >
      <div class="wr">
        <div class="features features--trio features--center">
          <div class="feature">
            <svg
              style="width: 48px; height: 48px"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path
                fill="rgba(88,47,107,1)"
                d="M4,2H20A2,2 0 0,1 22,4V17.33L17.33,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M17,17V20.25L20.25,17H17M10,19H14V18H15V13C16.21,12.09 17,10.64 17,9A5,5 0 0,0 12,4A5,5 0 0,0 7,9C7,10.64 7.79,12.09 9,13V18H10V19M14,17H10V16H14V17M14,15H10V14H14V15M12,5A4,4 0 0,1 16,9C16,10.5 15.2,11.77 14,12.46V13H10V12.46C8.8,11.77 8,10.5 8,9A4,4 0 0,1 12,5Z"
              ></path>
            </svg>
            <h3 class="feature__title color weight-text-m">
              Google Keep Import
            </h3>
            <div class="feature__description">
              <p>
                Looking for a platform that respects your data and privacy?
                Import your Google Keep notes today!
              </p>
            </div>
          </div>
          <div class="feature">
            <svg
              style="width: 48px; height: 48px"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path
                fill="rgba(88,47,107,1)"
                d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
              ></path>
            </svg>
            <h3 class="feature__title color weight-text-m">Autosave</h3>
            <div class="feature__description">
              <p>
                No need to stop and save your work. We're saving it for you as
                you work.
              </p>
            </div>
          </div>
          <div class="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              fill="rgba(88,47,107,1)"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
              ></path>
            </svg>
            <h3 class="feature__title color weight-text-m">
              Distraction-less Writing
            </h3>
            <div class="feature__description">
              <p>
                Editor views can be expanded to full screen so that you can
                focus on your writing, with fewer distractions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="features"
      class="section section--features section--center dark"
      style="
        background-color: rgba(255, 255, 255, 1);
        padding-bottom: 60px;
        padding-top: 60px;
        --wr-max: 1030px;
      "
    >
      <div class="wr">
        <div class="features features--trio features--center">
          <div class="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              fill="rgba(88,47,107,1)"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"
              ></path>
            </svg>
            <h3 class="feature__title color weight-text-m">
              Easily Searchable
            </h3>
            <div class="feature__description">
              <p>
                Quickly find the info you're looking for by searching through
                your notes.
              </p>
            </div>
          </div>
          <div class="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              fill="rgba(88,47,107,1)"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"
              ></path>
            </svg>
            <h3 class="feature__title color weight-text-m">Organize</h3>
            <div class="feature__description">
              <p>Tag your notes and color code them for quick reference.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="testimonials"
      class="section section--testimonials section--center"
      style="
        background-color: rgba(88, 47, 107, 1);
        padding-bottom: 60px;
        padding-top: 60px;
        --wr-max: 1030px;
      "
    >
      <div class="wr">
        <h2
          class="color weight-title-h font-title section__title center"
          style="color: rgb(255, 255, 255); font-weight: 700"
        >
          See what users and reviewers are saying about us.
        </h2>
        <!-- <h3
          class="weight-text section__subtitle center"
          style="color: rgb(255, 255, 255); font-weight: 400;"
        >What users and reviewers are saying about us:</h3>-->
        <div class="testimonials">
          <div class="testimonial withAvatar">
            <img
              src="/images/gtecheek.png"
              alt="GTechEEK"
              class="testimonial__image"
            />
            <div
              class="testimonial__quote color"
              style="color: rgb(255, 255, 255); font-weight: 400"
            >
              <p>
                The app is a perfect alternative to Google Keep or Evernote and
                get to have the great benefits of its decentralized nature.
              </p>
            </div>
            <a
              href="https://gtecheek.com/noteriot-decentralized-note-app/"
              class="testimonial__name weight-text-m"
              style="color: rgb(255, 255, 255); font-weight: 200"
              >GTechEEK</a
            >
            <span class="testimonial__about weight-text-m"></span>
          </div>
          <div class="testimonial withAvatar">
            <img
              src="/images/christopher-porter.jpg"
              alt="Christopher Porter"
              class="testimonial__image"
            />
            <div
              class="testimonial__quote color"
              style="color: rgb(255, 255, 255); font-weight: 400"
            >
              <p>
                I am slowly migrating my everyday note taking to NoteRiot and
                away from SimpleNote and EverNote. I care about my privacy!
              </p>
            </div>
            <span
              class="testimonial__name weight-text-m"
              style="color: rgb(255, 255, 255); font-weight: 200"
              >Christopher Porter —</span
            >
            <a
              href="https://twitter.com/67tallchris/status/1086468998110183424"
              class="testimonial__about weight-text-m"
              style="color: rgb(255, 255, 255); font-weight: 200"
              >Empowering the connection between people and technology.</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      id="faq"
      class="section section--faq section--center dark"
      style="
        background-color: rgba(255, 255, 255, 1);
        padding-bottom: 60px;
        padding-top: 60px;
      "
    >
      <div class="wr">
        <h2
          class="section__title center standalone"
          style="color:rgba(88,47,107,1);font-weight:700;font-family:&#x27;Roboto Condensed&#x27;, sans-serif"
        >
          FAQ
        </h2>
        <div class="faq">
          <div class="faqItem">
            <h3
              class="faqItem__question"
              style="color: rgba(88, 47, 107, 1); font-weight: 700"
            >
              Why not Login with Facebook or Google? Or my email?
            </h3>
            <p
              class="faqItem__answer"
              style="color: rgba(118, 126, 173, 1); font-weight: 400"
            >
              Most social media companies are providing you with a free account
              so that they can sell your information to the
              <strike>highest</strike> all bidders. <br />Blockstack is
              different. With Blockstack,
              <em>YOU</em>
              control your identity. With the right apps, like NoteRiot, you
              control your data. Neither Blockstack nor the makers of NoteRiot
              have access to your id, your data, or what you do with them.
            </p>
          </div>
          <div class="faqItem">
            <h3
              class="faqItem__question"
              style="color: rgba(88, 47, 107, 1); font-weight: 700"
            >
              What is Blockstack?
            </h3>
            <p
              class="faqItem__answer"
              style="color: rgba(118, 126, 173, 1); font-weight: 400"
            >
              Blockstack is a new internet for decentralized apps that you
              access through the Blockstack Browser. With Blockstack, there is a
              new world of apps that let you own your data and maintain your
              privacy, security and freedom. Find out more at
              <a href="https://blockstack.org/about"
                >https://blockstack.org/about</a
              >
            </p>
          </div>
          <div class="faqItem">
            <h3
              class="faqItem__question"
              style="color: rgba(88, 47, 107, 1); font-weight: 700"
            >
              What do you mean by 'True user owned data'
            </h3>
            <p
              class="faqItem__answer"
              style="color: rgba(118, 126, 173, 1); font-weight: 400"
            >
              Some platforms will try to lock you in with proprietary formats or
              hard to use exports of your data. With NoteRiot, you can export
              all of your notes in simple markdown format and take them
              whereever *you* want. We also document the data formats in use
              directly on our github site, so you can take data directly from
              your encrypted cloud storage, if you wish.
            </p>
          </div>
          <div class="faqItem">
            <h3
              class="faqItem__question"
              style="color: rgba(88, 47, 107, 1); font-weight: 700"
            >
              Define 'Strong encryption'
            </h3>
            <p
              class="faqItem__answer"
              style="color: rgba(118, 126, 173, 1); font-weight: 400"
            >
              NoteRiot uses Blockstack's platform functions for bitcoin level
              encryption of your data. When you log into NoteRiot, an
              application specific public key is generated based on your
              identity and the NoteRiot app. We use this app key to encrypt your
              data on the client, so NoteRiot never sees it. This works the same
              for any blockstack application that uses the platform properly.
              Our code is on GitLab (see links below) and the Blockstack code
              can be found on GitHub. As with any critical data, don't trust.
              Verify.
            </p>
          </div>

          <div class="faqItem">
            <h3
              class="faqItem__question"
              style="color: rgba(88, 47, 107, 1); font-weight: 700"
            >
              Are there other apps that will utilize my Blockstack ID?
            </h3>
            <p
              class="faqItem__answer"
              style="color: rgba(118, 126, 173, 1); font-weight: 400"
            >
              Yes! Here are a few we really love:
              <a href="https://debut.social">Debut</a> is a fun social
              networking platform,
              <a href="https://stealthy.im/">Stealthy</a> is great for secure
              messaging,
              <a href="https://www.graphitedocs.com">Graphite Docs</a> will let
              you start to move away from the centralized, legacy office suites,
              and <a href="https://xordrive.io">XOR Drive</a> is an easy to use,
              encrypted, cloud file manager! Find even more at
              <a href="https://app.co/blockstack">https://app.co/blockstack</a>.
            </p>
          </div>
          <div class="faqItem">
            <h3
              class="faqItem__question"
              style="color: rgba(88, 47, 107, 1); font-weight: 700"
            >
              What does "Decentralized" mean?
            </h3>
            <p
              class="faqItem__answer"
              style="color: rgba(118, 126, 173, 1); font-weight: 400"
            >
              "Decentralized" means NoteRiot does not store
              <span class="font-italic">any</span> user information. Your notes
              are encrypted so that only you have access to them, and you have
              to ability to export your notes and take them with you (data
              portability).
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="cta"
      class="section section--cta section--center dark"
      style="
        background-color: rgba(255, 255, 255, 1);
        padding-bottom: 60px;
        padding-top: 60px;
      "
    >
      <div class="wr">
        <div class="cta__titles">
          <h2
            class="section__title center"
            style="color:rgba(88,47,107,1);font-weight:700;font-family:&#x27;Roboto Condensed&#x27;, sans-serif"
          >
            Ready to get started?
          </h2>
          <h3
            class="section__subtitle center"
            style="color: rgba(118, 126, 173, 1); font-weight: 400"
          >
            Contact us or Get Started now.
          </h3>
        </div>
        <div class="cta__ctas">
          <a
            @click="signIn"
            class="btn btn--b btn--primary btn--large"
            style="color: #fff; background-color: rgba(88, 47, 107, 1)"
            >Login / Register</a
          >
          <a
            href="mailto:help@riot.ai"
            class="btn btn--b btn--secondary btn--large"
            style="color: rgba(88, 47, 107, 1)"
            >Contact Us</a
          >
        </div>
      </div>
    </div>
    <footer
      id="footer"
      class="section section--footer section--center"
      style="
        background-color: rgba(88, 47, 107, 1);
        padding-bottom: 15px;
        padding-top: 15px;
      "
    >
      <div class="wr">
        <div
          class="footer footer--simple"
          style="color: #fff; font-weight: 400"
        >
          <div class="footer__primary">
            <span>© 2019 riot.ai</span>
          </div>
          <ul class="footer__social">
            <li>
              <a href="https://twitter.com/noteriot" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    fill="#fff"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/riot.ai/NoteRiot" target="_blank">
                <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="#fff"
                    d="M3.16,10L12,21.5L2.32,14.3C2.05,14.09 1.94,13.75 2.04,13.44L3.16,10M6.11,3.17C6,2.83 5.5,2.83 5.37,3.17L3.16,10H8.32L6.11,3.17M8.32,10L12,21.5L15.68,10H8.32M21.96,13.44L20.84,10L12,21.5L21.68,14.3C21.95,14.09 22.06,13.75 21.96,13.44M18.63,3.17C18.5,2.83 18,2.83 17.89,3.17L15.68,10H20.84L18.63,3.17Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { showConnect } from "@stacks/connect";
import { mapActions } from "vuex";
import { userSession } from "boot/stacks";

export default {
  name: "Login",
  // data () {
  //   return {
  //   }
  // },
  mounted() {
    var buffer = 10;
    var margin = 60 + 40 + buffer;
    // button
    var button = document.getElementById("headerMenuButton");
    var buttonWrapper = document.getElementById("headerMenu");
    // drawer
    var drawer = document.getElementById("headerDrawer");
    var drawerBackdrop = document.getElementById("headerDrawerBackdrop");
    var drawerClose = document.getElementById("headerDrawerClose");
    // header UI
    var logo = document.getElementById("headerLogo");
    var nav = document.getElementById("headerNav");
    var logoWidth = logo.offsetWidth;
    var navWidth = nav.offsetWidth;

    var determineVisibility = function () {
      var parent = window.innerWidth;
      if (logoWidth + navWidth > parent - margin) {
        nav.classList.add("header__nav--hidden");
        buttonWrapper.classList.add("headerMenu--visible");
      } else {
        nav.classList.remove("header__nav--hidden");
        buttonWrapper.classList.remove("headerMenu--visible");
      }
    };
    var showDrawer = function () {
      drawer.classList.add("headerMenu--visible");
    };
    var hideDrawer = function () {
      drawer.classList.remove("headerMenu--visible");
    };
    button.onclick = showDrawer;
    drawerBackdrop.onclick = hideDrawer;
    drawerClose.onclick = hideDrawer;
    window.addEventListener("resize", determineVisibility);
    determineVisibility();
  },
  computed: {
    pageHeight() {
      return window.innerHeight - 48;
    },
  },
  methods: {
    ...mapActions("app", ["setUser", "setLoading"]),
    signIn() {
      const authOptions = {
        manifestPath: "/manifest.json",
        userSession: userSession,
        onFinish: async ({ userSession }) => {
          this.setLoading({ status: true, msg: "Signing in..." });
          await this.setUser(userSession);
          this.$router.push({ name: "Index" });
          this.setLoading({ status: false, msg: "" });
        },
        appDetails: {
          name: "NoteRiot",
          icon: `${location.origin}/icons/icon-128x128.png`,
        },
      };
      console.log("showing connect");
      showConnect(authOptions);
    },
  },
};
</script>
<style scoped>
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
.mkd input,
button,
hr,
input {
  overflow: visible;
}
progress,
sub,
sup {
  vertical-align: baseline;
}
body,
html {
  -webkit-text-size-adjust: 100%;
}
.btn--b,
sub,
sup {
  position: relative;
}
.mkd table,
.pricingTable {
  border-collapse: collapse;
}
html {
  line-height: 1.15;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box;
  height: 0;
}
.feature,
.inlineForm__input,
.wr,
legend {
  box-sizing: border-box;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
select {
  text-transform: none;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: ButtonText dotted 1px;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
.btn,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif;
}
details {
  display: block;
}
summary {
  display: list-item;
}
[hidden],
template {
  display: none;
}
body {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  font-style: normal;
  color: #24292e;
  background-color: #fff;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
.wr {
  max-width: 1030px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
@media only screen and (max-width: 700px) {
  .wr {
    padding: 0 15px;
  }
}
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;
  padding: 0 0.7em;
  height: 2.4em;
  line-height: 2.4em;
  border: none;
  outline: 0;
  border-radius: 3px;
  font-weight: 500;
  font-size: 1.05em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.btn--large {
  font-size: 1.2em;
}
.btn--plain {
  background: 0 0;
}
.btn--a {
  background: #fff;
}
.btn--a.btn--primary,
.btn--a.btn--secondary {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.btn--a.btn--primary:hover,
.btn--a.btn--secondary:hover {
  box-shadow: 0 4px 10px rgba(50, 50, 93, 0.226), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: #fefefe;
}
.btn--a.btn--plain {
  background: 0 0;
  text-decoration: underline;
}
.btn--b {
  padding: 0 15px;
  border-radius: 1.2em;
  box-shadow: inset 0 0 0 1px;
  backface-visibility: hidden;
}
.btn--b.btn--primary:hover {
  box-shadow: 0 4px 10px rgba(50, 50, 93, 0.226), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.btn--b.btn--secondary:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 1.3em;
  color: inherit;
  transition: box-shadow 0.1s linear;
  box-shadow: inset 0 0 0 0;
}
.btn--b.btn--secondary:hover:after {
  box-shadow: inset 0 0 0 3px;
}
.btn--b.btn--primary {
  box-shadow: none;
}
.btn--b.btn--plain {
  box-shadow: none;
  text-decoration: underline;
}
.btn--c.btn--primary,
.btn--c.btn--secondary {
  transition: box-shadow 0.2s ease;
  backface-visibility: none;
}
.btn--c.btn--primary {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.171);
}
.btn--c.btn--secondary {
  box-shadow: inset 0 0 0 1px, 0 1px 2px rgba(0, 0, 0, 0.171);
}
.btn--c.btn--primary:hover,
.btn--c.btn--secondary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(50, 50, 93, 0.226), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.btn--c.btn--secondary:hover {
  box-shadow: inset 0 0 0 1px, 0 4px 10px rgba(50, 50, 93, 0.226),
    0 1px 3px rgba(0, 0, 0, 0.08);
}
.btn--loading {
  cursor: wait;
  pointer-events: none;
}
.btn--loading:after {
  content: "";
  display: inline-block;
  margin-bottom: -0.2em;
  height: 16px;
  width: 16px;
  border: 2px solid hsla(0, 0%, 100%, 0.3);
  border-right-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin-left: 0.6em;
  animation: a;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.btn--success {
  color: #fff !important;
  background: #22bc66 !important;
}
.btn--success:after {
  content: "\2713";
  font-size: 1.4em;
  padding-left: 9px;
}
@keyframes a {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
.section {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  overflow: hidden;
}
.section--noPadding {
  padding: 0;
}
.section--light {
  color: #fff;
}
.section--dark {
  color: #000;
}
.section__title {
  margin: 0 0 5px;
  text-align: center;
  font-weight: 700;
  font-size: 2.7em;
  line-height: 1.3em;
}
.section__title.standalone {
  margin-bottom: 50px;
}
.section__subtitle {
  text-align: center;
  margin: 0 0 50px;
  font-weight: 500;
  color: #0000b3;
  font-size: 16pt;
}
.section--titles .section__subtitle {
  margin-bottom: 0;
}
.section__subtitle.left,
.section__title.left {
  text-align: left;
}
.sectionBackdropWrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
}
.sectionBackdrop.video {
  height: auto;
  width: auto;
  min-width: 100%;
  min-height: 100%;
}
.iconWrapper {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.header,
.header .wr,
.header__nav {
  display: flex;
}
.iconWrapper.titleIcon,
.titleIcon {
  display: flex;
  margin-bottom: 15px;
}
.section--center .titleIcon {
  margin: 0 auto 15px;
}
.iconWrapper .backdrop {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
}
.iconWrapper .icon {
  margin: 0 !important;
}
.iconWrapper.hexagon .icon {
  background-size: 50%;
}
.iconWrapper svg.icon {
  max-width: 50%;
  max-height: 50%;
}
.iconWrapper.circle .icon,
.iconWrapper.rounded .icon {
  background-size: 60%;
}
.iconWrapper.circle svg.icon,
.iconWrapper.rounded svg.icon {
  max-width: 60%;
  max-height: 60%;
}
.icon {
  position: relative;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}
.media--image {
  width: 100%;
}
.media--image,
.media--video {
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}
.mediawrapper--cover img {
  object-fit: cover;
}
.header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding: 10px 0;
  z-index: 8;
  height: 50px;
}
.header--fixed {
  position: fixed;
  background: #fff;
}
.header--fixed.header--solid {
  border-bottom: 1px solid #bbb;
}
.header .wr {
  flex-wrap: wrap;
  justify-content: space-between;
}
.headerSpacer {
  height: 70px;
  width: 100%;
}
.header__nav--hidden {
  display: none;
}
.header__nav .btn {
  color: inherit;
  margin: 0 15px;
  font-size: 15px;
}
.header__nav .btn:first-child {
  margin-left: 0;
}
.header__logo {
  margin: 0 40px 0 0;
  padding: 0;
  font-size: 22pt;
  line-height: 50px;
  color: inherit !important;
  text-decoration: none;
  white-space: nowrap;
}
.header__logoImg {
  display: flex;
}
.header__logoImg img {
  margin: auto;
}
.header__navCtas {
  display: flex;
  margin-left: 20px;
}
.header__navCtas:first-child {
  margin-left: 0;
}
.header__nav .btn {
  display: block;
  line-height: 34px;
  margin-top: 7px;
  margin-right: 0;
  white-space: nowrap;
}
.headerMenu {
  position: fixed;
  display: none;
  top: -10px;
  right: 0;
  bottom: 10px;
  left: 0;
}
.headerMenu--visible {
  display: block;
  z-index: 9;
}
.headerMenu__backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: 0 0;
}
.headerMenu__links {
  position: relative;
  max-width: 300px;
  background: #fff;
  border-radius: 5px;
  margin: 50px auto 20px;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
.headerMenu__links li {
  border-bottom: 1px solid #eee;
}
.headerMenu__links li:last-child {
  border-bottom: none;
}
.headerMenu__links .btn {
  display: block;
  text-decoration: none;
  font-size: 1.2em;
  text-align: center;
  border-radius: 0;
}
.headerMenu__links .btn:hover {
  box-shadow: none;
  transform: none;
}
.headerMenu__close {
  position: relative;
  display: block;
  width: 140px;
  background: 0 0;
  color: #fff;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin: 0 auto;
  font-size: 1.1em;
  border-radius: 4px;
}
@media only screen and (max-width: 700px) {
  .header__logo {
    font-size: 18pt;
  }
}
.section--hero {
  background-position: 50%;
  background-size: cover;
}
.heroWr {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.heroWr--right {
  justify-content: center;
}
.heroWr--bottom,
.heroWr--center {
  flex-direction: column;
  justify-content: center;
}
.heroWrapper {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  --margin-top-scale: 1;
  --margin-bottom-scale: 1;
  margin-top: 150px;
  margin-top: calc(150px * var(--margin-top-scale));
  margin-bottom: 150px;
  margin-bottom: calc(150px * var(--margin-bottom-scale));
}
.heroWrapper .titleIcon {
  margin-bottom: 20px;
}
.heroWrapper--bottom .titleIcon,
.heroWrapper--center .titleIcon {
  margin: 0 auto 20px;
}
.heroWrapper--left,
.heroWrapper--right {
  max-width: 50%;
  min-width: 320px;
}
.heroWrapper--bottom,
.heroWrapper--center {
  text-align: center;
}
.heroWrapper--bottom {
  margin-top: 60px;
}
.heroWrapper--pd.heroWrapper--bottom,
.heroWrapper--pd.heroWrapper--center {
  margin-top: 80px;
  margin-bottom: 60px;
}
.hero__title {
  margin: 0 0 17px;
  font-weight: 700;
  font-size: 3.5em;
  line-height: 1.2;
  white-space: pre-line;
}
.hero__subtitle {
  font-weight: 500;
  max-width: 500px;
  margin: 0;
  white-space: pre-line;
}
.heroWrapper--bottom .hero__subtitle,
.heroWrapper--center .hero__subtitle {
  margin: 0 auto;
}
.hero__ctas {
  margin-top: 30px;
}
.hero__ctas .btn {
  margin-right: 15px;
  margin-bottom: 15px;
}
.hero__ctas .btn:last-child {
  margin-right: 0;
}
.hero__ctaInfo {
  display: inline;
  margin-top: 10px;
  max-width: 230px;
  font-size: 0.9em;
  opacity: 0.7;
}
.heroWrapper--bottom .hero__ctaInfo,
.heroWrapper--center .hero__ctaInfo {
  margin: 10px auto;
}
@media only screen and (max-width: 700px) {
  .heroWr {
    flex-direction: column;
  }
  .heroWrapper--left,
  .heroWrapper--right {
    max-width: none;
    margin-top: 80px;
    margin-bottom: 60px;
    text-align: center;
  }
  .heroWrapper--left .titleIcon,
  .heroWrapper--right .titleIcon {
    margin: 0 auto 20px;
  }
  .hero__subtitle {
    margin: 0 auto;
  }
  .hero__ctaInfo {
    margin: 10px auto;
  }
}
@media only screen and (max-width: 400px) {
  .hero__title {
    font-size: 28pt;
  }
  .hero__subtitle {
    font-size: 14pt;
  }
}
.pricing {
  margin: 0;
}
.pricing,
.pricingTiers {
  display: flex;
  justify-content: center;
}
.pricingTiers {
  flex-wrap: wrap;
}
.pricingTierWrapper,
.section--center .footer--groupsTop .footer__linkGroups {
  justify-content: center;
}
.pricingTierWrapper {
  display: flex;
  width: 290px;
  margin: 0 15px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.137), 0 10px 30px #000011;
  border-radius: 4px;
}
.pricingTierWrapper:last-child {
  margin-right: none;
}
.pricingTier {
  position: relative;
  flex-grow: 1;
  padding: 20px 20px 80px;
}
.pricingTier__title {
  margin: 0;
  text-align: center;
  font-size: 1.8em;
}
.pricingTier__description {
  margin: 0;
  text-align: center;
  font-size: 1.1em;
  height: 50px;
}
.pricingTier__price {
  margin: 25px 0;
  text-align: center;
  height: 50px;
}
.pricingTier .price {
  font-size: 3em;
  line-height: 1;
}
.pricingTier .interval {
  color: #727272;
  padding-left: 1px;
}
.pricingTier__features {
  margin: 0;
  padding: 0 0 0 2px;
}
.pricingTier__features li {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1.05em;
}
.pricingTier__features svg {
  width: 18px;
  margin-right: 8px;
}
.pricingTier .btn {
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  padding: 0;
  text-align: center;
  height: 40px;
}
.pricingSimple {
  display: flex;
  box-shadow: 0 0 25px rgba(40, 47, 60, 0.05),
    0 20px 25px rgba(40, 47, 60, 0.05), 0 3px 4px rgba(40, 47, 60, 0.05);
  border-radius: 4px;
  max-width: 700px;
}
.pricingSimple__info {
  width: 50%;
  padding: 30px;
}
.pricingSimple__featureWrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.pricingSimple__features {
  margin: 0;
  padding: 0;
}
.pricingSimple__features li {
  padding-bottom: 14px;
}
.pricingSimple__features li:last-child {
  padding-bottom: 0;
}
.pricingSimple__title {
  font-size: 1.2em;
  margin: 0;
}
.pricingSimple__description {
  margin: 0;
}
.pricingSimple__price {
  margin-top: 20px;
  margin-bottom: 12px;
}
.pricingSimple__price .price {
  font-size: 2.5em;
}
.pricingSimple__price .interval {
  color: #727272;
  padding-left: 1px;
}
.pricingTableWrapper {
  width: 100%;
  overflow: auto;
}
.pricingTable {
  width: 100%;
  overflow-x: scroll;
}
.pricingTable th {
  font-size: 1.2em;
}
.pricingTable td,
.pricingTable th {
  width: 230px;
  min-width: 120px;
  text-align: center;
}
.pricingTable .tooltip svg,
.pricingTable td svg {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.pricingTable td {
  font-size: 1em;
  border-bottom: 1px solid #7e7e7e34;
  border-color: var(--pricing-border-color);
  padding: 12px 0;
}
.pricingTable td:first-child {
  text-align: left;
}
.pricingTable tr:last-child td {
  border-bottom: none;
}
.pricingTable tr.description td {
  font-size: 1em;
}
.pricingTable tr.price td {
  font-size: 2em;
  border-bottom: none;
  padding-bottom: 0;
  padding-top: 0;
}
.pricingTable tr.interval td {
  padding-top: 2px;
  font-size: 0.9em;
}
.pricingTable .btn {
  font-size: 1em;
}
.pricingTable tr.ctas td {
  padding-top: 16px;
}
.pricingTable .tooltip svg {
  opacity: 0.6;
  margin-left: 4px;
}
@media only screen and (max-width: 560px) {
  .pricingSimple {
    flex-direction: column;
  }
  .pricingSimple__info {
    text-align: center;
  }
  .pricingSimple__featureWrapper,
  .pricingSimple__info {
    width: auto;
  }
}
.features {
  display: flex;
  margin: 0;
  justify-content: space-between;
}
.feature {
  margin: 0 25px;
  width: 33.33%;
}
.features--center .feature {
  text-align: center;
}
.feature:first-child {
  margin-left: 0;
}
.feature:last-child {
  margin-right: 0;
}
.feature__title {
  margin: 0 0 8px;
  font-weight: 400;
  font-size: 1.3em;
}
.feature__description {
  overflow: auto;
  margin: 3px 0 0;
  color: #bbb;
  font-size: 1.1em;
  line-height: 1.6em;
  white-space: pre-line;
}
.feature__description p {
  margin: 0;
}
.feature .icon {
  margin-bottom: 20px;
}
.feature .iconWrapper {
  margin-bottom: 10px;
}
.features--center .icon {
  margin: 0 auto 20px;
}
@media only screen and (max-width: 760px) {
  .features {
    flex-direction: column;
  }
  .feature {
    width: 100%;
    margin: 0 0 50px;
  }
  .feature:last-child {
    margin-bottom: 0;
  }
  .features:not(.features--center) .feature .icon {
    float: left;
    margin-right: 30px;
  }
  .feature__title {
    margin-bottom: 4px;
  }
}
@media only screen and (max-width: 450px) {
  .feature {
    text-align: center;
  }
  .features .icon {
    float: none !important;
    margin: 0 auto 15px !important;
  }
  .features .iconWrapper .icon {
    margin-bottom: 0 !important;
  }
}
.zigzagItem {
  display: flex;
  --between-items-scale: 1;
  margin: 50px 0;
  margin: calc(50px * var(--between-items-scale)) 0;
  align-items: center;
  justify-content: center;
}
.zigzagItem:last-child {
  margin-bottom: 0;
}
.zigzagItem__graphic {
  display: flex;
  width: 50%;
  height: 350px;
  max-width: 350px;
  align-items: center;
}
.zigzagItem__content {
  position: relative;
  max-width: 350px;
  width: 50%;
}
.zigzagItem--right .zigzagItem__content {
  margin-right: 50px;
}
.zigzagItem--left .zigzagItem__content {
  margin-left: 120px;
}
.zigzagItem__title {
  position: relative;
  margin: 0 0 8px;
  z-index: 1;
  line-height: 1.1em;
  font-size: 2.3em;
}
.zigzagItem__number {
  position: absolute;
  z-index: 0;
  font-weight: 600 !important;
  font-size: 72pt;
  opacity: 0.08;
  top: -75px;
  left: -50px;
  font-family: Helvetica, Arial;
}
.zigzagItem__text {
  position: relative;
  margin: 0;
  z-index: 1;
  font-size: 1.2em;
  white-space: pre-line;
}
.zigzagItem__text p {
  margin: 0;
}
.zigzagItem .btn {
  margin-top: 20px;
}
@media only screen and (max-width: 650px) {
  .zigzagItem {
    margin: 70px 0;
  }
  .zigzagItem__graphic {
    height: 200px;
  }
  .zigzagItem__number {
    font-size: 52pt;
    top: -45px;
    left: -70px;
  }
}
@media only screen and (max-width: 500px) {
  .zigzagItem {
    flex-direction: column;
    padding: 0 10px;
  }
  .zigzagItem--left .zigzagItem__content,
  .zigzagItem--right .zigzagItem__content,
  .zigzagItem__content {
    margin: 0 0 10px;
    width: 100%;
    max-width: none;
    order: 1;
    text-align: center;
  }
  .zigzagItem__graphic {
    max-width: 300px;
    width: 100%;
    height: 300px;
    order: 2;
  }
  .zigzagItem__number {
    position: relative;
    width: 50px;
    font-size: 17px;
    line-height: 26px;
    top: 0;
    left: 0;
    opacity: 0.5;
    text-align: center;
  }
}
.faq {
  max-width: 800px;
  margin: 0 auto -30px;
  column-count: 2;
  column-gap: 50px;
}
.faq.expandable {
  display: flex;
  column-count: auto;
  flex-direction: column;
  border-top: 1px solid;
  border-color: var(--expandable-line-color);
}
.faqItem {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  margin-bottom: 30px;
}
.faq.expandable .faqItem {
  border-bottom: 1px solid;
  border-color: var(--expandable-line-color);
  margin-bottom: 0;
}
.faqItem__question {
  margin: 0;
  font-size: 1.25em;
}
.faq.expandable .faqItem__question {
  position: relative;
  padding: 12px 0;
  cursor: pointer;
}
.faq.expandable .faqItem:hover .faqItem__question {
  color: var(--faq-link-color) !important;
}
.faq.expandable .faqItem__question:after {
  content: "+";
  position: absolute;
  right: 10px;
  top: 14px;
  line-height: 15px;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 1.2em;
  transform: rotate(135deg);
  transition: transform 0.2s ease-in-out;
}
.faq.expandable .faqItem.closed .faqItem__question:after {
  transform: rotate(0);
}
.faqItem__answer {
  margin: 0;
  font-size: 1.15em;
}
.faq.expandable .faqItem__answer {
  margin-top: -7px;
  font-size: 1.2em;
  padding-bottom: 12px;
}
.faq.expandable .faqItem.closed .faqItem__answer {
  display: none;
}
.section--footer {
  padding: 15px 0;
  margin: 0;
  z-index: 7;
}
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 54px;
  padding-top: 15px;
}
.footer--simple {
  align-items: center;
  padding-top: 0;
}
.footer--groupsTop {
  flex-direction: column;
}
.footer__primary {
  margin-right: 40px;
  margin-bottom: 0;
}
.footer__end {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footerBadge {
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: #fff;
  color: #222;
  text-decoration: none;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif;
  padding: 5px 9px;
  border-radius: 3px;
  animation: b;
  animation-duration: 1.5s;
  transition: all 0.3s ease;
  transition-property: background color;
  z-index: 6;
  box-shadow: 0 1px 3px #0003, 0 6px 13px #00001a;
}
.contact__item .optional,
.member__role {
  font-weight: 400;
}
.footerBadge span {
  color: #186aff;
  transition: color 0.3s ease;
}
.footerBadge--production {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
.footerBadge:hover,
.footerBadge:hover span {
  color: #fff;
  background: #186aff;
}
@keyframes b {
  0%,
  80% {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.footer__social {
  display: flex;
  list-style-type: none;
  padding-left: 0;
}
.footer__social li {
  margin-left: 20px;
}
.footer__social li:first-child {
  margin-left: 0;
}
.footer__social a {
  display: flex;
  height: 26px;
  width: 26px;
  align-items: center;
}
.footer__social svg {
  height: 26px;
}
.footer__linkRow a {
  color: inherit;
  margin: 0 8px;
}
.footer__linkRow a:first-child {
  margin-left: 0;
}
.footer__linkRow a:last-child {
  margin-right: 0;
}
.footer__linkGroups {
  display: flex;
  margin: 0 -30px;
  text-align: center;
  flex-wrap: wrap;
}
.footer--groupsTop .footer__linkGroups {
  justify-content: left;
}
.footer__linkGroup {
  display: block;
  list-style: none;
  margin: 0 30px 30px;
  padding: 0;
  min-width: 120px;
  text-align: left;
}
.contact__error,
.grid--center,
.team--center,
.testimonial {
  text-align: center;
}
.footer--groupsTop .footer__linkGroup,
.footer__linkGroup:first-child {
  padding-left: 0;
}
.footer__linkGroup li:first-child {
  padding-bottom: 6px;
}
.footer__linkGroup a {
  display: block;
  text-decoration: none;
  padding: 3px 0;
  color: inherit;
}
.logos,
.team {
  display: flex;
}
.footer__linkGroup a:hover,
.mkd a,
.mkd a:hover {
  text-decoration: underline;
}
.section--logos {
  padding: 15px 0;
}
.logos {
  justify-content: center;
  margin: 0 -20px;
}
.logos--fill {
  justify-content: space-between;
}
.logos__logo {
  height: 80px;
  width: 100px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  margin: 0 20px;
  opacity: 0.8;
}
@media only screen and (max-width: 500px) {
  .faq {
    column-count: 1;
  }
  .logos {
    flex-wrap: wrap;
    justify-content: center;
  }
  .logos__logo {
    width: 60px;
    height: 40px;
  }
}
.team {
  justify-content: space-between;
  margin: 0 -20px -40px;
  flex-wrap: wrap;
}
.team__member {
  margin: 0 20px 40px;
  min-width: 220px;
}
.member__avatar {
  height: 80px;
  width: 80px;
  background: #fafafa;
  border-radius: 50%;
  background-size: cover;
}
.team--center .member__avatar {
  margin: 0 auto;
}
.member__name {
  margin: 14px 0 0;
  font-size: 1.3em;
}
.member__role {
  margin: 0;
  font-size: 1.1em;
}
.member__description {
  margin: 10px 0 0;
  font-size: 1.1em;
  line-height: 1.6em;
  white-space: pre-wrap;
}
.member__description p {
  margin: 0;
}
@media only screen and (max-width: 800px) {
  .team {
    justify-content: center;
  }
  .section--team .section__subtitle,
  .section--team .section__title,
  .team__member {
    text-align: center;
  }
  .section--team .titleIcon {
    margin: 0 auto 20px;
  }
}
@media only screen and (max-width: 550px) {
  .team {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .team__member {
    width: auto !important;
    max-width: 300px;
    margin-bottom: 40px;
  }
  .member__avatar {
    margin: 0 auto;
  }
  .team__member:last-child {
    margin-bottom: 0;
  }
}
.testimonials {
  display: flex;
  flex-direction: column;
}
.testimonial {
  position: relative;
  max-width: 560px;
  margin: 30px auto;
}
.testimonial:last-child {
  margin-bottom: 0;
}
.testimonial:before {
  content: "\201C";
  position: absolute;
  font-family: Georgia, Times New Roman, Times, serif;
  font-size: 122pt;
  top: -72px;
  left: -20px;
  z-index: 0;
  opacity: 0.1;
}
.testimonial.withAvatar:before {
  top: 10px;
}
.testimonial__quote {
  position: relative;
  margin: 0 0 10px;
  font-size: 1.4em;
  line-height: 1.6em;
  white-space: pre-line;
}
.testimonial__quote p {
  margin: 0;
}
.testimonial__about,
.testimonial__name {
  font-size: 1.1em;
}
.testimonial__image {
  display: inline-block;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.pd {
  position: relative;
  display: flex;
  z-index: 4;
}
.pd--bottom,
.pd--top {
  align-items: center;
  justify-content: center;
}
.pd--bottom {
  margin-bottom: -60px;
  align-items: normal;
  justify-content: center;
}
.pd--top {
  max-height: 400px;
  margin-top: 50px;
}
.pd--left,
.pd--right {
  margin-top: 30px;
  max-height: 500px;
  align-items: center;
  justify-content: center;
}
.pd--left {
  margin-right: 50px;
}
.pd--right {
  margin-left: 50px;
}
.pd__browser,
.pd__imgBox {
  display: block;
  border-radius: 8px;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 3px 6px #00001a, 0 10px 22px #000003;
  background-color: #fff;
}
.pd__smartphones,
.pd__sp {
  display: flex;
  justify-content: center;
  position: relative;
}
.pd__browser {
  width: 500px;
  height: 350px;
}
.pd__imgBox {
  object-fit: contain;
  border-radius: 0;
}
.pd__imgBox video {
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  object-position: left;
}
.galleryItem img,
.pd__browserContent video {
  object-fit: cover;
}
.galleryItem img,
.pd--bottom .pd__imgBox video {
  object-position: center;
}
.pd--left .pd__imgBox,
.pd--right .pd__imgBox {
  max-height: 500px;
}
.pd--bottom .pd__imgBox,
.pd--top .pd__imgBox {
  max-height: 400px;
}
.pd--bottom .pd__imgBox video,
.pd--top .pd__imgBox video {
  max-height: 400px;
  width: auto;
  max-width: 100%;
}
.pd--bottom .pd__browser {
  border-radius: 8px 8px 0 0;
  width: 840px;
  height: 530px;
}
.pd__imgBox--transparent {
  box-shadow: none;
  background-color: transparent;
}
.pd--bottom .pd__imgBox--transparent {
  background-position: top;
}
.pd__browserChrome {
  height: 12px;
  background: #fefefe;
  padding: 12px;
}
.pd__browserActions {
  height: 12px;
  width: 12px;
  background: #fe6058;
  box-shadow: 20px 0 0 #febe2e, 40px 0 0 #29cc42;
  border-radius: 50%;
}
.pd__browserContent {
  height: calc(100% - 36px);
  background-size: cover;
  background-position: 0 0;
}
.pd--bottom .pd__smartphones {
  max-height: 370px;
}
.pd--right .pd__smartphones {
  transform: translateY(20px);
}
.pd__sp {
  align-items: center;
  width: 230px;
  height: 475px;
  background: #fff;
  border-radius: 38px;
  box-shadow: 0 3px 35px #0003, inset 0 2px 5px #0003,
    inset 0 0 10px rgba(0, 0, 0, 0.1);
}
.pd--dark .pd__sp {
  background: #242424;
}
.pd__sp--small {
  width: 161px;
  height: 333px;
  border-radius: 25px;
}
.pd__sp--slanted:first-child {
  transform: rotate(-12deg) scale(0.95) translate(40px, 20px);
}
.pd__sp--slanted:last-child {
  transform: rotate(12deg);
}
.pd__sp__screen {
  border: 2px solid #f9f9f9;
  height: 380px;
  width: 200px;
  overflow: hidden;
}
.pd__sp__screen img {
  display: block;
  width: 100%;
}
.pd--dark .pd__sp__screen {
  border: none;
}
.pd__sp--small .pd__sp__screen {
  height: 266px;
  width: 140px;
}
.pd__crossPlatform {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 100vw;
}
.pd--bottom .pd__crossPlatform {
  max-height: 370px;
  max-width: 580px;
  margin: 0 auto 50px;
}
.pd--right .pd__crossPlatform {
  transform: translateX(40px);
}
.pd__crossPlatform .pd__sp {
  position: absolute;
  left: -30px;
  top: 70px;
}
.pd--bottom .pd__crossPlatform .pd__sp {
  top: 33px;
  left: -20px;
}
.pd__laptop {
  position: relative;
  width: 500px;
  height: 350px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 30px 30px 20px 20px;
  box-shadow: 0 3px 35px #0003, inset 0 5px 5px rgba(0, 0, 0, 0.089),
    inset 0 -13px 13px #00000a, inset 0 0 10px #00001a;
}
.pd__laptop:after,
.pd__laptop:before {
  position: absolute;
  left: -36px;
  right: -36px;
  content: "";
}
.pd--dark .pd__laptop {
  background: #242424;
}
.pd__laptop:before {
  bottom: -6px;
  height: 9px;
  background: #e3e8ed;
  border-bottom-left-radius: 25% 100%;
  border-bottom-right-radius: 25% 100%;
}
.pd--dark .pd__laptop:before {
  background: #242424;
}
.pd__laptop:after {
  bottom: 3px;
  height: 5px;
  background: #fff;
  border-radius: 3px 3px 0 0;
}
.pd--dark .pd__laptop:after {
  background: #43494e;
}
.pd__laptop__screen {
  border: 2px solid #f9f9f9;
  height: 290px;
  width: 460px;
  overflow: hidden;
}
.pd__laptop__screen img {
  width: 100%;
  height: 100%;
}
.pd--dark .pd__laptop__screen {
  border: none;
}
@media only screen and (max-width: 930px) {
  .pd--bottom .pd__browser {
    width: 588px;
    height: 371px;
  }
}
@media only screen and (max-width: 700px) {
  .pd--left,
  .pd--right {
    margin-left: 0;
    margin-right: 0;
  }
  .pd--right .pd__imgBox {
    max-height: 400px;
  }
  .pd--left .pd__imgBox video,
  .pd--right .pd__imgBox video {
    max-height: 400px;
    width: auto;
    max-width: 100%;
  }
  .pd--bottom .pd__browser {
    width: 441px;
    height: 300px;
  }
}
@media only screen and (max-width: 441px) {
  .pd--bottom .pd__browser {
    width: calc(100vw - 20px);
    height: 300px;
  }
}
.contact {
  display: flex;
  flex-direction: column;
  max-width: 570px;
  margin: 0 auto;
}
.contact .btn {
  align-self: flex-end;
}
.contact__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.contact__row .contact__item {
  flex-grow: 1;
  padding: 0 15px;
  width: calc(50% - 30px);
}
.contact__row .contact__item:first-child {
  padding-left: 0;
}
.contact__row .contact__item:last-child {
  padding-right: 0;
}
.contact__item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.contact__item label {
  margin-bottom: 3px;
}
.contact__item input,
.contact__item textarea {
  border: 2px solid hsla(0, 0%, 49%, 0.3);
  border-radius: 3px;
  font-size: 1.15em;
  padding: 10px;
  background: 0 0;
}
.contact__item textarea {
  min-height: 100px;
}
.contact__error {
  background: #ffe6e6;
  color: #8f1414;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
}
.contact__error:empty {
  display: none;
}
@media only screen and (max-width: 500px) {
  .contact__row {
    flex-direction: column;
  }
  .contact__row .contact__item {
    width: auto;
    padding: 0;
  }
}
.grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: -60px;
}
.gridItem {
  width: calc(33.3333% - 50px);
  margin-bottom: 60px;
}
.gridItem .icon,
.gridItem .iconWrapper {
  margin-bottom: 10px;
}
.grid--center .icon {
  margin: 0 auto;
}
.gridItem__title {
  margin: 0;
  font-size: 1.3em;
}
.gridItem__description {
  margin: 0;
  font-size: 1.1em;
  white-space: pre-wrap;
}
.gridItem__description p {
  margin: 0;
}
@media only screen and (max-width: 800px) {
  .gridItem {
    width: calc(50% - 25px);
  }
}
@media only screen and (max-width: 550px) {
  .gridItem {
    width: 100%;
  }
}
.inlineFormWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inlineFormWrapper.left,
.inlineFormWrapper.right {
  align-items: flex-start;
}
.inlineForm {
  position: relative;
  display: block;
}
.inlineFormContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -5px;
}
.inlineFormWrapper.center .inlineFormContent {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.inlineForm--a .btn,
.inlineForm--a input {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.inlineForm--c .btn,
.inlineForm--c input {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.171);
}
.inlineForm__legal {
  display: none;
  position: absolute;
  top: -11px;
  transform: translateY(-100%);
  background: #fff;
  border-radius: 4px;
  right: 0;
  max-width: 400px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.11);
  font-size: 14px;
  line-height: 19px;
  text-align: left;
}
.inlineForm__legal.show {
  display: block;
}
.inlineForm__legal p {
  margin: 15px 15px 12px;
}
.inlineForm__legal:after {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  border: 8px solid transparent;
  border-top-color: #fff;
  bottom: -15px;
  right: 50px;
}
.inlineForm__accept {
  display: block;
  font-weight: 600;
  padding: 10px 15px;
  margin-top: 8px;
  text-align: center;
  border-top: 1px solid #efefef;
  user-select: none;
}
.inlineForm__accept.error {
  color: #d15353;
}
.inlineForm__accept input {
  margin-right: 8px;
}
.inlineForm .btn,
.inlineForm__input {
  position: relative;
  height: 40px;
  margin: 5px;
}
.inlineForm__input {
  display: inline-block;
  width: 220px;
  min-width: 0;
  z-index: 2;
  border: none;
  padding: 0 12px;
  font-size: 1.1em;
  outline: 0;
  box-shadow: none;
}
.inlineForm__input.error {
  box-shadow: inset 0 0 0 2px #ff470f;
}
.inlineForm--a .inlineForm__input,
.inlineForm--c .inlineForm__input {
  border-radius: 3px;
}
.inlineForm--b .inlineForm__input {
  padding-left: 16px;
  border-radius: 1.4em;
  box-shadow: inset 0 0 0 1px #00001a;
}
.mkd [type="checkbox"],
.mkd hr,
.mkd td,
.mkd th {
  padding: 0;
}
.inlineForm .btn {
  display: block;
  white-space: nowrap;
}
.inlineForm .btn:hover {
  transform: none;
}
@media only screen and (max-width: 700px) {
  .inlineFormContent,
  .inlineFormWrapper,
  .inlineFormWrapper.left,
  .inlineFormWrapper.right {
    align-items: center;
    justify-content: center;
  }
}
.divider svg {
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100vw;
  min-width: 800px;
}
.divider--over {
  z-index: 5;
}
.divider--curve svg {
  transform: translateX(-50%);
  left: 50%;
}
.section--cta .wr {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mkd hr:after,
.mkd hr:before,
.mkd:after,
.mkd:before {
  display: table;
  content: "";
}
.section--center.section--cta .wr {
  flex-direction: column;
}
.cta__titles .section__title {
  margin-top: 0;
}
.section--center .cta__titles {
  margin-bottom: 20px;
}
.section--left .cta__titles * {
  text-align: left;
}
.cta__titles .section__subtitle {
  margin-bottom: 0;
}
.cta__ctas {
  margin-left: 60px;
}
.section--center .cta__ctas {
  margin-left: 0;
}
.cta__ctas .btn {
  margin: 10px 0 10px 30px;
}
.cta__ctas .btn:first-child {
  margin-left: 0;
}
@media only screen and (max-width: 700px) {
  .section--cta .wr {
    flex-direction: column;
    justify-content: center;
  }
  .cta__titles {
    margin-bottom: 20px;
  }
  .cta__titles .titleIcon {
    margin: 0 auto 20px;
  }
  .cta__titles .section__subtitle,
  .cta__titles .section__title {
    text-align: center;
  }
  .cta__ctas {
    margin-left: 0;
  }
}
.textBody {
  font-size: 1.2em;
}
.textBody--center {
  text-align: center;
}
.mkd {
  line-height: 1.5;
  word-wrap: break-word;
}
.mkd a {
  background-color: transparent;
  color: inherit;
}
.mkd a:active,
.mkd a:hover {
  outline-width: 0;
}
.mkd h1 {
  margin: 0.67em 0;
}
.mkd img {
  border-style: none;
}
.mkd hr {
  box-sizing: content-box;
}
.mkd input {
  font: inherit;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.mkd dl dt,
.mkd strong,
.mkd table th {
  font-weight: 600;
}
.mkd *,
.mkd [type="checkbox"] {
  box-sizing: border-box;
}
.mkd hr:after {
  clear: both;
}
.mkd blockquote {
  margin: 0;
}
.mkd ol ol,
.mkd ul ol {
  list-style-type: lower-roman;
}
.mkd ol ol ol,
.mkd ol ul ol,
.mkd ul ol ol,
.mkd ul ul ol {
  list-style-type: lower-alpha;
}
.mkd dd {
  margin-left: 0;
}
.mkd code,
.mkd pre {
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace;
}
.mkd:after {
  clear: both;
}
.mkd > :first-child {
  margin-top: 0 !important;
}
.mkd > :last-child {
  margin-bottom: 0 !important;
}
.mkd a:not([href]) {
  color: inherit;
  text-decoration: none;
}
.mkd blockquote,
.mkd dl,
.mkd ol,
.mkd p,
.mkd pre,
.mkd table,
.mkd ul {
  margin-top: 0;
  margin-bottom: 16px;
}
.mkd hr {
  overflow: hidden;
  background: 0 0;
  height: 0.25em;
  margin: 24px 0;
  border: 0;
}
.mkd.textBody--dark hr {
  background-color: #00004d;
  border-bottom-color: #00004d;
}
.mkd.textBody--light hr {
  background-color: #ffff4d;
  border-bottom-color: #ffff4d;
}
.mkd blockquote {
  padding: 0 1em;
  border-left: 0.25em solid;
  opacity: 0.8;
}
.mkd blockquote > :first-child {
  margin-top: 0;
}
.mkd blockquote > :last-child {
  margin-bottom: 0;
}
.mkd h1,
.mkd h2,
.mkd h3,
.mkd h4,
.mkd h5,
.mkd h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}
.mkd h1 {
  font-size: 2em;
}
.mkd h1,
.mkd h2 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid;
}
.mkd h2 {
  font-size: 1.5em;
}
.mkd h3 {
  font-size: 1.25em;
}
.mkd h4 {
  font-size: 1em;
}
.mkd h5 {
  font-size: 0.875em;
}
.mkd h6 {
  font-size: 0.85em;
  color: #6a737d;
}
.mkd ol,
.mkd ul {
  padding-left: 2em;
}
.mkd ol ol,
.mkd ol ul,
.mkd ul ol,
.mkd ul ul {
  margin-top: 0;
  margin-bottom: 0;
}
.mkd li {
  word-wrap: break-all;
}
.mkd li > p {
  margin-top: 16px;
}
.mkd li + li {
  margin-top: 0.25em;
}
.mkd dl {
  padding: 0;
}
.mkd dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
}
.mkd dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}
.mkd table {
  border-spacing: 0;
  display: block;
  width: 100%;
  overflow: auto;
}
.mkd table td,
.mkd table th {
  padding: 6px 13px;
  border: 1px solid;
}
.mkd table tr {
  background-color: transparent;
  border-top: 1px solid #c6cbd1;
}
.mkd img {
  max-width: 100%;
  box-sizing: content-box;
  background-color: #fff;
}
.mkd img[align="right"] {
  padding-left: 20px;
}
.mkd img[align="left"] {
  padding-right: 20px;
}
.mkd code {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
}
.mkd.textBody--dark pre {
  background-color: hsla(0, 0%, 89%, 0.4);
}
.mkd.textBody--light pre {
  background-color: #00001a;
}
.mkd pre > code {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: 0 0;
  border: 0;
}
.mkd pre {
  word-wrap: normal;
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}
.mkd pre code {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}
.mkd kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace;
  line-height: 10px;
  color: #444d56;
  vertical-align: middle;
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-bottom-color: #c6cbd1;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #c6cbd1;
}
.mkd :checked + .radio-label {
  position: relative;
  z-index: 1;
  border-color: #0366d6;
}
.mkd .task-list-item {
  list-style-type: none;
}
.mkd .task-list-item + .task-list-item {
  margin-top: 3px;
}
.mkd .task-list-item input {
  margin: 0 0.2em 0.25em -1.6em;
  vertical-align: middle;
}
.mkd hr {
  border-bottom-color: #eee;
}
.tooltip {
  position: relative;
}
.tooltip:after {
  content: attr(data-tooltip);
  top: -10px;
  width: 200px;
  font-size: 14px;
  background: #343538;
  color: #fff;
  padding: 8px;
  border-radius: 5px;
  line-height: 18px;
}
.tooltip:after,
.tooltip:before {
  left: 50%;
  position: absolute;
  transform: translate(-50%, -100%);
  display: none;
  pointer-events: none;
}
.tooltip:before {
  content: "";
  top: 0;
  margin-left: 2px;
  height: 0;
  width: 0;
  border: 6px solid transparent;
  border-top-color: #343538;
}
.tooltip:hover:after,
.tooltip:hover:before {
  display: block;
}
.tooltip--right:before {
  top: 50%;
  margin-left: 10px;
  margin-top: 2px;
  left: 0;
  transform: translate(100%, -50%);
  border-top-color: transparent;
  border-right-color: #343538;
}
.tooltip--right:after {
  top: 50%;
  left: 100%;
  margin-left: 10px;
  transform: translateY(-50%);
}
.appStores {
  margin: 10px -10px 0;
}
.appStores img {
  border: none;
  display: inline-block;
  margin: 0 10px 10px;
  height: 52px;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -30px;
}
.galleryItem {
  background: #fff;
  margin: 0 15px 30px;
  overflow: hidden;
  min-width: 280px;
}
.galleryItem a {
  text-decoration: none;
  color: inherit;
}
.galleryItem img {
  width: 100%;
  height: 100%;
}
.gallery__meta {
  padding: 20px;
}
.galleryItem h3 {
  margin: 0 0 10px;
  font-size: 1.4em;
}
.gallery__description {
  font-size: 1.24em;
}
.gallery__description p {
  margin: 0;
}
</style>
