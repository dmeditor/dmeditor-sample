import { css } from "@emotion/css";
import { Input, Slider } from "@mui/material";
import { BlockProperty, ToolDefinition, ToolRenderProps } from "dmeditor";

import {PropertyGroup, PropertyItem, Ranger} from 'dmeditor/utils';
import { useState } from "react";

//Implementation
export const SampleWidget = (props:ToolRenderProps)=>{
   ///add status control here
   const [width, setWidth] = useState(300);

    return <div>
    {/* property */}           
            <BlockProperty blocktype={'sample'}>
                <PropertyItem label="Width">       
                    <Slider aria-label="Width" valueLabelDisplay="auto" defaultValue={width} step={5} max={800} onChange={(e, v)=>setWidth(v as number)} />             
                </PropertyItem>               
            </BlockProperty>

            <div style={{width: width}} className={css`height:300px; background:#ffe3e3`}>
            {props.data.data} <br />
            Width: {width}</div>        
            </div>
}


//Define toolSampleWidget
export const toolSampleWidget:ToolDefinition = {
    type: 'sample',
    name: 'Sample widget',
    menu:  {category:'basic',icon: <span>A</span> },
    initData: ()=>{return {type:'sample', data:'This is a sample.', settings:{}}},
    render: (props:ToolRenderProps)=><SampleWidget {...props} />
}