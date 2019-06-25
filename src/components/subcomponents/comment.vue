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
        <el-button type="primary" @click="speak">评论</el-button>
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
        <el-button type="primary" :loading="loading" @click="more">加载更多</el-button>
    </div>
</template>

<script>
    import {Message} from 'element-ui'
    export default {
        name: "comment",
        data() {
            return {
                textarea2: '',
                pageIndex:1,
                comments:[],
                loading:false
            }
        },
        props:['id'],
        methods:{
            speak(){
                if(this.textarea2.trim().length===0){
                   return  Message({
                        message:'评论内容不能为空',
                        type:"warning",
                        center:true
                    })
                    /*Message.success({
                        message:'评论内容不能为空',
                        center:true
                    })*/
                }
                let url='/api/postcomment/'+this.id
                this.$axios.post(url,{
                    content:this.textarea2.trim()
                }).then(res=>{
                    if(res.status===200){
                        console.log(res.data)
                        if(res.data.status===0){
                            Message({
                                message:res.data.message,
                                type:"success",
                                center:true})
                           /* this.pageIndex=1
                            this.getComment()*/
                            let object={
                                user_name:"匿名用户",
                                add_time:Date.now(),
                                content:this.textarea2
                            }
                            this.comments.unshift(object)
                            this.textarea2=""
                        }
                    }
                }).catch(err=>{

                })
            },
            getComment(){
                var url="api/getcomments/"+this.id+"?pageindex="+this.pageIndex
                this.$axios.get(url).then(res=>{
                    if(res.status===200){
                        console.log(res.data)
                        this.comments=this.comments.concat(res.data.message)
                        this.loading=false
                    }
                }).catch(err=>{

                })
            },
            more(){
                this.loading=true
               /* setTimeout(()=>{
                    this.loading=false
                },3000)*/
                this.pageIndex++
                this.getComment()
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
