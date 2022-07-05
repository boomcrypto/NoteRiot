<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page>
        <div class="landing-bg-1">
          <div class="header-content-landing">
            <div class="mobile-logo"></div>
            <div class="header-content-left-landing">
              <img
                src="/images/noteriot-round-wordmark.svg"
                alt
                class="logo-wordmark"
              />
            </div>
            <div class="header-content-right">
              <a href="#features" class="header-anchor-link">Features</a>
              <a href="#faqs" class="header-anchor-link">FAQs</a>
              <a href="#connect" class="header-anchor-link">Connect</a>
              <a href="#" class="sign-in-blockstack-button w-inline-block">
                <div class="sign-in-blockstack-text-nav" @click="signIn">
                  Get Started
                </div>
              </a>
            </div>
          </div>
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
        <div id="scroll-section" class="scroll-section">
          <a href="#scroll-section" class="w-inline-block">
            <div
              data-w-id="8cb33f84-b48c-5cef-c9dd-bc1400178c17"
              style="opacity: 1"
              class="scroll-arrow"
            ></div>
          </a>
        </div>
        <div id="travel" class="travel-section">
          <div class="travel-block">
            <img src="/images/travel.svg" alt class="travel-image" />
            <div class="travel-copy">
              <div class="feature-headline">Ideas that travel.</div>
              <div class="feature-body _480">
                Access your notes from desktop or mobile devices (coming soon).
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="security-section">
          <div class="security-block">
            <div class="secruity-copy">
              <div class="feature-headline white">Security baked in.</div>
              <div class="feature-body white">
                NoteRiot leverages
                <span class="white-body-link">Stacks'</span>
                privacy-enabling platform. Every note you take gets encrypted on
                your computer and saved to your own private cloud storage. Only
                you have access.
                <br />
              </div>
            </div>
            <img src="/images/security-4.svg" alt class="security-image" />
          </div>
        </div>
        <div class="features-section">
          <div id="features" class="features-block">
            <div class="features-copy">
              <div class="feature-headline">Features</div>
            </div>
            <div class="w-layout-grid features-grid">
              <div class="popular-feature-block">
                <img
                  src="/images/distraction-free.svg"
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
                <img src="/images/pins-faves.svg" alt class="pin-image" />
                <div class="features-copy-block">
                  <div class="features-title">Pins and Favorites</div>
                  <div class="features-body">
                    Access your most important notes, or rediscover your old
                    favorites in a flash.
                  </div>
                </div>
              </div>
              <div class="popular-feature-block">
                <img src="/images/tags-colors.svg" alt class="tags-image" />
                <div class="features-copy-block">
                  <div class="features-title">Tags and Colors</div>
                  <div class="features-body">
                    Keep your notes organized by labeling them with common tags
                    or colors.
                  </div>
                </div>
              </div>
              <div class="popular-feature-block">
                <img src="/images/autosave.svg" alt class="autosave-image" />
                <div class="features-copy-block">
                  <div class="features-title">Auto-save</div>
                  <div class="features-body">
                    No need to stop and save your work. We're saving it for you
                    as you work.
                  </div>
                </div>
              </div>
              <div class="popular-feature-block">
                <img
                  src="/images/searchable.svg"
                  alt
                  class="searchable-image"
                />
                <div class="features-copy-block">
                  <div class="features-title">Searchable</div>
                  <div class="features-body">
                    Find that one note that had that one thing you said that one
                    time….
                  </div>
                </div>
              </div>
              <div class="popular-feature-block">
                <img src="/images/import-keep.svg" alt class="keep-image" />
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
        <div class="ready-section">
          <div class="ready-block">
            <div class="ready-copy">
              <div class="feature-headline white removed-bottom-padding">
                Ready to get started?
              </div>
            </div>
            <div class="ready-sign-in">
              <a href="#" class="sign-in-blockstack-button-2 w-inline-block">
                <div class="sign-in-blockstack-text" @click="signIn">
                  Get Started
                </div>
              </a>
              <div class="circle-thing"></div>
            </div>
          </div>
        </div>
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
                  Social media companies provide you with a free account so they
                  can sell your information. YOU are the product.
                  <br />‍<br />Stacks is different. With Stacks, you control
                  your identity. With the right apps, like NoteRiot, you control
                  your data. The developers of Stacks and NoteRiot never have
                  access to your data, or what you do with it.
                </div>
              </div>
              <div class="faqs-grid-block">
                <div class="faqs-title">Define “Strong encryption”</div>
                <div class="faqs-body">
                  NoteRiot uses the Stacks platform functions for Bitcoin level
                  encryption of your data.
                  <br /><br />As with any critical data, don't trust. Verify.
                  <br /><br />
                  Our code is on
                  <a href="https://gitlab.org/riot.ai/NoteRiot">Gitlab</a>
                  <span class="material-icons"> arrow_outward </span> and the
                  Stacks code is on<br />
                  <a href="https://github.com/hirosystems/stacks.js">Github</a>.

                  <span class="material-icons"> arrow_outward </span>
                </div>
              </div>
              <div class="faqs-grid-block">
                <div class="faqs-title">What is Stacks?</div>
                <div class="faqs-body">
                  Stacks is a new Internet for applications that put the user
                  first. The best Stacks apps enable data portability, respect
                  your privacy, and do not need trust in third parties. Find out
                  more at
                  <a href="https://stacks.co/">stacks.co</a>.
                  <span class="material-icons"> arrow_outward </span>
                </div>
              </div>
              <div class="faqs-grid-block">
                <div class="faqs-title">
                  Are there other apps that will utilize my Stacks ID?
                </div>
                <div class="faqs-body">
                  Yes! Here are a few we love:<br />
                  &bull; <a href="https://boom.money">Boom Wallet</a>
                  <span class="material-icons"> arrow_outward </span>
                  is an easy to use wallet and NFT mint platform.<br />
                  &bull; <a href="https://sigle.io">Sigle</a>
                  <span class="material-icons"> arrow_outward </span>
                  is De-centralised and open-source Web 3.0 writing platform<br />
                  <br />
                  Find many more at
                  <a href="https://www.stacks.co/explore/discover-apps"
                    >https://www.stacks.co/explore/discover-apps</a
                  >
                  <span class="material-icons"> arrow_outward </span>
                </div>
              </div>
              <div class="faqs-grid-block">
                <div class="faqs-title">
                  What do you mean by “True user owned data”?
                </div>
                <div class="faqs-body">
                  Some platforms will try to lock you in with proprietary
                  formats or hard to use exports of your data. With NoteRiot,
                  you can export all of your notes in simple markdown format and
                  take them whereever *you* want. We also document the data
                  formats in use directly on out github site, so you can take
                  data directly from your encrypted cloud storage, if you wish.
                </div>
              </div>
            </div>
          </div>
        </div>
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
            </div>
            <div class="copywright-text">
              <div class="text-block-8">© 2019 RunRiot, LLC.</div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import { showConnect } from "@stacks/connect";
import { mapActions } from "vuex";
import { userSession } from "boot/stacks";

export default {
  name: "PageHome",
  data() {
    return {};
  },
  async mounted() {},
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
a:visited {
  color: #fff;
}
a {
  color: #fff;
}
</style>
