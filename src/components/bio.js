import { Layout, Menu, Avatar } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { Content, Sider } = Layout;

const UserInfo = ({ name, bio }) => (
  <div style={{ padding: '16px' }}>
    <Avatar style={{ marginBottom: '16px' }} size={64} icon={<UserOutlined />} />
    <h3>{name}</h3>
    <p>{bio}</p>
  </div>
);

const socialLinks = [
  { label: 'Earth', key: 'earth', icon: <LaptopOutlined /> },
  { label: 'Red Brick University', key: 'university', icon: <NotificationOutlined /> },
  // ...
];

const Bio = () => {
  return (
    <div>
        <UserInfo name="Your Sidebar Name" bio="Short biography for the left-hand sidebar" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {socialLinks.map((link) => (
            <Menu.Item key={link.key} icon={link.icon}>
              {link.label}
            </Menu.Item>
          ))}
        </Menu>
    </div>
  );
};

export default Bio;
