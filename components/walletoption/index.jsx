import React from "react";
import classes from "./WalletOption.module.css";
import { Row, Col } from "antd";
import Image from "next/image";
// icons
import metamask from "../../assets/images/walletoption/metamask-alternative.png";
import { useSelector, useDispatch } from "react-redux";
import { loginMetamask } from "../../redux/layout/MyWallet/slice";
function WalletOption() {
  const dispatch = useDispatch();
  const connectMetamask = () => {
    dispatch(loginMetamask());
  };

  return (
    <React.Fragment>
      <Row align="middle">
        <li
          className={`${classes.btn_wallet} ${classes.btn_walletfirst}`}
          onClick={connectMetamask}
        >
          <Col>
            <div className={classes.wallet_connect}>
              <div className={classes.logo}>
                <Image src={metamask} alt="metamask" />
              </div>
              Metamask
            </div>
          </Col>
          <Col className={classes.network}>Popular</Col>
        </li>
      </Row>
      <Row align="middle">
        <li className={classes.btn_wallet}>
          <Col>
            <div>logo Metamask</div>
          </Col>
          <Col>Popular</Col>
        </li>
      </Row>
      <Row align="middle">
        <li className={classes.btn_wallet}>
          <Col>
            <div>logo Metamask</div>
          </Col>
          <Col>Popular</Col>
        </li>
      </Row>
      <Row justify="center">
        <li className={`${classes.btn_showmore} ${classes.btn_walletlast}`}>
          <Col>
            <div>Show more options</div>
          </Col>
        </li>
      </Row>
    </React.Fragment>
  );
}

export default WalletOption;
