<template>
  <section class="hl_wrapper nav-shrink d-flex">
    <section class="hl_wrapper--inner page-creator" id="page-creator">
      <PageCreatorMain></PageCreatorMain>
      <!-- END of .hl_page-creator--main -->

      <PageCreatorSettings></PageCreatorSettings>
      <!-- END of .hl_page-creator--settings-group -->

      <PageCreatorSectionsMenu></PageCreatorSectionsMenu>
      <!-- END of .hl_page-creator--sections-group -->

      <PageCreatorRowsMenu></PageCreatorRowsMenu>
      <!-- END of .hl_page-creator--rows-group -->

      <PageCreatorColumnsMenu> </PageCreatorColumnsMenu>
      <!-- END of .hl_page-creator--columns-group -->

      <PageCreatorElementMenu> </PageCreatorElementMenu>

      <!-- END of .hl_page-creator--element-group -->
    </section>
    <!-- END of .form-builder -->
  </section>
</template>

<script>
import PageCreatorMain from "./PageCreator/PageCreatorMain.vue";
import PageCreatorSettings from "./PageCreator/PageCreatorSettings.vue";
import PageCreatorSectionsMenu from "./PageCreator/PageCreatorSectionsMenu.vue";
import PageCreatorRowsMenu from "./PageCreator/PageCreatorRowsMenu.vue";
import PageCreatorColumnsMenu from "./PageCreator/PageCreatorColumnsMenu.vue";
import PageCreatorElementMenu from "./PageCreator/PageCreatorElementMenu.vue";

export default {
  components: {
    PageCreatorMain,
    PageCreatorSettings,
    PageCreatorSectionsMenu,
    PageCreatorRowsMenu,
    PageCreatorColumnsMenu,
    PageCreatorElementMenu
  }
};
</script>
