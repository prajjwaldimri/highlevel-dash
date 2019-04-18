<template>
  <div class="hl_page-creator--row">
    <div class="hl_page-creator--actions" v-if="elements != null">
      <div class="move-actions">
        <span data-tooltip="tooltip" data-placement="top" title="Up"
          ><i class="icon icon-arrow-up-2"></i
        ></span>
        <span data-tooltip="tooltip" data-placement="top" title="Down"
          ><i class="icon icon-arrow-down-2"></i
        ></span>
      </div>
      <div class="more-actions">
        <span data-tooltip="tooltip" data-placement="top" title="Settings"
          ><i class="fas fa-cog"></i
        ></span>
        <span data-tooltip="tooltip" data-placement="top" title="Clone"
          ><i class="far fa-eye"></i
        ></span>
        <span data-tooltip="tooltip" data-placement="top" title="Save"
          ><i class="far fa-copy"></i
        ></span>
        <span data-tooltip="tooltip" data-placement="top" title="Delete"
          ><i class="far fa-trash-alt"></i
        ></span>
      </div>
    </div>
    <div href="#" class="new-row-blank" v-else>
      <span class="btn btn-light5 btn-slim" @click="addRow">Add New Row</span>
    </div>
    <span class="add-new-row" data-tooltip="tooltip" data-placement="bottom" title="Add New Row"
      ><i class="icon icon-plus"></i
    ></span>
    <component v-for="element in elements" :is="element.component" :key="element"></component>
  </div>
</template>

<script>
import Heading from "./Heading.vue";
import Image from "./Image.vue";

export default {
  data() {
    return {
      elements: []
    };
  },
  mounted() {
    this.$root.$on("addHeading", () => {
      this.addHeading();
    });
    this.$root.$on("addImage", () => {
      this.addImage();
    });
  },
  methods: {
    addRow() {
      this.$parent.$emit("addRow");
    },
    addHeading() {
      this.elements.push({ name: "Heading", component: Heading });
    },
    addImage() {
      this.elements.push({ name: "Image", component: Image });
    }
  }
};
</script>
