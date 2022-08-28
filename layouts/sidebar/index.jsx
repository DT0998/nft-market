import React, { forwardRef } from "react";
import classes from "./sidebar.module.css";
import Link from "next/link";
import { Space, Menu } from "antd";
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

function SideBar(props, ref) {
  const { collapsed } = props;
  return (
    <React.Fragment>
      <div className={classes.sidebar}>
        <Menu mode="inline" defaultSelectedKeys="home" theme="dark">
          {/* logo */}
          <div className={classes.logo_container}>
            <div className={classes.logo}>
              <Image src={logo} alt="logo" />
            </div>
          </div>
          {/* home */}
          <Menu.Item eventKey="home" ref={ref}>
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
          <Menu.Item eventKey="dashboard" ref={ref}>
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
          <Menu.Item eventKey="explore" ref={ref}>
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
          <Menu.Item eventKey="stats" ref={ref}>
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
          <Menu.Item eventKey="create" ref={ref}>
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
