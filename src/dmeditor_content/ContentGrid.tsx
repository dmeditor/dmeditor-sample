import { BrowseGalleryOutlined, GridViewOutlined, Grid4x4Outlined,ArrowUpwardOutlined,ArrowDownwardOutlined} from "@mui/icons-material";
//@ts-ignore
import { ToolRenderProps } from "dmeditor/ToolDefinition";
import {BlockProperty} from 'dmeditor/BlockProperty';
import {PropertyGroup, PropertyItem} from 'dmeditor/utils/Property';
import { Ranger } from "dmeditor/utils/Ranger";
import Radio from '@mui/material/Radio';

import Browse from 'digimaker-ui/Browse';
import DMInit from 'digimaker-ui/DMInit';
//@ts-ignore
import util,{FetchWithAuth} from 'digimaker-ui/util'
import { useEffect, useState,useRef } from "react";
// import { Button, FormControlLabel, RadioGroup,Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText} from "@mui/material";
import {IconButton,Input,TextField,Select,MenuItem, ToggleButtonGroup,ToggleButton, Button, FormControlLabel, RadioGroup,Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText,styled, Stack,Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const ContentGrid = (props:ToolRenderProps) =>{
  console.log("props===>",props)
    const [ids, setIds] = useState(props.data.content as any);
    const [sourceType, setSourceType] = useState('fixed');
    const [list, setList] = useState([] as any);
    const [space, setSpace] = useState(props.data.settings.space);    
    const [columns, setColumns] = useState(props.data.settings.columns);
    const [adding, setAdding] = useState(!props.adding);

    const [open, setOpen] = useState(true);
    const [limit, setLimit] = useState(10);
    const [sortby, setSortby] = useState(["priority desc", "published desc"]);
    const [isChange, setisChange] = useState(false);
    const [currentList, setCurrentList] = useState({id:'',parent_id:''});
    const limitInputRef:any = useRef(null)
    let level=10;
    let sortbyArr=[{type1:'priority',type2:'desc'}, {type1:'published',type2:'desc'}]

    const handleClickOpen = () => {
      setOpen(true);
      setAdding(true);
      setAdding(false);
      setTimeout(()=>{setAdding(true);},10)
      restData();

    };
    const restData = ()=>{
      setSortby(["priority desc", "published desc"])
      setCurrentList({id:'',parent_id:''})
    }
  
    const handleClose = (event?, reason?) => {
      if (reason && reason === "backdropClick") 
      return;
      setOpen(false);
      props.onCancel();
    };

    

    const onConfirm = (list:any)=>{
      if(!((list??'')!=='')){
        alert('Please select a file  before confirm')
       return      
      }
      let idsArray:Array<any> = [];
      for(var item of list){
        idsArray.push(item.id);
      }
      setIds(idsArray)
      setAdding(false);
      setisChange(!isChange);
      let data = props.data;
      props.onChange({...data, content: idsArray});
    }

    const onConfirmInline = (list:any)=>{
      setCurrentList(list);
    }

    const onConfirmDynamic = ()=>{
      if(!((currentList.id??'')!=='')){
        alert('This is a warning alert — check it out!')
        return;
      }
      let idsArray:Array<any> = [];
      idsArray.push(currentList.id);
      setIds(idsArray)
      setAdding(false);
      setisChange(!isChange);
      setLimit(limitInputRef.current.firstChild.firstChild.value)
      let data = props.data;
      let settings={contentType:'article', columns:3, max:limitInputRef.current.firstChild.firstChild.value, source:{type:'dynamic', parent:currentList.id, sortby:sortby }};
        props.onChange({...data, content:[[]],settings:{...data.settings,...settings}});
        console.log({...data, content:[[]],settings:{...data.settings,...settings}})
     
    }

    const getList = ()=>{
      console.log("获取 数据 啦",ids,limit,sortby)
      if( ids.length > 0 ){
        if(sourceType=='fixed'){
          FetchWithAuth(process.env.REACT_APP_REMOTE_URL+'/content/list/article?id='+ids.join(',')).then(data=>{
              setList(data.data.list);
          });
        }else{
          FetchWithAuth(process.env.REACT_APP_REMOTE_URL+'/content/list/article?parent='+ids.join(',')+'&limit='+limit+'&sortby='+sortby+'&level='+level).then(data=>{
            setList(data.data.list);
          });
        }
      }
    }
    useEffect(()=>{
      getList();
    },[isChange]);


    const handleChange = (e:any,index:any) => {
      let sortbys=[...sortby]
      sortbys[index]=e.target.value+' '+sortbys[index].split(' ')[1]
      setSortby([...sortbys])
    };
    const handleSortChange =(e:any,val: any,index:any) => {
      let sortbys=[...sortby]
      sortbys[index]=sortbys[index].split(' ')[0]+' '+val
      setSortby([...sortbys])
    };
    const changeLimit = (v:any)=>{
      setLimit(v);
      let data = props.data;
      let settings={contentType:'article', columns:3, max:v, source:{type:'dynamic', parent:currentList.id, sortby:sortby }};
      props.onChange({...data, content:[[]],settings:{...data.settings,...settings}});
      setisChange(!isChange);
    }
   
    return <div>
    <BlockProperty title="Gallery" active={props.active}>
        <PropertyGroup header='Settings'>
            <PropertyItem label='Columns'>
                <Ranger min={1} max={6} defaultValue={columns} onChange={v=>setColumns(v)} />
            </PropertyItem>
            <PropertyItem label='Space'>
                <Ranger min={1} max={20} defaultValue={space} onChange={v=>setSpace(v)} />
            </PropertyItem>
            <PropertyItem label='Source'>
            <RadioGroup value={sourceType} onChange={e=>setSourceType(e.target.value)}>
                <FormControlLabel value="fixed" control={<Radio size="small" />} label="Fixed" />
                <FormControlLabel value="dynamic" control={<Radio size="small" />} label="Dynamic" />
            </RadioGroup>
                <Button onClick={handleClickOpen}>Choose</Button>
            </PropertyItem>
            {sourceType=='dynamic'&&
            <PropertyItem label='Top'>
                <Ranger min={2} max={50} value={limit} defaultValue={limit} onFinish={v=>changeLimit(v)} />
            </PropertyItem>
            }
        </PropertyGroup>
    </BlockProperty>
    {adding&&<div>
      {sourceType==='fixed'?
      <Browse config={util.getConfig().browse}  multi={true} trigger={true} selected={""} contenttype={['article']} onCancel={props.onCancel} onConfirm={onConfirm} /> 
     :
      <Dialog 
        fullWidth={true}
        maxWidth={'md'}
        onClose={handleClose}
        open={open}>
          <DialogTitle>Select
            {(
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </DialogTitle>
        <DialogContent>
          <Browse config={util.getConfig().browse} inline={true} multi={false} trigger={true} selected={""} contenttype={['folder']} onCancel={props.onCancel} onConfirm={onConfirmInline}/>
          <div style={{display:"flex"}}>
            <label style={{width:'60px'}}>Order:</label>
            <div>
              {sortbyArr.map((item,index)=>{
                return (
                  <div style={{display:"flex",margin:'0  0 10px 10px'}}>
                    <Select
                      sx={{ minWidth: 300,marginRight:'10px'}}
                      size="small"
                      defaultValue={item.type1}
                      value={sortby.length>0?sortby[index].split(' ')[0]:item.type1}
                      onChange={(e)=>{handleChange(e,index)}}
                    >
                      <MenuItem value={"priority"}>priority</MenuItem>
                      <MenuItem value={'published'}>published</MenuItem>
                      <MenuItem value={'modified'}>modified</MenuItem>
                    </Select>
                    <ToggleButtonGroup
                      value={sortby.length>0?sortby[index].split(' ')[1]:item.type2}
                      exclusive
                      onChange={(e,val)=>handleSortChange(e,val,index)}
                      aria-label="text alignment"
                    >
                      <ToggleButton value="desc" >
                        <ArrowUpwardOutlined />
                      </ToggleButton>
                      <ToggleButton value="asc" >
                        <ArrowDownwardOutlined />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                )
              })}
            
            </div>
          </div>
          <div>
            <label style={{width:'60px'}}>Top:</label>
            <TextField ref={limitInputRef} sx={{marginLeft:'10px'}} size="small" variant="outlined" defaultValue={'10'} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onConfirmDynamic} autoFocus> Confirm</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
     }
    </div>}
      
    {(ids.length===0||list.length==0)&&<div className="empty-message">Please select Content</div>}
    
    <div className={"dm-columns columns-"+columns}>
        {list.map(item=><div style={{display:'inline-block', paddingLeft:space, paddingTop: space}} className='gallery-image'>
          <div className={'title'}>{item.title}</div>
          <div>{item.summary}</div>
        </div>)}
    </div>
    </div>

}

export const  toolContentGrid =   { 
    type: "content_grid",
    menu: {
      text: "Content grid",
      category: "content",
      icon: <GridViewOutlined />,
    },
initData: {type:'content_grid', content:[], settings:{contentType:'article', columns:3, space:5}},
render: (props:ToolRenderProps)=> <ContentGrid {...props} /> }