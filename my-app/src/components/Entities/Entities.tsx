import {FC} from 'react';
import {Page} from '../../styledHelpers/Entities'
import useDropdown from 'react-dropdown-hook';
import {FilterMenu} from '../../components/Entities/FilterMenu'


export const Entities: FC =()=>{
    const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
   return(
       <Page>
           <div className='TopNav'>
               <div className='LeftTopNav'>
                   <p>Entities</p>
                   <img src="media/cog.svg"/>
               </div>

               <div className='RightTopNav' >
                   <div className='Mosaic'>
                       <img src="media/squares.png"/>
                       <p>Mosaic</p>

                   </div>
                   <div className='Line'>
                       <img src="media/line.png"/>

                   </div>

               </div>
           </div>

           <div className='BottomNav'>
               <div className='LeftBottomNav'>

                   <div className='ExpandedMenu'>
                       <img src="media/circle.png"/>
                       <p>All</p>
                       <img src="media/arrow-down.svg"/>
                   </div>
                   <div className='More'>
                       <img src="media/more.svg"/>
                   </div>
                   <div className='Sort'>
                       <img src="media/sort.png"/>
                       <p>Sort</p>

                   </div>
                   <div onClick={toggleDropdown} className='Filter'>
                   {dropdownOpen && 
                    
                    <FilterMenu/>
                     
                     
                 }

                       <img src="media/filter.png"/>
                       <p>Filters</p>

                   </div>
                   <div className='Full-Screen'>
                       <img src="media/full-screen.svg" alt="" />

                   </div>
                   <div className='Share'onClick={() => navigator.clipboard.writeText('http://localhost:3000/Entities')}>
                       <img src="media/share.svg"/>
                       <p>Share</p>

                   </div>

               </div>

               <div className='RightBottomNav'>
                    <div className='inputsection'>
                        <input type="text" placeholder='Search...'/>
                        <img src="media/search.svg"/>
                    </div>
                    <div className='Followed'>
                    <img src="media/follow.png"/>
                        <p>Followed</p>
                        <img src='media/arrow-down.svg'/>

                    </div>
                    
                </div>
           </div>

           <div className='Box'>

           </div>



       </Page>

   );
};