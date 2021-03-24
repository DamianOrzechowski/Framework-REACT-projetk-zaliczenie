import { FC } from 'React';
import styled from 'styled-components';
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
background:white;
`
const YNetworkPublication = styled.div`
background:white;
`
const YNetwork = styled.div`
border-top:solid #e5e5e5;
background:white;
`
const YPublication = styled.div`
background:white;
`
//Publication/Ecosytem/Entities
const PuEcEn = styled.div`
background:blueviolet;
margin-top:10px;
`
const El = styled.div`
`
//Menu
const LefttMenu = styled.div`
margin-left:10px;
margin-top:10px;
`




export const LeftMenu: FC = () => {
    return (
        
        //karta z zdjęciem po lewej
    <LefttMenu>    
        <Card>
            <Profile>
                <img src="../icons/administration.png" alt=""/>
                <div>name</div>
                <div>job title</div>

            </Profile>
            <YNetworkPublication>
                <YNetwork>
                    <img src="" alt=""/>
                    <p>Your Network</p>
                    <img src="" alt=""/>
                </YNetwork>
                <YPublication>
                    <img src="" alt=""/>
                    <p>Your Network</p>
                    <img src="" alt=""/>
                </YPublication>

            </YNetworkPublication>

        </Card>
        <PuEcEn>
            <El>
                <img src="" alt=""/>
                <p>Publications</p>
            </El>
                <img src="" alt=""/>
                <p>Ecosystem</p>
            <El>
            </El>
            <El>
                <img src="" alt=""/>
                <p>Entities</p>
            </El>
        </PuEcEn>
    </LefttMenu>
    );
}