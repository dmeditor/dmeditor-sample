import * as React from 'react'
import { Component } from 'react'
import { Page } from '../../components/page'
import {DMEditorView} from 'dmeditor';


export default class Index extends Component<{data?:any},{}> {   
render() {
  
    return (
      <Page>
        <DMEditorView
                data={this.props.data}
        />
      </Page>
    );
  }
} 