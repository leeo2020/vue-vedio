<template>
  <div class="home">
    <van-notice-bar
      left-icon="volume-o"
      scroll
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />
    <!-- 底部 -->
  </div>
</template>

<script>
import {NoticeBar} from 'vant'
export default {
  components:{
    [NoticeBar.name]:NoticeBar
  }
}
</script>

<style lang="scss" scoped>
.home{
  /* height:100%; */
  width:100%;
}
</style>
