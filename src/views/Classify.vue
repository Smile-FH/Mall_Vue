<template>
    <div>
        <simple-header @leftClick="goBack" left-text="" right-text=""/>
        <van-tree-select
                height="608px"
                :items="leftItems"
                :active-id.sync="leftItems.id"
                :main-active-index.sync="leftItems.id"
                @click-nav="onNavClick"
        >
            <template #content>
                <div v-for="(firstLevel) of rightItem" :key="firstLevel.categoryId">
                    <div v-for="(secondLevel) of firstLevel.mallClassifySecondLevelVoList"
                         :key="secondLevel.categoryId">
                        <h3 class="secondLevel-title">{{ secondLevel.categoryName }}</h3>
                        <div class="thirdLevel-container">
                            <div v-for="(thirdLevel) of secondLevel.mallClassifyThirdLevelVoList"
                                 :key="thirdLevel.categoryId"
                                 class="thirdLevel-item">
                                    <div style="width: 50px;height: 30px">
                                        <img src="http://browser9.qhimg.com/bdm/384_237_0/t01bbd94b90e850d1d3.jpg" alt="#">
                                    </div>
                                    <span>{{ thirdLevel.categoryName }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </van-tree-select>
        <mall-tab-bar/>
    </div>
</template>

<script>
    import SimpleHeader from "@/components/SimpleHeader";
    import MallTabBar from "@/components/MallTabBar";
    import { getClassifyList } from "@/service/classify";

    export default {
        name: "Classify",
        data() {
            return {
                leftItems: [],
                rightItems: [],
                rightItem: [],
                activeIndex: 0,
            }
        },
        components: {
            SimpleHeader,
            MallTabBar,
        },
        mounted: async function () {
            let { data: classifyList } = await getClassifyList();
            this.rightItems = classifyList;
            for (let i = 0; i < classifyList.length; i++) {
                this.leftItems.push({
                    id: classifyList[i].categoryId,
                    text: classifyList[i].categoryName,
                });
            }
            this.onNavClick(0)
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            onNavClick(index) {
                this.rightItem = [];
                this.rightItem.push(this.rightItems[index]);
            },
        }
    }
</script>

<style scoped>

    .secondLevel-title {
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 30px;
    }

    .thirdLevel-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .thirdLevel-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        width: 33.3333333%;
        font-size: 13px;
    }
    img {
        width: 100%;
    }

</style>