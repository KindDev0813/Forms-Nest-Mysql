import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'react-bootstrap';
import { validate } from '../../common/validation.js';
import FormGroupType from './formGroupType';
import './form.css'


function Formcomp({formTitle , onclick, data , submitName}) {
    /*gets a group= array of objects each array is a row and each object is a formGroup in the row 
    and a submitName= string of what will the submit button will say
    object looks like:
    {id:1, type: 'text', 
    placeholder: 'Enter Email', 
    label: 'Email', 
    iconName: 'inbox-fill', 
    validations: { require: true, chars: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , minLen: 6}, 
    eror: '', 
    options:[], col: true/false }

    returns JSX element
    */

    const [Formdata, setdata] = useState(data)

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let len = 0
        let canactive = 0
        for (const name in Formdata) {
            len++
            inputCheck(name)
            if (!Formdata[name].eror) {
                canactive++
            }
        }
        if (canactive === len) {
            onclick(Formdata)
        }
    };

    function crateformline(data){
        let formarray= []
        for (const name in data){
            const obj= data[name];
            formarray.push(<FormGroupType key={obj.id} value={obj.value} type={obj.type}
                changeButton={changebutton} validate={obj.validations}
                class={obj.class} id={obj.id} name={name} optioneror={hideOptionEror} onblur={check} 
                label={obj.label} iconName={obj.iconName} placeholder={obj.placeholder} 
                eror={obj.eror} onInput={obj.type=='current-password'? hideContent:()=>{}} options={obj.options}></FormGroupType>)
        }
        return(formarray)
    }

    function check(e) {
        data[e.target.name].value = e.target.value
        inputCheck(e.target.name)
        setdata({...data})
    }

    function hideContent(e){
        data[e.target.name].value = e.target.value
        e.target.value= '*'.repeat(e.target.value.length)
        setdata({...data})
    }

    function inputCheck(name) {
        data[name].eror = validate(data[name].value, data[name].validations, data[name].label)
        setdata({...data})
    }

    function changebutton(e, name) {
        data[name].value = e.target.textContent
        e.target.parentElement.getElementsByClassName('choosen')[0]?.classList.remove('choosen')
        e.target.classList.add('choosen')
        setdata({...data})
    }

    function hideOptionEror(e, index) {
        if (e.target.value) {
            data[index].value = e.target.value
            setdata([...data])
        }
    }

    return (
        <div className='AppForm'>
            <h1 style={{ textAlign: 'center' }}>{formTitle}</h1>
            <Form noValidate onSubmit={handleSubmit} className='formbody'>
                <Row>
                    {crateformline(Formdata)}
                </Row>
                <p></p>
                <Row>
                    <Button type="submit" className='formbutton'>
                        {submitName ? submitName : 'Submit form'}
                    </Button>
                </Row>
            </Form >
        </div>
    );
}
export default Formcomp