import React, { Component, PureComponent } from 'react'
import { config } from './service/config'
import { Button } from 'antd'

export default class User extends PureComponent {


  render() {    return (
      <div style={{display: "grid", gridTemplateColumns: "repeat(6,auto)", gap: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingRight: "10px",
      paddingLeft: "10px"
       }}>

        {config.map((ele) => {
            let text = "empty"
            if(this.props.user != null  && this.props.user[ele.key] != null) {
                    text = this.props.user[ele.key] 
            }
            return (<div>{text}</div>)
        })}
        <Button type="primary" size='small' onClick={() => this.props.editUser(this.props.index)}>Edit</Button>
        <Button danger type="primary" size='small' onClick={() => this.props.deleteUser(this.props.index)}>Delete</Button>
      </div>
    )
  }
}
