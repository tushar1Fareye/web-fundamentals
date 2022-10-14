import React, { Component } from 'react';
import { Button, Drawer, Form, Input } from 'antd';
import { config } from './service/config';
import User from './User';
import UserForm from './UserForm';
import cloneDeep from 'lodash/cloneDeep';

export default class ShowUsers extends Component {


    constructor() {
        super();
        this.state = {
            formOpen: false,
            users: [],
            userEdit: {
            } 
        }
    }


    showDrawer = () => {
        let formOpen = true;
        this.setState({formOpen});
      };

    onClose = () => {
        let formOpen = false;
        this.setState({formOpen});
      };

    onFinish = (values) => {
        let users = cloneDeep(this.state.users);
        users.push(values);
        let userEdit = [];
        let formOpen = false;
        this.setState({users, userEdit, formOpen});
      };

    editUser = (index) => {
        let userEdit = cloneDeep(this.state.users[index]);
        this.deleteUser(index);
        console.log(userEdit);
        this.setState({userEdit});
        this.showDrawer();
    };

    deleteUser = (index) => {
        let users = cloneDeep(this.state.users);
        users.splice(index,1);
        this.setState({users});
    };


  render() {
    return (
        <div>
            <Button type="primary" onClick={this.showDrawer}>
        Add a user
      </Button>
      {
        this.state.users.map((user, index) => {
            return (<User user={user} index={index} editUser={this.editUser} deleteUser={this.deleteUser}/>);
        })
      }



      <Drawer title="Basic Drawer" placement="right" onClose={this.onClose} open={this.state.formOpen}>
        {this.state.formOpen &&<UserForm onClose={this.onClose} userEdit={this.state.userEdit} showDrawer={this.showDrawer} onFinish={this.onFinish} ></UserForm>}
      </Drawer>
      </div>
    )
  }
}
