import list from "./components/list/index";
import sbutton from "./components/SButton/index";

import BeeGridTable from "beegridtable";
import BeeLocale from "beegridtable/src/locale";
import "beegridtable/dist/styles/beegridtable.css";

const components = [list, sbutton];

const install = (Vue) => {
  if (install.installed) return;
  install.installed = true;

  Vue.use(BeeGridTable, {
    locale: BeeLocale,
    capture: true,
  });
  components.map((component) => Vue.component(component.name, component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};
