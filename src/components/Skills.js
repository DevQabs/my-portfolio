import React, { useState } from 'react';
import { Typography, Tag, Flex, Popover, Progress } from 'antd';
import { FaReact, FaJava, FaJs, FaDocker } from 'react-icons/fa';
import { SiApachekafka, SiSpring, SiSpringboot, SiOracle, SiApachetomcat, SiElasticsearch } from 'react-icons/si';
import { DiPostgresql, DiRedis } from 'react-icons/di';

const { Title, Text } = Typography;

const content = {
  java: {
    title: 'Java',
    content: 'Java',
  },
  react: {
    title: 'React',
    content: 'React',
  },
};

const tags = {
  java: {
    icon: <FaJava />,
    color: '#007396',
    content: 'Java',
    progress: 90,
  },
  react: {
    icon: <FaReact />,
    color: '#61DAFB',
    content: 'React',
    progress: 70,
  },
  js: {
    icon: <FaJs />,
    color: '#F7DF1E',
    content: 'JavaScript',
    style: { color: '#222' },
    progress: 70,
  },
  kafka: {
    icon: <SiApachekafka />,
    color: '#231F20',
    content: 'Kafka',
    progress: 75,
  },
  spring: {
    icon: <SiSpring />,
    color: '#6DB33F',
    content: 'Spring',
    progress: 85,
  },
  springboot: {
    icon: <SiSpringboot />,
    color: '#6DB33F',
    content: 'Spring Boot',
    progress: 85,
  },
  // tomcat: {
  //   icon: <SiApachetomcat />,
  //   color: '#F8DC75',
  //   content: 'Tomcat',
  //   style: { color: '#222' },
  //   progress: 75,
  // },
  docker: {
    icon: <FaDocker />,
    color: '#2496ED',
    content: 'Docker',
    progress: 55,
  },
  oracle: {
    icon: <SiOracle />,
    color: '#F80000',
    content: 'Oracle',
    progress: 85,
  },
  postgresql: {
    icon: <DiPostgresql />,
    color: '#336791',
    content: 'PostgreSQL',
    progress: 80,
  },
  redis: {
    icon: <DiRedis />,
    color: '#D82C20',
    content: 'Redis',
    progress: 80,
  },
  elasticsearch: {
    icon: <SiElasticsearch />,
    color: '#005571',
    content: 'Elasticsearch',
    progress: 70,
  },
};

const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};

function Skills({ id }) {
  return (
    <div id={id} className='section' style={{ marginBottom: '80px' }}>
      <Title level={2}>
        <Text style={{ fontSize: '40px' }}>MY </Text>
        <Text style={{ color: '#1DA1F2', fontSize: '40px' }}>SKILLS</Text>
      </Title>
      <div className='skills-grid'>
        {Object.entries(tags).map(([key, tag]) => (
          <div key={key} className='skill-item'>
            <Tag className='skill-tag' icon={tag.icon} color={tag.color} style={tag.style}>
              {tag.content}
            </Tag>
            <Progress
              className='skill-progress'
              percent={tag.progress}
              steps={20}
              strokeColor={tag.color}
              size={[10, 60]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
