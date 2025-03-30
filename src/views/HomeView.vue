<template>
  <MainMasterPage>
    <div class="home">
      <introduction-component id="home" />
      <!-- Lazy-loaded components -->
      <Suspense>
        <template #default>
          <AboutComponent />
        </template>
        <template #fallback>
          <div>Loading About...</div>
        </template>
      </Suspense>

      <Suspense>
        <template #default>
          <PortfolioComponent />
        </template>
        <template #fallback>
          <div>Loading Portfolio...</div>
        </template>
      </Suspense>

      <Suspense>
        <template #default>
          <ContactComponent />
        </template>
        <template #fallback>
          <div>Loading Contact...</div>
        </template>
      </Suspense>
    </div>
  </MainMasterPage>
</template>

<script>
import { defineAsyncComponent } from "vue";
import IntroductionComponent from "../components/IntroductionComponent.vue";
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
// Lazy-load these components
const AboutComponent = defineAsyncComponent(() =>
  import("@/components/AboutComponent.vue")
);
const PortfolioComponent = defineAsyncComponent(() =>
  import("@/components/PortfolioComponent.vue")
);
const ContactComponent = defineAsyncComponent(() =>
  import("@/components/ContactComponent.vue")
);

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
