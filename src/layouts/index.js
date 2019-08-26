import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import styles from './index.less';
import Breadcrumbs from './Breakcrumbs';

const { Header, Sider, Content } = Layout;

class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { children } = this.props;
    return (
      <Layout className={styles.container}>
        <Sider trigger={null} className={styles.layoutScroll} collapsible collapsed={this.state.collapsed} width={256} breakpoint="lg">
          <div className={styles.logo} key="logo">
              <img
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3121033377,3057898148&fm=26&gp=0.jpg"
                alt="logo"
              />
              <h1>外卖商城</h1>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ overflow: 'hidden' }}>
          <Header className={styles.topInfo}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <div className={styles.breadMess}>
          <Breadcrumbs/>
          </div>
          <Content className={styles.content}>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
