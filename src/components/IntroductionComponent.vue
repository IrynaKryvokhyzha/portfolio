<template>
  <section id="home" class="introduction">
    <img
      class="background"
      src="../assets/images/idea.jpeg"
      alt="pines image"
    />
    <div class="introduction__container">
      <div class="content">
        <div class="content-left">
          <my-info class="my-info" />
        </div>
        <div class="content-right">
          <h1 class="header">
            WEB DEVELOPER
          </h1>
          <h2 class="subheader">
            4+ years of experience in development. Proficient in crafting,
            deploying, and optimizing web applications using a diverse tech
            stack including JavaScript, Vue.js, Nuxt.js, and Node.js. Passionate
            about seeking new challenges to continually refine and expand my
            skill set.
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyInfo from "@/components/MyInfo.vue";
export default {
  name: "IntroductionComponent",
  components: {
    MyInfo,
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  position: relative;
  height: 100svh;
  font-family: "Open Sans";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  z-index: -1;
  padding: 30px;
  background-color: rgb(#000814, 0.9);

  @media (max-width: 768px) {
    height: auto;
    min-height: 100%;
  }
  &__container {
  }
}
.background {
  transform: translateZ(-4px) scale(1.9);
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
}

.content {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  min-height: 100%;
  padding-top: 50px;
  z-index: 10;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    padding-top: 30px;
  }
}
.content-left {
  flex: 1 1 40%;
  visibility: hidden;

  @media (max-width: 1330px) {
    flex: 1 1 50%;
  }
  @media (max-width: 768px) {
    visibility: inherit;
  }
}
.content-right {
  flex: 1 1 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1330px) {
    flex: 1 1 50%;
  }
}
.header,
.icon {
  font-weight: 900;

  line-height: 1.5;

  @media (max-width: 460px) {
    font-size: 36px;
  }
  @media (max-width: 325px) {
    font-size: 28px;
  }
}
.header {
  font-size: 48px;
  text-align: center;
  font-family: "Coming Soon";
  color: #ffc300;
  letter-spacing: 5px;
  @media (max-width: 768px) {
    font-size: 34px;
  }
}
.subheader {
  font-size: 24px;
  line-height: 1.5;
  flex: 1 1 auto;
  color: white;
  flex-grow: 1;
  padding-bottom: 5rem;
}
</style>
