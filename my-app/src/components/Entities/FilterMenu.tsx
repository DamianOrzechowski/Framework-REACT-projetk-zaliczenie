import {FC} from 'react';
import {WrapperFilter} from '../../styledHelpers/FilterMenu'

export const FilterMenu: FC =()=>{
    return(
        <WrapperFilter>
           <p className='first'>Rows are filtered by the following conditions starting from the top</p>
           <div>
               <img src="media/x.svg"/>
               <p className='colorblack'>Where</p>
               <p className='colorblack'>Company</p>
               <img src="media/arrow-down.svg"/>
               <p className='colorblack'>Contains</p>
               <img src="media/arrow-down.svg"/>
               <input type="text" placeholder='Type..' />

           </div>
           <div>
               <img src="media/x.svg"/>
               <p className='colorblack'>Where</p>
               <p className='colorblack'>Status</p>
               <img src="media/arrow-down.svg"/>
               <p className='colorblack'>Is</p>
               <img src="media/arrow-down.svg"/>
               <input type="text" placeholder='Type..' />
               <p className='colorblack'>In</p>
               <img src="media/arrow-down.svg"/>
               <input type="text" placeholder='Entity..' />

           </div>
           <div>
               <img src="media/x.svg"/>
               <p className='colorblack'>And</p>
               <p className='colorblack'>Status</p>
               <img src="media/arrow-down.svg"/>
               <p className='colorblack'>Ends before</p>
               <img src="media/arrow-down.svg"/>
               <input type="text" placeholder='Date..' />
               <p className='colorblack'>In</p>
               <img src="media/arrow-down.svg"/>
               <input type="text" placeholder='Entity..' />

           </div>
           <div>
               <img src="media/plus.svg"/>
               <p className='colorblue'>Add filter</p>
               <p className='colorblue'>choose property</p>
               <img src="media/arrow-down.svg"/>

           </div>



        </WrapperFilter>

    );};
        

        

    