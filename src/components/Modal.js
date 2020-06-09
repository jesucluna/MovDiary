import React, { Component } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

class Modal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <li className="row">
                <PureModal
                    header={this.props.title}
                    footer={
                    <div>
                        <button className="btn btn-dark">Save</button>
                        </div>
                    }
                    onClose={() => {
                        console.log('handle closing');
                        return true;
                    }}
                    
                    ref="modal"
                >
                    <p>{this.props.content}</p>
                    <p>{this.props.content}</p>
                    <p>{this.props.content}</p>
                </PureModal>
                <a href="#" onClick={() => this.refs.modal.open()}>{this.props.title}</a>
            </li>
        );
    }
}

export default Modal;