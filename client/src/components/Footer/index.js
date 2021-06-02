import React from 'react'
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import {
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, FooterLinksWrapper, 
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
import FooterLogo from '../LogoFooter'


const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/">How it Works</FooterLink>
                  <FooterLink to="/">How to Contribute</FooterLink>
                  <FooterLink to="/">Email Us</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Have a Business?</FooterLinkTitle>
                  <FooterLink to="/bizsignup"> Join Today!</FooterLink>
                  <FooterLink to="/bizsignup"> Click here to Sign Up</FooterLink>
                  <FooterLink to="/bizsignin">Already a member? Log in Here!</FooterLink>
              </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Help</FooterLinkTitle>
                  <FooterLink to="/signin">Our Privacy Policy</FooterLink>
                  <FooterLink to="/signin">Terms of Service</FooterLink>
                  <FooterLink to="/">Select your Currency</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Customer Service</FooterLinkTitle>
                  <FooterLink to="/signin">Returns/Exchanges</FooterLink>
                  <FooterLink to="/signin">Chat</FooterLink>
                  <FooterLink to="/signin">Investors</FooterLink>
              </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              <FooterLogo />
            </SocialLogo>
            <WebsiteRights>
              Retailhut © {new Date().getFullYear()}     All Rights Reserved. 
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
