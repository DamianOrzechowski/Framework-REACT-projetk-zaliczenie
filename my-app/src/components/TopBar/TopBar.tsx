import { FC } from 'React';
import styled from 'styled-components';
import { Wrapper } from'../../styledHelpers/Components'
import { Colors } from '../../styledHelpers/Colors'
import {ExpandedMenu} from '../TopBar/ExpandedMenu'


const InnerWrapper = styled.div`
width:1200px;
background: ${Colors.white};
`;
const RightIcons = styled.div`

`;
const InputWrapper = styled.div`
`;
export const TopBar: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <img src="" alt=""/>
                <div>
                    <ExpandedMenu />
                </div>
                <InputWrapper>
                <input type="text"/>
                <img src="" alt=""/>
                </InputWrapper>
            
                <RightIcons>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
                </RightIcons>
            </InnerWrapper>        
        </Wrapper>


    );
}