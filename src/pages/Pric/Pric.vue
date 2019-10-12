<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in img" :key="item.index">
      <img :src="item.imgs" alt="" srcset="">  
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    data(){
        return{
            "img":[
                {
                    id:1,
                    imgs:"http://images.hisupplier.com/var/userImages/201803/05/135050222266_s.jpg"
                },
                {
                    id:2,
                    imgs:"http://images.hisupplier.com/var/userImages/201803/05/135050222266_s.jpg"
                },
                {
                    id:3,
                    imgs:"http://images.hisupplier.com/var/userImages/201803/05/135050222266_s.jpg"
                },
            ]
        }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    /* line-height: 200px; */
    margin: 0;
  }
</style>