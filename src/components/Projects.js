import React from 'react';
import { Typography, Steps, Card } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Text } = Typography;

const Projects = ({ id }) => {
  const projectItems = [
    {
      title: 'Wehago HealthCare',
      description: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img
            alt='Wehago HealthCare'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-V_wQaoMP-C_9phRmFS77LDV-IuWphrMl0Q&s'
            style={{ width: '120px', height: 'auto' }}
          />
          <div>
            <p>Wehago HealthCare 프로젝트 설명이 여기에 들어갑니다.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'BIR Tax Agent System',
      description: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img
            alt='BIR Tax Agent System'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bureau_of_Internal_Revenue_%28BIR%29.svg/2048px-Bureau_of_Internal_Revenue_%28BIR%29.svg.png'
            style={{ width: '120px', height: 'auto' }}
          />
          <div>
            <p>BIR Tax Agent System 프로젝트 설명이 여기에 들어갑니다.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Wehago',
      description: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img
            alt='Wehago'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-V_wQaoMP-C_9phRmFS77LDV-IuWphrMl0Q&s'
            style={{ width: '120px', height: 'auto' }}
          />
          <div>
            <p>Wehago 프로젝트 설명이 여기에 들어갑니다.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Hyundai Special Steel',
      description: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img
            alt='Hyundai Special Steel'
            src='https://d2juy7qzamcf56.cloudfront.net/2025-01-11/66d7a55a-693c-45b7-b13e-9421ebf97efe.png'
            style={{ width: '120px', height: 'auto' }}
          />
          <div>
            <p>Hyundai Special Steel 프로젝트 설명이 여기에 들어갑니다.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id={id} className='section' style={{ marginBottom: '80px' }}>
      <Title level={2}>
        <Text style={{ fontSize: '40px' }}>MY </Text>
        <Text style={{ color: '#2ECC71', fontSize: '40px' }}>PROJECTS</Text>
      </Title>
      <Steps
        progressDot
        current={1}
        direction='vertical'
        reverse={true}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
        items={projectItems}
      />
    </div>
  );
};

export default Projects;
