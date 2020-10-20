<template>
  <div style="font-size: 24px; text-align: center;color:blue;">
   详情页
  </div>
</template>
<style>

</style>
<script type="text/babel">
  export default{
    computed: {
      article() {
        return this.$store.state.article;
      }
    },
    asyncData({ state, dispatch, commit }) {
      const { id } = state.route.params;
      console.log('id=='+id)
      return dispatch('FETCH_ARTICLE_DETAIL', { id })
    }
  }
</script>
