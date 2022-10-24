import { BrowseGalleryOutlined, CollectionsOutlined, Grid4x4Outlined } from "@mui/icons-material";
//@ts-ignore
import { ToolRenderProps } from "dmeditor/ToolDefinition";

import Browse from 'digimaker-ui/Browse';
//@ts-ignore
import util from 'digimaker-ui/util'


const Gallery = (props:ToolRenderProps) =>{

    const onConfirm = (d:any)=>{
        console.log(d);
    }

    return <div>
    {props.adding&&<div>
        <Browse config={util.getConfig().browse} multi={true} trigger={true} selected={[]} contenttype={['image']} onConfirm={onConfirm} />
        </div>}
    </div>
}

export const  toolContentGallery =   { 
    type: "content_gallery",
menu: {
  text: "Gallery",
  category: "content",
  icon: <CollectionsOutlined />,
},
initData: {type:'content_gallery', content:{contentType:'image', columns:3, max:12}},
render: (props:ToolRenderProps)=> <Gallery {...props} /> }