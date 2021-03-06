import React, { useState } from "react";
import styled from "styled-components";
import "../../layout/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import Popup from "reactjs-popup";
import FadeIn from "react-fade-in";
import Link from "components/common/GatsbyLink";
import Boxed from "components/utils/Boxed";

const Main = styled.div`
  /* background: var(--color-white-light-100); */
  width: 100%;
  height: 100%;
  padding: var(--var-padding-m) var(--var-padding-s) 0 var(--var-padding-s);

  @media only screen and (max-width: 768px) {
    background: var(--color-background);
    padding: var(--var-padding-s) 1rem;
  }
`;

const NavSection = styled.div``;

const Container = styled(Boxed)`
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const NavLeft = styled.div`
  a {
    margin-right: 1rem;
  }
`;

const NavRight = styled.div`
  display: inline-flex;
  transition: none;
`;

const NavItem = styled(Link)`
  display: none;
  padding: 0.5rem 1rem;
  border-bottom: none;

  small {
    color: var(--color-text-secondary);
    transition: var(--transition);
  }

  &:hover small {
    color: var(--color-primary-light-700);
  }

  &:active small {
    color: var(--color-primary-light-700);
  }

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

const NavItemIcon = styled(NavItem)`
  display: block;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 12px;
  border-bottom: none;
  color: var(--secondary-700);
`;

const MobileItem = styled(Link)`
  display: block;
  border-bottom: none;
  margin: 0;

  h1 {
    margin: 2rem 0;
  }
`;

const MobileNav = styled.div`
  text-align: center;
`;

const Title = styled(Link)`
  color: var(--color-title);
  margin: 0 auto;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-primary);
  border-bottom: none;
`;

const Description = styled.h2`
  color: var(--color-text);
  margin: 0 auto;
  font-weight: var(--font-weight-regular);
  font-family: var(--font-primary);
  font-size: var(--font-size-2xs);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.5rem;
  max-width: 35ch;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const CloseModal = () => setOpen(false);

  return (
    <div>
      <Main>
        <NavSection>
          <Container>
            <NavLeft>
              <Title to="/" className="noeffect">
                Samuel Wong
              </Title>
              {/* <Description>User Experience Designer</Description> */}
            </NavLeft>
            <NavRight>
              <NavItem
                activeClassName="nav-item-active"
                className="noeffect"
                to="/about/"
              >
                <small>About</small>
              </NavItem>
              <NavItem
                activeClassName="nav-item-active"
                className="noeffect"
                to="/work/"
              >
                <small>Work</small>
              </NavItem>
              <NavItem
                activeClassName="nav-item-active"
                className="noeffect"
                to="/blog/"
              >
                <small>Blog</small>
              </NavItem>
              <NavItem
                activeClassName="nav-item-active"
                className="noeffect"
                to="/photo/"
              >
                <small>Photo</small>
              </NavItem>
              <NavItemIcon onClick={setOpen} className="noeffect">
                <MenuIcon icon={faBars} size="lg" />
              </NavItemIcon>
            </NavRight>
          </Container>
        </NavSection>
        <Popup
          lockScroll
          contentStyle={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            background: "rgba(255,255,255,0.95)",
            zIndex: "10000",
          }}
          overlayStyle={{}}
          open={open}
          closeOnDocumentClick
          onClose={() => setOpen(false)}
        >
          <div>
            <div>
              <MobileNav>
                <FadeIn>
                  <MobileItem to="/about" className="noeffect">
                    <h1>About</h1>
                  </MobileItem>
                  <MobileItem to="/work" className="noeffect">
                    <h1>Work</h1>
                  </MobileItem>
                  <MobileItem to="/blog" className="noeffect">
                    <h1>Blog</h1>
                  </MobileItem>
                  <MobileItem to="/photo" className="noeffect">
                    <h1>Photo</h1>
                  </MobileItem>
                  <MobileItem className="noeffect">
                    <MenuIcon
                      icon={faTimes}
                      size="lg"
                      onClick={() => setOpen(false)}
                    />
                  </MobileItem>
                </FadeIn>
              </MobileNav>
            </div>
          </div>
        </Popup>
      </Main>
    </div>
  );
}

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { open: false };
//     this.openModal = this.openModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//   }

//   openModal() {
//     this.setState({ open: true });
//   }

//   closeModal() {
//     this.setState({ open: false });
//   }

//   render() {
//     return (
//       <div>
//         <Main>
//           <NavSection>
//             <Container>
//               <NavLeft>
//                 <Title to="/" className="noeffect">
//                   Samuel Wong
//                 </Title>
//                 {/* <Description>User Experience Designer</Description> */}
//               </NavLeft>
//               <NavRight>
//                 <NavItem
//                   activeClassName="nav-item-active"
//                   className="noeffect"
//                   to="/about/"
//                 >
//                   <small>About</small>
//                 </NavItem>
//                 <NavItem
//                   activeClassName="nav-item-active"
//                   className="noeffect"
//                   to="/work/"
//                 >
//                   <small>Work</small>
//                 </NavItem>
//                 <NavItem
//                   activeClassName="nav-item-active"
//                   className="noeffect"
//                   to="/blog/"
//                 >
//                   <small>Blog</small>
//                 </NavItem>
//                 <NavItem
//                   activeClassName="nav-item-active"
//                   className="noeffect"
//                   to="/photo/"
//                 >
//                   <small>Photo</small>
//                 </NavItem>
//                 <NavItemIcon onClick={this.openModal} className="noeffect">
//                   <MenuIcon icon={faBars} size="lg" />
//                 </NavItemIcon>
//               </NavRight>
//             </Container>
//           </NavSection>
//           <Popup
//             lockScroll
//             contentStyle={{
//               width: "100%",
//               height: "100vh",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               border: "none",
//               background: "rgba(255,255,255,0.95)",
//               zIndex: "10000",
//             }}
//             overlayStyle={{}}
//             open={this.state.open}
//             closeOnDocumentClick
//             onClose={this.closeModal}
//           >
//             <div>
//               <div>
//                 <MobileNav>
//                   <FadeIn>
//                     <MobileItem to="/about" className="noeffect">
//                       <h1>About</h1>
//                     </MobileItem>
//                     <MobileItem to="/work" className="noeffect">
//                       <h1>Work</h1>
//                     </MobileItem>
//                     <MobileItem to="/blog" className="noeffect">
//                       <h1>Blog</h1>
//                     </MobileItem>
//                     <MobileItem to="/photo" className="noeffect">
//                       <h1>Photo</h1>
//                     </MobileItem>
//                     <MobileItem className="noeffect">
//                       <MenuIcon
//                         icon={faTimes}
//                         size="lg"
//                         onClick={this.closeModal}
//                       />
//                     </MobileItem>
//                   </FadeIn>
//                 </MobileNav>
//               </div>
//             </div>
//           </Popup>
//         </Main>
//       </div>
//     );
//   }
// }

// export default NavBar;
