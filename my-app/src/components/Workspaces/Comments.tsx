import {FC,useState} from 'react';
import { WrapperComments} from '../../styledHelpers/Workspaces'
import useDropdown from 'react-dropdown-hook';
import {TopSection,BottomSection } from '../../styledHelpers/Workspaces'

export const Comments: FC =()=>{
    const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
    const [searchTerm,setSerachTerm] = useState('')
    const [follow,setFollow] = useState(true)
    return(
        <WrapperComments>
            <TopSection>
                <h2 className="title">Lastes Update</h2>
                <div className='rightsection'>
                    <div className='inputsection'>
                        <input type="text" placeholder='Filter by title...' onChange={event =>{setSerachTerm(event.target.value)}}/>
                        <img src="/media/search.svg"/>
                    </div>
                    <div className='expandedsection'>

                        <img src="/media/follow.png"/>
                        {follow===true?(<p>Followed</p>):(<p>My posts</p>)}
                        <img className='buttondown' onClick={toggleDropdown} src="/media/arrow-down.svg" />
                        {dropdownOpen && 
                            <ul className='list'>
                                <li className='listli' onClick={()=>setFollow(false)}>My posts</li>
                                <li className='listli'onClick={()=>setFollow(true)}>Followed</li>
                            </ul>
                        }
                    </div>
                </div>
            </TopSection>
            <BottomSection>
                <div className='all'><p>All</p></div>
                <div className='green'><img src="/media/entities.svg"/><p>SAS</p></div>
                <div className='blue'><img src="/media/entities.svg"/><p>SARL</p></div>
                <div className='yellow'><img src="/media/entities.svg"/><p>Secondary business</p></div>
                <div className='darkgray'><img src="/media/diagram.svg"/><p>Communities</p></div>
                <div className='gray'><img src="/media/sticky-note-regular.svg"/><p>POA</p></div>
                <div className='white'><img src="/media/checklist.svg"/><p>Survey</p></div>
                <div className='white'><p>...</p></div>
            </BottomSection>

        </WrapperComments>
        
    );
 };