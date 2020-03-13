<template>
  <div id="app">
    <van-sticky>
      <van-nav-bar :title="activeName" :left-arrow="false" />
    </van-sticky>
    <transition :name="moveDirection">
      <router-view />
    </transition>

    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" @change="onChange">
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
<script lang='ts'>
import { RouteConfig } from 'vue-router';
import { Component, Vue, Model, Watch } from 'vue-property-decorator';
import { Button, Tabbar, TabbarItem, NavBar, Sticky } from 'vant';
import { Getter, State, namespace } from 'vuex-class';

import { Tabs } from '@/store/interfaces';

const TabModule = namespace('tabs');

@Component({
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [NavBar.name]: NavBar,
    [Sticky.name]: Sticky,
  },
})
export default class App extends Vue {
  public active: string = '/home';
  public activeName: string = '首页';
  public moveDirection: string = '';

  @Getter('tabs') public tabs!: any;
  @TabModule.State('tabs') public tabsState!: any;

  constructor() {
    super();
    console.log('this is contructor.');
  }

  public mounted() {
    console.log('this is compute.', this.tabsState, this.tabs);
  }
  public onChange(path: string): void {
    console.log(path, 'this is onchange.', this.tabsState);
  }

  @Watch('$route', { immediate: true, deep: true })
  public onChangeUrl(to: RouteConfig, from: RouteConfig): void {
    if (to && from && from.name) {
      if (to.meta.index > from.meta.index) {
        this.moveDirection = 'slide-left';
      } else {
        this.moveDirection = 'slide-right';
      }
    }
    this.active = to.path;
    const current = this.tabs.find((item: Tabs) => item.path === to.path);
    if (current) {
      this.activeName = current.label;
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* 路由切换动画 */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s linear;
}

.slide-left-enter-active,
.slide-right-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.slide-right-enter {
  transform: translate(-100%);
}

.slide-right-leave-to {
  transform: translate(100%);
}

.slide-left-enter {
  transform: translate(100%);
}

.slide-left-leave-to {
  transform: translate(-100%);
}
</style>
