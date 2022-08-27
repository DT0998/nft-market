import React, { useState } from "react";
import classes from "./layout.module.css";
import SideBar from "./sidebar";
import { Layout } from "antd";
import HeaderMenu from "./header";
import MyWallet from "../components/mywallet";
const { Header, Sider, Content, Footer } = Layout;

function LayoutApp(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <React.Fragment>
      <Layout>
        <div className={classes.menu_left}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className={classes.sider}
          >
            <SideBar collapsed={collapsed} />
          </Sider>
        </div>
        <Layout className={classes.menu_right}>
          <Header className={classes.header}>
            <HeaderMenu />
          </Header>
          <MyWallet />
          <Content className={classes.content}>{props.children}</Content>
          <Footer className={classes.footer}>Footer</Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}
export default LayoutApp;
