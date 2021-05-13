import {FC} from 'react';


import {WrapperSection4,Columns} from '../../styledHelpers/Profile'



export const Section4: FC =()=>{
    
    return(
        <WrapperSection4>
            
            <h2>Proposals</h2>
            
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
            <div className='column'>
            <h2>Firm</h2>
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>

            </Columns>
            <h3>See more proposals</h3>
            

        </WrapperSection4>
    );
 };