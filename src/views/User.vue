<template>
    <div>
        <van-nav-bar
                title="我的"/>
        <div class="user-info">
            <span class="svg-container">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wodefill"></use>
              </svg>
            </span>
            <div class="info-details">
                <span>昵称：</span>
                <span>登录账号：</span>
                <span>个签：</span>
            </div>
        </div>

        <van-cell-group title="个人">
            <van-cell title="我的订单" is-link center />
            <van-cell title="账号管理" is-link center />
            <van-cell title="地址管理" is-link center />
            <van-cell title="关于商城" is-link center />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "User",
        components: {}
    }
</script>

<style lang="less" scoped>
    .nb{
        font-size: 75px;
    }

    .user-info{
        margin: 0  10px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        border: 1px solid #07c160;
        align-items: center;
        border-radius: 10px;
        background-color: #07c160;

        .icon{
            font-size: 75px;
            color: white;
        }

        .info-details{
            display: flex;
            flex-direction: column;
            font-weight: bold;
            color: white;
        }
    }

</style>