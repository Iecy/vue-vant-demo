import { Component, Vue } from 'vue-property-decorator';
import { Image, Cell, CellGroup, Icon } from 'vant';
import { State, namespace } from 'vuex-class';

const UserModel = namespace('user');

@Component({
  components: {
    [Image.name]: Image,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [CellGroup.name]: CellGroup,
  },
})
export default class UserCenter extends Vue {
  @UserModel.State('isLogin') public isLogin!: boolean;
  @UserModel.Action('loginOut') public loginOutAction: any;

  public loginOut(): void {
    this.loginOutAction().then((code: number) => {
      if (code) {
        this.$router.replace('/');
      }
    });
  }
}
