import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
background-color: #101522;

  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`

export const FooterLinksItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}
`

export const FooterLinkTitle = styled.h1`
font-size: 14px;
margin-bottom: 16px;
`

export const FooterLinkTitle1 = styled.h1`
font-size: 12px;
margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin: bottom: 0.5rem;
font-size: 12px;

&:hover {
    color: #01BF71;
    transition: 0.3s ease-out;
}
`
export const SocialMedia = styled.section`
max-width= 1000px;
width= 100%;
margin-top: -35px;
margin-bottom: -30px;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width 1100px;
margin: 50px auto 0 auto;

@media screen and(max-width: 820px){
    flex-direction: column;
}
`

// export const SocialLogo = styled(Link)`
// color: #fff;
// justify-self: start;
// cursor: pointer;
// text-decoration: none;
// font-size: 1rem;
// display: flex;
// align-items: center;
// margin-bottom: 16px;
// font-weight: bold;
// ` 

export const WebsiteRights = styled.small`
color: #fff;
padding: 15px;
padding-bottom:2px;
padding-left: 5px;
`

export const SocialIcon = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 190px;
`

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`