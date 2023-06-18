import { useRouter } from 'next/router';
import { HomeOutlined, LocalBarOutlined } from '@material-ui/icons';
import { HddOutlined, PicLeftOutlined, UserOutlined } from '@ant-design/icons';
import { COCKTAIL_URL, COMMUNITY_URL, MAIN_URL, MESSAGE_URL, MYPAGE_URL } from '@/consts/routeUrl';
import TextIcon from '@/components/common/TextIcon/TextIcon';

import { StyledFooter } from './Footer.styled';

// TODO: url/[uuid] 페이지 세부 구현
const footerList = [
  { url: MAIN_URL, icon: <HomeOutlined />, name: '홈' },
  { url: COCKTAIL_URL, icon: <LocalBarOutlined />, name: '칵테일' },
  { url: COMMUNITY_URL, icon: <PicLeftOutlined />, name: '커뮤니티' },
  { url: MESSAGE_URL, icon: <HddOutlined />, name: '나만의와인바' },
  { url: MYPAGE_URL, icon: <UserOutlined />, name: '마이페이지' },
];

const Footer = () => {
  const router = useRouter();

  return (
    <StyledFooter>
      {footerList.map(({ url, icon, name }) => {
        return (
          <TextIcon
            key={name}
            icon={icon}
            name={name}
            onClick={async () => {
              await router.push(url);
            }}
          />
        );
      })}
    </StyledFooter>
  );
};

export default Footer;
