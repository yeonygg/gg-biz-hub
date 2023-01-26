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

const Navigation = () => {
  return (
    <Nav isCollapsible width={240}>
      <NavItemGroup />
      <Heading size="sm" className="-m-l-6"></Heading>
      <NavItemGroup>
        <NavItemContainer>
          <NavItem icon="fas fa-file">item with dropdown</NavItem>
          <NavItemDropdown>
            <NavSubLabel>sub-label</NavSubLabel>
            <NavSubItem>sub-item</NavSubItem>
            <NavSubItem>sub-item</NavSubItem>
            <NavSubItem>sub-item</NavSubItem>
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
  );
};

export default Navigation;
