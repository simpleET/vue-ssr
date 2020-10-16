<template>
    <div class="index-page">
        <header>
            顶部
        </header>
        <nav>导航栏</nav>
        <router-link :to="{name:'Detail'}">详情页</router-link>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    @import "../style/index.scss";
</style>