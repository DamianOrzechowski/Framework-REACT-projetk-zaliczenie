import {FC} from 'react';
import {Page} from '../../styledHelpers/Profile'
import {Section1} from '../Profile/Section1'
import {Section2} from '../Profile/Section2'





export const Profile: FC =()=>{
   return(
       <Page>
           <Section1 title="tytul"/>
           <Section2/>
       </Page>
   );
};