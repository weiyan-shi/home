import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { menuItems } from '../config';
import { Bio, About, Publications, CV, Teaching, Other } from '../components';
import './index.css'
const { Header, Content, Footer, Sider } = Layout;


const Home = () => {
  const [current, setCurrent] = useState('about');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (current) {
      case 'about':
        return <About />;
      // case 'publications':
      //   return <Publications />;
      case 'cv':
        return <CV />;
      // case 'teaching':
      //   return <Teaching />;
      // case 'other':
      //   return <Other />;
      default:
        return <About />;
    }
  };


  return (
    <div className='home'>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 20,
          }}
        >
          <div className="demo-logo" />
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={menuItems} theme="dark"
            defaultSelectedKeys={['1']}
            style={{
              flex: 1,
              minWidth: 0,
              fontSize: 18,
              fontWeight: 'bold',
            }} />
        </Header>
        <Content
          style={{
            padding: '0 48px',
          }}
        >
          <Layout
            style={{
              padding: '24px 0',
              margin: '40px 0',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Sider
              style={{
                background: colorBgContainer,
                padding: 10
              }}
              width={300}
            >
              <Bio />
            </Sider>
            <Content style={{
              padding: '0 24px',
              minHeight: 280,
            }}>
              {renderContent()}
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Powered by React & Ant Design © {new Date().getFullYear()} Created by Weiyan Shi.
        </Footer>
      </Layout>
    </div>
  )
}

export default Home;