import {FC} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {LastesPublications, Page} from'../../styledHelpers/Components';

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';

import {Slider} from '../Main/Slider';

export const Main: FC =()=>{

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

   return(
       <Page>
           <LastesPublications>
               <div id='imgpub'>
               <p >Lorem ipsum dolor sit, ametlendus aliquam tempore explicabo quisquam eos eum, repudiandae ipsum iusto.</p>
               <div id='dateimgpub'><p id='colorwhite'>7 jan. 2020</p><img src="./media/profile.jpg" /> <p id='colorwhite'>{usersList?.[1]?.name}</p></div>
               </div>

               <div id='lastespub'>
                   <div id='publications'>
                       <p id='titlepublication'>Lastes Publications</p>

                       <div id='publication' >
                           <div id='imgleft'>
                               <img src="./media/conference.jpg"/>
                            </div>
                           <div id="rightside">
                               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem et, labore nihil iusto aperiam dicta.</p>
                               <div id='dateimg'>
                                   <p>7 jan. 2020</p>
                                   <img src={photosList[1]?.url} />
                                   <p>{usersList?.[1]?.name}</p>
                                </div>
                           </div>
                       </div>

                       <div id='publication' >
                           <div id='imgleft'>
                               <img src="./media/conference.jpg"/>
                            </div>
                           <div id="rightside">
                               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem et, labore nihil iusto aperiam dicta.</p>
                               <div id='dateimg'>
                                   <p>7 jan. 2020</p>
                                   <img src={photosList[2]?.url} />
                                   <p>{usersList?.[1]?.name}</p>
                                </div>
                           </div>
                       </div>

                       <div id='publication' >
                           <div id='imgleft'>
                               <img src="./media/conference.jpg"/>
                            </div>
                           <div id="rightside">
                               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem et, labore nihil iusto aperiam dicta.</p>
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
           <Slider/>
           
           
       
       
       </Page>
   );
};