import {FC} from 'react';
import {WrapperSection3} from '../../styledHelpers/Profile'

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';


export const Section3: FC =()=>{
   const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);
   return(
      <WrapperSection3>
         <h2>Panel information</h2>
         <p>Haurly fee</p>
         <input type="text" />
         <p>Terms & conditions</p>
         <input type="text" />
         <input type="file" name="file" />
            
         <h2>Services & projects</h2>
         <input type="text" />
         <p>Internal correspondates</p>

         <div className='correspodants'>
            <img src={photosList[0]?.url}/>
            <p>first name</p>
            <p>last name</p>
            <img src="media/publications.svg"/>
            <p>Massage</p>
            <img src="media/publications.svg"/>
            <p>Profile</p>
         </div>

         <div className='correspodants'>
            <img src={photosList[0]?.url}/>
            <p>first name</p>
            <p>last name</p>
            <img src="media/publications.svg"/>
            <p>Massage</p>
            <img src="media/publications.svg"/>
            <p>Profile</p>
         </div>

      </WrapperSection3>
   );
};