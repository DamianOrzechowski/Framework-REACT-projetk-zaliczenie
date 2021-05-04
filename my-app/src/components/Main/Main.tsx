import {FC} from 'react';
import {Link} from 'react-router-dom';
import {LastesPublications, Page} from'../../styledHelpers/Components';


import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { IPostsReducer } from '../../reducers/postsReducers';

import {SliderWorkspace} from './SliderWorkspace';
import {CommentsSection} from './CommentsSection';

export const Main: FC =()=>{

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);
    const { postsList } = useSelector<IState, IPostsReducer>(globalState => globalState.posts);

   return(
       <Page>
           <LastesPublications>
               <div id='imgpub'>
               <p >{postsList?.[1]?.body}</p>
               <div id='dateimgpub'><p id='colorwhite'>7 jan. 2020</p><img src={photosList[1]?.url} /> <p id='colorwhite'>{usersList?.[1]?.name}</p></div>
               </div>

               <div id='lastespub'>
                   <div id='publications'>
                       <p id='titlepublication'>Lastes Publications</p>

                       <div id='publication' >
                           <div id='imgleft'>
                               <img src={photosList[0]?.url}/>
                            </div>
                           <div id="rightside">
                               <p id="post">{postsList?.[6]?.body}</p>
                               <div id='dateimg'>
                                   <p>7 jan. 2020</p>
                                   <img src={photosList[1]?.url} />
                                   <p>{usersList?.[1]?.name}</p>
                                </div>
                           </div>
                       </div>

                       <div id='publication' >
                           <div id='imgleft'>
                               <img src={photosList[5]?.url}/>
                            </div>
                           <div id="rightside">
                               <p id="post">{postsList?.[0]?.body}</p>
                               <div id='dateimg'>
                                   <p>7 jan. 2020</p>
                                   <img src={photosList[2]?.url} />
                                   <p>{usersList?.[1]?.name}</p>
                                </div>
                           </div>
                       </div>

                       <div id='publication' >
                           <div id='imgleft'>
                               <img src={photosList[6]?.url}/>
                            </div>
                           <div id="rightside">
                               <p id="post">{postsList?.[4]?.body}</p>
                               <div id='dateimg'>
                                   <p>7 jan. 2020</p>
                                   <img src={photosList[4]?.url} />
                                   <p>{usersList?.[1]?.name}</p>
                                </div>
                           </div>
                       </div>

                       <Link to="/Test"><p id='titlepublication'>See more publications</p></Link>
                   </div>
               </div>
               
           </LastesPublications>

           <h1>Workspaces</h1>

           <SliderWorkspace/>

           <CommentsSection/>
           
           

           
           
           
       
       
       </Page>
   );
};