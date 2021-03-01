import React from 'react';
import '../../reset/reset.css';
import '../welcome/style.css'


function Welcome() {

    return (
        <section class='welcome'>
            <div style={{margin: '0 300px'}}>
                <div class='welcome-wrapper'>
                    <img src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/img_02.jpg' />
                    <div class='welcome__text'>
                        <h1 class='welcome__title'>Welcome at</h1>
                        <h2 class='welcome__subtitle'>DANNY'S RESTAURANT</h2>
                        <p class='welcome__quote'>“Action ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate”.</p>
                        <p class='welcome__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                        <button class='welcome__button'>ABOUT US</button>
                    </div>
                </div>
            </div>
        </section>
    )  

}

export default Welcome;