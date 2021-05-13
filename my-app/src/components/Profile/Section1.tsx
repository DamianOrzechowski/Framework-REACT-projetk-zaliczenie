import {FC} from 'react';
import{WrapperSection1,TopSection,BottomSection} from '../../styledHelpers/Profile'

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';

interface ISection1 {
title:string
}
//{props.title} renderowanie tytułu
export const Section1: FC<ISection1> = props =>{
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);
   
    
   return(
    <WrapperSection1>
        {console.log(props)}
        
        <TopSection>
            <img src="media/message.svg"/>
            <p>Message</p>
            <img src="media/request.svg"/>
            <p>Create a request</p>
            <img src="media/cluster.png"/>
            <p>Add to a claster</p>
            <img src="media/x.svg" className='X'/>
        </TopSection>

        <BottomSection>
        <form action="">
            <div className='leftside'>
            <div className='photo'>
                <img src={photosList[0]?.url}/>
                <p>See profile</p>
            </div>
            
            <div className='namecity'>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
            </div>
            
            <div className='rightside'>
                <img src="media/pen.svg"/>
                <div className='rightbot'>
                <input type="text" />
                <input type="text" />
                </div>
            </div>
            </form>
        </BottomSection>

    </WrapperSection1>
   );
};