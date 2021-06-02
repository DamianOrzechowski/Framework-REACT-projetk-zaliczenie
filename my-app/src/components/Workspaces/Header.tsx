import {FC} from 'react';
import {WrapperHeader} from '../../styledHelpers/Workspaces'

export const Header: FC =()=>{
    return(
        <WrapperHeader>
            <img src="media/contract2.jpg" className='HeaderPic' />
            <div className='HeaderBottom'>
                <img src="media/entities2.svg" className='HeaderBottomPic'/>
                
                <div className='HeaderBottomText'>
                    <p className='TopText'>Tu będzie nzawa</p>
                    <p className='BottomText'>Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory</p>
                </div>
                <img src="media/cog.svg" className='HeaderBottomPicRight'/>

                
            </div>
            
            

        </WrapperHeader>
        
    );
 };