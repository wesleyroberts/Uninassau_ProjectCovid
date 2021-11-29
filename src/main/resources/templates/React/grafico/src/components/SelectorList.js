import {ListGroup,Form} from "react-bootstrap";

export default function SelectorList({countries,onChange,setCountriesList}) {
    


    const handleSelect = (event)=>{
        console.log(event)
        onChange(event.target.value)
    }
    let list = [];
    const handleCheckBox = (event)=>{
    
        if(event.target.checked == true){
              console.log(event.target.value)
              list.push(event.target.value)
         }else{
             list = list.filter(item => item !==event.target.value)
         }
         setCountriesList(list);
         console.log(list)
    }

    return (
        <div>
            <Form>
            <Form.Select onChange={handleSelect}>
               {countries
               .map((item,index)=>
               <option size="sm" value={item} key={index}>{item}</option>)}
            </Form.Select>
            <ListGroup >
                {countries.map((item,index)=>
                    <div className="scrollspySite">
                      <Form.Check label={item} value={item} type={'checkbox'} id={index} onClick={handleCheckBox}></Form.Check>
                    </div>
                 )}

            </ListGroup>
            </Form>
          
        </div>
    )
}
