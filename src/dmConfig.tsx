import { ViewSettingsType } from "digimaker-ui/DMInit";

export const getViewSettings = ( contenttype: string )=>{
    if (contenttype === "image") {
      return {
        inline_fields: ["image"],
        block_fields: ["name", "image"],
        browselist: {
          viewmode: "block",
          columns: ["name"],
          sort_default: [["published", "desc"]]
        },
      } as ViewSettingsType;
    } else {
      return {
        inline_fields: ["title"],
        browselist: {
          viewmode: "list",
          columns: ["name", "published"],
          sort_default: [["priority", "desc"]],
        },
      } as ViewSettingsType;
    } 
  }