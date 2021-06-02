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
                  <FooterLink to="/"> Join Today!</FooterLink>
                  <FooterLink to="/"> Click here to Sign Up</FooterLink>
                  <FooterLink to="/">Already a member? Log in Here!</FooterLink>
              </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Help</FooterLinkTitle>
                  <FooterLink to="/">Our Privacy Policy</FooterLink>
                  <FooterLink to="/">Terms of Service</FooterLink>
                  <FooterLink to="/">Select your Currency</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Customer Service</FooterLinkTitle>
                  <FooterLink to="/">Returns/Exchanges</FooterLink>
                  <FooterLink to="/">Chat</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>
              </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              [tempLogo]
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
