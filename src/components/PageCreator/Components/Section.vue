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

    <Row v-for="(row, index) in rows" :key="index" :name="row.name"></Row>

    <!-- <component v-for="element in elements" :is="element.component" :key="element.order"></component> -->
  </section>
</template>

<script>
import Row from "./Row.vue";
export default {
  components: {
    Row
  },
  data: function() {
    return {
      rowCounter: 0,
      rows: [{ name: "Row 0" }]
    };
  },
  mounted() {
    this.$root.$on("addRow", this.addRow);
  },

  methods: {
    addRow(rowCount) {
      this.rowCounter += 1;
      this.rows.splice(rowCount + 1, 0, {
        name: `Row ${this.rowCounter}`
      });
    }
  }
};
</script>
