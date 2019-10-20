import React from 'react';
import { Link } from 'react-router-dom';

const Navegacao = props => {
    return (
        <>
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link className='navbar-brand' to='/'>Logo</Link>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>ABOUT</Link></li>
                            <li><Link to='servicos'>SERVICES</Link></li>
                            <li><Link to='portifolio'>PORTFOLIO</Link></li>
                            <li><Link to='precos'>PRICING</Link></li>
                            <li><Link to='contato'>CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navegacao;