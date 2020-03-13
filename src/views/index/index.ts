
import { Component, Vue } from 'vue-property-decorator';
import { Image } from 'vant';
@Component({
  components: {
    [Image.name]: Image,
  },
})
export default class Index extends Vue {
}
