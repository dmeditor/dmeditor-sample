import {
  initLanguage,
  registerDefaultWidgets,
  registerWidgetStyle,
  registerWidgetStyleOption,
  setDMEditorConfig,
} from "dmeditor";
import { preDefinedStyles } from "./dme_predefined_styles";
import registerSampleWidget from "../widgets/Sample-widget";
import { styles } from "./dme_styles";

export const dmeditorInit = () => {
  /** init default widget */
  registerDefaultWidgets();

  /** add custom widget */
  registerSampleWidget();

  const defaultStyleWidets = Object.keys(preDefinedStyles);
  const defaultStyleConfig: any = {};
  for (const widget of defaultStyleWidets) {
    const option = (preDefinedStyles as any)[widget];
    registerWidgetStyleOption(widget, option);
    defaultStyleConfig[widget] = { _: "_default" };
  }

  defaultStyleConfig["button"] = { type: "primary" };

  for (const widget of Object.keys(styles)) {
    for (const style of (styles as any)[widget]) {
      registerWidgetStyle(widget, style);
    }
  }

  setDMEditorConfig({
    general: {
      projectStyles: {
        default: `background: white`,
      },
    },
    editor: {
      defaultTheme: "default",
      favouriteWidgets: ["text", "button"],
      enableEditControl: true,
      categories: [{ identifier: "sample", name: "Sample" }],
      colors: {
        text: [
          { color: "#000000" },
          { color: "#333333" },
          { color: "#cccccc" },
          { color: "#ffffff" },
        ],
        border: [
          { color: "#000000" },
          { color: "#333333" },
          { color: "#666666" },
          { color: "#999999" },
          { color: "#cccccc" },
          { color: "#ffffff" },
        ],
        background: [
          { color: "#ffffff", name: "White" },
          { color: "#cccccc", name: "Light white" },
          { color: "#dddddd" },
          { color: "#ffe6de" },
          { color: "#666666" },
          { color: "#034323" },
          { color: "#433803" },
          { color: "#430318" },
          { color: "#432603" },
        ],
      },
      defaultStyle: defaultStyleConfig,
      ui: {
        "bg-editarea": "#666666",
      },
    },
    widgets: {
      heading: {},
    },
    plugins: {},
  });
};
