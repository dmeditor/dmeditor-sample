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

registerStyle({
    blocktype: 'list',        
    identifier:'image-text-grid', 
    name:'Image center', 
    css:css`
    text-align:center;
    background: #ecf2ff;
    .dme-blocktype-text{
        color: #121938;
    }
    .dme-blocktype-image{
        padding: 5px 0px 10px 0px;
    }

    .dme-blocktype-heading{
        background-color: white;
        color: #0690da;
        padding: 10px 0px 30px 0px;
    }

    .dm-columns{
        border-top: 1px solid #d7e4ff;
    }

    .dm-columns > div:not(:last-child){
        border-right: 1px solid #d7e4ff;
    }

    .dme-blocktype-image img{
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 40px;
    }
    `
 }
);

registerTemplate({
    blocktype: 'list',        
    id:'image_grid', 
    name:'Production introduction grid', 
    data:{type: 'list',
            style:'image-text-grid',
            children: [
                {type:'heading', 
                settings:{level:2},
                common: {textAlign:'center'},
                data:'Our latest product'},
                {type:'grid',
                 settings:{ columns: 4},
                 children:[
                    {type: 'list',
                    style:'image-center',
                    children:[
                        {type:'image',                         
                        data:{url:'https://cdn.jsdelivr.net/gh/dmeditor/templates@main/forsythia_1280.jpg'}},
                        {"type":"text", id:'a2', "data":[
                            {type:"paragraph","children":[
                                {"text":"Good user interface"}
                            ]},           
                        ]
                        }
                    ]},
                    {type: 'list',
                    style:'image-center',
                    children:[
                        {type:'image', 
                        data:{url:'https://cdn.jsdelivr.net/gh/dmeditor/templates@main/prague-1280.jpg'}},
                        {"type":"text", id:'a2', "data":[
                            {type:"paragraph","children":[
                                {"text":"Extensibility"}
                            ]},           
                        ]
                        }
                    ]},
                    {type: 'list',
                    style:'image-center',
                    children:[
                        {type:'image', 
                        data:{url:'https://cdn.jsdelivr.net/gh/dmeditor/templates@main/forsythia_1280.jpg'}},
                        {"type":"text", id:'a2', "data":[
                            {type:"paragraph","children":[
                                {"text":"Solid"}
                            ]},           
                        ]
                        }
                    ]},
                    {type: 'list',
                    style:'image-center',
                    children:[
                        {type:'image', 
                        data:{url:'https://cdn.jsdelivr.net/gh/dmeditor/templates@main/prague-1280.jpg'}},
                        {"type":"text", id:'a2', "data":[
                            {type:"paragraph","children":[
                                {"text":"Enterprise use"}
                            ]},           
                        ]
                        }
                    ]}
                 ]
                }
        ]          
    }
 }
);