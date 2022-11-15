import { Button, ButtonGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ErorMessage from "./Error";

function FormGroupType(props) {
    const type = () => {
        if (props.type === 'text') {
            return (<Form.Control
                type="text"
                placeholder={props.placeholder}
                defaultValue={props.value}
                onBlur={(e) => props.onblur(props.name, e)}
                />)
            }
            else if (props.type === 'password') {
                return (<Form.Control
                    type="password"
                placeholder={props.placeholder}
                defaultValue={props.value}
                onBlur={(e) => props.onblur(props.name, e)}
                />)
            }
            else if(props.type === 'phone'){
                return (<Form.Control
                    type="tel"
                    placeholder={props.placeholder}
                    defaultValue={props.value}
                    onBlur={(e) => props.onblur(props.name, e)}
                    />)
                }
                else if (props.type === 'option') {
                    return (<Form.Control onClick={(e) => props.optioneror(e, props.id)} defaultValue ={props.value} as='select'>
                <option value=''>{props.placeholder}</option>
                {returnOptions('option')}
            </Form.Control>)
        }
        else if (props.type === 'button') {
            return (<ButtonGroup aria-label="Basic example">
                {returnOptions('button')}
            </ButtonGroup>)
        }
    }

    function returnOptions(type) {
        const array = []
        if (type === 'button') {
            for (const str of props.options) {
                if (props.value && props.value === str) {
                    array.push(<Button key={str} className='choicesbuttons choosen' value={str} onClick={(e) => props.changeButton(e, props.name)}>{str}</Button>)
                }
                else {
                    array.push(<Button key={str} className='choicesbuttons' value={str} onClick={(e) => props.changeButton(e, props.name)}>{str}</Button>)
                }
            }
        }
        else {
            for (const str of props.options) {
                array.push(<option key={str} value={str}>{str}</option>)
            }
        }
        return (array)
    }

    return (
        <Form.Group md="4" controlId={`validationCustom${props.label}`} className={props.class}>
            {props.iconName? <Form.Label>{props.label}</Form.Label>:''}
            <InputGroup>
                <InputGroup.Text className={`bi bi-${props.iconName}`}>{props.iconName? '':props.label}</InputGroup.Text>
                {type()}
                {props.validate.require ? <span className="show star">*</span>:''}
            </InputGroup>
            <ErorMessage id={props.id} eror={props.eror}></ErorMessage>
        </Form.Group>
    )
}
export default FormGroupType