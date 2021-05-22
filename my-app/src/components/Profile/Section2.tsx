import {FC,useState} from 'react';
import {WrapperSection2} from '../../styledHelpers/Profile'
import { IUsersReducer } from '../../reducers/usersReducers';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';

export const Section2: FC =()=>{
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    let [isChange, showChange] = useState(false);

    //section 21
    let [expertise, setExpertise] = useState('Neque porro');
    let [specialities, setSpecialities] = useState('est qui dolorem');
    let [specialities2, setSpecialities2] = useState('ipsum quia');
    let [administration, setAdministration] = useState('ipsum quia');
    let [administration2, setAdministration2] = useState('dolor sit');
    let [countries, setCountries] = useState('Poland');
    //section 22
    let [fee, setFee] = useState('610€/hour (Negociated)');
    let [term, setTerm] = useState('Monthly 10k€ - see with Jeanny Smith');
    let [service, setService] = useState('Corporate M&A and international acquisitions');
    let [file, setFile] = useState('File name');


   return(
    <WrapperSection2>
        <div className="WrapperSec21">
            <div className='Section21'>
                <div className='LeftSection21'>

                    <p className='Title21'>Expertise</p>
                    {isChange == false?(
                    <p className='colortext'>{expertise}</p>
                    ):(
                        <select value={expertise} onChange={event =>setExpertise(event.target.value)}>
                        <option value="Neque porro">Neque porro</option>
                        <option value="est qui dolorem">est qui dolorem</option>
                        <option value="ipsum quia">ipsum quia</option>
                        <option value="dolor sit">dolor sit</option>
                        <option value="amet, consectetur">amet, consectetur</option>
                        <option value="adipisci velit">adipisci velit</option>
                        <option value="Nulla non">Nulla non</option>
                        <option value="Suspendisse qu">Suspendisse qu</option>
                        </select>
                    )}
                    
                    <p className='Title21'>Specialities</p>
                    <div className='twoselect21'>
                    {isChange == false?(
                    <p>{specialities}</p>
                    ):(
                        <select value={specialities} onChange={event =>setSpecialities(event.target.value)}>
                        <option value="Neque porro">Neque porro</option>
                        <option value="est qui dolorem">est qui dolorem</option>
                        <option value="ipsum quia">ipsum quia</option>
                        <option value="dolor sit">dolor sit</option>
                        <option value="amet, consectetur">amet, consectetur</option>
                        <option value="adipisci velit">adipisci velit</option>
                        <option value="Nulla non">Nulla non</option>
                        <option value="Suspendisse qu">Suspendisse qu</option>
                        </select>
                    )}
                    {isChange == false?(
                    <p>{specialities2}</p>
                    ):(
                        <select value={specialities2} onChange={event =>setSpecialities2(event.target.value)}>
                        <option value="Neque porro">Neque porro</option>
                        <option value="est qui dolorem">est qui dolorem</option>
                        <option value="ipsum quia">ipsum quia</option>
                        <option value="dolor sit">dolor sit</option>
                        <option value="amet, consectetur">amet, consectetur</option>
                        <option value="adipisci velit">adipisci velit</option>
                        <option value="Nulla non">Nulla non</option>
                        <option value="Suspendisse qu">Suspendisse qu</option>
                        </select>
                    )}
                    </div>

                    <p className='Title21'>Administration to practice law</p>
                    <div className='twoselect21'>
                    {isChange == false?(
                    <p>{administration}</p>
                    ):(
                        <select value={administration} onChange={event =>setAdministration(event.target.value)}>
                        <option value="Neque porro">Neque porro</option>
                        <option value="est qui dolorem">est qui dolorem</option>
                        <option value="ipsum quia">ipsum quia</option>
                        <option value="dolor sit">dolor sit</option>
                        <option value="amet, consectetur">amet, consectetur</option>
                        <option value="adipisci velit">adipisci velit</option>
                        <option value="Nulla non">Nulla non</option>
                        <option value="Suspendisse qu">Suspendisse qu</option>
                        </select>
                    )}
                    {isChange == false?(
                    <p>{administration2}</p>
                    ):(
                        <select value={administration2} onChange={event =>setAdministration2(event.target.value)}>
                        <option value="Neque porro">Neque porro</option>
                        <option value="est qui dolorem">est qui dolorem</option>
                        <option value="ipsum quia">ipsum quia</option>
                        <option value="dolor sit">dolor sit</option>
                        <option value="amet, consectetur">amet, consectetur</option>
                        <option value="adipisci velit">adipisci velit</option>
                        <option value="Nulla non">Nulla non</option>
                        <option value="Suspendisse qu">Suspendisse qu</option>
                        </select>
                    )}
                    </div>

                    <p className='Title21'>Countries</p>
                    {isChange == false?(
                    <p>{countries}</p>
                    ):(
                    <select value={countries} onChange={event =>setCountries(event.target.value)}>
                        <option value="Poland">Poland</option>
                        <option value="Germany">Germany</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Italy">Italy</option>
                        <option value="Norway">Norway</option>
                        <option value="Spain">Spain</option>
                        <option value="Portugal">Portugal</option>
                    </select>)}
                </div>
                <div className='photochange21'>
                    <img className='photochange' src={(isChange == false?"media/pen.svg":"media/save.svg")} onClick={()=>showChange(isChange == false ? isChange = true:isChange=false)}/>
                </div>
            </div>
            </div>




        <div className="WrapperSec22">

        <h2>Panel information</h2>
         <p className ='graycolor'>Haurly fee</p>
         {isChange == false?(
             <p>{fee}</p>
         ):(
         <input type="text" placeholder="Haurly fee" value={fee} onChange={event =>setFee(event.target.value)} />)}
         <p className='graycolor'>Terms & conditions</p>
         {isChange == false?(
             <p>{term}</p>
             ):(
         <input type="text" placeholder="Terms & conditions" value={term} onChange={event =>setTerm(event.target.value)} />)}





          {isChange == false?(
              <div>
                  <img src='media/fileicon.svg'/>
                  <p>{file}</p>
              </div>
          ):(
         <input type="file"  name={file} onChange={event =>setFile(event.target.value)}/>)}



            
         <h2>Services & projects</h2>
         {isChange == false?(
             <p>{service}</p>
         ):(
         <input type="text" placeholder="Services & projects" value={service} onChange={event =>setService(event.target.value)} />)}



         <p>Internal correspondates</p>
         <div className='correspodants'>
            <img src={photosList[0]?.url}/>
            <p>first name</p>
            <p>last name</p>
            <img src="media/publications.svg"/>
            <p>Massage</p>
            <img src="media/publications.svg"/>
            <p>Profile</p>
         </div>

         <div className='correspodants'>
            <img src={photosList[0]?.url}/>
            <p>first name</p>
            <p>last name</p>
            <img src="media/publications.svg"/>
            <p>Massage</p>
            <img src="media/publications.svg"/>
            <p>Profile</p>
         </div>

        </div>   






       

    </WrapperSection2>
   );
};