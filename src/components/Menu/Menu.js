import React from 'react';
import { useRouteMatch,  Switch, Route, BrowserRouter } from 'react-router-dom';
import MenuHeader from './MenuHeader';
import Appetizers from './types/Appetizers'
import Breads from './types/Breads'
import Desserts from './types/Desserts'
import Drinks from './types/Drinks'
import LunchCombos from './types/LunchCombos'
import Mains from './types/Mains'
import RiceCombos from './types/RiceCombo'

const Menu = () => {
    let  {url} = useRouteMatch()
    
    return (
            <BrowserRouter>
                <MenuHeader />
                <Switch>
                    <Route exact path={url+'/appetizers'} component={Appetizers} />
                    <Route exact path={url+'/breads'} component={Breads} />
                    <Route exact path={url+'/desserts'} component={Desserts} />
                    <Route exact path={url+'/drinks'} component={Drinks} />
                    <Route exact path={url+'/lunchcombos'} component={LunchCombos} />
                    <Route exact path={url+'/mains'} component={Mains} />
                    <Route exact path={url+'/ricecombos'} component={RiceCombos} />
                </Switch>
            </BrowserRouter>
                
     
    );
}

export default Menu;
