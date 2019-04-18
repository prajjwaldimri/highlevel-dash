<template>
  <!-- <span
      class="add-new-section"
      data-tooltip="tooltip"
      data-placement="bottom"
      title="Add New Section"
      ><i class="icon icon-plus"></i
    ></span> -->
  <div href="#" class="new-row-blank">
    <span class="btn btn-light5 btn-slim" @click="addRow">Add New Row</span>
  </div>
</template>

<script>
export default {
  methods: {
    addRow() {
      this.$parent.$emit("addRow");
    }
  }
};
</script>
