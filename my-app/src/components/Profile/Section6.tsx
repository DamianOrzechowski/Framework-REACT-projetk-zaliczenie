import {FC} from 'react';
import {WrapperSection6,Columns} from '../../styledHelpers/Profile'

export const Section6: FC =()=>{
   return(
    <WrapperSection6>
    <h2>Amount of fees</h2>
    <Columns>
    <div className='column'>
        <h2>Year</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
    <div className='column'>
    <h2>Cost center</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
    <div className='column'>
    <h2>Total amount</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
    <div className='column'>
    <h2>Law firm</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
    
  
    

    </Columns>
    
    

</WrapperSection6>
   );
};