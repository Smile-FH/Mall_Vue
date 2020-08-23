<template>
    <van-tabbar route>
        <van-tabbar-item replace to="/" icon="home-o">
            首页
        </van-tabbar-item>
        <van-tabbar-item replace to="/classify" icon="search">
            分类
        </van-tabbar-item>
        <van-tabbar-item replace to="/cart" icon="search">
            购物车
        </van-tabbar-item>
        <van-tabbar-item replace to="/user" icon="search">
            我的
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>

</style>