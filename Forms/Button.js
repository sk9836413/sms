import Button from 'react-bootstrap/Button';

function BlockExample({button_type1,button_type2}) {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        {button_type1}
      </Button>
      <Button variant="secondary" size="lg">
        {button_type2}
      </Button>
    </div>
  );
}

export default BlockExample;