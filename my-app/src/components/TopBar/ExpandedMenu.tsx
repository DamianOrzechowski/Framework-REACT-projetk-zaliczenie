import { FC } from 'React'
 
export const ExpandedMenu: FC = () => {
    return(
        <ul>
            <li><input type="text" placeholder='Filter...'/></li>
            <li>Platform</li>
            <li><img src="media/house2.svg"/><p>Home</p></li>
            <li><img src="media/house2.svg"/><p>Publications</p></li>
            <li><img src="media/house2.svg"/><p>People</p></li>
            <li><img src="media/house2.svg"/><p>Entities</p></li>
            <li><img src="media/house2.svg"/><p>Administration</p></li>
            <li>Workspaces</li>
            <li><img src="media/house2.svg"/><p>Client contract</p></li>
            <li><img src="media/house2.svg"/><p>Supplier contract</p></li>
            <li><img src="media/house2.svg"/><p>Corporate</p></li>
            <li><img src="media/house2.svg"/><p>Group Norms</p></li>
            <li><img src="media/house2.svg"/><p>Real estate contracts</p></li>
            <li>Account</li>
            <li><img src="media/house2.svg"/><p>name</p><p>See profile</p></li>
            <li><img src="media/house2.svg"/><p>Privacy</p></li>
            <li><img src="media/house2.svg"/><p>Settings</p></li>
            <li><img src="media/house2.svg"/><p>Logout</p></li>
        </ul>
    );

};