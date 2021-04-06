import { FC } from 'React';
import styled from 'styled-components';
import img from '../../media/bell.svg'
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
justify-content:space-around;
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
                <img src="./media/bell.png"/>
                <p >name</p>
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
            <El>
                <img src="media/publications.svg"/>
                <p>Publications</p>
            </El>
            <El>
                <img src="media/ecosystem.svg"/>
                <p>Ecosystem</p>
            
            </El>
            <El>
                <img src="media/entities2.svg"/>
                <p>Entities</p>
            </El>
        </PuEcEn>
    </LefttMenu>
    );
}