<template>
    <div class="index-page">
        <header>
            顶部
            <button type="button" @click="login">登录</button>
        </header>
        <router-link :to="{name:'Detail',params:{id:2}}">详情页</router-link>
        <br><br>
        <div class="container">
            <div v-for="(item,index) in banners" :key="index">
                <img :src="'https://rcdata.com.cn/'+item.path" width="300" style="margin:1em;float:left">
            </div>
        </div>
        <br>
        <pre v-html="JSON.stringify(expertList)"></pre>
    </div>
</template>

<script>
    import {getArtList, login,getBannerList} from '../api/index';

    export default {
        name: "index",
        data() {
            return {
                expertList: []
            }
        },
        // 找一个不用登录的接口来做测试
      /*  asyncData({state, dispatch, commit}) {
            return dispatch('getBanners');
        },*/
        computed: {
            banners() {
                return this.$store.state.banners;
            },
        },
        async mounted() {
            let res = await getArtList();
            console.log(res)
            if (res.code === 200) {
                this.expertList = res.data;
            } else {
                this.$message({
                    type: 'error',
                    message: res.msg || '服务器繁忙'
                });
            }
        },
        methods: {
            async login() {
                let sendData = new FormData()
                sendData.append('username', '13800138000');
                sendData.append('password', '123456');

                let res = await login(sendData);
                if (res.code === 200) {
                    this.$message({
                        type: 'success',
                        message: '登录成功'
                    });
                } else {
                    this.$message({
                        type: 'error',
                        message: res.msg || '服务器繁忙'
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style/index.scss";
</style>