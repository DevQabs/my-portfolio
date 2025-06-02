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
        timeoutId = setTimeout(typeText, 60);
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
              9년차 웹개발자로 더존비즈온에서 근무하며 주로 백엔드를 담당하고 있습니다.
              <br />
              항상 제 프로젝트에 자부심을 느낄 수 있도록 책임감을 가지고 개발하고 있습니다.
            </Text>
          </blockquote>
        </Paragraph>
      </div>
      <div className='profile-picture' />
    </div>
  );
};

export default Introduction;
