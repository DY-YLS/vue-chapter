<template>
       <div>
              <carousel :images="images" :isfull="true" v-loading="loading"></carousel>
              <table class="table">
                     <tbody>
                     <tr>
                            <td><router-link to="/home/newslist"><div class="icon-person"></div><span>Tanmay</span></router-link></td>
                            <td><router-link to="/home/photolist"><div class="icon-person"></div><span>图片分享</span></router-link></td>
                            <td><router-link to="/home/goodslist"><div class="icon-person"></div><span>商品详情</span></router-link></td>
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
       import carousel from '@/components/subcomponents/carousel.vue'
    export default {
        name: "HomeContainer",
           data(){
               return{
                   images:[],
                   loading:true
               }
           },
           components:{
               carousel:carousel
           },
           methods:{
               getCarousel(){
                      this.$axios.get("/api/getlunbo")
                              .then(res=>{
                                  if(res.data.status===0){
                                      this.loading=false
                                      console.log("请求成功")
                                      console.log(res)
                                      console.log(res.data)
                                      this.images=res.data
                                      console.log(this.images)
                                      this.images=res.data.message
                                  }
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

</style>
