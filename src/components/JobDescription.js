import React from 'react';
import { Typography, Card } from 'antd';
import bookImage from '../assets/images/book.png';
import rulesImage from '../assets/images/rule.png';
import pdfImage from '../assets/images/pdf.png';
import introductionPdf from '../assets/pdf/introduction.pdf';

const { Title, Text } = Typography;
const { Meta } = Card;

const JobDescription = ({ id }) => {
  return (
    <div id={id} className='section' style={{ marginBottom: '80px', height: '650px' }}>
      <Title level={2}>
        <Text style={{ fontSize: '40px' }}>MY </Text>
        <Text style={{ color: '#1DA1F2', fontSize: '40px' }}>INTRODUCTION</Text>
      </Title>
      <div
        style={{
          display: 'flex', // flex 활성화
          flexWrap: 'wrap', // 여러 줄로 넘칠 때 wrap
          justifyContent: 'flex-start', // 카드들을 가운데 정렬
          alignItems: 'flex-start', // 카드 상단 맞춤
          gap: '24px', // 카드 사이 간격
          marginTop: '24px',
          padding: 0, // 혹시 모를 padding 제거
          width: '100%', // 전체 너비 사용
          boxSizing: 'border-box', // 박스 사이즈 기준
        }}
      >
        <Card
          hoverable
          style={{
            width: 220,
            cursor: 'pointer',
          }}
          cover={<img alt='Books' src={pdfImage} style={{ objectFit: 'contain', height: '120px' }} />}
          onClick={() => window.open(introductionPdf, '_blank')}
        >
          <Meta title='자기소개서' description={<Text>저를 소개합니다.</Text>} />
        </Card>
        <Card
          hoverable
          style={{
            width: 220,
            cursor: 'pointer',
          }}
          cover={<img alt='Books' src={bookImage} style={{ objectFit: 'contain', height: '120px' }} />}
          onClick={() =>
            window.open(
              'https://efficient-thyme-595.notion.site/8eaa1ed0a7714c389bdc7b835119e097?v=2b8a89839fed486b8b26a41ba79629bc',
              '_blank'
            )
          }
        >
          <Meta title='Books' description={<Text>읽었던 책들입니다.</Text>} />
        </Card>
        <Card
          hoverable
          style={{
            width: 220,
            cursor: 'pointer',
          }}
          cover={<img alt='Books' src={rulesImage} style={{ objectFit: 'contain', height: '120px' }} />}
          onClick={() =>
            window.open(
              'https://efficient-thyme-595.notion.site/Coding-Standards-204430cfe73880c6b391fb8ed939d688',
              '_blank'
            )
          }
        >
          <Meta title='Coding Standards' description={<Text>개발 시 지키는 규칙들입니다.</Text>} />
        </Card>
      </div>
    </div>
  );
};

export default JobDescription;
