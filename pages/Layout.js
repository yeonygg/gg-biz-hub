import {
  Heading,
  Nav,
  NavItem,
  NavItemContainer,
  NavItemDropdown,
  NavItemGroup,
  NavSubItem,
  NavSubLabel,
} from "pier-design-system";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

const Layout = () => {
  return (
    <Fragment>
      <div
        className="-d-flex"
        style={{ width: "100vw", height: "100vh", position: "fixed" }}
      >
<<<<<<< HEAD
<<<<<<< HEAD
        <Nav isCollapsible={true} dark={true} width={"240px"}>
=======
        <Nav isCollapsible={true} dark={true}>
>>>>>>> 5cd902b (created custom creatives page)
=======
        <Nav children="null" isCollapsible={true} dark={true} width={"240px"}>
>>>>>>> 20d30b9 (updated custom page)
          <NavItemGroup />
          <Heading size="sm" className="-m-l-6" dark={true}>
            Navigation
          </Heading>
          <NavItemGroup>
            <NavItemContainer dark={true}>
              <NavItem children="null" dark={true} icon="fas fa-file">
                item with dropdown
              </NavItem>
              <NavItemDropdown>
                <NavSubLabel dark={true}>sub-label</NavSubLabel>
                <NavSubItem dark={true}>sub-item</NavSubItem>
                <NavSubItem dark={true}>sub-item</NavSubItem>
                <NavSubItem dark={true}>sub-item</NavSubItem>
              </NavItemDropdown>
            </NavItemContainer>
            <NavItemContainer>
              <NavItem icon="fas fa-chart-area">item with dropdown</NavItem>
              <NavItemDropdown>
                <NavSubLabel>sub-label</NavSubLabel>
                <NavSubItem>sub-item</NavSubItem>
                <NavSubItem>sub-item</NavSubItem>
                <NavSubItem>sub-item</NavSubItem>
              </NavItemDropdown>
            </NavItemContainer>
            <NavItem icon="fas fa-bread-slice">item</NavItem>
          </NavItemGroup>
        </Nav>
      </div>
    </Fragment>
  );
};

export default Layout;
