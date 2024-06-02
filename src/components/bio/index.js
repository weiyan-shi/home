import './index.css'
import '../../iconfont/iconfont.css';
import avatar from './avatar.jpg';



const userInfo = {
  name: 'Weiyan Shi',
  bio: 'Incoming PhD Student @ SUTD'
}

const contactLinks = [
  // {
  //   label: 'Singapore',
  //   key: 'location',
  //   icon: <span className='iconfont icon-didian' />,
  // },
  // {
  //   label: 'Singapore University of Technology and Design',
  //   key: 'university',
  //   icon: <span className='iconfont icon-xuexiao_xuexiaoxinxi' />,
  //   href: 'https://www.sutd.edu.sg'
  // },
  {
    label: 'Email',
    key: 'email',
    icon: <span className='iconfont icon-youjian' />,
    href: 'mailto:weiyanshi6@gmail.com',
  },
  {
    label: 'Google Scholar',
    key: 'google-scholar',
    icon: <span className='iconfont icon-xuexiao' />,
    href: 'https://scholar.google.com/citations?user=ywi8b0EAAAAJ&hl=en',
  },
  {
    label: 'ORCID',
    key: 'orcid',
    icon: <span className='iconfont icon-wangluo' />,
    href: 'https://orcid.org/0009-0001-6035-9678',
  },
  {
    label: 'GitHub',
    key: 'github',
    icon: <span className='iconfont icon-github' />,
    href: 'https://github.com/weiyan-shi',
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
      <div className='bio-a-list'>
      {contactLinks.map((link) => (
          <div className='bio-a'>
            {link.icon}
            {link.href ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ paddingLeft: 5 }}>
                {link.label}
              </a>
            ) : (
              <span style={{ paddingLeft: 5 }}>{link.label}</span>
            )}
          </div>
        ))}
      </div>
      {/* <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {contactLinks.map((link) => (
          <Menu.Item key={link.key} className='bio-menu-item' style={{ paddingLeft: 10 }}>
            {link.icon}
            {link.href ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ paddingLeft: 20 }}>
                {link.label}
              </a>
            ) : (
              <span style={{ paddingLeft: 20 }}>{link.label}</span>
            )}
          </Menu.Item>
        ))}
      </Menu> */}
    </div>
  );
};

export default Bio;
