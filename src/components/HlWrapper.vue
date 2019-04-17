<template>
  <section class="hl_wrapper nav-shrink d-flex">
    <section
      class="hl_wrapper--inner page-creator"
      id="page-creator"
    >
      <PageCreatorMain></PageCreatorMain>
      <!-- END of .hl_page-creator--main -->

      <PageCreatorSettings></PageCreatorSettings>
      <!-- END of .hl_page-creator--settings-group -->

      <PageCreatorSections></PageCreatorSections>
      <!-- END of .hl_page-creator--sections-group -->

      <PageCreatorRows></PageCreatorRows>
      <!-- END of .hl_page-creator--rows-group -->

      <PageCreatorColumns></PageCreatorColumns>
      <!-- END of .hl_page-creator--columns-group -->

      <PageCreatorElement></PageCreatorElement>

      <!-- END of .hl_page-creator--element-group -->
    </section>
    <!-- END of .form-builder -->
  </section>
</template>

<script>
import PageCreatorMain from "./PageCreator/PageCreatorMain.vue";
import PageCreatorSettings from "./PageCreator/PageCreatorSettings.vue";
import PageCreatorSections from "./PageCreator/PageCreatorSections.vue";
import PageCreatorRows from "./PageCreator/PageCreatorRows.vue";
import PageCreatorColumns from "./PageCreator/PageCreatorColumns.vue";
import PageCreatorElement from "./PageCreator/PageCreatorElement.vue";

export default {
  components: {
    PageCreatorMain,
    PageCreatorSettings,
    PageCreatorSections,
    PageCreatorRows,
    PageCreatorColumns,
    PageCreatorElement
  }
};
</script>

