import React, {Fragment} from 'react';
import Input from '../Input/Input'
import Modal from '../Modal/Modal'

const customizationForm = (props) =>{

    return (
        <Modal show = {props.show} click = {props.click}>
            <Input
            description = 'Top text size' 
            type = 'range'
            value = {1}/>
            <Input
            type = 'color'
            />
        </Modal>
    )
}

export default customizationForm;