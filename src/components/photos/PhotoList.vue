<template>
    <div style="position:relative">
        <el-tabs v-model="activeName" @tab-click="handleClick"
                 style="position: fixed; top:26px; float: none">
            <el-tab-pane v-for="(item,index) in cates" :key="index"
                         :label="item.title" :name="item.id.toString()">
            </el-tab-pane>
        </el-tabs>
        <div class="photo-list">
            <div v-for="(item1,index1) in list" :key="index1" class="photo-item">
                <!--<img :src="item1.img_url" alt="fjdkfj"/>-->
                    <img v-lazy="item1.img_url" alt="fjdkfj"/>
                <div class="info">
                    <h1 class="info-title">{{item1.title}}</h1>
                    <div class="info-body">{{item1.zhaiyao}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhotoList",
        data() {
            return {
                activeName: '0',
                cates:[],
                list:[],
            };
        },
        methods: {
            handleClick(tab, event) {
                this.getPhotoListBycateId(this.activeName)
            },
            getAllCategory(){
                let url='api/getimgcategory'
                this.$axios.get(url).then(res=>{
                    if(res.data.status===0){
                        res.data.message.unshift({title:'全部',id:0})
                        this.cates=res.data.message
                    }
                }).catch(err=>{

                })
            },
            getPhotoListBycateId(cateId){
                let url='/api/getimages/'+cateId
                this.$axios.get(url).then(res=>{
                    if(res.data.status===0){
                        console.log(res.data)
                        this.list=res.data.message
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        created() {
            this.getAllCategory()
            this.getPhotoListBycateId(0)
        }
    }
</script>

<style lang="scss">
    .photo-list{
        padding: 10px;
        margin-top:45px;
        margin-left: 0px;
        list-style: none;
        text-align: center;
        .photo-item{
            background-color: #ccc;
            text-align: center;
            margin: 0 20%;
            margin-bottom: 10px;
            position:relative;
            img{
                width:100%;
                vertical-align: middle;
            }
            .info{
                color:white;
                text-align:left;
                position:absolute;
                bottom: 0px;
                background-color: rgba(0,0,0,0.4);
                max-height: 80px;
                .info-title{
                    font-size:14px
                }
                .info-body{
                    font-size:13px
                }
            }
        }

    }
</style>
