import {FC} from 'react';
import {Page} from '../../styledHelpers/Profile'
import {Section1} from '../Profile/Section1'
import {Section2} from '../Profile/Section2'
import {Section3} from '../Profile/Section3'
import {Section4} from '../Profile/Section4'
import {Section5} from '../Profile/Section5'
import {Section6} from '../Profile/Section6'
//import Select from 'react-select'

export const Profile: FC =()=>{
   return(
       <Page>
           <Section1/>
           <Section2/>
           <Section3/>
           <Section4/>
           <Section5/>
           <Section6/>
           
       </Page>
   );
};