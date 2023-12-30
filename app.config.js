module.exports = {
  expo: {
    name: "ecoloop",
    slug: "ecoloop",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.ecoloop.app",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.ecoloop.app",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    expo: {
      plugins: [
        [
          "expo-location",
          {
            locationAlwaysAndWhenInUsePermission:
              "Laissez $(PRODUCT_NAME), nous utiliserons vos données afin de vous localiser.",
          },
        ],
      ],
      firebase: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID_FIREBASE,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID,
      },
    },
  },
};
