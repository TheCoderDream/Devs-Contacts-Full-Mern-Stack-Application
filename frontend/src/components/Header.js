import React from 'react';
import PropTYpes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({brandTitle}) => {
    return (
        <nav className={'navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'}>
            <div className={'container'}>
                <Link to={'/'} className={'navbar-brand'}>
                    {brandTitle}
                </Link>
                <div>
                    <ul className={'navbar-nav mr-auto'}>
                        <li className={'nav-item'}>
                            <Link to={'/'} className={'nav-link'}> Home</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'/contacts-add'} className={'nav-link'}> Add</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'/about'} className={'nav-link'}> About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

Header.propTypes = {
  brandingTitle: PropTYpes.string.isRequired
};

Header.defaultProps = {
    brandingTitle: 'Contact App'
};

export default Header;