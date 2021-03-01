import React from 'react';
import '../tabs/style.css';

function Tabs() {

    const tab = (type) => {
        let tabs = document.getElementsByClassName('tab')
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('tab_active')
        }

        document.getElementById(type + '_tab').classList.add('tab_active')

        let contents = document.getElementsByClassName('content')
        for( let i = 0; i < contents.length; i++) {
            contents[i].classList.remove('content_active')
        }

        document.getElementById(type + '_content').classList.add('content_active')

    }

    return (
        <section class='tab-section'>
            <div style={{margin: '0 15% 0 12%'}}>
                <div class='tabs-wrapper'>
                    <div class='tabs'>
                        <h3 class='tabs__littleTitle'>RESTAURANT</h3>
                        <h1 class='tabs__title'>MENU</h1>
                        <p class='tab tab_active' id='all_tab' onClick={tab('all')}>ALL</p>
                        <p class='tab' id='starters_tab' onClick={tab('starters')}>STARTERS</p>
                        <p class='tab' id='main_tab' onClick={tab('main')}>MAIN</p>
                        <p class='tab' id='desert_tab' onClick={tab('desert')}>DESERT</p>
                        <p class='tab' id='daily_tab' onClick={tab('daily')}>DAILY MENU</p>
                        <p class='tab' id='chef_tab' onClick={tab('chef')}>CHEF'S SPECIALITY</p>
                        <p class='tab' id='offers_tab' onClick={tab('offers')}>OFFERS</p>
                    </div>
                    <div class='contents'>
                        <div class='content content_active' id='all_content'>
                            <div class='content_component1'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component1'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component1'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component1'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component1'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component1'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component1'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component1'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component1'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                        </div>
                        <div class='content' id='starters_content'>
                            <div class='content_component2'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component2'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component2'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component2'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component2'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component2'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component2'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component2'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component2'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                        </div>
                        <div class='content' id='main_content'>
                            <div class='content_component3'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component3'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component3'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component3'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component3'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component3'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component3'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component3'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component3'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                        </div>
                        <div class='content' id='desert_content'>
                            <div class='content_component4'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component4'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component4'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component4'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component4'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component4'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component4'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component4'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component4'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                        </div>
                        <div class='content' id='daily_content'>
                            <div class='content_component5'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component5'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component5'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component5'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component5'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component5'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component5'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component5'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component5'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                        </div>
                        <div class='content' id='chef_content'>
                            <div class='content_component6'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component6'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component6'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component6'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component6'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component6'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component6'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component6'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component6'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                        </div>
                        <div class='content' id='offers_content'>
                            <div class='content_component7'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component7'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component7'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component7'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component7'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component7'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component7'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component7'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                            <div class='content_component7'>
                                <div class='content__about'>    
                                    <button class='content__button'>ADD TO CART</button> 
                                    <p class='content_name'>name of product</p>
                                    <p class='content_price'>$12.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Tabs;