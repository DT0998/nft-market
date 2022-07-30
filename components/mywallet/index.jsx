import React from "react";
import { Avatar, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import classes from "./mywallet.module.css";
import { UserOutlined, CloseCircleFilled } from "@ant-design/icons";
import { selectorToggleMenu, toggleMenu } from "../../store/layout/menu/slice";
import WalletOption from "../walletoption";

function MyWallet() {
  const dispath = useDispatch();
  const visible = useSelector(selectorToggleMenu);
  const onClose = () => {
    dispath(toggleMenu());
  };
  return (
    <React.Fragment>
      <aside
        className={`${classes.mywallet} ${visible ? "" : classes.inactive}`}
      >
        <React.Fragment>
          <ul className={classes.mywallet_list}>
            <div className={classes.mywallet_title}>
              <Space>
                <Avatar size={30} icon={<UserOutlined />} />
                <span>My wallet</span>
              </Space>
              <div onClick={onClose}>
                <CloseCircleFilled className={classes.close} />
              </div>
            </div>
            <div className={classes.mywallet_space}>
              <Space direction="vertical">
                <span>
                  If you dont have a wallet yet, you can select a provider and
                  create one now.
                </span>
                <div>
                  <WalletOption />
                </div>
              </Space>
            </div>
          </ul>
        </React.Fragment>
      </aside>
      {visible && (
        <div
          className={`${classes.mywallet_overlay} ${
            visible ? "" : classes.inactive
          }`}
          onClick={onClose}
        />
      )}
    </React.Fragment>
  );
}

export default MyWallet;
