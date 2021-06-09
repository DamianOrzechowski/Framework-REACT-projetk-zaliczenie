import {FC, useState} from 'react';
import useDropdown from 'react-dropdown-hook';

import {Wrapper , TopSection ,Comments , Comment} from '../../styledHelpers/CommentsSectionStyle'
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import {IUsersReducer} from '../../reducers/usersReducers'
import { IPostsReducer } from '../../reducers/postsReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';

export const CommentsSection: FC =()=>{
    const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
    const [searchTerm,setSerachTerm] = useState('')
    const [follow,setFollow] = useState(true)

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
  const { commentsList } = useSelector<IState, ICommentsReducer>(globalState => globalState.comments);
  const { postsList } = useSelector<IState, IPostsReducer>(globalState => globalState.posts);
  const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setCurrentPage(value);
  let [currentPage,setCurrentPage] = useState(1)
  let [itemsPerPage,setItemsPerPage] = useState(10)
  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem-itemsPerPage;

  var userSelector=0;

  let [commentsTable,setCommentsTable] = useState([{name:commentsList?.[0]?.name,body:commentsList?.[0]?.body,user:usersList?.[0]?.name,}])
  for (let index = 1; index < commentsList.length; index++) {
    if(commentsTable.length < 500){
        if(userSelector<9){
            userSelector++
          }
          else{
            userSelector=0;
          }
    let commentname = commentsList?.[index]?.name;
    let commentbody = commentsList?.[index]?.body;
    let commentuser = usersList?.[userSelector]?.name;
    commentsTable.push({name:commentname,body:commentbody,user:commentuser})
    } 
}

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
              }).filter((value)=>{
                if(follow===true){
                  return value
                }
                else if(value.user.toLowerCase()===('Leanne Graham').toLowerCase()){
                  return value
                }
              }).slice(indexOfFirstItem,indexOfLastItem).map(comment => 
                <Comment>
                        <div className = 'commentTitle'>
                        {comment.name}
                        </div>
                        <div  className = 'commentBody'>
                        {comment.body}
                        </div>
                        <div className = 'bottomText'>
                            <img src = {photosList[3]?.url} alt = '' className = 'photo'/> 
                            <p>Subsid corp.</p>
                            <img src = {photosList[3]?.url} alt = '' className = 'photo'/> 
                            <p>Corporate</p>
                            <p>Updated 3 days ago by {comment.user}</p>
                        </div>
                    <br />
                </Comment>
                )}
            <Pagination count={50} page={currentPage} onChange={handleChange}/>
                
            </Comments>

        </Wrapper>
    );
 };