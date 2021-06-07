import {FC, useState} from 'react';
import useDropdown from 'react-dropdown-hook';

import {Wrapper , TopSection ,Comments} from '../../styledHelpers/CommentsSectionStyle'

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import {IUsersReducer} from '../../reducers/usersReducers'

export const CommentsSection: FC =()=>{
    const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();

    const { commentsList } = useSelector<IState, ICommentsReducer>(globalState => globalState.comments);
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    let [commentsTable,setCommentsTable] = useState([{name:commentsList?.[0]?.name,body:commentsList?.[0]?.body}])
    //setCommentsTable([])

    for (let index = 1; index < commentsList.length; index++) {
        if(commentsTable.length < 500){
        let commentname:string = commentsList?.[index]?.name;
        let commentbody:string = commentsList?.[index]?.body;
        commentsTable.push({name:commentname,body:commentbody})
        }
        
    }
    
    const [searchTerm,setSerachTerm] = useState('')
    const [follow,setFollow] = useState(true)

    return(
        <Wrapper>
            <TopSection>
                <h2 className="title">Resume your work</h2>
                <div className='rightsection'>
                    <div className='inputsection'>
                        <input type="text" placeholder='Filter by title...' onChange={event =>{setSerachTerm(event.target.value)}}/>
                        <img src="media/search.svg"/>
                    </div>
                    <div className='expandedsection'>
                        <img src="media/follow.png"/>
                        {follow===true?(<p>Followed</p>):(<p>My posts</p>)}
                        <img className='buttondown' onClick={toggleDropdown} src="media/arrow-down.svg" />
                        {dropdownOpen && 
                            <ul className='list'>
                                <li className='listli' onClick={()=>setFollow(false)}>My posts</li>
                                <li className='listli'onClick={()=>setFollow(true)}>Followed</li>
                            </ul>
                        }
                    </div>
                </div>
            </TopSection>
            <Comments>
                {commentsTable.filter((val)=>{
                  if(searchTerm==''){
                      return val;
                  }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                      return val;

                  };
              }).map(comment=>(
                    <div>
                        <p className='name'>{comment.name}</p>
                        <p className='body'>{comment.body}</p>
                        <div className='bottomcomment'>
                            <img src="media/publications.svg"/>
                            <p>Subsid. Corp.</p>
                            <img src="media/publications.svg"/>
                            <p>Corporate</p>
                            <p>Upadted 3 days ago by {usersList?.[0]?.name}</p>
                        </div>
                    </div>
                ))}
            </Comments>

        </Wrapper>
    );
 };