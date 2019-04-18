<template>
  <section class="hl_page-creator--section">
    <div class="hl_page-creator--actions">
      <div class="move-actions">
        <span data-tooltip="tooltip" data-placement="right" title="Up"
          ><i class="icon icon-arrow-up-2"></i
        ></span>
        <span data-tooltip="tooltip" data-placement="right" title="Down"
          ><i class="icon icon-arrow-down-2"></i
        ></span>
      </div>
      <div class="more-actions">
        <span data-tooltip="tooltip" data-placement="left" title="Settings"
          ><i class="fas fa-cog"></i
        ></span>
        <span data-tooltip="tooltip" data-placement="left" title="Clone"
          ><i class="far fa-eye"></i
        ></span>
        <span data-tooltip="tooltip" data-placement="left" title="Save"
          ><i class="far fa-copy"></i
        ></span>
        <span data-tooltip="tooltip" data-placement="left" title="Delete"
          ><i class="far fa-trash-alt"></i
        ></span>
      </div>
    </div>

    <component v-for="element in elements" :is="element.component" :key="element"></component>
  </section>
</template>

<script>
export default {
  props: ["elements"]
};
</script>
