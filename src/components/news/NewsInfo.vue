<template>
    <div class="newsinfo-container">
        <div class="title">{{info.title}}</div>
        <div class="center">
            <span>{{info.add_time | dataFormat}}</span>
            <span>点击次数：{{info.click}}</span>
        </div>
        <hr>
        <div class="content" v-html="info.content">
        </div>

        <comment-box :id="id"></comment-box>
    </div>
</template>

<script>
    import comment from '@/components/subcomponents/comment.vue'
    export default {
        name: "NewsInfo",
        data() {
            return {
                id: this.$route.params.id,
                info:{}
            }
        },
        methods:{
            getInfo(){
                this.$axios.get('api/getnew/'+this.id)
                    .then(res=>{
                        if(res.status===200){
                            console.log(res.data)
                            this.info=res.data.message[0]
                        }
                    }).catch(err=>{

                })
            }
        },
        created() {
            this.getInfo()
        },
        components:{
            'comment-box':comment
        }
    }
</script>

<style lang="scss">
    .newsinfo-container{
        padding: 0 5px;
        .title{
            font-size: 16px;
            text-align: center;
            margin:15px 0;
            color:red;
        }
        .center{
            font-size: 13px;
            color:lightblue;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width: 200;
                height: 200;
            }

        }
    }

</style>
