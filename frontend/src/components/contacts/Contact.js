import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Consumer} from "../../context/context";
import * as ActionTypes from '../../context/actions';

class Contact extends Component {
    state = {
        showContactBody: false
    };

    onDelete = (id, dispatch) => {
        dispatch({type: ActionTypes.DELETE_CONTACT, payload: id });
    };

    render() {
        // const {id, name, email, phone, imageURL, summary} = this.props.contact;
        const {id, name, email, phone} = this.props.contact;
        const { showContactBody } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className={'card mb-3'}>
                            <img
                                style={{cursor: 'pointer'}}
                                onClick={() => { this.setState({showContactBody: !this.state.showContactBody})}}
                                src={'https://www.w3schools.com/bootstrap4/img_avatar1.png'}
                                alt={'kfşass das'}
                                className={'card-img-top'}>

                            </img>
                            {showContactBody ? (
                                <div className={'card-body'}>
                                    <h4 className={'card-title'}>{name}</h4>
                                    <p className={'card-text mb-2'}>Some example text some example text. John Doe is an architect and engineer</p>
                                    <ul className={'list-group'}>
                                        <li className={'list-group-item'}>
                                            Email: {email}
                                        </li>
                                        <li className={'list-group-item'}>
                                            Phone: {phone}
                                        </li>
                                    </ul>
                                    <div className={'d-flex justify-content-between'}>
                                        <Link to={`contact/detail/${id}`}>
                                            <button className={'btn btn-primary'}>
                                                See Profile
                                            </button>
                                        </Link>
                                            <div>
                                                <Link to={`contact/edit/${id}`}>
                                                    <button className={'btn btn-info mr-2'}>
                                                        <i style={{
                                                            cursor: 'pointer'
                                                        }}
                                                           className={'fas fa-edit'}>
                                                        </i>
                                                    </button>
                                                </Link>
                                                <button
                                                    style={{cursor: 'pointer', color: 'white'}}
                                                    onClick={this.onDelete.bind(this, id, dispatch)}
                                                    className={`btn btn-danger`}>
                                                    <i className={'fas fa-times'}></i>
                                                </button>
                                            </div>
                                    </div>

                                </div>

                            ): null}
                        </div>
                    )
                }
                }
            </Consumer>
        )
    }
}

export default Contact;