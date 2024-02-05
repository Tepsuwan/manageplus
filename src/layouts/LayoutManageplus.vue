<template>
  <HeaderComponent />

  <div class=" min-h-screen transition-position">
    <div class=" xl:max-w-7xl xl:mx-auto pb-20">
      <slot />
    </div>
  </div>

  <FooterComponent />
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "LayoutManageplus",

  components: {
    HeaderComponent,
    FooterComponent,
  },

  setup() {
    return {};
  },
};
</script>

<style></style>
