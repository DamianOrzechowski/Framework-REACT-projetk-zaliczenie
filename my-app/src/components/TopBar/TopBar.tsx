import { FC } from 'React';
import styled from 'styled-components';
import { Wrapper } from'../../styledHelpers/Components'
import { Colors } from '../../styledHelpers/Colors'



const InnerWrapper = styled.div`
width:1200px;
background: ${Colors.white};
`;
export const TopBar: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                TopBar
            </InnerWrapper>
                

        
        </Wrapper>


    );
}