import { css } from "@emotion/css";
import { registerStyle, registerTemplate } from "dmeditor";

registerStyle({
    blocktype: 'heading',        
    identifier:'Sample', 
    name:'Sample template', 
    css:css`background:#ffcc00; 
    margin-top: var(--dme-common-margin-top);
    h2{
        text-align:center;
    }`
 }
);