/**
 * 
 * 
 * Use in DM Editor:
 * 
 import { defaultStyles } from './defaultStyles';

 for (const widget of Object.keys(defaultStyles)) {
    registerWidgetStyleOption(widget, [defaultStyles[widget]]);
 }
 */

 export const preDefinedStyles = {
    heading:[{
        identifier:'_default', 
        name:'Default',
        cssClasses:{
            h3:'text-2xl font-bold',
            h2:'text-3xl font-bold',
            h1:'text-4xl font-bold',            
        },
        cssStyle:``
    },    
    {
        identifier:'leftborder', 
        name:'Left border',
        settings: { "settings.general.marginTop": { value: 10 },  "settings.general.padding": { value: 10, status: 'disabled' }, "settings.general.background": { value: '#ffcc00' } },
        cssClasses:{
            root:'border-l-8 border-blue-800 pl-2',
            h2:'text-3xl font-bold',
        },
        cssStyle:``
    },
    
],

    tabs:[{
            identifier:'_default', 
            name:'Default',
            cssClasses:{
                nav:'pl-2',
                active: '-mb-px font-medium border-t border-b border-b-white border-neutral-200 border-x rounded-t-sm text-primary-t',
                'nav-item':'py-1 px-6',
                body: 'border border-border-main p-4'
            },
            cssStyle:`
            `
        },
    ],
    table:[{
        identifier: '_default',
        name: 'Default',
        cssStyle:`
            .dme-viewmode-mobile & {
                max-width: 100%;
                overflow: auto;
            }
        `
    }],
    text: [{
        identifier: 'paragraph',
        name: 'Paragraph',
        cssStyle:`
           p{
             margin-top: 10px;
           }
        `    
    },
    {
        identifier: 'alert-info',
        name: 'Alert - info',
        cssClasses:{root: 'bg-green-100 border-l-4 border-green-500 text-green-700 p-4 text-sm'},
        cssStyle:`          
        `    
    },
    {
        identifier: 'alert-warning',
        name: 'Alert - warning',
        cssClasses:{root: 'bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 text-sm'},
        cssStyle:`          
        `    
    }],
    gallery:[{
        identifier: '_default',
        name: 'Default',
        cssStyle:`           
            .dme-w-pagination-container{
                margin-top: 20px;
            }

            .dme-w-pagination-item{
              padding: 5px 10px;
              border: 1px solid #cccccc;
              margin-left: 5px;
              display:inline-block;
             margin-bottom: 10px;
            }

            .dme-w-indicator{
                font-size: 14px;
                color: white;
                text-shadow: 1px 1px 1px #333333;
            }

            .dme-w-pagination-item-current{
              font-weight: bold;
            }            
        `
    }],
    sample:[
        {
            identifier: '_default',
            name: 'Default',
            cssClasses: '',
            cssStyle:``,
        },
        {
            identifier: 'big',
            name: 'Big padding',
            cssClasses: {root: 'p-4',text: 'text-2xl'},
            cssStyle:``,
        }
                    
    ]
}