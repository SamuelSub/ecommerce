import React, { useReducer } from 'react';
import { alertReducer } from './alertReducer';
import { alertContext } from './alertContext';

const AlertState = props => {

  const alertMessageState = {
    message: '',
    type: ''
  }

  const [alertMessage, setAlertMessage] = useReducer(alertReducer, alertMessageState);


  return (
    <alertContext.Provider value={{
      alertMessage,
      setAlertMessage
    }}>
      {props.children}
    </alertContext.Provider>
  ) 
}

export default AlertState