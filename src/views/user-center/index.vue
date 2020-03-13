<template>
  <div class="user-center">
    <div class="header">
      <van-image
        round
        class="avator"
        width="60px"
        height="60px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="user-info">
        <p>HouEasy</p>
      </div>
    </div>
    <div class="user-list">
      <van-cell-group>
        <van-cell title="单元格" is-link />
        <van-cell v-if="isLogin" is-link icon="play-circle-o" title="退出" @click="loginOut"></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script src="./index.ts"></script>
<style lang="scss" scoped>
@import 'style.scss';
</style>