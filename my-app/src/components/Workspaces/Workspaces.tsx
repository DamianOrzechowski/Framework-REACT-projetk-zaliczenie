import {FC} from 'react';
import {PageWorkspaces} from '../../styledHelpers/Workspaces'
import {Header} from '../Workspaces/Header'
import {Banner} from '../Workspaces/Banner'
import {Comments} from '../Workspaces/Comments'




export const Workspaces: FC =()=>{
 
   return(
       <PageWorkspaces>
          <Header/>
          <Banner/>
          <Comments/>
        </PageWorkspaces>
   );
};