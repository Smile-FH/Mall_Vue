<template>
    <div class="setting">
        <simple-header title="账号管理" left-text="返回" right-text="" @leftClick="goback"></simple-header>
        <div class="input-item">
            <van-field label="账号昵称" />
            <van-field label="个性签名" />
            <van-field label="修改密码" />
        </div>
        <van-button class="s-btn" color="linear-gradient(to right, #56ccf2, #ee0a24)" text="保存修改" @click="updateData" />
        <van-button class="s-btn" color="linear-gradient(to right, #56ccf2, #ee0a24)" text="安全退出" @click="logout"/>
    </div>
</template>

<script>
    import SimpleHeader from "@/components/SimpleHeader";
    import { logout } from "@/service/user";
    import { setLocal } from "@/common/js/util";

    export default {
        name: "Settings",
        components:{
          SimpleHeader
        },
        methods:{
            goback(){
                this.$router.go(-1);
            },
            updateData(){
                console.log("您保存了修改");
            },
            async logout(){
                const { resultCode } = await logout();
                if ( resultCode === 200 ){
                    setLocal('token', '');
                    window.location.href = '/';
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .setting{
        .input-item {
            >div {
                border-bottom: 1px solid #1989fa;
            }
        }
        .s-btn {
            display: block;
            width: 80%;
            margin: 15px auto;
        }
    }
</style>