<template>
  <div id="app">
    <Nav></Nav>
    <ClientModal></ClientModal>
    <HlHeader></HlHeader>
    <RecentActivities></RecentActivities>
    <ReviewModal></ReviewModal>
    <HlWrapper></HlWrapper>
    <Outdated></Outdated>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import ClientModal from "./components/ClientModal.vue";
import HlHeader from "./components/HlHeader.vue";
import RecentActivities from "./components/RecentActivities.vue";
import ReviewModal from "./components/ReviewModal.vue";
import HlWrapper from "./components/HlWrapper.vue";
import Outdated from "./components/Outdated.vue";

export default {
  name: "app",
  components: {
    Nav,
    ClientModal,
    HlHeader,
    RecentActivities,
    ReviewModal,
    HlWrapper,
    Outdated
  }
};
</script>
