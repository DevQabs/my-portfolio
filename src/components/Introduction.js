import React, { useState, useEffect } from 'react';
import { Typography, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import TypingText from './TypingText';
import { MdWavingHand } from 'react-icons/md';

const { Title, Text, Paragraph } = Typography;

const Introduction = ({ id }) => {
  const [typingState, setTypingState] = useState({
    text: '',
    cursorVisible: true,
    isComplete: false,
  });

  useEffect(() => {
    const targetText = 'I am a Web Developer.';
    let currentText = '';
    let timeoutId;

    const typeText = () => {
      if (currentText.length < targetText.length) {
        currentText += targetText[currentText.length];
        setTypingState((prev) => ({
          ...prev,
          text: currentText,
          cursorVisible: true,
          isComplete: false,
        }));
        timeoutId = setTimeout(typeText, 100);
      } else {
        setTypingState((prev) => ({
          ...prev,
          isComplete: true,
        }));
        startCursorBlink();
      }
    };

    const startCursorBlink = () => {
      const blink = () => {
        setTypingState((prev) => ({
          ...prev,
          cursorVisible: !prev.cursorVisible,
        }));
        timeoutId = setTimeout(blink, 500);
      };
      blink();
    };

    typeText();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div
      id={id}
      style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingTop: '24px', marginBottom: '80px' }}
    >
      <div>
        <Title level={2} style={{ color: '#1DA1F2', fontSize: '40px' }}>
          HI THERE,
        </Title>
        <Text type='secondary' style={{ fontSize: '64px' }}>
          <b>
            {typingState.text}
            {typingState.isComplete && (
              <span
                style={{
                  display: typingState.cursorVisible ? 'inline' : 'none',
                  marginLeft: '4px',
                  color: '#1DA1F2',
                }}
              >
                |
              </span>
            )}
          </b>
        </Text>
        <br />
        <br />
        <Paragraph>
          <blockquote>
            <Text type='default' style={{ fontSize: '20px' }}>
              웹개발팀 리더로 더존비즈온에서 근무하고 있으며 주로 백엔드를 담당하고 있습니다.
              <br />
              경력은 7년 9개월로 여행하는 것을 좋아합니다.
            </Text>
          </blockquote>
        </Paragraph>
      </div>
      <div className='profile-picture' />
    </div>
  );
};

export default Introduction;
