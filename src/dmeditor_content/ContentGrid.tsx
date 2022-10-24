import { Grid4x4Outlined } from "@mui/icons-material";
//@ts-ignore
import { ToolRenderProps } from "dmeditor/ToolDefinition";

import Browse from 'digimaker-ui/Browse';
//@ts-ignore
import util from 'digimaker-ui/util'


const ContentGrid = (props:ToolRenderProps) =>{
    console.log(util.getConfig());
    console.log(Browse);
    return <div>
    {props.adding&&<div>
        <Browse config={util.getConfig().browse} multi={true} trigger={true} selected={null} contenttype={['image']} onConfirm={()=>{}} />
        </div>}
    </div>
}

export const  toolContentGrid =   { 
    type: "content_grid",
menu: {
  text: "Content grid",
  category: "content",
  icon: <Grid4x4Outlined />,
},
initData: {type:'content_grid', content:{contentType:'article', columns:3, max:12}},
render: (props:ToolRenderProps)=> <ContentGrid {...props} /> }