import { ListGroup, Form } from "react-bootstrap";
export default function SelectorList({ countries, handleChangeCheckBox }) {
  //responsavel por adicionar e remover os dados selecionados no checkBox
  function onClick(event) {
    handleChangeCheckBox(event.target);
  }

  return (
    <div>
      <ListGroup>
        {countries.map((item, index) => (
          <div className="scrollspySite" key={String(index)}>
            <Form.Check
              label={item}
              value={item}
              type={"checkbox"}
              id={index}
              onClick={onClick}
            ></Form.Check>
          </div>
        ))}
      </ListGroup>
    </div>
  );
}
