import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from "../../context/context";
import * as ActionTypes from '../../context/actions';

class Contacts extends Component{

    onFilterContacts = (searchTerm, dispatch) => {
        dispatch({type: ActionTypes.FILTER_CONTACT, payload: searchTerm})
    };

    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value);
                    const { filterContacts, dispatch } = value;

                    return(
                        <React.Fragment>
                            <h1 className={'display-4'}>Contact List</h1>
                            <input type={'search'} ref={this.search} onChange={(event) => {this.onFilterContacts(event.target.value , dispatch )}}/>
                            <div className={'row'}>
                                {filterContacts.map(contact => {
                                    return <div className={'col-4'} key={contact.id}><Contact  contact={contact}/></div>;
                                })}
                            </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }

}

export default Contacts;