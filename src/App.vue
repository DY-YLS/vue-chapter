<template>
  <div class="my-container">
    <el-page-header  @back="goBack" title="返回" content="vue项目">
    </el-page-header>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link to="/home">首页 <span class="sr-only">(current)</span></router-link></li>
            <li><router-link to="/member"><div class="icon-person" style="text-align: center"></div><span>会员</span></router-link></li>
            <li><router-link to="/shopcar">购物车</router-link></li>
            <li><router-link to="/search">搜索</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div>
    </nav>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <transition mode="out-to">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  /*import {Notification} from 'element-ui'*/
  export default {
    methods: {
      goBack() {
        console.log('go back');
      },
      /*fun1(){
        Notification({title:'tishi',message:'msddff',duration:0});
      }*/
    }
  }
</script>

<style lang="scss">
  .v-enter{
    opacity:0;
    transform:translateX(100%);
  }
  .v-leave-to{
    opacity:0;
    transform: translateX(-100%);
    position:absolute;/*离开的动画绝对定位，为进来的动画腾出空间*/
  }
  .v-enter-active,.v-leave-active{
    transition:all 0.5s ease;
  }
  .my-container{
    padding-top: 24px;
    overflow-x:hidden;
  }
  .el-page-header{
    position:fixed;
    background-color: green;
    width: 100%;
  }

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
