<template>
  <drop class="hl_page-creator--column">
    <div href="#" class="new-element-blank" @click="addNewElement">
      <span class="btn btn-light6 btn-slim">Add New Element</span>
    </div>
  </drop>
</template>

<script>
export default {
  methods: {
    showElementMenu() {
      document.querySelector("#page-creator").classList.add("--menu-active");
      document.querySelector("#add-element").classList.add("active");
      document.querySelector("#add-element").classList.add("show");
      document.querySelector(".hl_page-creator--element-group").classList.add("active");
    },
    hideElementMenu() {
      document.querySelector("#page-creator").classList.remove("--menu-active");
      // document.querySelector("#add-element").classList.remove("active");
      // document.querySelector("#add-element").classList.remove("show");
      document.querySelector(".hl_page-creator--element-group").classList.remove("active");
    },
    addNewElement() {
      this.showElementMenu();
      const addHeadline = () => {
        this.$root.$emit(
          "replaceChildWithHeadline",
          this.$parent.$parent.$vnode.key,
          this.$vnode.key
        );
        document.querySelector("#headline-card").removeEventListener("click", addHeadline, false);
        document.querySelector("#image-card").removeEventListener("click", addImage, false);
        this.hideElementMenu();
      };

      const addImage = () => {
        this.$root.$emit("replaceChildWithImage", this.$parent.$parent.$vnode.key, this.$vnode.key);
        document.querySelector("#headline-card").removeEventListener("click", addHeadline, false);
        document.querySelector("#image-card").removeEventListener("click", addImage, false);
        this.hideElementMenu();
      };

      document.querySelector("#headline-card").addEventListener("click", addHeadline, false);
      document.querySelector("#image-card").addEventListener("click", addImage, false);
    }
  }
};
</script>
