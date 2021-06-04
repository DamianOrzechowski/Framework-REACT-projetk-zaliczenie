import { ChangeEvent, FC, useState } from 'react'
import {ExpandedMenuUl,LiExpandedMenu, Account,Logout ,ScrollBar} from '../../styledHelpers/Components'
import {Link} from 'react-router-dom';

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';





export const ExpandedMenu: FC = () => {
  
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

    const [inputText,setInputText] = useState<string>('');
     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
         const text = e.target.value;
         setInputText(text)
     }


    return(
        <ExpandedMenuUl>

            
            
          <ul>
            <li><input type="text" value={inputText} onChange={handleInputChange}   className="inputTopBarFilter" placeholder='Filter...'/></li>
            <li id="group">Platform</li>

            {"Home".toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/">
                <LiExpandedMenu>
                <li><img src="/media/house2.svg"/><p>Home</p></li>
                </LiExpandedMenu>
                </Link>
            }

            {"Publications".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="/media/publications.svg"/><p>Publications</p></li>
            </LiExpandedMenu>
            </Link>
            }

            {"People".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="/media/people.svg"/><p>People</p></li>
            </LiExpandedMenu>
            </Link>
            }
              
            {"Entities".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="/media/entities2.svg"/><p>Entities</p></li>
            </LiExpandedMenu>
            </Link>
            }

            {"Administration".toLowerCase().includes(inputText.toLowerCase()) &&   
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="/media/administration.svg"/><p>Administration</p></li>
            </LiExpandedMenu>
            </Link>
            }


            <li id="group">Workspaces</li>
            <ScrollBar>

            {"client contract".toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to='/Workspaces/Client contract/sticky-note-regular.svg'>
            <LiExpandedMenu>
            <li><img src="/media/sticky-note-regular.svg"/><p>Client contract</p></li>
            </LiExpandedMenu>
            </Link>
            }

            {"Supplier contract".toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/Workspaces/Suppiler Contract/book-solid.svg">
            <LiExpandedMenu>
            <li><img src="/media/book-solid.svg"/><p>Supplier contract</p></li>
            </LiExpandedMenu>
            </Link>
            }

            {"Corporate".toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/Workspaces/Corporate/sticky-note-regular.svg">
            <LiExpandedMenu>
            <li><img src="/media/sticky-note-regular.svg"/><p>Corporate</p></li>
            </LiExpandedMenu>
            </Link>
            }
                   
            {"Group Norms".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/Workspaces/Grup Norms/sticky-note-regular.svg">
            <LiExpandedMenu>
            <li><img src="/media/sticky-note-regular.svg"/><p>Group Norms</p></li>
            </LiExpandedMenu>
            </Link>
            }

            {"Estate contracts".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/Workspaces/Estate Contracts/house2.svg">
            <LiExpandedMenu>
            <li><img src="/media/house2.svg"/><p>Estate contracts</p></li>
            </LiExpandedMenu>
            </Link>
            }

            {"Commercial".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/Workspaces/Commercial/book-solid.svg">
            <LiExpandedMenu>
            <li><img src="/media/book-solid.svg"/><p>Commercial</p></li>
            </LiExpandedMenu>
            </Link>
            }

            {"Shops".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/Workspaces/Shops/arrow-down.svg">
            <LiExpandedMenu>
            <li><img src="/media/arrow-down.svg"/><p>Shops</p></li>
            </LiExpandedMenu>
            </Link>
            }

            {"Business".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/Workspaces/Buissnes/entities.svg">
            <LiExpandedMenu>
            <li><img src="/media/entities.svg"/><p>Business</p></li>
            </LiExpandedMenu>
            </Link>
             }

            {"Manager".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/Workspaces/Manager/people.svg">
            <LiExpandedMenu>
            <li><img src="/media/people.svg"/><p>Manager</p></li>
            </LiExpandedMenu>
            </Link>
            }

            {"Online".toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to="/Workspaces/Online/sticky-note-regular.svg">
            <LiExpandedMenu>
            <li><img src="/media/sticky-note-regular.svg"/><p>Online</p></li>
            </LiExpandedMenu>
            </Link>
            }
            </ScrollBar>

            <li id="group">Account</li>
            <Link to="/Profile">
            <Account>
            <li><img src={photosList[0]?.url}/>
            <div>
            <p >{usersList?.[0]?.name}</p><p>See profile</p>
            </div>
            </li>
            </Account>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li><img src="/media/privacy.svg"/><p>Privacy</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
            <LiExpandedMenu>
            <li id="Settings"><img src="/media/settings.svg"/><p>Settings</p></li>
            </LiExpandedMenu>
            </Link>
            <Link to="/">
                <Logout>
            <li><img src="/media/logout.svg"/><p>Logout</p></li> 
            </Logout> 
            </Link>
            </ul>
        </ExpandedMenuUl>
    );

};