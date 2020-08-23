<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view/>
        </transition>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import Tabbar from "@/components/Tabbar";
    export default {
        data() {
            return {
                transitionName: ''
            }
        },
        watch: {
            $route(to, form) {
                if (to.meta.index > form.meta.index) {
                    this.transitionName = "slide-left";
                } else if (to.meta.index < form.meta.index) {
                    this.transitionName = "slide-right";
                } else {
                    this.transitionName = "";
                }
            }
        },
        components:{
            Tabbar
        }
    }
</script>

<style lang="less">
    @import "./common/style/mixin";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // text-align: center;
        color: #2c3e50;
    }

    .router-view {
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: 0 auto;
        -webkit-overflow-scrolling: touch;
    }

    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        height: 100%;
        will-change: transform;
        transition: all 500ms;
        position: absolute;
        backface-visibility: hidden;
    }

    .slide-right-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

</style>
