import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

import { sidebarData, groupKey } from './SidebarData';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

class Sidebar extends Component {
  state = {
    openKeys: [''],
    selectedKeys: [''],
    itemName: '',
    rootSubmenuKeys: groupKey
  }
  render() {
    const { openKeys, selectedKeys } = this.state;
    const SideTree = sidebarData.map(item => (
      <SubMenu 
      key={item.key} 
      title={
        <span>
          <Icon type={item.title.icon}></Icon>
          <span>{item.title.text}</span>
        </span>
      }>
      {
        item.children && item.children.map(MenuItem => (
          <Item
            key={MenuItem.key}>
            onClick={() => {
              this.setState({
                selectedKeys: [MenuItem.key]
              });
              document.title = MenuItem.text;
            }}
            <Link to={MenuItem.path}>{MenuItem.text}</Link>
          </Item>
        ))
      }
      </SubMenu>
    ));
    return (
      <Sider collapsible breakpoint="lg">
        <Menu 
        subMenuCloseDelay={0.3}   //subMenuCloseDelay={0.3}:打开延迟0.3s
        theme="dark" 
        openKeys={openKeys} 
        selectedKeys={selectedKeys}
        mode="inline"
        onOpenChange={this.OpenChange}>
        {SideTree}
        </Menu>
      </Sider>
    );
  }
  OpenChange = (openKeys) => {
    this.setState({
      openKeys
    })
  }
}

export default Sidebar;