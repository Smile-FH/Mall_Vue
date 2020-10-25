<template>
    <div style="position: relative" class="login">
        <!--        login Header-->
        <simple-header :title="isRegister? '注册' : '登录'" left-text="返回" right-text="" @leftClick="goBack"></simple-header>

        <div class="login-body" >
            <van-form v-if="!isRegister" @submit="onSubmit(0)">
                <van-field
                        v-model="username"
                        name="userName"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                        v-model="password"
                        type="password"
                        name="password"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div class="verify">
                    <verify ref="loginVerifyRef" type="compute"  @error="error()" @success="success()" :show-button="false" width="100%"></verify>
                </div>
                <div style="margin: 16px;">
                    <div class="link-register" @click="toTag">立即注册</div>
                    <van-button round block type="info" native-type="submit" @keydown.enter="onSubmit(0)">登录</van-button>
                </div>
            </van-form>
            <van-form v-else @submit="onSubmit(1)">
                <van-field
                        v-model="username"
                        name="userName"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                        v-model="password"
                        type="password"
                        name="password"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div class="verify">
                    <verify ref="loginVerifyRef" type="compute" @error="error('error')" :show-button="false" @success="success('success')" width="100%"></verify>
                </div>
                <div style="margin: 16px;">
                    <div class="link-register" @click="toTag">去登录</div>
                    <van-button round block type="info" native-type="submit" @keydown.enter="onSubmit(1)">注册</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
    import Verify from "vue2-verify";
    import SimpleHeader from "@/components/SimpleHeader";
    import { Toast } from "vant";
    import { setLocal } from "@/common/js/util";
    import { login } from "@/service/user";

    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: "",
                isRegister: false,
                lastPath:"",
                verify: false,
            }
        },
        beforeRouteEnter (to, form, next){
            next( vm=>{
                vm.lastPath = form.path;
            })
        },
        components: {
            Verify,
            SimpleHeader
        },

        methods: {
            verifyCheck(){
                this.$refs.loginVerifyRef.$refs.instance.checkCode();
            },
            verifyRefresh(){
                this.$refs.loginVerifyRef.$refs.instance.refresh();
            },
            goBack() {
                if (window.history.length===1) {
                    this.$router.replace("/")
                }
                this.$router.go(-1);
            },
            success:function() {
                this.verify = true;
            },
            error:function(){
                this.verify = false;
            },
            toTag(){
                this.isRegister = !this.isRegister;
                this.verifyRefresh();
            },
            async onSubmit(value){
                this.verifyCheck();
                let verifyValue = this.verify;
                if (!verifyValue){
                    Toast.fail("验证码没填写，或 验证码错了！");
                } else {
                    // value为0 的时候走else方法
                    if (value){
                        Toast.fail("走注册方法");
                    } else {
                        const { data } = await login({
                            "loginName": this.username,
                            "passwordMD5": this.$md5(this.password)
                        });
                        setLocal("token", data);
                        window.location.href = '/';
                    }
                }
                this.verifyRefresh();
            }
        },
    }
</script>

<style lang="less" scoped>
    .login {
        .login-body {
            padding-top: 150px;

            .van-form {
                padding: 0 20px;

                .verify {
                    /deep/ .cerify-code-panel {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin: 16px 0 0 20px;

                        .verify-code {
                            width: 60%!important;
                            height: 40px!important;
                            line-height: 40px!important;
                            font-size: 20px!important;
                        }

                        .verify-code-area {
                            .verify-input-area {
                                width: 120px;
                                .varify-input-code {
                                    margin: 0 20px;
                                    width: 80px;
                                    height: 30px;
                                    border: 1px solid #1989fa;
                                }
                            }
                        }

                    }
                }
            }

            .link-register {
                color: #1989fa;
                margin-bottom: 20px;
                font-size: 16px;
                width: 75px;
            }

            /deep/ .van-field__body {
                border: 1px solid #1989fa;

                input:-webkit-autofill,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:focus,
                textarea:-webkit-autofill,
                textarea:-webkit-autofill:hover,
                textarea:-webkit-autofill:focus,
                select:-webkit-autofill,
                select:-webkit-autofill:hover,
                select:-webkit-autofill:focus {
                    -webkit-text-fill-color: #000;
                    -webkit-box-shadow: 0 0 0 1000px #fff inset;
                    transition: background-color 5000s ease-in-out 0s;
                }
            }
        }
    }
</style>