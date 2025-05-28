import React from 'react';
import { Typography, Card } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const JobDescription = ({ id }) => {
  return (
    <div id={id} className='section' style={{ marginBottom: '80px' }}>
      <Title level={2}>
        <Text style={{ fontSize: '40px' }}>MY </Text>
        <Text style={{ color: '#2ECC71', fontSize: '40px' }}>JOB DESCRIPTION</Text>
      </Title>
      {/* Add your job description content here */}
    </div>
  );
};

export default JobDescription;
