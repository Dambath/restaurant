import React from 'react';
import '../../reset/reset.css'
import '../header/style.css';

function Header() {
    return (
        <header class='header'>
            <div class="container">
                <div class='header__wrapper'>
                    <div class='header__novigation'>
                        <h1 class='title white-text'>RESTAURANT</h1>
                        <ul style={{display: 'flex', flexDirection: 'row', marginLeft: '170px'}}>
                            <li class='header__navbars white-text'>HOME</li>
                            <li class='header__navbars white-text'>MENU</li>
                            <li class='header__navbars white-text'>RESERVATION</li>
                            <li class='header__navbars white-text'>SHOP</li>
                            <li class='header__navbars white-text'>NEWS</li>
                            <li class='header__navbars white-text'>CONTANCT</li>
                        </ul>
                        <div class='cart'>
                            <p class='white-text' style={{padding: '10px', borderRight: '1px solid white', fontSize: '20px'}}>cart</p>
                            <div style={{display: 'flex', padding: '10px', justifyContent: 'space-between' }}>
                                <div style={{display: 'flex', justifyContent: 'space-between',flexDirection: 'column', marginRight: '10px'}}>
                                    <p class='white-text'>ITEM(S)</p>
                                    <p class='cart__price'>0</p>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
                                    <p class='white-text'>TOTAL</p>
                                    <p class='cart__price'>$0.00</p>
                                </div>
                            </div>
                        </div>
                        <button class='header__button'>RESERVATIONS</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;