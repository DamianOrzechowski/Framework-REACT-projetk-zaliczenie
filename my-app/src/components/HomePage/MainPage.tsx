import React, {FC} from 'react';
//router
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
//router
import styled from 'styled-components'

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

import{Entities} from '../Entities/Entities';
import{Main} from'../Main/Main';
import{Test} from'../Test/Test'

const Wrapper = styled.div`
 background:#f1f1f1;
 font-family: 'Roboto', sans-serif;
 height:100vh;
`;

const Content = styled.div`
max-width:1200px;
display:flex;
align-items:center;
`;
const MainPage: FC =() => {
    
    return (
        <Router>
        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu />
                 <Switch>
                 <Route path="/Test">
                <Test />
                </Route>

                <Route path="/Entities">
                <Entities />
                </Route>
                <Route path="/">
                    <Main/>
                </Route>
                
                </Switch>
                
            </Content>
        </Wrapper>
        </Router>
    );
    
}







export default MainPage