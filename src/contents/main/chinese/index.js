import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import '../chinese/style.css';

function Chinese() {

    return (
        <section class='chinese'>
            <div style={{margin: '0 140px'}}>
                <div class='chinese-wrapper'>
                    <img class='chinese__image' src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/img_04.jpg' />
                    <div class='chinese__text'>
                        <h1 class='welcome__title'>Chinese</h1>
                        <h2 class='welcome__subtitle'>SPECIALITIES</h2>
                        <div class='chinese__descs'>
                            <p class='chinese__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                            <p class='chinese__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                        </div>
                        <button class='welcome__button'>VIEW ALL</button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Chinese;