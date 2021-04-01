import Link from 'next/link';
import Cart from '../Cart';
import {
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavLinkS,
  NavMenu,
  NavLogo,
} from './NavbarElements';

const Navbar = (): JSX.Element => (
  <Nav>
    <NavContainer>
      <Link href="/">
        <NavLogo>monomoore</NavLogo>
      </Link>
      <NavMenu>
        <NavItem>
          <NavLinkS to="about">
            Обо мне
          </NavLinkS>
        </NavItem>
        <NavItem>
          <Link href="/shop">
            <NavLink>
              Магазин
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/portfolio">
            <NavLink href="/portfolio">
              Портфолио
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Cart />
        </NavItem>
      </NavMenu>
    </NavContainer>
  </Nav>
);

export default Navbar;
