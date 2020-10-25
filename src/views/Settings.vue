<template>
    <div class="setting">
        <simple-header title="账号管理" left-text="返回" right-text="" @leftClick="goback"></simple-header>
        <div class="input-item">
            <van-field
                    label="账号昵称"
                    v-model="nickName"
                    name="nickName" />
            <van-field label="个性签名" v-model="introduceSign" />
            <van-field label="修改密码" v-model="newPassword" type="password" />
        </div>
        <van-button class="s-btn" color="linear-gradient(to right, #56ccf2, #ee0a24)" text="保存修改" @click="updateData" />
        <van-button class="s-btn" color="linear-gradient(to right, #56ccf2, #ee0a24)" text="安全退出" @click="logout"/>
    </div>
</template>

<script>
    import SimpleHeader from "@/components/SimpleHeader";
    import { editInfo, getInfo, logout } from "@/service/user";
    import { nullParamsVerify, setLocal } from "@/common/js/util";
    import { Toast } from "vant";

    export default {
        name: "Settings",
        data(){
          return {
              nickName: "",
              introduceSign: "",
              newPassword: ''
          }
        },
        inject:['reload'],
        components:{
          SimpleHeader
        },
        async mounted(){
            const { data } = await getInfo();
            this.nickName = data.nickName;
            this.introduceSign = data.introduceSign;
        },
        methods:{
            goback(){
                this.$router.go(-1);
            },
            async updateData(){
                // 昵称空参验证|要不要进行特殊字符验证？或者说MySQL数据库中允许存储特殊字符么？
                if (nullParamsVerify(this.nickName)){
                    Toast.fail("昵称不能为空");
                    return;
                }
                // 密码空参验证
                if (nullParamsVerify(this.newPassword)){
                    Toast.fail("密码不能为空");
                    return;
                }
                //
                if (this.newPassword.length<6){
                    Toast.fail("密码不能低于六位的！");
                    return;
                }
                let passwordMd5 = this.$md5(this.newPassword);
                const data = await editInfo({
                    newPassword: passwordMd5,
                    nickName: this.nickName,
                    introduceSign: this.introduceSign
                });
                this.reload();
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