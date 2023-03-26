import {
  AccountCircleOutlined,
  HomeOutlined,
  LocalBarOutlined,
  MessageOutlined,
  PeopleOutline,
} from '@material-ui/icons';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #555;
`;

const FooterText = styled.span`
  font-size: 0.7rem;
  margin-top: 3px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink href="#">
        <HomeOutlined style={{ width: 20, height: 20 }} />
        <FooterText>홈</FooterText>
      </FooterLink>
      <FooterLink href="#">
        <LocalBarOutlined style={{ width: 20, height: 20 }} />
        <FooterText>칵테일</FooterText>
      </FooterLink>
      <FooterLink href="#">
        <PeopleOutline style={{ width: 20, height: 20 }} />
        <FooterText>커뮤니티</FooterText>
      </FooterLink>
      <FooterLink href="#">
        <MessageOutlined style={{ width: 20, height: 20 }} />
        <FooterText>메시지</FooterText>
      </FooterLink>
      <FooterLink href="#">
        <AccountCircleOutlined style={{ width: 20, height: 20 }} />
        <FooterText>마이페이지</FooterText>
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;
