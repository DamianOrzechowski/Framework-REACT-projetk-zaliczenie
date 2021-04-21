import { FC } from 'React'
import {ExpandedMenuUl,LiExpandedMenu, Account,Logout} from '../../styledHelpers/Components'
import {Link} from 'react-router-dom';


export const ExpandedMenu: FC = () => {
    return(
        <ExpandedMenuUl>
            
          <ul>
            <li><input type="text" placeholder='Filter...'/></li>
            <li id="group">Platform</li>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/house2.svg"/><p>Home</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/publications.svg"/><p>Publications</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/people.svg"/><p>People</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/entities2.svg"/><p>Entities</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/administration.svg"/><p>Administration</p></li>
            </LiExpandedMenu>
            </Link>
            <li id="group">Workspaces</li>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/house2.svg"/><p>Client contract</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/house2.svg"/><p>Supplier contract</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/house2.svg"/><p>Corporate</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/house2.svg"/><p>Group Norms</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/house2.svg"/><p>Real estate contracts</p></li>
            </LiExpandedMenu>
            </Link>
            <li id="group">Account</li>
            <Link to="/">
            <Account>
            <li><img src="media/profile.jpg"/>
            <div>
            <p >name</p><p>See profile</p>
            </div>
            </li>
            </Account>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="media/privacy.svg"/><p>Privacy</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li id="Settings"><img src="media/settings.svg"/><p>Settings</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
                <Logout>
            <li><img src="media/logout.svg"/><p>Logout</p></li> 
            </Logout> 
            </Link>
            </ul>
        </ExpandedMenuUl>
    );

};