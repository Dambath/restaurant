import React from 'react';
import '../menu/style.css';

function Menu() {
    return (
        <section class='menu'>
            <div style={{marginLeft: '200px'}}>
                <div class='menu-wrapper'>
                    <div class='menu_text'>
                        <h1 class='menu__title'>Restaurant</h1>
                        <h2 class='menu__subtitle'>MENU</h2>
                        <div class='menu__descs'>
                            <p class='menu__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            <p class='menu__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip s nisi ut aliquip  ex ea commodo.</p>
                        </div>
                        <button class='menu__button'>WHAT'S ON THE MENU</button>
                    </div>
                    <img src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/img_03.jpg' style={{width: '750px'}}/>
                </div>
            </div>
        </section>
    )
}

export default Menu;