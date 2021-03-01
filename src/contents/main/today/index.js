import React from 'react';
import '../today/style.css';

function Today() {

    return (
        <section class='today'>
            <div style={{margin: '0 50px'}}>
                <div class='today-wrapper'>
                    <div class='today__info'>
                        <h1 class='menu__title'>La creme de la creme</h1>
                        <h2 style={{marginBottom: '20px'}} class='menu__subtitle'>TODAY'S SPECIALITY</h2>
                        <p class='today__text'>Oven Roasted duck with special sousage</p>
                        <p class="today__price">$25.00</p>
                        <button class='today__button'>READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Today;