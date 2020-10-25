<template>
    <header class="simple-header">
        <div class="left-space" @click="leftFunction()">
            <slot name="leftIcon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiangzuo"></use>
                </svg>
            </slot>
            <span>{{leftText}}</span>
        </div>
        <div class="center-space">
            <span>{{title}}</span>
        </div>
        <div class="right-space" @click="rightFunction()">
            <span>{{rightText}}</span>
            <slot name="rightIcon">
<!--                ···-->
            </slot>
        </div>
    </header>
</template>

<script>
    export default {
        name: "SimpleHeader",
        props:{
            leftText:{
                type: String,
                default: "左边"
            },
            title: {
                type: String,
                default: "标题"
            },
            rightText: {
                type: String,
                default: "右边"
            },
            back: {
                type: String,
                default: "/"
            }
        },
        methods: {
            leftFunction: function () {
                this.$emit("leftClick");
            },
            rightFunction: function () {
                this.$emit("rightClick");
            }
        }
    }
</script>

<style lang="less" scoped>
    .simple-header {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #c8c9cc;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .left-space {
            font-size: 16px;
            font-weight: 400;
            color: #0055FF;
            padding: 0 15px;
        }

        .center-space {
            font-size: 20px;
        }

        .right-space {
            font-size: 16px;
            font-weight: 400;
            color: #0055FF;
            padding: 0 15px;

            span {
                margin-right: 5px;
            }
        }
    }
</style>