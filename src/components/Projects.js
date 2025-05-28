import React from 'react';
import { Typography, Card } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Projects = ({ id }) => {
  return (
    <div id={id} className='section' style={{ marginBottom: '80px' }}>
      <Title level={2}>
        <Text style={{ fontSize: '40px' }}>MY </Text>
        <Text style={{ color: '#2ECC71', fontSize: '40px' }}>PROJECTS</Text>
      </Title>
      {/* Add your projects content here */}
    </div>
  );
};

export default Projects;
