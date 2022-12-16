import { Button, ButtonGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ErorMessage from "./Error";

function FormGroupType(props) {
    function onKey(e){
        if(e.key === 'Enter'){
            const next = e.target.parentElement.parentElement.nextElementSibling
            if(next){
                e.preventDefault()
                next.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.focus()
            }
            props.onblur(e)
        }
    }

    const type = () => {
        if (props.type !== 'option' && props.type !== 'button') {
            return (<Form.Control
                type={props.type}
                min={props.min}
                placeholder={props.placeholder}
                defaultValue={props.value}
                name={props.name}
                onKeyPress={onKey}
                onInput={props.onInput}
                onBlur={props.onblur}
                autoComplete={props.type.includes('password')? 'off':''}
            />)
        }
        else if (props.type === 'option') {
            return (<Form.Control onClick={(e) => props.optioneror(e, props.id)} defaultValue={props.value} as='select'>
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
            {props.iconName ? <Form.Label>{props.label}</Form.Label> : ''}
            <InputGroup>
                <InputGroup.Text className={`bi bi-${props.iconName}`}>{props.iconName ? '' : props.label}</InputGroup.Text>
                {type()}
                {props.validate.require ? <span className="red star">*</span> : ''}
            </InputGroup>
            <ErorMessage id={props.id} eror={props.eror}></ErorMessage>
        </Form.Group>
    )
}
export default FormGroupType