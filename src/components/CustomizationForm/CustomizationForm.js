import React from 'react';
import Input from '../Input/Input'
import Modal from '../Modal/Modal'

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const customizationForm = (props) =>{

    return (
        <Modal show = {props.areOptionsVisible} click = {props.hideOptions}>
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

const mapStateToProps = state =>{
    return{
        areOptionsVisible: state.areOptionsVisible
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        hideOptions: ()=>dispatch(actions.handleOptionsShow(null))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(customizationForm);