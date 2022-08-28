import React, { useState } from "react";
import classes from "./layout.module.css";
import SideBar from "./sidebar";
import { Layout } from "antd";
import HeaderMenu from "./header";
import MyWallet from "../components/mywallet";
const { Header, Sider, Content, Footer } = Layout;
import FooterLayout from "./footer";
function LayoutApp(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState(null);
  const [trigger, setTrigger] = useState();
  return (
    <React.Fragment>
      <Layout>
        <div className={classes.menu_left}>
          <Sider
            breakpoint="lg"
            collapsible
            collapsedWidth={collapsedWidth}
            onBreakpoint={(broken) => {
              setCollapsedWidth(broken ? 0 : 70);
              setTrigger(broken ? null : "");
            }}
            onCollapse={(value) => {
              setCollapsed(value);
            }}
            collapsed={collapsed}
            trigger={trigger}
            className={classes.sider}
          >
            <SideBar collapsed={collapsed} />
          </Sider>
        </div>
        <Layout className={classes.menu_right}>
          <Header className={classes.header}>
            <HeaderMenu collapsed={collapsed} onClickMenu={setCollapsed} />
          </Header>
          <MyWallet />
          <Content className={classes.content}>{props.children}</Content>
          <Footer className={classes.footer}>
            <FooterLayout />
          </Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}
export default LayoutApp;
