module.exports = {
  lintOnSave: false,
  pwa: {
    manifestOptions: {
      icons: [
        {
          src: "./android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    iconPaths: {
      favicon16: "./favicon-16x16.png",
      favicon32: "./favicon-32x32.png",
      favicon64: "./favicon.ico",
      appleTouchIcon: "./apple-touch-icon.png",

      maskIcon: [
        {
          src: "./favicon.ico",
          background_color: "#fff",
        },
      ],
      msTileImage: "./mstile-150x150.png",
    },
  },
};
