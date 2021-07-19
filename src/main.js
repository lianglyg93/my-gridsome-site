// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from "vue";
import DefaultLayout from "~/layouts/Default.vue";
import ElementUI from "element-ui";
import moment from "moment";
import MarkdownIt from "markdown-it";
import "element-ui/lib/theme-chalk/index.css";
import "~/assets/css/index.css";
Vue.use(ElementUI);

const md = new MarkdownIt();

export default function(Vue, { router, head, isClient }) {
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL,
      };
    },
    methods: {
      getHtmlWrap(markdown) {
        return md.render(markdown);
      },
    },
    filters: {
      getDate: function(day) {
        return moment().format("YYYY-MM-DD HH:mm:ss");
      },
    },
  });
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
