<template>
    <div class="info-container">
        <transition :duration="2000"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter">
            <div class="ball" key="ball" ref="ball" v-if="ballflag"></div>
        </transition>
      <!--  <div class="ball" v-show="ballflag" ref="ball"></div>-->
        <div class="panel panel-default">
            <div class="panel-body">
               <carousel :images="images" :isfull="false"></carousel>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                {{goodsinfo.title}}
            </div>
            <div class="panel-body">
                <p class="price">
                    <span class="old"><del>市场价：{{goodsinfo.market_price}}</del></span>
                    &nbsp;&nbsp;
                    <span class="now">销售价：{{goodsinfo.sell_price}}</span>
                </p>
                <p>购买数量： <el-input-number v-model="num" size="mini" @change="handleChange" :min="1" :max="goodsinfo.stock_quantity" label="描述文字"></el-input-number></p>
                <p>
                    <el-button type="primary" round>立即购买</el-button>
                    <el-button type="success" round @click="add">加入购物车</el-button>
                </p>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                商品参数
            </div>
            <div class="panel-body">
                <p>商品货号：{{goodsinfo.goods_no}}</p>
                <p>库存情况：{{goodsinfo.stock_quantity}}</p>
                <p>上架时间：{{goodsinfo.add_time}}</p>
            </div>
            <div class="panel-footer">
                <el-button round>图文介绍</el-button>
                <el-button round>商品评论</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import carousel from '@/components/subcomponents/carousel.vue'
    import Carousel from "../subcomponents/carousel";
    export default {
        name: "GoodsInfo",
        components: {Carousel,carousel},
        data(){
            return{
                id:this.$route.params.id,
                images:[],
                num: 1,
                goodsinfo:{'stock_quantity':10},
                ballflag:false
            }
        },
        created(){
          this.getCarousel()
            this.getGoodsInfo()
        },
        methods:{
            add(){
                this.ballflag=!this.ballflag
                console.log(this.ballflag)
            },

            getGoodsInfo(){
                let url='api/goods/getinfo/'+this.id
              this.$axios.get(url).then(res=>{
                  if(res.data.status===0){
                      console.log(res)
                      this.goodsinfo=res.data.message['0']
                  }
              })
            },
            handleChange(value) {
                console.log(value);
                console.log(this.num)
            },
            getCarousel(){
                let url='api/getthumimages/'+this.id
                this.$axios.get(url).then(res=>{
                    if(res.data.status===0){
                        console.log(this.goodsinfo)
                        console.log(res.data)
                        res.data.message.forEach(item=>{
                            item.img=item.src
                        })
                        this.images=res.data.message
                    }
                })
            },
            beforeEnter(el){
                /*el.style.backgroundColor="red";*/
               /* el.style.zIndex="99"*/
                el.style.transform="translate(0,0)";},
            enter(el,done){
                el.offsetWidth;
                const ballposition=this.$refs.ball.getBoundingClientRect();
                const badgepostion=document.getElementById("badge").getBoundingClientRect();
                const xDist=(badgepostion.right+badgepostion.left)/2-ballposition.left;
                const yDist=badgepostion.top-ballposition.top;
              /*  setTimeout(()=>{
                    /!* console.log(xDist+"--"+yDist)*!/
                    el.style.transform=`translate(${xDist}px,${yDist}px)`;
                },1000)*/
                el.style.transition="all 1s ease-in-out";
                el.style.transform=`translate(${xDist}px,${yDist}px)`;

                console.log("enter"+this.ballflag);
               /* console.log(el.style.backgroundColor)*/
               done();
                /*this.leave()*/
                /*this.afterEnter()*/
            },
            afterEnter(){
                /*this.ballflag=!this.ballflag*/
                /*done()*/
                  setTimeout(()=>{
                      this.add();
                },1000)
               /* this.add();*/
                console.log("after"+this.ballflag);
                /* this.add();*/
            },
            /*leave(el,done){
                this.add()
                console.log("leave "+this.ballflag)
                done()
            }*/
        }
    }
</script>

<style lang="scss">
    .info-container{
        .ball{
            width:13px;
            height: 13px;
            border-radius: 50%;
            background-color: green;
            position: absolute;
            z-index:999;
            top:390px;
            left: 140px;
        }
    }
    .old{
        color:grey;
    }
    .now{
        color:red;
        font-size: 16px;
        font-weight: bold;
    }

</style>
