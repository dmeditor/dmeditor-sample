import { BrowseGalleryOutlined, CollectionsOutlined, Grid4x4Outlined } from "@mui/icons-material";
//@ts-ignore
import { ToolRenderProps } from "dmeditor/ToolDefinition";
import {BlockProperty} from 'dmeditor/BlockProperty';
import {PropertyGroup, PropertyItem} from 'dmeditor/utils/Property';
import { Ranger } from "dmeditor/utils/Ranger";

import Radio from '@mui/material/Radio';

import Browse from 'digimaker-ui/Browse';
//@ts-ignore
import util,{FetchWithAuth} from 'digimaker-ui/util'
import { useEffect, useState } from "react";
import { Button, FormControlLabel, RadioGroup } from "@mui/material";


const Gallery = (props:ToolRenderProps) =>{
    const [ids, setIds] = useState(props.data.content as any);
    const [list, setList] = useState([] as any);
    const [sourceType, setSourceType] = useState('fixed');
    const [columns, setColumns] = useState(props.data.settings.columns);

    const onConfirm = (list:any)=>{
        let ids:Array<any> = [];
        for(var item of list){
            ids.push(item.cid);
        }
        setList(list);
        let data = props.data;
        props.onChange({...data, content: ids});
    }

    useEffect(()=>{
        if( ids.length > 0 ){
            FetchWithAuth(process.env.REACT_APP_REMOTE_URL+'/content/list/image?cid='+ids.join(',')).then(data=>{
                setList(data.data.list);
            });
        }
    },[]);

    return <div>
    <BlockProperty active={props.active}>
        <PropertyGroup header='Settings'>
            <PropertyItem label='Columns'>
                <Ranger min={1} max={6} defaultValue={columns} onChange={v=>setColumns(v)} />
            </PropertyItem>
            <PropertyItem label='Source'>
            <RadioGroup value={sourceType} onChange={e=>setSourceType(e.target.value)}>
                <FormControlLabel value="fixed" control={<Radio size="small" />} label="Fixed" />
                <FormControlLabel value="dynamic" control={<Radio size="small" />} label="Dynamic" />
                </RadioGroup>
                <Button>Choose</Button>
            </PropertyItem>
        </PropertyGroup>
    </BlockProperty>
    {props.adding&&<div>
        <Browse config={util.getConfig().browse} multi={true} trigger={true} selected={[]} contenttype={['image']} onConfirm={onConfirm} />
        </div>}

    {list.length===0&&<div className="empty-message">Please select images</div>}
    <div className={"dm-columns columns-"+columns}>
        {list.map(item=><div style={{display:'inline-block'}} className='gallery-image'><img src={process.env.REACT_APP_ASSET_URL+'/'+item.image}></img></div>)}
    </div>
    </div>
}

export const  toolContentGallery =   { 
    type: "content_gallery",
menu: {
  text: "Gallery",
  category: "content",
  icon: <CollectionsOutlined />,
},
initData: {type:'content_gallery', content:[], settings:{contentType:'image', columns:3}},
render: (props:ToolRenderProps)=> <Gallery {...props} /> }