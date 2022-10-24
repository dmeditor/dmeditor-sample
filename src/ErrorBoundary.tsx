import { env } from 'process';
import React, { Component } from 'react';
import config from './dm.json';
import { Login } from './Login';

export default class ErrorBoundary extends React.Component<any, {error:any, errorInfo:any}> {
  constructor(props:any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error:any, errorInfo:any) {
    if( error.code=='0001' && window.location.pathname == process.env.PUBLIC_URL+ config.default_url ){
      window.location.href = process.env.PUBLIC_URL+'/login';
      return;
    }
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    let error = this.state.error;
    //todo: support different error hierarchy: 1) app level error. eg. refresh token expired.  2) view level eg. no access to a content/action.
    // maybe need different error boundary components / error types.
    if (this.state.errorInfo) {
      return (
        <div className="error-main alert alert-warning">
          <div>{error&&<div>
            {error.code=='0001'&&<div>
                <Login />
            </div>}
            </div>}</div>
        </div>
      );
    }

    return this.props.children;
  }
}