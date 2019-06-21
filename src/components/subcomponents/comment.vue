<template>
    <div>
        <h1>发表评论</h1>
        <hr>
        <el-input
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="textarea2">
        </el-input>
        <el-button type="primary">评论</el-button>
        <hr>
        <el-collapse accordion>
            <el-collapse-item v-for="(item,index) in comments" :key="index">
                <template slot="title">
                    <div>
                        <span>第{{index+1}}楼用户：{{item.user_name}}</span>
                        <span>{{item.add_time | dataFormat}}</span>
                        <i class="header-icon el-icon-info"></i>
                    </div>
                </template>
                <div>{{item.content==='undefined'?'此用户很懒，什么都没说':item.content}}</div>
            </el-collapse-item>
        </el-collapse>
        <el-button type="primary" :loading="false" @click="more">加载更多</el-button>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data() {
            return {
                textarea2: '',
                pageIndex:1,
                comments:[]
            }
        },
        props:['id'],
        methods:{
            getComment(){
                var url="api/getcomments/"+this.id+"?pageindex="+this.pageIndex
                this.$axios.get(url).then(res=>{
                    if(res.status===200){
                        console.log(res.data)
                        this.comments=this.comments.concat(res.data.message)
                    }
                }).catch(err=>{

                })
            },
            more(){
                this.pageIndex++
                console.log("start")
                this.getComment()
                console.log("end")
            }
        },
        created() {
            this.getComment()
        }
    }
</script>

<style scoped>
    .el-button--primary{
        width: 100%;
    }

</style>
