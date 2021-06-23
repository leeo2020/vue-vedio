<template lang="html">
  <div class="tarbar-wrapper">
    <van-tabbar v-model="active" route fixed class="tarbar">
      <van-tabbar-item replace to="/" name="home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/find" name="search" icon="search">发现</van-tabbar-item>
      <van-tabbar-item replace to="/cart" name="friends" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item replace :to="isLogin?'/user':'/login'" name="setting" icon="setting-o">{{isLogin?'用户中心':'登录'}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name:'Layout',
  components:{
    [ Tabbar.name]: Tabbar,
    [ TabbarItem.name]: TabbarItem,
  },
  data(){
    return {
      active:'home',
      isLogin:false
    }
  },
  mounted(){
    this.isLogin=localStorage.getItem('vue3shoptoken')
    console.log('this.isLogin',this.isLogin)
  },
  activated(){
    this.isLogin=localStorage.getItem('vue3shoptoken')
  }
}
</script>

<style lang="scss" scoped>

</style>
