import { env } from 'process';
import React, { Component } from 'react';
import { Login } from './Login';

export default class ErrorBoundary extends React.Component<any, {error:any, errorInfo:any}> {
  constructor(props:any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error:any, errorInfo:any) {
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
        <div>
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