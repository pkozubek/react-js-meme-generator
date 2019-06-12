import React from 'react';
import Input from '../Input/Input'
import Modal from '../Modal/Modal'

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const customizationForm = (props) =>{

    return (
        <Modal show = {props.areOptionsVisible} click = {props.hideOptions}>
            <h2>{props.optionPosition + ' Text Options: '}</h2>
            <Input
            description = 'Top text size' 
            type = 'range'/>
            <Input
            type = 'color'
            />
        </Modal>
    )
}

const mapStateToProps = state =>{
    return{
        areOptionsVisible: state.areOptionsVisible,
        optionPosition: state.optionPosition
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        hideOptions: ()=>dispatch(actions.handleOptionsShow(null))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(customizationForm);