import { Grid4x4Outlined } from "@mui/icons-material";
// @ts-ignore
import { registerTool, registerCategory } from "dmeditor/ToolDefinition";
import { toolContentGallery } from "./dmeditor_content/Gallery";


registerCategory({identifier:'content', text:'Content'});

registerTool(toolContentGallery);