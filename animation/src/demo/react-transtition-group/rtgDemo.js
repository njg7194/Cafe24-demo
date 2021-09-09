import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Alert,CloseButton } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

function RTG() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
          size="lg"
        >
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="primary"
          onClose={() => setShowMessage(false)}
          dismissible
        >
          <Alert.Heading>
            Animated alert message
          </Alert.Heading>
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
          <Button onClick={() => setShowMessage(false)}>
            Close
          </Button>
        </Alert>
        
      </CSSTransition>
    </Container>
  );
}

export default RTG;