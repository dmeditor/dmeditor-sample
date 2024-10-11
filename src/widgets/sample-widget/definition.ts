import { nanoid } from "nanoid";

import { generalSettings } from "dmeditor";

export const sampleWidgetDef = {
  type: "sample",
  name: "Sample widget",
  category: "sample",
  icon: "A",
  settings: [
    {
      name: "Text",
      settingComponent: "input",
      property: ".text",
    },
    {
      name: "Inside background",
      settingComponent: "color",
      category: "style",
      parameters: {
        colorGroup: "background",
      },
      property: "settings.insideBackground",
    },
    {
      name: "Width",
      settingComponent: "setting_input",
      category: "style",
      property: "settings.width",
    },
    ...generalSettings,
  ],
  events: {
    createBlock: () => ({
      id: nanoid(),
      type: "sample",
      data: {
        text: "Sample text",
        settings: {
          width: 300,
          insideBackground: "#cccccc",
          general: {
            background: "#FFFDDB",
          },
        },
      },
    }),
  },
};
