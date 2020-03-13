import { Component, Vue } from 'vue-property-decorator';
import { CellGroup, Field, Form, Button } from 'vant';
import { Action } from 'vuex-class';

const namespace = 'user';

@Component({
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
  },
})
export default class Login extends Vue {
  public username: string = '';
  public password: string = '';

  @Action('login', { namespace }) public login: any;

  public onSubmit(values: any) {
    this.login(values).then((code: number) => {
      if (code) {
        const path: any = this.$route.query.redirect || '/';
        this.$router.replace(path);
      }
    });
  }

}
