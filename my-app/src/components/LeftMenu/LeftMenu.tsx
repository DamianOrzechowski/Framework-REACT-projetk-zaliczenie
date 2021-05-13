import { FC } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';


import {Link} from 'react-router-dom';
//Card
const Card = styled.div`
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
background: #FFFFFF;
box-shadow: 0 4px 2px -2px gray;

//width: 250px;

padding: 5px;
text-align: center;
`
const Profile = styled.div`
p{
    margin-top:5px;
    margin-bottom:10px;
}

img{
    margin-top:20px;
    width:90px;
    height:90px;
    border-radius: 50%;
    
    
    
    
}

background:white;
border-bottom: 2px solid gray; 
`
const YNetworkPublication = styled.div`
background:white;

`
const YNetwork = styled.div`
margin-top:10px;
margin-bottom:10px;

background:white;
display:flex;
align-items:center;
justify-content:space-between;
img{
margin-right:8px;
margin-left:8px;
}




`
const YPublication = styled.div`
margin-top:10px;
margin-bottom:10px;

background:white;
display:flex;
justify-content:space-around;
img{
margin-right:8px;
margin-left:8px;
}



`
//Publication/Ecosytem/Entities
const PuEcEn = styled.div`
background:#f1f1f1;
margin-top:10px;
margin-left:20px;
align-items:center;
`
const El = styled.div`
display:flex;
align-items:center;
padding:10px;
margin-top:2px;
img{
    margin-right:5px;
}
p{
  
color:black;
text-decoration:underline #f1f1f1;

}
`
//Menu
const LefttMenu = styled.div`
//margin-left:10px;
//margin-top:10px;
margin-right:10px;
`


//<img src="./media/profile.jpg"/>

export const LeftMenu: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

    return (
        
        //karta z zdjęciem po lewej
    <LefttMenu>    
        <Card>
            <Profile>
            <img src={photosList[0]?.url}/>
                <p >{usersList?.[0]?.name}</p>
                <p id="job">job title</p>

            </Profile>
            <YNetworkPublication>
                <YNetwork>
                    <img src="media/network.png"/>
                    <p>Your Network</p>
                    <img src="media/network.svg"/>
                </YNetwork>
                <YPublication>
                    <img src="media/publications.svg"/>
                    <p>Your Publications</p>
                    <img src="media/plus.svg"/>
                </YPublication>

            </YNetworkPublication>

        </Card>
        <PuEcEn>
            <Link to="/Test">
            <El>
                <img src="media/publications.svg"/>
                <p>Publications</p>
            </El>
            </Link>
            
            <Link to="/">
            <El>
                <img src="media/ecosystem.svg"/>
                <p>Ecosystem</p>
            </El>
            </Link>
            
            
            
            <Link to="/Entities">
            <El>
                <img src="media/entities2.svg"/>
                <p>Entities</p>
            </El>
            </Link>
                
            
        </PuEcEn>
    </LefttMenu>
    );
}