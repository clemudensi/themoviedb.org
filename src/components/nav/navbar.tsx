import {
    CenterItems,
    Logo,
    NavMenuWrapper,
    NavWrapper,
    LogoLink,
    NavbarCollapsible,
    NavList,
    NavItem,
    NavLink,
    ContainerCenter,
    LoginBtn,
    SignUpBtn,
} from 'components';

export const Navbar = () => {
  return (
      <NavWrapper>
        <NavMenuWrapper>
          <CenterItems>
              <LogoLink>
                  <Logo
                      height={25}
                      width={25}
                      className="w-5 h-5 ml-2 lg:ml-0 mr-2"
                  />
              </LogoLink>
          </CenterItems>
            <NavbarCollapsible>
                <NavList>
                    <NavItem>
                        <NavLink>Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Teams</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Project</NavLink>
                    </NavItem>
                </NavList>
            </NavbarCollapsible>
            <ContainerCenter>
                <LoginBtn>Login</LoginBtn>
                <SignUpBtn>Sign up</SignUpBtn>
            </ContainerCenter>
        </NavMenuWrapper>
      </NavWrapper>
  )
}