import React, { Component } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import '../App.css';
import Card from './Card';

class Modal extends Component {
        
    render() {
        return (
            <li className="row hom">
                <PureModal
                    header={
                            <p className="headertitle">{this.props.title}</p>

                    }
                    footer={
                        <p className="bt">
                            <button className="btn btn-dark btn-block">Delete</button>
                        </p>
                    }
                    onClose={() => {
                        console.log('handle closing');
                        return true;
                    }}

                    ref="modal"
                >
                    <p className="date"><img className="pequena" src={process.env.PUBLIC_URL +  this.props.image} alt={this.props.title}/></p>
                    <p className="date"><strong>Release date: {this.props.date}</strong></p>
                    <p className="content">{this.props.content}</p>

                </PureModal>
                <a href="javascript:void(0)" className="litem" onClick={() => this.refs.modal.open()}><Card name ={this.props.title} poster={this.props.image}/></a>
            </li>
        );
    }
}

export default Modal;