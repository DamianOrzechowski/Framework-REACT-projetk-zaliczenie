import { FC } from 'React';
import styled from 'styled-components';
import { Wrapper } from'../../styledHelpers/Components'
import useDropdown from 'react-dropdown-hook'


import { Colors } from '../../styledHelpers/Colors'
import {ExpandedMenu} from '../TopBar/ExpandedMenu'


const InnerWrapper = styled.div`
//width:1200px;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
background: ${Colors.white};
`;
const RightIcons = styled.div`
img{
    
    padding:8px;
    margin-right:10px;
    
}
#border{
    background:#EDEDED;
    border-radius: 25px 25px 25px 25px;
    padding:8px;
}
`;
const InputWrapper = styled.div`
input{
    
    width:400px;
}
`;
const ExpandedMenuWrapper = styled.div`
background:white;
img{
    margin-left:5px;
}
`;
const Menu = styled.div`
display:flex;
`;
export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
    return (

    
        
        <Wrapper>
            <InnerWrapper>
                <ExpandedMenuWrapper>
                <img src="media/bell.svg"/>
                </ExpandedMenuWrapper>
                <Menu ref={wrapperRef}>
                <img src="media/house2.svg" />
                <p>Home</p>
                <img onClick={toggleDropdown} src="media/arrow-down.svg" />
                {dropdownOpen && 
                    
                   <ExpandedMenu/>
                    
                    
                }
                </Menu>

                
                <InputWrapper>
                <input type="text" placeholder='Search Legalcluster'/>
                <img src="" alt=""/>
                </InputWrapper>
            
                <RightIcons>
                <img src="media/house.svg"/>
                <img id="border" src="media/comments.png"/>
                <img id="border"src="media/bell.svg"/>
                </RightIcons>
            </InnerWrapper>        
        </Wrapper>


    );
}