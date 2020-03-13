import { RouteConfig } from 'vue-router';
import { Component, Vue, Watch } from 'vue-property-decorator';
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
  /** 当前活动路由 */
  public active: string = '/home';
  /** 当前活动路由title */
  public activeName: string = '首页';
  /** 切换路由行走方向 */
  public moveDirection: string = '';
  /** 是否显示头部导航 */
  public showHeaderNav: boolean = true;
  /** 是否显示底部导航 */
  public showFooterBar: boolean = true;

  @Getter('tabs') public tabs!: any;

  constructor() {
    super();
  }

  // public mounted() {}

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
    this.showNav(to.path);
  }
  private showNav(path: string) {
    /** 隐藏头部导航的路由 */
    const noHeaderPath = ['/login', '/register'];
    // 隐藏底部导航
    this.showFooterBar = !!(this.tabs.find((item: Tabs) => item.path === path));
    this.showHeaderNav = !(['/login', '/register'].some((item: string) => item === path));
  }
}
