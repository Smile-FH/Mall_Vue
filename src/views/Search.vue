<template>
    <div style="position: relative">
        <van-nav-bar title="标题" left-text="返回" left-arrow right-text="搜索" @click-left="goback"></van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: "Search",
        methods:{
            goback(){
                console.log("点击了返回");
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>