import { UserSession, AppConfig } from "@stacks/auth";
import { Storage } from "@stacks/storage";

const scopes = ["store_write", "publish_data"];
const appConfig = new AppConfig(scopes);
const userSession = new UserSession({ appConfig: appConfig });
const storage = new Storage({ userSession });

// const signIn = function () {
//   const authOptions = {
//     manifestPath: '/manifest.json',
//     userSession: userSession,
//     onFinish: async ({userSession}) => {
//       await this.initAccount(userSession);
//     },
//     appDetails: {
//       name: 'Boom',
//       icon: `${location.origin}/icons/icon-128x128.png`,
//     },
//   };
//   showConnect(authOptions);
// };
export default ({ router, store }) => {
  router.beforeEach(async (to, from, next) => {
    if (to.matched.some((page) => page.meta.requiresAuth === true)) {
      try {
        if (!userSession.isUserSignedIn()) {
          // init app if user is not authenticated
          next({ name: "Login" });
        } else {
          if (!store.state.app.user) {
            await store.dispatch("app/setUser", userSession);
          }
          next();
        }
      } catch (e) {
        next({ name: "Login" });
      }
    } else {
      next();
    }
  });
};

export { userSession, storage };
