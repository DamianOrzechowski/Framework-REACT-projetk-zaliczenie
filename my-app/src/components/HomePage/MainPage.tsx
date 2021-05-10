import React, {FC, useEffect} from 'react';
//router
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
//router
import styled from 'styled-components'

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import{Entities} from '../Entities/Entities';
import{Main} from'../Main/Main';
import{Test} from'../Test/Test';
import{Profile} from '../Profile/Profile';

import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/usersActions';
import { getPhotos } from '../../actions/photoActions';
import { getComments } from '../../actions/commentActions';
import { getPosts } from '../../actions/postActions';
type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetComments = ReturnType<typeof getComments>
type GetPosts = ReturnType<typeof getPosts>

const Wrapper = styled.div`
 background:#f1f1f1;
 font-family: 'Roboto', sans-serif;
 //height:100vh;

`;

const Content = styled.div`

display:flex;
justify-content:center;

`;

const MainPage: FC =() => {
    
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch<GetUsers>(getUsers());
      dispatch<GetPhotos>(getPhotos());
      dispatch<GetComments>(getComments());
      dispatch<GetPosts>(getPosts());
    }, []);
    
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
                <Route path="/Profile">
                <Profile />
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







export default MainPage;