import { createStore } from "vuex";

export default createStore({
  state: {
    productsList: [
      {
        id: 1,
        title: "TENT-SERVICE",
        description:
          "A clean and informative website for a Ukrainian company specializing in custom PVC tarpaulin products and repair services.",
        technologies:
          "Nuxt3 Vue3 HTML CSS JavaScript Pinia Vuetify Leaflet i18n SEO OpenAI API",
        //github: "https://github.com/IrynaKryvokhyzha/handcrafted-purses",
        link: "https://tent-service.cv.ua/en",
        image: require("@/assets/images/tent-service.png"),
      },
      {
        id: 2,
        title: "Handcrafted Purses",
        description:
          "A sleek and responsive website designed for business to showcase their services, attract customers, and generate leads.",
        technologies:
          "HTML CSS3 VanillaJS Node.js Express.js MongoDB EJS JWT / Passport.js Multer",
        github: "https://github.com/IrynaKryvokhyzha/handcrafted-purses",
        link: "https://funny-sunburst-7036fc.netlify.app",
        image: require("@/assets/images/purses.webp"),
      },
      {
        id: 3,
        title: "Bean Scene",
        description:
          "A stylish and user-friendly coffee shop website designed to create an inviting digital experience for coffee lovers.",
        github: "https://github.com/IrynaKryvokhyzha/Bean-Scene",
        technologies:
          "HTML CSS3 VueJS Vuex Vue Router Vuetify oAuth Firebase Firestore",
        link: "https://bean-scene.com",
        image: require("@/assets/images/bean.webp"),
      },
      {
        id: 4,
        title: "Drum Kit",
        description:
          "A fun and interactive web-based game that allows users to play virtual drums using their keyboard or mouse. ",
        github: "https://irynakryvokhyzha.github.io/Drum-kit/",
        technologies: "HTML CSS3 JavaScript",
        link: "https://irynakryvokhyzha.github.io/Drum-kit/",
        image: require("@/assets/images/drum-image.jpg"),
      },
      {
        id: 5,
        title: "Dice",
        description:
          "Dice Game is a simple yet engaging web-based game where users roll virtual dice to test their luck. Designed as a quick and interactive experience in learning basic JavaScript interactivity",
        github: "https://github.com/IrynaKryvokhyzha/Dice_Game",
        technologies: "HTML CSS3 JavaScript",
        link: "https://irynakryvokhyzha.github.io/Dice_Game/",
        image: require("@/assets/images/dice-image.jpg"),
      },
    ],
  },
  getters: {
    getProductsList: ({ productsList }) => productsList,
  },
  mutations: {},
  actions: {},
  modules: {},
});
