<template>
  <q-carousel
    v-model="slide"
    ref="carousel"
    swipeable
    animated
    :fullscreen.sync="$q.screen.xs"
    padding
    arrows
    height="100%"
    class="bg-primary text-white rounded-borders"
  >
    <q-carousel-slide name="splash" class="column no-wrap flex-center">
      <div class="landing-bg-1">
        <div class="feature-block">
          <div class="feature-copy">
            <div class="feature-body">
              <object
                data="/img/loader-light.svg"
                type="image/svg+xml"
              ></object>
            </div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="feature" class="column no-wrap flex-center">
      <div class="landing-bg-1">
        <div class="feature-block">
          <div class="feature-copy">
            <div class="feature-headline bigger">Gather your thoughts.</div>
            <div class="feature-body">
              Capture notes wherever you go.
              <br />Simple, organized, and secure.
              <br />
            </div>
          </div>
          <div class="feature-screens">
            <div class="feature-screens-mobile"></div>
            <div class="feature-screens-desktop">
              <div class="feature-screens-desktop-image"></div>
            </div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="travel" class="column no-wrap flex-center">
      <div id="travel" class="travel-section">
        <div class="travel-block">
          <img src="/img/travel.svg" alt class="travel-image" />
          <div class="travel-copy">
            <div class="feature-headline">Ideas that travel.</div>
            <div class="feature-body _480">
              Access your notes from desktop or mobile devices.
              <br />
            </div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="security" class="column no-wrap flex-center">
      <div class="security-section">
        <div class="security-block">
          <div class="secruity-copy">
            <div class="feature-headline white">Security baked in.</div>
            <div class="feature-body white">
              NoteRiot leverages
              <span class="white-body-link">Blockstack's</span>
              privacy-enabling platform. Every note you take get encrypted on
              your computer and saved to your own private cloud storage.
              <br />
            </div>
          </div>
          <img src="/img/security-4.svg" alt class="security-image" />
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="feature2" class="column no-wrap flex-center">
      <div class="features-section">
        <div id="features" class="features-block">
          <div class="features-copy">
            <div class="feature-headline">Features</div>
          </div>
          <div class="w-layout-grid features-grid">
            <div class="popular-feature-block">
              <img
                src="/img/distraction-free.svg"
                alt
                class="distraction-free-image"
              />
              <div class="features-copy-block">
                <div class="features-title">Distraction-free Writing</div>
                <div class="features-body">
                  Expand your editor to full screen so that you can focus on
                  your writing, with fewer distractions.
                </div>
              </div>
            </div>
            <div class="popular-feature-block">
              <img src="/img/pins-faves.svg" alt class="pin-image" />
              <div class="features-copy-block">
                <div class="features-title">Pins and Favorites</div>
                <div class="features-body">
                  Access your most important notes, or rediscover your old
                  favorites in a flash.
                </div>
              </div>
            </div>
            <div class="popular-feature-block">
              <img src="/img/tags-colors.svg" alt class="tags-image" />
              <div class="features-copy-block">
                <div class="features-title">Tags and Colors</div>
                <div class="features-body">
                  Keep your notes organized by labeling them with common tags or
                  colors.
                </div>
              </div>
            </div>
            <div class="popular-feature-block">
              <img src="/img/autosave.svg" alt class="autosave-image" />
              <div class="features-copy-block">
                <div class="features-title">Auto-save</div>
                <div class="features-body">
                  No need to stop and save your work. We're saving it for you as
                  you work.
                </div>
              </div>
            </div>
            <div class="popular-feature-block">
              <img src="/img/searchable.svg" alt class="searchable-image" />
              <div class="features-copy-block">
                <div class="features-title">Searchable</div>
                <div class="features-body">
                  Find that one note that had that one thing you said that one
                  time….
                </div>
              </div>
            </div>
            <div class="popular-feature-block">
              <img src="/img/import-keep.svg" alt class="keep-image" />
              <div class="features-copy-block">
                <div class="features-title">Import from Google Keep</div>
                <div class="features-body">
                  Jump-start your transition to a platform that respects your
                  data and privacy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="faqs" class="column no-wrap flex-center">
      <div id="faqs" class="faqs-section">
        <div class="faqs-block">
          <div class="faqs-copy">
            <div id="faqs" class="feature-headline white">FAQs</div>
          </div>
          <div class="w-layout-grid faqs-grid">
            <div class="faqs-grid-block">
              <div class="faqs-title">
                Why not Login with Facebook or Google? Or my email?
              </div>
              <div class="faqs-body">
                Most social media companies provide you with a free account so
                they can sell your information. You are the product.
                <br />‍<br />Blockstack is different. With Blockstack, you
                control your identity. With the right apps, like NoteRiot, you
                control your data. Neither Blockstack nor the makers of NoteRiot
                have access to your id, your data, or what you do with them.
              </div>
            </div>
            <div class="faqs-grid-block">
              <div class="faqs-title">Define “Strong encryption”</div>
              <div class="faqs-body">
                NoteRiot uses Blockstack's platform functions for Bitcoin level
                encryption of your data.
                <br /><br />
                This works the same for any properly-built Blockstack
                application. Our code is on GitLab (see links below) and the
                Blockstack code is on GitHub. As with any critical data, don't
                trust. Verify.
              </div>
            </div>
            <div class="faqs-grid-block">
              <div class="faqs-title">What is Blockstack?</div>
              <div class="faqs-body">
                Blockstack is a new Internet for applications that put the user
                first. The best Blockstack apps enable data portability, respect
                your privacy, and do not need trust in third parties. Find out
                more at https://blockstack.org/about
              </div>
            </div>
            <div class="faqs-grid-block">
              <div class="faqs-title">
                Are there other apps that will utilize my Blockstack ID?
              </div>
              <div class="faqs-body">
                Yes! Here are a few we love:<br />
                &bull;Mumble is great for secure messaging.<br />
                &bull;XOR Drive is an easy to use, encrypted, cloud file
                manager!<br />
                <br />
                Find over 300 apps at https://app.co/blockstack.
              </div>
            </div>
            <div class="faqs-grid-block">
              <div class="faqs-title">
                What do you mean by “True user owned data”?
              </div>
              <div class="faqs-body">
                Some platforms will try to lock you in with proprietary formats
                or hard to use exports of your data. With NoteRiot, you can
                export all of your notes in simple markdown format and take them
                whereever *you* want. We also document the data formats in use
                directly on out github site, so you can take data directly from
                your encrypted cloud storage, if you wish.
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="last" class="column no-wrap flex-center">
      <div class="connect-section">
        <div class="connect-block">
          <div class="connect-copy">
            <div
              id="connect"
              class="feature-headline white removed-bottom-padding"
            >
              Connect with us
            </div>
          </div>
        </div>
        <div class="connect-links">
          <div class="connect-links-left">
            <div class="email">
              <div class="email-icon"></div>
              <div class="connect-text-block">
                <a
                  class="connect-text"
                  href="mailto:help@noteriot.ai"
                  style="text-decoration: none"
                  target="_blank"
                  >Email us</a
                >
              </div>
            </div>
            <div class="twitter">
              <div class="twitter-icon"></div>
              <div class="connect-text-block">
                <a
                  class="connect-text"
                  href="https://twitter.com/noteriot"
                  style="text-decoration: none"
                  target="_blank"
                  >Twitter</a
                >
              </div>
            </div>
            <div class="product-hunt">
              <div class="product-hunt-icon"></div>
              <div class="connect-text-block">
                <a
                  class="connect-text"
                  href="https://www.producthunt.com/posts/noteriot"
                  style="text-decoration: none"
                  target="_blank"
                  >Product Hunt</a
                >
              </div>
            </div>
            <div class="gitlab">
              <div class="gitlab-icon"></div>
              <div class="connect-text-block">
                <a
                  class="connect-text"
                  href="https://gitlab.com/riot.ai/NoteRiot"
                  style="text-decoration: none"
                  target="_blank"
                  >GitLab</a
                >
              </div>
            </div>
            <div class="facebook">
              <div class="facebook-icon"></div>
              <div class="connect-text-block">
                <a
                  class="connect-text"
                  href="https://www.facebook.com/noteriotapp/"
                  style="text-decoration: none"
                  target="_blank"
                  >Facebook</a
                >
              </div>
            </div>
          </div>
          <div class="copywright-text">
            <div class="text-block-8">© 2019 RunRiot, LLC.</div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <template v-slot:control>
      <q-carousel-control
        position="bottom-left"
        :offset="[18, 18]"
        class="q-gutter-xs"
      >
        <q-btn
          dense
          color="white"
          text-color="primary"
          label="Skip"
          @click="handleCloseFirstRun"
        />
      </q-carousel-control>
      <q-carousel-control
        position="bottom-right"
        :offset="[18, 18]"
        class="q-gutter-xs"
      >
        <q-btn
          dense
          color="white"
          text-color="primary"
          icon="arrow_left"
          label="Back"
          @click="$refs.carousel.previous()"
        />
        <q-btn
          dense
          color="white"
          text-color="primary"
          icon="arrow_right"
          :label="slide === 'last' ? 'Finish' : 'Next'"
          @click="carouselNext"
        />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script>
export default {
  name: "FirstRun",
  data() {
    return {
      slide: "splash",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
  methods: {
    handleCloseFirstRun() {
      this.$emit("close");
    },
    carouselNext() {
      if (this.slide === "last") {
        this.handleCloseFirstRun();
      } else {
        this.$refs.carousel.next();
      }
    },
  },
};
</script>

<style></style>
