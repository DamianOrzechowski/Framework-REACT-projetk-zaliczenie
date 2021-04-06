import React, {FC} from 'react';
//router
import { BrowserRouter as Router, Switch, Link} from 'react-router-dom'
//router
import styled from 'styled-components'

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu'


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
                <div>content</div>
            </Content>
        </Wrapper>
        </Router>
    )
    
}

export default MainPage