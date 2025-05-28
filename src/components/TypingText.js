import React, { useState, useEffect } from 'react';

const TypingText = ({ text, style }) => {
  const [typingState, setTypingState] = useState({
    text: '',
    cursorVisible: true,
    isComplete: false,
  });

  useEffect(() => {
    let currentText = '';
    let timeoutId;

    const typeText = () => {
      if (currentText.length < text.length) {
        currentText += text[currentText.length];
        setTypingState(prev => ({
          ...prev,
          text: currentText,
          cursorVisible: true,
          isComplete: false,
        }));
        timeoutId = setTimeout(typeText, 100);
      } else {
        setTypingState(prev => ({
          ...prev,
          isComplete: true,
        }));
        startCursorBlink();
      }
    };

    const startCursorBlink = () => {
      const blink = () => {
        setTypingState(prev => ({
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
  }, [text]);

  return (
    <span style={style}>
      <b>
        {typingState.text}
        {typingState.isComplete && (
          <span
            style={{
              display: typingState.cursorVisible ? 'inline' : 'none',
              marginLeft: '4px',
              color: '#2ECC71',
            }}
          >
            |
          </span>
        )}
      </b>
    </span>
  );
};

export default TypingText;
