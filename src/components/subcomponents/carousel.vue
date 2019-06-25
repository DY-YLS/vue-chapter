<template>
    <div>
        <el-carousel :interval="4000" type="card" height="200px" >
            <el-carousel-item v-for="(item,index) in images" :key="index">
                <img :class="{medium: true,full:isfull}" :src="item.img" alt="133" height="100%" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "carousel",
        props:['images','isfull']
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
    }
    .is-active{
        text-align: center;
    }
    .full{
        width:100%
    }

</style>
