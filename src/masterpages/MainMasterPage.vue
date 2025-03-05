<template>
  <div class="wrapper">
    <nav-component @onScroll="scrollTo" />
    <main class="main">
      <slot></slot>
    </main>
    <my-info class="my-info" />
    <div class="icon-up" @click="scrollTo('home')">
      <font-awesome-icon :icon="['fas', 'angles-up']" />
    </div>
    <footer-component />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import MyInfo from "@/components/MyInfo.vue";

export default {
  name: "MainMasterPage",
  components: {
    NavComponent,
    FooterComponent,
    MyInfo,
  },
  methods: {
    scrollTo(refName) {
      const element = document.getElementById(refName);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
}

.main {
  position: relative;
}

.icon-up {
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: #ffd60a;
  z-index: 999;
  font-size: 48px;
  font-weight: 900;
  text-align: start;
  padding: 10px;
  transition: scale 0.5s ease;
  @media (any-hover: hover) {
    &:hover {
      scale: 2;
    }
  }
}
.my-info {
  position: fixed;
  top: 25%;
  left: 15%;
  color: #ffd60a;
  z-index: 9999;
  padding: 30px;
  @media (max-width: 870px) {
    left: 5%;
  }
  @media (max-width: 768px) {
    visibility: hidden;
  }
}
</style>
