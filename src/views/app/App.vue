<template>
  <div id="app">
    <!-- <van-sticky v-if="showHeaderNav">
      <van-nav-bar :title="activeName" :left-arrow="false" class="global-header-nav" />
    </van-sticky> -->
    <transition :name="moveDirection">
      <router-view />
    </transition>

    <van-tabbar 
      v-if="showFooterBar" 
      v-model="active" 
      active-color="#07c160" 
      inactive-color="#000"
    >
      <van-tabbar-item
        v-for="(tabItem, index) in tabs"
        :key="index"
        :icon="tabItem.icon"
        :to="tabItem.path"
        :name="tabItem.path"
      >{{tabItem.label}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script src="./index.ts"></script>
<style lang="scss">
@import 'style.scss';
</style>
