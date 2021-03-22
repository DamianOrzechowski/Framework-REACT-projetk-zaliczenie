import React, {FC} from 'react';

import styled from 'styled-components'

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu'


const Wrapper = styled.div`
 
`;

const Content = styled.div`
max-width:1200px;
display:flex;
align-items:center;
`;
const MainPage: FC =() => {
    return (
        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu />
                <div>content</div>
            </Content>
        </Wrapper>
    )
    
}

export default MainPage