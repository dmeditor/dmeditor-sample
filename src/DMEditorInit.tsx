import { Grid4x4Outlined } from "@mui/icons-material";
// @ts-ignore
import { registerTool, registerCategory } from "dmeditor/ToolDefinition";
import { toolContentGrid } from "./dmeditor_content/ContentGrid";

export const DMEditorInit = ()=>{

  registerCategory({identifier:'content', text:'Content'});

  registerTool(toolContentGrid);
}
