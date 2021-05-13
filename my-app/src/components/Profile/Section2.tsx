import {FC} from 'react';
import {WrapperSection2} from '../../styledHelpers/Profile'
import Select from 'react-select';


const options = [
    { value: 'poland', label: 'Poland' },
    { value: 'germany', label: 'Germany' },
    { value: 'sweden', label: 'Sweden' },
    { value: 'denmark', label: 'Denmark' },
    { value: 'italy', label: 'Italy' },
    { value: 'norway', label: 'Norway' },
    { value: 'spain', label: 'Spain' },
    { value: 'portugal', label: 'Portugal' },
    { value: 'france', label: 'France' },
    { value: 'scotland', label: 'Scotland' }
  ]

export const Section2: FC =()=>{
   return(
    <WrapperSection2>
        <form action="">
            <div className='LeftSection2'>
                <p>Expertise</p>
                <input type="text" />
                <p>Specialities</p>
                <input type="text" />
                <p>Administration to practice law</p>
                <input type="text" />
                <p>Countries</p>
                <Select options={options} />
            </div>
            <div>
                <img className='' src="media/save.svg"/>
            </div>
        </form>

    </WrapperSection2>
   );
};