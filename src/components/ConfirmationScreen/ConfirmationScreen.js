import React, {Component} from 'react';
import Modal from '../Modal/Modal';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Button from '../Button/Button';
import Input from '../Input/Input';

class ConfirmationScreen extends Component{

    state = {
        name: ''
    }

    handleNameChange = (event)=>{
        this.setState({name: event.target.value})
    }

    render(){
    const memeData = {
        fileName: this.state.name,
        topColor: this.props.colorTop,
        bottomColor: this.props.colorBottom,
        image: this.props.selectedImage,
        topFontSize: this.props.topFontSize,
        bottomFontSize: this.props.bottomFontSize,
        topText: this.props.topText,
        bottomText: this.props.bottomText
    }

    return (
            <Modal 
            show = {this.props.isHistoryVisible}>
                <div>
                    <p>Give name of your file:</p>
                     <Input
                     value = {this.state.name}
                     description = 'Your meme name'
                     name = 'name'
                     type = 'simpleInput'
                     change = {this.handleNameChange}
                     />
                    <Button 
                    click = {()=>{
                        this.props.hideHistorySave();
                        this.props.resetImage();
                        }} 
                    type = 'Cancel'>Don't save it :(</Button>
                    <Button
                    disabled = {this.state.name.length < 3}
                    click = {()=>this.props.saveToHistory(memeData)}
                    type = 'Confirm'>Save!</Button>
                </div>
            </Modal>   
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        hideHistorySave: () => dispatch(actions.showHistorySave()),
        resetImage: ()=>dispatch(actions.resetImage()),
        saveToHistory: (data)=>dispatch(actions.saveToHistory(data))
    }
}

const mapStateToProps = (state)=>{
    return{
        isHistoryVisible: state.isHistorySaveVisible,
        colorTop: state.colorTop,
        colorBottom: state.colorBottom,
        selectedImage: state.image,
        topFontSize: state.sizeTop,
        bottomFontSize: state.sizeBottom,
        topText: state.topText,
        bottomText: state.bottomText
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationScreen);