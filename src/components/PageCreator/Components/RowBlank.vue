<template>
  <div class="hl_page-creator--column">
    <div href="#" class="new-element-blank">
      <span class="btn btn-light6 btn-slim">Add New Element</span>
    </div>
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
