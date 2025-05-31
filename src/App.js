import React, { useState } from 'react';
import { Divider, Layout, Anchor, Typography, Tooltip } from 'antd';
import { UserOutlined, CodeOutlined, BookOutlined, FileTextOutlined } from '@ant-design/icons';
import './styles/App.css';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import JobDescription from './components/JobDescription';
import { FaGithub } from 'react-icons/fa';
import { RiBloggerFill } from 'react-icons/ri';
import { FaFilePdf } from 'react-icons/fa';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const items = [
    { key: 'simple-introduce', title: '자기소개', icon: <UserOutlined style={{ marginRight: 8 }} /> },
    { key: 'skills', title: '기술스택', icon: <CodeOutlined style={{ marginRight: 8 }} /> },
    { key: 'projects', title: '프로젝트', icon: <BookOutlined style={{ marginRight: 8 }} /> },
    { key: 'job-description', title: '이력서', icon: <FileTextOutlined style={{ marginRight: 8 }} /> },
  ];

  return (
    <Layout className='layout'>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1000,
          width: '100%',
          height: '64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#2E2E2E',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          padding: '0 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <img src={require('./assets/images/logo.png')} alt='Logo' style={{ height: '40px', marginRight: '16px' }} />
          <h1
            style={{
              margin: 0,
              color: '#fff',
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '-0.5px',
            }}
          >
            자기소개서
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Tooltip placement='top' color='red' title={'자기 소개서'}>
            <a href='' target='_blank' rel='noopener noreferrer' style={{ display: 'flex', alignItems: 'center' }}>
              <FaFilePdf size={22} color='#fff' />
            </a>
          </Tooltip>
          <Tooltip placement='top' color='blue' title={'깃허브'}>
            <a
              href='https://github.com/devqabs'
              target='_blank'
              rel='noopener noreferrer'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaGithub size={22} color='#fff' />
            </a>
          </Tooltip>
          <Tooltip placement='top' color='orange' title={'블로그'}>
            <a
              href='https://always-intern.tistory.com/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <RiBloggerFill size={22} color='#fff' />
            </a>
          </Tooltip>
        </div>
      </Header>

      <Content style={{ padding: '24px', paddingTop: '88px' }}>
        <div
          style={{
            display: 'flex',
            maxWidth: 1200,
            margin: '0 auto',
            position: 'relative',
            padding: '0 200px 0 0', // Space for the anchor on the right
          }}
        >
          <div
            id='content'
            style={{
              width: '100%',
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '16px 0',
            }}
          >
            <Introduction id='simple-introduce' />
            <Divider />
            <Skills id='skills' />
            <Divider />
            <Projects id='projects' />
            <Divider />
            <JobDescription id='job-description' />
          </div>
          {/* Anchor Navigation */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'fixed',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              borderRadius: 8,
              padding: '16px 0',
              transition: 'all 0.2s ease',
              width: isHovered ? '160px' : '40px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
            }}
          >
            <Anchor
              targetOffset={64}
              direction='vertical'
              style={{ padding: '0 16px', opacity: isHovered ? 1 : 0, transition: 'opacity 0.2s ease' }}
              items={items.map((item) => ({
                key: item.key,
                href: `#${item.key}`,
                title: (
                  <div style={{ padding: '8px 0', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    {item.icon}
                    <span style={{ marginLeft: 8 }}>{item.title}</span>
                  </div>
                ),
                onClick: (e) => {
                  e.preventDefault(); // a 태그의 기본 이동 막기

                  const element = document.getElementById(item.key);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                },
              }))}
            />
            {!isHovered && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                {items.map((item) => (
                  <div key={item.key} style={{ padding: '4px' }}>
                    {React.cloneElement(item.icon, { style: { fontSize: '20px' } })}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', height: '500px' }}></Footer>
    </Layout>
  );
}

export default App;
