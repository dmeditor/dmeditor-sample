import { css } from "@emotion/css";
import { registerTemplate } from "dmeditor";

registerTemplate({
    blocktype: 'heading',        
    identifier:'Sample', 
    name:'Sample template', 
    css:css`background:#ffcc00; 
    h2{
        text-align:center;
    }`,
    initData: ()=>{
      const data = {type:'heading', settings:{level: 2}};
      return {...data, data:'Hello1', common:{color: '#9C27B0' }}
    }
 }
);