<template>
    <div>
        <ul class="media-list">
            <li class="media" v-for="(item,index) in news" v-bind:key="index">
                <router-link :to="'/home/newsinfo/'+item.id" class="media">
                    <div class="media-left media-middle">
                        <img :src="item.img_url" class="media-object" style="width:60px">
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{item.title}}</h4>
                        <!--ustify-content: space-between  位于各行之间留有空白的容器中-->
                        <p style="display: flex;justify-content: space-between">
                            <span>内容：{{item.zhaiyao}}</span>
                            <span>发表时间：{{item.add_time | dataFormat('YYYY-MM-DD')}}</span>
                            <span>点击次数：{{item.click}}</span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        data(){
            return{
                news:[]
            }
        },
        methods:{
            getNewsList(){
                var url='/api/getnewslist'
                this.$axios.get(url).then(res=>{
                    if(res.status==200){
                        console.log("获取成功")
                        console.log(res)
                        this.news=res.data.message
                    }
                }).catch(err=>{
                    console.log("获取失败")
                })
            }
        },
        created() {
            this.getNewsList()
        }
    }
</script>

<style scoped>

</style>
