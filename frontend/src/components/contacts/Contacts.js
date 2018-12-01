import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from "../../context/context";

class Contacts extends Component{



    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value);
                    const { filterContacts } = value;

                    return(
                        <React.Fragment>
                            <h1 className={'display-4'}>Contact List</h1>
                            <input type={'search'} onKeyUp={}/>
                            <div className={'row'}>
                                {filterContacts.map(contact => {
                                    return <div className={'col-4'}><Contact key={contact.id} contact={contact}/></div>;
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