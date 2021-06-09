import {FC,useState} from 'react';
import { WrapperComments} from '../../styledHelpers/Workspaces'
import useDropdown from 'react-dropdown-hook';
import {TopSection,BottomSection,Comment ,CommentsSection} from '../../styledHelpers/Workspaces'
//comments
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import {IUsersReducer} from '../../reducers/usersReducers'
import { IPostsReducer } from '../../reducers/postsReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { useSelector } from 'react-redux';



export const Comments: FC =()=>{
    const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
    const [searchTerm,setSerachTerm] = useState('')
    const [follow,setFollow] = useState(true)
    //coments
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
  const { commentsList } = useSelector<IState, ICommentsReducer>(globalState => globalState.comments);
  const { postsList } = useSelector<IState, IPostsReducer>(globalState => globalState.posts);
  const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);
    
    
    
 
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setCurrentPage(value);
  let [currentPage,setCurrentPage] = useState(1)
  let [itemsPerPage,setItemsPerPage] = useState(10)
  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem-itemsPerPage;

  let [postsTable,setPostsTable] = useState([{title:postsList?.[0]?.title,body:postsList?.[0]?.body,user:usersList?.[0]?.name,userid:postsList?.[0]?.userId}])
  for (let index = 1; index < postsList.length; index++) {
    if(postsTable.length < 100){
    let postTitle = postsList?.[index]?.title;
    let postBody = postsList?.[index]?.body;
    
    let postUserId = postsList?.[index]?.userId;

    let postuser = usersList?.[postUserId-1]?.name;

    postsTable.push({title:postTitle,body:postBody,user:postuser,userid:postUserId})
    } 
}
    
    return(
        <WrapperComments>
            <TopSection>
                <h2 className="title">Lastes Update</h2>
                <div className='rightsection'>
                    <div className='inputsection'>
                        <input type="text" placeholder='Filter by title...' onChange={event =>{setSerachTerm(event.target.value)}}/>
                        <img src="/media/search.svg"/>
                    </div>
                    <div className='expandedsection'>

                        <img src="/media/follow.png"/>
                        {follow===true?(<p>Followed</p>):(<p>My posts</p>)}
                        <img className='buttondown' onClick={toggleDropdown} src="/media/arrow-down.svg" />
                        {dropdownOpen && 
                            <ul className='list'>
                                <li className='listli' onClick={()=>setFollow(false)}>My posts</li>
                                <li className='listli'onClick={()=>setFollow(true)}>Followed</li>
                            </ul>
                        }
                    </div>
                </div>
            </TopSection>
            <BottomSection>
                <div className='all'><p>All</p></div>
                <div className='green'><img src="/media/entities.svg"/><p>SAS</p></div>
                <div className='blue'><img src="/media/entities.svg"/><p>SARL</p></div>
                <div className='yellow'><img src="/media/entities.svg"/><p>Secondary business</p></div>
                <div className='darkgray'><img src="/media/diagram.svg"/><p>Communities</p></div>
                <div className='gray'><img src="/media/sticky-note-regular.svg"/><p>POA</p></div>
                <div className='white'><img src="/media/checklist.svg"/><p>Survey</p></div>
                <div className='white'><p>...</p></div>
            </BottomSection>
            <CommentsSection>
            {postsTable.filter((val)=>{
                  if(searchTerm==''){
                      return val;
                  }else if(val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                      return val;
                  };
              }).filter((value)=>{
                if(follow===true){
                  return value
                }
                else if(value.user.toLowerCase()===('Leanne Graham').toLowerCase()){
                  return value
                }
              }).slice(indexOfFirstItem,indexOfLastItem).map(post => 
                <Comment>
                        <div className = 'commentTitle'>
                        {post.title}
                        </div>
                        <div  className = 'commentBody'>
                        {post.body}
                        </div>
                        <div className = 'bottomText'>
                            <img src = {photosList[3]?.url} alt = '' className = 'photo'/> 
                            <p>SAS</p>
                            <p>Updated 3 days ago by {post.user}</p>
                        </div>
                    <br />
                </Comment>
                )}
            <Pagination count={10} page={currentPage} onChange={handleChange}/>
            </CommentsSection>

        </WrapperComments>
        
    );
 };