import { Grid4x4Outlined } from "@mui/icons-material";

import { registerTool, registerCategory } from "dmeditor";
import { toolContentGallery } from "./dmeditor_content/Gallery";
import { toolContentGrid } from "./dmeditor_content/ContentGrid";
import { toolEmbedContent } from "./dmeditor_content/EmbedContent";
import { toolCarousel } from "./dmeditor_content/Carousel";



registerCategory({identifier:'content', text:'Content'});

registerTool(toolContentGallery);
registerTool(toolContentGrid);
registerTool(toolEmbedContent);
registerTool(toolCarousel);