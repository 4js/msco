import React from "react";
import { Divider } from "antd";
import styles from "./index.module.less";

const LeftDivider = ({ children }) => {
  return <Divider className={styles.leftDivider}>{children}</Divider>;
};

export default LeftDivider;
