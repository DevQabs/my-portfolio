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
                2. Kafka CDC 및 Apache Flink를 활용한 실시간 통계용 데이터 집계
                <br />
                3. Elasticsearch 구축 후 검색 및 오류 수집 등의 기능 구현
                <br />
                4. 플랫폼 내 Backend 관련 공통 기능 및 프로세스 개발
                <br />
                5. Agile sprint 방식을 활용한 개발 업무 진행
                <br />
                6. TDD 주도 개발 및 코드리뷰를 통한 부서 내 서비스 코드들의 주도적인 코드 품질 개선
                <br />
                7. EMR 업무에 대한 전반적인 도메인 이해
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
                1. MSA 아키텍처 구축 (API Gateway, Nexus, Redis 등의 서버 구축)
                <br />
                2. 필리핀 내 대기업 조세 수집용 Open API 및 Jar 파일 공유
                <br />
                3. Kafka를 활용한 대규모 데이터 처리 시스템 구축 (평균 일 2억 5천만건)
                <br />
                4. 글로벌 개발자들과 의사소통
                <br />
                5. 조세 업무에 대한 도메인 이해
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
                3. MSA 아키텍처에 대한 전반적인 학습
                <br />
                4. 서비스 성능 개선
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
                1. SCM(포항) / MES (중국) 시스템 구축 (품질 시스템)
                <br />
                2. Java 1.6, oracle, Xplatform 등 사용
                <br />
                3. Procedure 및 Function을 주로 활용하여 개발 업무 수행
                <br />
                4. 제조 비지니스에 대한 도메인 이해
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
