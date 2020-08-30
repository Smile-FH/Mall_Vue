<template>
    <div style="position: relative" class="login">
        <!--        login Header-->
        <van-nav-bar :title="isRegister? '注册' : '登录'" left-text="返回" left-arrow right-text="···" @click-left="goback"></van-nav-bar>

        <div class="login-body">
            <van-form v-if="!isRegister">
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
                    <verify type="compute" @error="error" @success="success" :show-button="false" width="100%"></verify>
                </div>
                <div style="margin: 16px;">
                    <div class="link-register" @click="toTag">立即注册</div>
                    <van-button round block type="info" native-type="button">提交</van-button>
                </div>
            </van-form>
            <van-form v-else>
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
                    <verify type="compute" @error="error" @success="success" :show-button="false" width="100%"></verify>
                </div>
                <div style="margin: 16px;">
                    <div class="link-register" @click="toTag">去登录</div>
                    <van-button round block type="info" native-type="button">注册</van-button>
                </div>
            </van-form>
        </div>

    </div>
</template>

<script>
    import Verify from "vue2-verify";

    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: "",
                isRegister: false
            }
        },
        components: {
            Verify
        },
        methods: {
            goback() {
                this.$router.go(-1);
            },
            success() {
                console.log("验证成功了");
            },
            error(){
                console.log("验证失败");
            },
            toTag(){
                this.isRegister = !this.isRegister;
                console.log("点击了立即注册");
                this.error();
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
            }
        }
    }
</style>