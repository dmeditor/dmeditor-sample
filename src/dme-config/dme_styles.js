export const styles = {
  button: [
    {
      identifier: "type",
      name: "Type",
      display: "dropdown",
      options: [
        {
          identifier: "primary",
          name: "Primary",
          cssClasses: {
            button:
              "bg-blue-800 hover:text-white border border-blue-900 text-white py-2 px-4 hover:opacity-90",
          },
          cssStyle: "",
        },
        {
          identifier: "primary-outline",
          name: "Primary outline",
          cssClasses: {
            button:
              "text-button-b hover:text-button-b border border-blue-900 py-2 px-4 hover:opacity-80",
          },
          cssStyle: "",
        },
        {
          identifier: "light",
          name: "Light",
          cssClasses: {
            button:
              "text-black hover:text-black bg-neutral-200 border border-neutral-300 hover:opacity-90 py-2 px-4",
          },
          cssStyle: ``,
        },
        {
          identifier: "link",
          name: "Link",
          cssClasses: {
            button: "py-2 px-4",
          },
          cssStyle: ``,
        },
      ],
    },
    {
      identifier: "size",
      name: "Size",
      options: [
        {
          identifier: "small",
          name: "Small",
          cssClasses: { button: "text-sm" },
          cssStyle: "",
        },
        {
          identifier: "large",
          name: "Large",
          cssClasses: { button: "text-xl py-2" },
          cssStyle: "",
        },
      ],
    },
    {
      identifier: "rounded",
      name: "Rounded",
      options: [
        {
          identifier: "rounded",
          name: "Rounded",
          cssClasses: {
            button: "rounded",
          },
          cssStyle: ``,
        },
        {
          identifier: "rounded-full",
          name: "All rounded",
          cssClasses: {
            button: "rounded-full",
          },
          cssStyle: ``,
        },
      ],
    },
    {
      identifier: "icon",
      display: "dropdown",
      name: "Icon",
      options: [
        {
          identifier: "more",
          name: "More",
          cssClasses: {
            "after-icon": "button-icon icon-more",
          },
          cssStyle: ``,
        },
      ],
    },
  ],
  list: [
    {
      identifier: "background",
      name: "Background",
      options: [
        {
          identifier: "bg1",
          name: "Bg 1",
          cssClasses: {},
          cssStyle: `
            background-repeat:no-repeat;
            background-image: var(--dcp-bg1-url);
            background-size: 100% 100%;
            background-position: center;
          `,
        },
        {
          identifier: "bg2",
          name: "Bg 2",
          cssClasses: {},
          cssStyle: `
              background-repeat:no-repeat;
              background-image: var(--dcp-bg2-url);
              background-size: 100% auto;
              background-position: bottom;
            `,
        },
      ],
    },
    {
      identifier: "border",
      name: "Border",
      options: [
        {
          identifier: "border-bottom",
          name: "Bottom",
          cssClasses: {},
          cssStyle: `
            border-bottom: 1px solid var(--dcp-bg1-border-color);
          `,
        },
        {
          identifier: "border-top-bottom",
          name: "Top & Bottom",
          cssClasses: {},
          cssStyle: `
            border-top: 1px solid var(--dcp-bg1-border-color);
            border-bottom: 1px solid var(--dcp-bg1-border-color); `,
        },
      ],
    },
  ],
  grid: [
    {
      identifier: "valign",
      name: "Vertical align",
      options: [
        {
          identifier: "top",
          name: "Top",
          cssClasses: {},
          cssStyle: `
            & > div{
              align-items: flex-start;
            }
          `,
        },
        {
          identifier: "bottom",
          name: "Bottom",
          cssClasses: {},
          cssStyle: `
            & > div{
              align-items: flex-end;
            }
          `,
        },
      ],
    },
  ],
  text: [
    {
      identifier: "size",
      name: "Size",
      options: [
        {
          identifier: "small",
          name: "Small",
          cssClasses: { root: "text-sm" },
          cssStyle: `
           
          `,
        },
        {
          identifier: "larger",
          name: "Larger",
          cssClasses: {
            root: "text-lg",
          },
          cssStyle: "",
        },
        {
          identifier: "large",
          name: "Large",
          cssClasses: { root: "text-xl" },
          cssStyle: `
           
          `,
        },
      ],
    },
  ],
};
