import React, { forwardRef } from "react";
import classes from "./sidebar.module.css";
import Link from "next/link";
import {Space,Menu } from "antd";
// icons
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import {
  MdDashboard,
  MdHome,
  MdTravelExplore,
  MdQueryStats,
} from "react-icons/md";
import { BsCardImage } from "react-icons/bs";

function SideBar({ collapsed }, ref) {
  return (
    <React.Fragment>
      <div className={classes.sidebar}>
        {/* logo */}
        <div className={classes.logo_container}>
          <div className={classes.logo}>
            <Image src={logo} alt="logo" />
          </div>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["home"]}
          className={classes.menu}
          theme="dark"
        >
          {/* home */}
          <Menu.Item key="home" ref={ref}>
            <Link href="/" passHref>
              <a>
                <Space size="middle">
                  <MdHome className={classes.items} />
                  {!collapsed && <div className={classes.items}>Home</div>}
                </Space>
              </a>
            </Link>
          </Menu.Item>
          {/* dashboard */}
          <Menu.Item key="dashboard" ref={ref}>
            <Link href="/dashboard" passHref>
              <a>
                <Space size="middle">
                  <MdDashboard />
                  {!collapsed && "Dashboard"}
                </Space>
              </a>
            </Link>
          </Menu.Item>
          {/* explore */}
          <Menu.Item key="explore" ref={ref}>
            <Link href="/explore" passHref>
              <a>
                <Space size="middle">
                  <MdTravelExplore />
                  {!collapsed && "Explore"}
                </Space>
              </a>
            </Link>
          </Menu.Item>
          {/* stats */}
          <Menu.Item key="stats" ref={ref}>
            <Link href="/stats" passHref>
              <a>
                <Space size="middle">
                  <MdQueryStats />
                  {!collapsed && "Stats"}
                </Space>
              </a>
            </Link>
          </Menu.Item>
          {/* create */}
          <Menu.Item key="create" ref={ref}>
            <Link href="/create" passHref>
              <a>
                <Space size="middle">
                  <BsCardImage />
                  {!collapsed && "Create"}
                </Space>
              </a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </React.Fragment>
  );
}

export default forwardRef(SideBar);
