<template>
  <Layout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </Layout>
</template>
<script type="text/babel">
  import Layout from './component/layout/index.vue';
  export default {
    components: {
      Layout
    },
    mounted(){

    }
  }
</script>
