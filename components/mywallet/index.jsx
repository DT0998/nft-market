import React from "react";
import { Avatar, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import classes from "./MyWallet.module.css";
import { UserOutlined } from "@ant-design/icons";
import WalletOption from "../WalletOption";
// redux
import { selectorToggleMenu, toggleMenu } from "../../redux/layout/Menu/slice";
import { selectorAccounts } from "../../redux/layout/MyWallet/slice";

function MyWallet() {
  const dispatch = useDispatch();
  const visible = useSelector(selectorToggleMenu);
  const accountAddress = useSelector(selectorAccounts);
  // close menu
  const onClose = () => {
    dispatch(toggleMenu());
  };
  // short account address
  const shortAddress =
    accountAddress.slice(0, 6) + "..." + accountAddress.slice(-4);
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
              {accountAddress && <div>{shortAddress}</div>}
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
