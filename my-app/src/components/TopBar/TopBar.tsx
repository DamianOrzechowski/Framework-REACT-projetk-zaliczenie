import { FC } from 'react';

import { Wrapper ,Menu,InnerWrapper,RightIcons,InputWrapper,ExpandedMenuWrapper } from'../../styledHelpers/Components';
import useDropdown from 'react-dropdown-hook';
import {Link} from 'react-router-dom';

import {ExpandedMenu} from '../TopBar/ExpandedMenu';



export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
    return (

        <Wrapper>
            <InnerWrapper>
                <ExpandedMenuWrapper>
                <Link to="/">
                <img src="media/logo.png"/>
                </Link>
                </ExpandedMenuWrapper>

                <Menu ref={wrapperRef}>
                <Link to="/">
                <img src="media/house2.svg" />
                </Link>
                <p>Home</p>
                
                <img onClick={toggleDropdown} src="media/arrow-down.svg" />
                {dropdownOpen && 
                    
                   <ExpandedMenu/>
                    
                    
                }
                </Menu>

                
                <InputWrapper>
                <input type="text" placeholder='Search Legalcluster'/>
                <img src="media/search.svg"/>
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