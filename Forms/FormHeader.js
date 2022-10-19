import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FormHeader({heading}) {
  return (
    <Card className="text-center">
      <Card.Header>{heading}</Card.Header>
    </Card>
  );
}

export default FormHeader;