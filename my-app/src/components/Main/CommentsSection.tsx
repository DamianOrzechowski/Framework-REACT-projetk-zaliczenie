import {FC} from 'react';
import {Link} from 'react-router-dom';
import useDropdown from 'react-dropdown-hook';

import {Wrapper , TopSection} from '../../styledHelpers/CommentsSectionStyle'

export const CommentsSection: FC =()=>{
    const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
    return(
        <Wrapper>
            <TopSection>
                <h2 className="title">Resume your work</h2>

                <div className='rightsection'>

                    <div className='inputsection'>

                        <input type="text" placeholder='Filter by title...'/>
                        <img src="media/search.svg"/>

                    </div>

                    <div className='expandedsection'>

                        <img src="media/follow.png"/>
                        <p>Followed</p>
                        <img className='buttondown' onClick={toggleDropdown} src="media/arrow-down.svg" />
                        {dropdownOpen && 
                            <ul className='list'>
                                <li>my posts</li>
                                <li>all posts</li>
                            </ul>
                        }

                    </div>

                </div>
            </TopSection>

        </Wrapper>
    );
 };