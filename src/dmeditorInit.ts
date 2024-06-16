import { registerDefaultWidgets, setDMEditorConfig } from "dmeditor";

export const dmeditorInit = () => {
  registerDefaultWidgets();

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
      defaultStyle: {
        heading: { _: "theme" },
        button: { _: "project-primary" },
      },
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
