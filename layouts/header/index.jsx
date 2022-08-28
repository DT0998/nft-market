import React from "react";
import { Col, Input, Row, Space } from "antd";
import { FaWallet } from "react-icons/fa";
import classes from "./header.module.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/layout/Menu/slice";

const { Search } = Input;

function Header() {
  const dispath = useDispatch();
  const showDrawer = () => {
    dispath(toggleMenu());
  };
  // search
  const onSearch = (value) => console.log(value);

  return (
    <React.Fragment>
      <Row justify="space-between" align="middle" className={classes.row}>
        <Col className={classes.search}>
          <Search placeholder="Search Collections ...." onSearch={onSearch} />
        </Col>
        <Col className={classes.col}>
          <FaWallet onClick={showDrawer} className={classes.wallet} />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Header;
