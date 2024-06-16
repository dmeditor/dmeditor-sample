import { registerWidgetStyle } from "dmeditor";

export const registerStyles = () => {
  registerWidgetStyle("heading", {
    identifier: "margin",
    name: "Margin",
    display: "inline-block" as any,
    options: [
      {
        identifier: "big-margin",
        name: "Big",
        settings: { "settings.general.padding": { value: 10 } },
        cssStyle: `
             margin-top: 50px;
             margin-bottom: 50px;
          `,
        icon: "",
      },
    ],
  });
};
