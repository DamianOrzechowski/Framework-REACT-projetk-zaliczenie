import { FC } from 'React';
import styled from 'styled-components';
//Card
const Card = styled.div`
background:blue;
`
const Profile = styled.div`
background:green;
`
const YNetworkPublication = styled.div`
background:yellow;
`
const YNetwork = styled.div`
background:orange;
`
const YPublication = styled.div`
background:violet;
`
//Publication/Ecosytem/Entities
const PuEcEn = styled.div`
background:blueviolet;
`
const El = styled.div`
`




export const LeftMenu: FC = () => {
    return (
        //karta z zdjęciem po lewej
    <LeftMenu>    
        <Card>
            <Profile>
                <img src="" alt=""/>
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
    </LeftMenu>
    );
}