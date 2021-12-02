import { ListGroup, Form } from "react-bootstrap";
export default function SelectorList({
  countries,
  continentList,
  filter,
  handleChangeFilter,
  handleChangeCheckBoxByContinent,
  handleChangeCheckBox,
  handleChangeCasesOrDeaths
}) {
  //responsavel por adicionar e remover os dados selecionados no checkBox
  function onClick(event) {
    if (filter) {
      handleChangeCheckBox(event.target);
    } else {
      handleChangeCheckBoxByContinent(event.target);
    }
  }
  function onSelectLocation(event) {
    handleChangeFilter(event.target);
  }

  function onSelectType(event){
    handleChangeCasesOrDeaths(event.target)
  }
  return (
    <div>
      <Form>
        <Form.Select onChange={onSelectLocation}>
          <option size="sm" value="country">
            country
          </option>
          <option size="sm" value="continent">
            continent
          </option>
        </Form.Select>
        <Form.Select onChange={onSelectType}>
          <option size="sm" value="total_cases">
            cases
          </option>
          <option size="sm" value="total_deaths">
            deaths
          </option>
        </Form.Select>
      </Form>
      {filter ? (
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
      ) : (
        <ListGroup>
          {continentList.map((item, index) => (
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
      )}
    </div>
  );
}
