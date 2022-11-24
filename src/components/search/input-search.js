import { Form, InputGroup } from "react-bootstrap";
import "./input-search.css";

function InputSearch() {
  return (
    <>
      <InputGroup className="input-search">
        <InputGroup.Text>lat</InputGroup.Text>
        <Form.Control
          placeholder="lat"
          aria-label="lat"
          aria-describedby="lat"
          id="lat"
        />
      </InputGroup>
      <InputGroup className="input-search">
        <InputGroup.Text>lon</InputGroup.Text>
        <Form.Control
          placeholder="lon"
          aria-label="lon"
          aria-describedby="lon"
          id="lon"
        />
      </InputGroup>
    </>
  );
}
export default InputSearch;
