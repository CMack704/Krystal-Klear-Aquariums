import React from 'react'
import logo from '../../pages/Home/logo.png'
import '../Header/style.css'

function Header() {
    return (
        <div className="jumbotron">
            <div className="container">
                <div className='row'>
                    <div id='number' className='col'>
                        <p>Phone: 980-267-7483</p>
                    </div>
                    <div id='logo' className='col'>
                        <img src={logo} className='App-logo' alt='logo' />
                    </div>
                    <div id='email' className='col'>
                        <p>E-Mail: krystalklearaquariums@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;