<template>
  <section class="hl_page-creator--section">
    <div class="hl_page-creator--actions">
      <div class="move-actions">
        <span
          data-tooltip="tooltip"
          data-placement="right"
          title="Up"
        ><i class="icon icon-arrow-up-2"></i></span>
        <span
          data-tooltip="tooltip"
          data-placement="right"
          title="Down"
        ><i class="icon icon-arrow-down-2"></i></span>
      </div>
      <div class="more-actions">
        <span
          data-tooltip="tooltip"
          data-placement="left"
          title="Settings"
        ><i class="fas fa-cog"></i></span>
        <span
          data-tooltip="tooltip"
          data-placement="left"
          title="Clone"
        ><i class="far fa-eye"></i></span>
        <span
          data-tooltip="tooltip"
          data-placement="left"
          title="Save"
        ><i class="far fa-copy"></i></span>
        <span
          data-tooltip="tooltip"
          data-placement="left"
          title="Delete"
        ><i class="far fa-trash-alt"></i></span>
      </div>
    </div>

    <Row
      v-for="(row, index) in rows"
      :key="index"
      :name="row.name"
      :elementsData="row.children"
    ></Row>

    <!-- <component v-for="element in elements" :is="element.component" :key="element.order"></component> -->
  </section>
</template>

<script>
import Row from "./Row.vue";
import Heading from "./Heading.vue";

export default {
  components: {
    Row
  },
  data: function() {
    return {
      rowCounter: 0,
      rows: [{ name: "Row 0", children: [] }],
      emptyArray: []
    };
  },
  mounted() {
    this.$root.$on("addRow", this.addRow);
    this.$root.$on("addHeading", this.addChildToRow);
    this.$root.$on("addImage", this.addChildToRow);
  },

  methods: {
    showRowMenu() {
      document.querySelector("#page-creator").classList.add("--menu-active");
      document
        .querySelector(".hl_page-creator--rows-group")
        .classList.add("active");
      document.querySelector("#add-row").classList.add("active");
      document.querySelector("#add-row").classList.add("show");
    },
    hideRowMenu() {
      document.querySelector("#page-creator").classList.remove("--menu-active");
      document
        .querySelector(".hl_page-creator--rows-group")
        .classList.remove("active");
      document.querySelector("#add-row").classList.remove("active");
      document.querySelector("#add-row").classList.remove("show");
    },
    addRow(rowCount) {
      this.showRowMenu();

      const addOneColumnRow = () => {
        this.rowCounter += 1;
        this.rows.splice(rowCount + 1, 0, {
          name: `Row ${this.rowCounter}`,
          children: []
        });
        this.hideRowMenu();
        document
          .querySelector("#one-column-row")
          .removeEventListener("click", addOneColumnRow, false);
        document
          .querySelector("#two-column-row")
          .removeEventListener("click", addTwoColumnRow, false);
        document
          .querySelector("#three-column-row")
          .removeEventListener("click", addThreeColumnRow, false);
      };

      const addTwoColumnRow = () => {
        this.rowCounter += 1;
        this.rows.splice(rowCount + 1, 0, {
          name: `Row ${this.rowCounter}`,
          children: [
            {
              name: "Heading",
              component: Heading
            },
            {
              name: "Heading",
              component: Heading
            }
          ]
        });
        document
          .querySelector("#one-column-row")
          .removeEventListener("click", addOneColumnRow, false);
        document
          .querySelector("#two-column-row")
          .removeEventListener("click", addTwoColumnRow, false);
        document
          .querySelector("#three-column-row")
          .removeEventListener("click", addThreeColumnRow, false);
        this.hideRowMenu();
      };

      const addThreeColumnRow = () => {
        this.rowCounter += 1;
        this.rows.splice(rowCount + 1, 0, {
          name: `Row ${this.rowCounter}`,
          children: [
            {
              name: "Heading",
              component: Heading
            },
            {
              name: "Heading",
              component: Heading
            },
            {
              name: "Heading",
              component: Heading
            }
          ]
        });
        document
          .querySelector("#one-column-row")
          .removeEventListener("click", addOneColumnRow, false);
        document
          .querySelector("#two-column-row")
          .removeEventListener("click", addTwoColumnRow, false);
        document
          .querySelector("#three-column-row")
          .removeEventListener("click", addThreeColumnRow, false);

        this.hideRowMenu();
      };

      document
        .querySelector("#one-column-row")
        .addEventListener("click", addOneColumnRow, false);

      document
        .querySelector("#two-column-row")
        .addEventListener("click", addTwoColumnRow, false);

      document
        .querySelector("#close-element-group")
        .addEventListener("click", () => {
          document
            .querySelector("#one-column-row")
            .removeEventListener("click", addOneColumnRow, false);
          document
            .querySelector("#two-column-row")
            .removeEventListener("click", addTwoColumnRow, false);
          document
            .querySelector("#three-column-row")
            .removeEventListener("click", addThreeColumnRow, false);
        });

      document
        .querySelector("#three-column-row")
        .addEventListener("click", addThreeColumnRow, false);
    },
    addChildToRow(rowCount, element) {
      this.rows.splice(rowCount, 1, {
        name: `Row ${this.rows[rowCount].name}`,
        children: [...this.rows[rowCount].children, element]
      });
    }
  }
};
</script>
