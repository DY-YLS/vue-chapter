<template>
    <div>
    <div class="goods-list">
        <div class="goods-item" v-for="(item,index) in goodslist" :key="index" @click="goodsinfo(item.id)">
                <img :src="item.img_url" alt="">
                <h1 class="title">
                    {{item.title}}
                </h1>
                <div class="info">
                    <p class="price">
                        <span class="now">￥{{item.sell_price}}</span>
                        <span class="old">￥{{item.market_price}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩{{item.stock_quantity}}件</span>
                    </p>
                </div>
        </div>
    </div>
        <el-button type="primary" :loading="loading" @click="more">加载更多</el-button>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data(){return{
            loading:false,
            pageindex:1,
            goodslist:[]
        }},
        created(){
            this.getGoodsList()
        },
        methods:{
            goodsinfo(id){
              this.$router.push('/home/goodsinfo/'+id)
            },
            more(){
                this.loading=true
                this.pageindex++
                this.getGoodsList()
            },
            getGoodsList(){
                let url='api/getgoods?pageindex='+this.pageindex
                this.$axios.get(url).then(res=>{
                    if(res.data.status===0){
                        console.log(res.data)
                        this.goodslist=this.goodslist.concat(res.data.message)
                        this.loading=false
                        /*this.goodslist=res.data.message*/
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-button{
        width:100%
    }
    .goods-list{
        display: flex;
        flex-wrap: wrap;/*在必要的时候拆行*/
        justify-content: space-between;
        padding: 7px;
        .goods-item{
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            padding:2px;
            width: 49%;
            border:1px solid gray;
            box-shadow: 0 0 20px #2b669a;
            margin:4px 0;
            min-height: 597px;
            img{
                width:100%;
            }
            .title{
                font-size: 16px;
            }
            .info{
                background-color: #eee;
                p{
                    margin:0;
                    padding: 4px;
                }
                .price{
                    .now{
                        color:red;
                        font-weight:bold;
                        font-size: 16px;
                    }
                    .old{
                        color:grey;
                        font-size: 12px;
                        text-decoration: line-through;
                        margin-left:10px;
                    }
                }
                .sell{
                    display:flex;
                    justify-content: space-between;
                    font-size: 10px;

                }
            }
        }
    }

</style>
