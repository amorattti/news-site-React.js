import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addNewsLetter, clearNewsLetter } from '../../store/actions';
import showToast from './tools';
 
const NewsLetter = () => {
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();
  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    dispatch(addNewsLetter({ email: value }));
  }

  useEffect(() => {
    if (userData.newsletter) {
      if (userData.newsletter === 'added') {
        showToast('SUCCESS', 'Thank you for subscribing!!!');
        textInput.current.value = "";
        
      } else {
        showToast('ERROR', 'You are already on the db');
        textInput.current.value = "";
        
      }
    }
  }, [userData])

  useEffect(() => {
    return () => dispatch(clearNewsLetter())
  }, [dispatch])

  return (
    <div className="newsletter_container">
      <h1>Join our newsletter</h1>
      <Form 
        className="mt-4"
        onSubmit={handleSubmit}  
      >
        <Form.Group>
          <Form.Control ref={textInput} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add me to the list
        </Button>
      </Form>
     
    </div>
  );
}

export default NewsLetter;