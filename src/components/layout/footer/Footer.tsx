import {
  AccountCircleOutlined,
  HomeOutlined,
  LocalBarOutlined,
  MessageOutlined,
  PeopleOutline,
} from '@material-ui/icons';
import { COCKTAIL_URL, COMMUNITY_URL, MAIN_URL, MESSAGE_URL, MYPAGE_URL } from '@/consts/routeUrl';
import LinkIcon from '@/components/common/LinkIcon/LinkIcon';

import { StyledFooter } from './Footer.styled';

// TODO: url/[uuid] 페이지 세부 구현
const footerList = [
  { url: MAIN_URL, icon: <HomeOutlined />, name: '홈' },
  { url: COCKTAIL_URL, icon: <LocalBarOutlined />, name: '칵테일' },
  { url: COMMUNITY_URL, icon: <PeopleOutline />, name: '커뮤니티' },
  { url: MESSAGE_URL, icon: <MessageOutlined />, name: '메시지' },
  { url: MYPAGE_URL, icon: <AccountCircleOutlined />, name: '마이페이지' },
];

const Footer = () => {
  return (
    <StyledFooter>
      {footerList.map(({ url, icon, name }) => {
        return <LinkIcon key={name} url={url} icon={icon} name={name} />;
      })}
    </StyledFooter>
  );
};

export default Footer;
