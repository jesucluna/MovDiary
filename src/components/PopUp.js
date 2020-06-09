import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import '../App.css';


class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    pop() {
        this.setState({
            visible : true
        });
    }

    up() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <li className="row">
 
            <a href="#" onClick={() => this.pop()}>{this.props.title}</a>
                <Modal 
                    visible={this.state.visible}
                    width="500"
                    height="50%"
                    effect="fadeInDown"
                    onClickAway={() => this.up()}
                >
                    <div className="container">
                        <div className="row">
                            <div className="container">
                                <h2>{this.props.title}</h2>
                            </div>
                            <div className="container">
                                <p>{this.props.content}</p>
                            </div>
                            <div className="container">
                                <p>{this.props.content}</p>
                            </div>

                            <div className="container">
                                <input type="button" className="btn btn-dark" value="Close" onClick={() => this.up()} />
                            </div>
                        </div>
                    </div>
                </Modal>
                
            </li>
        );
    }
}
export default PopUp;
