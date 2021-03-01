import React from 'react'
import Header from '../../contents/main/header/index';
import Picture from '../../contents/main/picture/index';
import Welcome from '../../contents/main/welcome/index';
import Menu from '../../contents/main/menu/index'
import Chinese from '../../contents/main/chinese/index'
import Today from '../../contents/main/today/index';
import Tabs from '../../contents/main/tabs/index'

function Main() {
    return (
        <>
            <Header/>
            <Picture/>
            <Welcome/>
            <Menu/>
            <Chinese/>
            <Today/>
            <Tabs/>
        </>
    )
}

export default Main;
