<template>
  <MainMasterPage>
    <div class="home">
      <introduction-component id="home" />
      <about-component />
      <portfolio-component />
      <contact-component />
    </div>
  </MainMasterPage>
</template>

<script>
import AboutComponent from "../components/AboutComponent.vue";
import IntroductionComponent from "../components/IntroductionComponent.vue";
import PortfolioComponent from "../components/PortfolioComponent.vue";
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  name: "HomeView",
  components: {
    IntroductionComponent,
    AboutComponent,
    PortfolioComponent,
    MainMasterPage,
    ContactComponent,
  },
};
</script>
<style>
.home {
}
</style>
