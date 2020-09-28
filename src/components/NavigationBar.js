import React from "react";
import { Nav, NavItem, NavLink, Navbar } from "shards-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab,fas)

const NavigationBar  = () => {
  const onClick = (href, event) => {
    
    event.preventDefault();
    window.history.pushState({}, '', href);
    console.log(href)
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
    return (
      <Navbar sticky="top" type="dark" theme="secondary" expand="md">
        <Nav tabs className="mr-auto">
          <NavItem>
            <NavLink onClick={(e) => onClick("/IOT",e)} style={{color: 'black'}} href="IOT">
              Conservation through IOT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={(e) => onClick("/Comradery",e)} style={{color: 'black'}} href="Comradery">
              Remote Team Comradery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={(e) => onClick("/ThingAMonth",e)} style={{color: 'black'}} href="ThingAMonth">
              Thing A Month
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={(e) => onClick("/PastProjects",e)} style={{color: 'black'}} href="PastProjects">
              Past Projects
            </NavLink>
          </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
        <NavItem>
            <NavLink href="https://www.linkedin.com/in/matthew-keen-6ba886/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/keener2u">
              <FontAwesomeIcon icon={["fab", "github-square"]} />
            </NavLink>
          </NavItem>
          <NavLink
            href="mailto:info@fractalfx.net?subject=FractalFX.net referral&body=Saw your website!"
          >
            <FontAwesomeIcon icon={["fas", "envelope-square"]} />
          </NavLink>
          <NavItem>
            <NavLink href="https://www.youtube.com/channel/UCTaqKaPLjTWbLr3Jo8otbbQ">
              <FontAwesomeIcon icon={["fab", "youtube-square"]} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://twitter.com/TheFractalFX">
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              <FontAwesomeIcon icon={["fab", "instagram-square"]} />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
export default NavigationBar;
