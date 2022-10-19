import Form from 'react-bootstrap/Form';
import React from 'react';

function CheckInlineExample({option1,option2,option3}) {
  return (
    <Form>
      {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label={option1}
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label={option2}
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            name="group1"
            label={option3}
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckInlineExample;