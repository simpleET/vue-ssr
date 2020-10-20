<template>
    <div class="index-page">
        <header>
            顶部
        </header>
        <router-link :to="{name:'Detail',params:{id:2}}">详情页</router-link>
        <br><br>
        <div class="container">
            <div v-for="(item,index) in banners" :key="index">
                <img :src="'https://rcdata.com.cn/'+item.path" width="300" style="margin:1em;float:left">
            </div>
        </div>
        <br>
      <pre v-html="expertList[0]&&expertList[0].content"></pre>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                expertList: []
            }
        },
        asyncData({state, dispatch, commit}) {
            return dispatch('getBanners');
        },
        computed: {
            banners() {
                return this.$store.state.banners;
            },
        },
        mounted() {
            this.$http({
                url: `/api/xmofficial/article/artList/1/10`,
                method: "GET",
                params: {
                    type: 1,
                    id: 40,
                }
            }).then(res => {
                if (res.data.code===200) {
                    this.expertList = res.data.data.list;
                }
            });
        },
    }
</script>

<style lang="scss" scoped>
    @import "../style/index.scss";
</style>