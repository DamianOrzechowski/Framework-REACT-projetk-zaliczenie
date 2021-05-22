import {useState,FC, } from 'react';
import{WrapperSection1,TopSection,BottomSection} from '../../styledHelpers/Profile'
import { IUsersReducer } from '../../reducers/usersReducers';

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';

interface ISection1 {
title:string
}

export const Section1: FC<ISection1> = props =>{
    //{props.title} renderowanie tytułu
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);


    let [isChange, showChange] = useState(false);
   
   let [name, setName] = useState(usersList?.[0]?.name);
   let [company,setCompany] = useState(usersList?.[0]?.company.name);
   let [city,setCity] = useState(usersList?.[0]?.address.city);
   let [partner,setPartner] = useState('Partner');
   let [email,setEmail] = useState(usersList?.[0]?.email);
   let [phone,setPhone] = useState(usersList?.[0]?.phone);
   
   
    
   return(
    <WrapperSection1>
        {console.log(props.title)}
        
        <TopSection>
            <img src="media/message.svg"/>
            <p>Message</p>
            <img src="media/request.svg"/>
            <p>Create a request</p>
            <img src="media/cluster.png"/>
            <p>Add to a claster</p>
            <img src="media/x.svg" className='X'/>
        </TopSection>

        <BottomSection>
        <form action="">
            <div className='leftside'>
            <div className='photo'>
                <img src={photosList[0]?.url}/>
                <p>See profile</p>
                
            </div>
            
            <div className='namecity'>
                {isChange == false?(
                    <div>
                <p>{name}</p>
                <p>{company}</p>
                <p>{city}</p>
                <p>{partner}</p>

                </div>
                ):(
                    
                    <div>
                <input type="text" placeholder="Name" value={name} onChange={event =>setName(event.target.value)} />
                <input type="text" placeholder="Company" value={company} onChange={event =>setCompany(event.target.value)}/>
                <input type="text" placeholder="City" value={city}  onChange={event =>setCity(event.target.value)}/>
                <input type="text" placeholder="Partner" value={partner} onChange={event =>setPartner(event.target.value)}/>
                </div>

                )}
            </div>
            </div>
            
            <div className='rightside'>
                <img src= {(isChange == false?"media/pen.svg":"media/save.svg")} onClick={()=>showChange(isChange == false ? isChange = true:isChange=false)}/>
                <div className='rightbot'>
                {isChange == false?(
                    <div>
                        <p>{email}</p>
                        <p>{phone}</p>
                    </div>):(
                        <div>
                <input type="text" placeholder="e-mail" value={email} onChange={event =>setEmail(event.target.value)}/>
                <input type="text" placeholder="Phone number" value={phone} onChange={event =>setPhone(event.target.value)}/>
                </div>
                    )}
                </div>
            </div>
            </form>
        </BottomSection>

    </WrapperSection1>
   );
};