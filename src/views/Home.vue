<template>
    <div class="home">
        <header class="home-head" :class="{'active': isActive }">
            <router-link tag="i" to="/classify">
                <svg class="icon home-classify-ico" aria-hidden="true">
                    <use xlink:href="#icon-integral"></use>
                </svg>
            </router-link>
            <div class="header-search">
                <span class="app-name">商城</span>
                <i class="icon-search">|</i>
                <router-link tag="span" to="/search" class="search-title">多学点再多学点！</router-link>
            </div>
            <router-link class="login" to="/login" tag="span" v-if="!isLogin" >登录</router-link>
            <router-link class="login" to="#" tag="span" v-else>
                <van-icon class="icon" name="manager"></van-icon>
            </router-link>
        </header>
        <swiper :images-url="imagesUrl"></swiper>
        <tabbar></tabbar>

        <div class="category-list">
            <div v-for="item of categoryList" :key="item.categoryId" class="">
                <img :src="item.imgUrl">
                <span>{{item.title}}</span>
            </div>
        </div>

        <div class="goods">
            <header class="goods-header">新品上线</header>
            <div class="goods-box">
                <div class="goods-item" v-for="(item, index) of newGoods" :key="index">
                    <img :src="item.goodUrl">
                    <div class="good-detail">
                        <div class="title">{{item.goodTitle}}</div>
                        <div class="price">{{item.goodPrice}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="goods">
            <header class="goods-header">热门商品</header>
            <div class="goods-box">
                <div class="goods-item" v-for="(item, index) of newGoods" :key="index">
                    <img :src="item.goodUrl">
                    <div class="good-detail">
                        <div class="title">{{item.goodTitle}}</div>
                        <div class="price">{{item.goodPrice}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="goods" :style="{paddingBottom: '60px'}">
            <header class="goods-header">最新推荐</header>
            <div class="goods-box">
                <div class="goods-item" v-for="(item, index) of newGoods" :key="index">
                    <img :src="item.goodUrl">
                    <div class="good-detail">
                        <div class="title">{{item.goodTitle}}</div>
                        <div class="price">{{item.goodPrice}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tabbar from "@/components/Tabbar";
    import Swiper from "@/components/Swiper";
    import { getIndexInfo } from "@/service/home";

    export default {
        name: "Home",
        components: {
            Tabbar,
            Swiper
        },
        data() {
            return {
                imagesUrl: [],
                searchValue: "",
                isLogin: false,
                isActive: false,
                categoryList:[
                    {
                        title: '超市',
                        imgUrl: '//s.weituibao.com/1583585285461/cs.png',
                        categoryId: 100001
                    }, {
                        title: '服饰',
                        imgUrl: '//s.weituibao.com/1583585285468/fs.png',
                        categoryId: 100003
                    }, {
                        title: '全球购',
                        imgUrl: '//s.weituibao.com/1583585285470/qq.png',
                        categoryId: 100002
                    }, {
                        title: '生鲜',
                        imgUrl: '//s.weituibao.com/1583585285472/sx.png',
                        categoryId: 100004
                    }, {
                        title: '到家',
                        imgUrl: '//s.weituibao.com/1583585285467/dj.png',
                        categoryId: 100005
                    }, {
                        title: '充值缴费',
                        imgUrl: '//s.weituibao.com/1583585285465/cz.png',
                        categoryId: 100006
                    }, {
                        title: '9.9元拼',
                        imgUrl: '//s.weituibao.com/1583585285469/pt.png',
                        categoryId: 100007
                    }, {
                        title: '领劵',
                        imgUrl: '//s.weituibao.com/1583585285468/juan.png',
                        categoryId: 100008
                    }, {
                        title: '省钱',
                        imgUrl: '//s.weituibao.com/1583585285471/sq.png',
                        categoryId: 100009
                    }, {
                        title: '全部',
                        imgUrl: '//s.weituibao.com/1583585285470/qb.png',
                        categoryId: 100010
                    }
                ],
                newGoods: [
                    {
                        goodUrl: 'http://browser9.qhimg.com/bdm/512_316_0/t01dfe78c9e02a650c3.jpg',
                        goodTitle: "的方式符号斯蒂芬何炅撒囧的囧事fskdfk收到甲方收到JFK了就是对方大家覅哦",
                        goodPrice: '￥222'
                    },
                    {
                        goodUrl: 'http://browser9.qhimg.com/bdm/512_316_0/t01dfe78c9e02a650c3.jpg',
                        goodTitle: "的方式符号斯蒂芬何炅撒囧的囧事fskdfk收到甲方收到JFK了就是对方大家覅哦",
                        goodPrice: '￥222'
                    }, {
                        goodUrl: 'http://browser9.qhimg.com/bdm/512_316_0/t01dfe78c9e02a650c3.jpg',
                        goodTitle: "的方式符号斯蒂芬何炅撒囧的囧事fskdfk收到甲方收到JFK了就是对方大家覅哦",
                        goodPrice: '￥222'
                    }, {
                        goodUrl: 'http://browser9.qhimg.com/bdm/512_316_0/t01dfe78c9e02a650c3.jpg',
                        goodTitle: "的方式符号斯蒂芬何炅撒囧的囧事fskdfk收到甲方收到JFK了就是对方大家覅哦",
                        goodPrice: '￥222'
                    }, {
                        goodUrl: 'http://browser9.qhimg.com/bdm/512_316_0/t01dfe78c9e02a650c3.jpg',
                        goodTitle: "的方式符号斯蒂芬何炅撒囧的囧事fskdfk收到甲方收到JFK了就是对方大家覅哦",
                        goodPrice: '￥222'
                    },
                ]
            }
        },
        async mounted() {
            window.addEventListener("scroll", this.pageScroll);
            const { data } = await getIndexInfo();
            this.imagesUrl = data.indexCarouselVOS;
        },
        methods: {
            pageScroll(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                scrollTop > 50 ? this.isActive=true : this.isActive=false;
            }
        },
    };
</script>

<style lang="less" scoped>
    @import "../common/style/mixin";

    .home-head {
        position: fixed;
        top: 0;
        left: 0;
        .wh(100%, 50px);
        .fj();
        .boxSizing();
        line-height: 50px;
        padding: 0 15px;
        font-size: 14px;
        z-index: 10000;
        .home-classify-ico {
            font-size: 25px;
            margin: 12px 0;
            color: @primary;
        }
        &.active {
            background-color: @primary;
            .home-classify-ico {
                color: #fff;
            }
            .login {
                color: #fff;
            }
        }
        .header-search {
            .fj(space-around);
            .wh(60%, 20px);
            line-height: 20px;
            margin: 10px 0;
            padding: 5px 10px;
            border-radius: 20px;
            background-color: #fff;
            background:  rgba(255, 255, 255, .7) ;

            .app-name {
                font-size: 20px;
                font-weight: bold;
                color: @primary;
            }
            .icon-search {
                font-size: 17px;
                color: #829191;
            }
            .search-title {
                font-size: 12px;
                line-height: 21px;
            }
        }
    }
    .login {
        color: @primary;
    }
    .category-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-shrink: 0;
        padding-bottom: 12px;
        div {
            display: flex;
            flex-direction: column;
            width: 20%;
            align-items: center;
            img {
                .wh(40px, 40px);
                margin: 12px auto 3px auto;
            }
        }
    }

    .goods {
        .goods-header {
            background-color: #F2F2F2;
            .wh(100%, 50px);
            line-height: 50px;
            font-size: 16px;
            text-align: center;
            color: @primary;
        }
        .goods-box {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            .goods-item {
                border-bottom: 1px solid #dcdcdc;
                border-right: 1px solid #dcdcdc;
                box-sizing: border-box;
                width: 50%;
                padding: 10px 0;
                img {
                    width: 70%;
                    display: block;
                    margin: 0 auto;
                }
                .good-detail {
                    text-align: center;
                    padding: 10px 0;
                    .title {
                        font-weight: 600;
                        display: -webkit-box;
                        overflow: hidden;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .price {
                        font-size: 13px;
                        color: @primary;
                    }
                }
            }
        }
    }
</style>
