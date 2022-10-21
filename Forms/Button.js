import Button from 'react-bootstrap/Button';

function BlockExample({button_type1,functions,status}) {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={functions} disabled = {status}>
        {button_type1}
       
      </Button>
    </div>
  );
}

export default BlockExample;