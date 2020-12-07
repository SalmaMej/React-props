import React from 'react';
import Alert from 'react-bootstrap/Alert';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

function HandleName(props) {
    return ( 
        <>
<Alert variant="success">
  <Alert.Heading>{props.fullName}</Alert.Heading>
</Alert>
</>
    )
};

export default HandleName;

