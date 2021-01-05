import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { actionMenuMap } from "./constants";
// import { get } from "lodash";
// import { getPathBySubMenu } from "utils/getPath";

// const { SubMenu } = Menu;

const ActionDropDown = ({ actionList = [], onMenuClick, disabled }) => {
  const handleClick = (e) => {
    // const path = getPathBySubMenu(e.keyPath);
    // const item = get(actionList, path);
    onMenuClick({ key: e.key, label: actionMenuMap[e.key] });
    // console.info(e.key);
  };

  // const renderSubMenu = (action, idx) => {
  //   return (
  //     <SubMenu key={`${action.value}-${idx}`} title={action.label}>
  //       {action.items.map((x, index) => {
  //         if (Array.isArray(x.items) && x.items.length > 0) {
  //           return renderSubMenu(x, index);
  //         }
  //         return <Menu.Item key={`${x.value}-${index}`}>{x.label}</Menu.Item>;
  //       })}
  //     </SubMenu>
  //   );
  // };

  // const renderMenu = (actionList = []) => {
  //   return (
  //     <Menu onClick={handleClick}>
  //       {actionList.map((x, idx) => {
  //         if (Array.isArray(x.items) && x.items.length > 0) {
  //           return renderSubMenu(x, idx);
  //         }
  //         return <Menu.Item key={`${x.value}-${idx}`}>{x.label}</Menu.Item>;
  //       })}
  //     </Menu>
  //   );
  // };

  const renderMenu = () => {
    return (
      <Menu onClick={handleClick}>
        <Menu.Item key="2">变量赋值</Menu.Item>
        <Menu.SubMenu key="sub1" title="中断">
          <Menu.Item key="3">规则集</Menu.Item>
          <Menu.Item key="4">规则流</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  };

  return (
    <Dropdown overlay={renderMenu()} placement="bottomLeft" disabled={disabled}>
      <Button icon="plus">动作...</Button>
    </Dropdown>
  );
};

export default ActionDropDown;
