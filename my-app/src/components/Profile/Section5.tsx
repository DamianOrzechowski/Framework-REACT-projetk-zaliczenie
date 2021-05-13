import {FC} from 'react';
import {WrapperSection5,Columns} from '../../styledHelpers/Profile'

export const Section5: FC =()=>{
   return(
    <WrapperSection5>
    <h2>Interval reviews</h2>
    <Columns>
    <div className='column'>
        <h2>Name</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
    <div className='column'>
    <h2>Entity</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
    <div className='column'>
    <h2>Location</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
    <div className='column'>
    <h2>Expertise</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
    <div className='column'>
    <h2>Date</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
  
    

    </Columns>
    <h3>See more reviews</h3>
    
    

</WrapperSection5>
   );
};