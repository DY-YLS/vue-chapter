<template>
       <div>
              <h1>Home</h1>
              <el-carousel :interval="4000" type="card" height="200px">
                     <el-carousel-item v-for="item in 6" :key="item">
                            <h3 class="medium">{{ item }}</h3>
                     </el-carousel-item>
              </el-carousel>
              <table class="table">
                     <tbody>
                     <tr>
                            <td><div class="icon-person"></div><span>Tanmay</span></td>
                            <td>Bangalore</td>
                            <td>Bangalore</td>
                     </tr>
                     <tr>
                            <td>Sachin</td>
                            <td>Bangalore</td>
                            <td>Bangalore</td>
                     </tr>
                     </tbody>
              </table>
       </div>
</template>

<script>
    export default {
        name: "HomeContainer",
           data(){
               return{
                      images:[]
               }
           },
           methods:{
               getCarousel(){
                      this.$axios.get("/api/getlunbo")
                              .then(res=>{
                                     console.log("请求成功")
                                     console.log(res)
                                     console.log(res.data)
                                     this.images=res.data
                                     console.log(this.images)
                              })
                              .catch(function (err) {
                                     console.log("请求失败")
                                     console.log(err)
                              })

               }
           },
           created() {
               this.getCarousel()
           }
    }
</script>

<style scoped>
       .table{
              text-align: center;
       }
       .el-carousel__item h3 {
              color: #475669;
              font-size: 14px;
              opacity: 0.75;
              line-height: 200px;
              margin: 0;
              text-align: center;
       }

       .el-carousel__item:nth-child(2n) {
              background-color: #99a9bf;
       }

       .el-carousel__item:nth-child(2n+1) {
              background-color: #d3dce6;
       }
</style>
