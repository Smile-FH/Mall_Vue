<template>
    <div class="about">
        <simple-header title="关于我们" left-text="返回" right-text="" @leftClick="goback"></simple-header>
        <h1>This is an about page</h1>
        <span class="svg-container">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-my_light"></use>
            </svg>
        </span>
    </div>
</template>

<script>
    import SimpleHeader from "@/components/SimpleHeader";
    export default {
        name:'About',
        components:{
            SimpleHeader
        },
        methods:{
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>
