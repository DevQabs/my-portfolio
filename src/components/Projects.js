import React from 'react';
import { Typography, Steps, Card, Divider } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import wehagoHLogo from '../assets/images/wehagoh_logo.svg';
import birLogo from '../assets/images/bir_logo.png';
import wehagoLogo from '../assets/images/wehago_logo.png';
import hyundaiLogo from '../assets/images/hd_ss_logo.png';

const { Meta } = Card;
const { Title, Text } = Typography;

const Projects = ({ id }) => {
  const projectItems = [
    {
      title: (
        <Title
          level={3}
          onClick={() => {
            window.open('https://www.wehagoh.com/', '_blank');
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#00AAFF';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#000';
          }}
          style={{ cursor: 'pointer' }}
        >
          Wehago HealthCare
        </Title>
      ),
      description: (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img alt='Wehago HealthCare' src={wehagoHLogo} style={{ width: '120px', height: 'auto' }} />

            <div>
              <p>
                <Title level={5}>위하고 헬스케어 플랫폼 구축 (23.07 ~ ) [팀장 / 선임]</Title>
                1. MSA 아키텍처 설계 및 구축
                <br />
                2. Elasticsesarch를 활용한 텍스트 검색 기능 제공
                <br />
                3. TDD를 활용한 테스트 주도개발
                <br />
                4. Docker / Kubernetes 를 활용한 로컬 개발환경 구축
                <br />
                5. Spring 및 Java 버전 업데이트 및 코드 마이그레이션
                <br />
                6. Sonarqube를 활용한 코드관리 및 품질 개선
              </p>
            </div>
          </div>
          <Divider />
        </>
      ),
    },
    {
      title: (
        <Title
          level={3}
          onClick={() => {
            window.open('https://eis.bir.gov.ph/#/main', '_blank');
          }}
          style={{ cursor: 'pointer' }}
          onMouseEnter={(e) => {
            e.target.style.color = '#FECB00';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#000';
          }}
        >
          BIR Tax Agent System
        </Title>
      ),
      description: (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img alt='BIR Tax Agent System' src={birLogo} style={{ width: '120px', height: 'auto' }} />
            <div>
              <Title level={5}>필리핀 국세청 조세 프로젝트 구축 (21.01 ~ 23.06) [팀장 / 주임]</Title>
              <p>
                1. MSA 아키텍처 구축
                <br />
                2. React, SpringBoot & JPA 및 Oracle 을 활용한 웹 서비스 구축
                <br />
                3. Redis 를 활용한 캐시 관리
                <br />
                4. 타회사의 대규모 세금관련 데이터 전송을 위한 Open API 구축
                <br />
                5. 공통 라이브러리 및 API 개발 및 Nexus를 활용한 버전관리 시스템 구축
                <br />
                6. AWS S3를 활용한 파일관리 기능 생성
                <br />
                7. Nutanix 서버를 활용한 서버관리
                <br />
                8. Kafka를 활용한 대규모 데이터 처리 시스템 구축 (평균 일 2억 5천만건)
                <br />
                9. API Gateway 구축
              </p>
            </div>
          </div>
          <Divider />
        </>
      ),
    },
    {
      title: (
        <Title
          level={3}
          onClick={() => {
            window.open('https://www.wehago.com', '_blank');
          }}
          style={{ cursor: 'pointer' }}
          onMouseEnter={(e) => {
            e.target.style.color = '	#00AAFF';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#000';
          }}
        >
          Wehago
        </Title>
      ),
      description: (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img alt='Wehago' src={wehagoLogo} style={{ width: '120px', height: 'auto' }} />
            <div>
              <Title level={5}>위하고 할일 서비스 유지보수 (20.06 ~ 20.12) [팀원 / 주임]</Title>
              <p>
                1. MSA기반의 서비스 개발 및 유지보수
                <br />
                2. React 및 Spring, Postgresql을 활용
                <br />
                3. 서비스 성능 개선
              </p>
            </div>
          </div>
          <Divider />
        </>
      ),
    },
    {
      title: <Title level={3}>Hyundai Special Steel</Title>,
      description: (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img alt='Hyundai Special Steel' src={hyundaiLogo} style={{ width: '120px', height: 'auto' }} />
            <div>
              <Title level={5}>
                현대종합특수강 MES / SCM 품질 시스템 구축 및 유지보수(17.04 ~ 20.01) [팀원 / 대리]
              </Title>
              <p>
                1. Java, jsp, mybatis, Xplatform 등을 활용한 고객사 시스템 개발 및 유지보수
                <br />
                2. SCM / MES 및 제조 관련 IT 시스템 구축 및 운영 경험을 통한 제조 비지니스에 대한 도메인 이해
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: '',
    },
  ];

  return (
    <div id={id} className='section' style={{ marginBottom: '80px' }}>
      <Title level={2}>
        <Text style={{ fontSize: '40px' }}>MY </Text>
        <Text style={{ color: '#1DA1F2', fontSize: '40px' }}>PROJECTS</Text>
      </Title>
      <Steps
        progressDot
        current={5}
        direction='vertical'
        reverse={true}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
        }}
        items={projectItems}
      />
    </div>
  );
};

export default Projects;
