import { Layout, Menu, Avatar } from 'antd';
import './index.css'
import '../../iconfont/iconfont.css';
import avatar from './avatar.jpg';

const { Content, Sider } = Layout;

const userInfo = {
  name: 'Yan Ziming',
  bio: 'SP Group NTU Presidential Postdoctoral Fellow. Area of interests include operation, control, and realibility of power systems, with applications of data-analytics and advanced machine learning techniques.'
}

const contactLinks = [
  {
    label: 'Singapore',
    key: 'singapore',
    icon: <span className='iconfont icon-didian' />,
  },
  {
    label: 'Nanyang Technological University',
    key: 'nanyang-technological-university',
    icon: <span className='iconfont icon-xuexiao_xuexiaoxinxi' />,
  },
  {
    label: 'yanzmics@gmail.com',
    key: 'email',
    icon: <span className='iconfont icon-youjian' />,
    href: 'mailto:yanzmics@gmail.com',
  },
  {
    label: 'Google Scholar Profile',
    key: 'google-scholar',
    icon: <span className='iconfont icon-xuexiao' />,
    href: 'https://scholar.google.com/citations?user=IIZfJ8MAAAAJ&hl=en',
  },
  {
    label: 'ORCID Profile',
    key: 'orcid',
    icon: <span className='iconfont icon-wangluo' />,
    href: 'https://orcid.org/0000-0002-5303-4138',
  }
];

const UserInfo = () => (
  <div className='bio-userinfo'>
    <img className='bio-userinfo-ava' src={avatar} alt='' />
    <h1>{userInfo.name}</h1>
    <p>{userInfo.bio}</p>
  </div>
);

const Bio = () => {
  return (
    <div className='bio'>
      <UserInfo />
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {contactLinks.map((link) => (
          <Menu.Item key={link.key} className='bio-menu-item' style={{paddingLeft:10}}>
            {link.icon}
            {link.href ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer" style={{paddingLeft:20}}>
                {link.label}
              </a>
            ) : (
              <span style={{paddingLeft:20}}>{link.label}</span>
            )}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Bio;
