<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1BAEAE">
        <van-swipe-item v-for="(item, index) in imagesUrl" :key="index" class="box">
                <img v-lazy="item.carouselUrl" class="a" :alt="item.carouselUrl" @click="goTo(item.redirectUrl)">
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    export default {
        name: "Swipe",
        props: {
            imagesUrl: {
                type: Array,
            }
        },
        methods: {
            goTo(url){
                window.open(url);
            }
        }
    }
</script>

<style lang="less" scoped>

    .my-swipe .box{
        width: 100%;
        height: 200px;
        .a {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

</style>