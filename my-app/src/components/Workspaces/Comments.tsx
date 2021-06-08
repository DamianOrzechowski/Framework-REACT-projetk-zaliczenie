import {FC,useState} from 'react';
import { WrapperComments} from '../../styledHelpers/Workspaces'
import useDropdown from 'react-dropdown-hook';
import {TopSection,BottomSection,Commentss ,CommentsWrapper } from '../../styledHelpers/Workspaces'
//comments
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import {IUsersReducer} from '../../reducers/usersReducers'
import { IPostsReducer } from '../../reducers/postsReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) =>

  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

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
  let [itemsPerPage,setItemsPerPage] = useState(20)
  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem-itemsPerPage;
    
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
            <CommentsWrapper>
            {commentsList.filter((val)=>{
                  if(searchTerm==''){
                      return val;
                  }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                      return val;

                  };
              }).slice(indexOfFirstItem,indexOfLastItem).map(comment => 
                <Commentss>
                    <div className = 'innerComment'>
                        <div className = 'commentTitle'>
                            {comment.name}
                        </div>
                        {comment.body}
                        <div className = 'bottomText'>
                            <img src = {photosList[3]?.url} alt = '' className = 'photo'/>Subsid corp.
                            <img src = {photosList[3]?.url} alt = '' className = 'photo'/>Corporate
                            <img src = {photosList[3]?.url} alt = '' className = 'photo'/>Updated 7 days ago
                        </div>
                    </div>
                    <br />
                </Commentss>
                )}
            <Pagination count={25} page={currentPage} onChange={handleChange}/>
            </CommentsWrapper>

        </WrapperComments>
        
    );
 };