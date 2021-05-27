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
    let [correspondates, setCorrespondates] = useState(usersList?.[1]?.name);
    let [correspondates2, setCorrespondates2] = useState(usersList?.[2]?.name);
    let photonumber = Math.floor(Math.random()*400);
    let photonumber2 = Math.floor(Math.random()*400);
    //tabel proposals
    let [propname1, setPropName1] = useState('dolor sit');
    let [propname2, setPropName2] = useState('amconsectetur');
    let [propname3, setPropName3] = useState('adipisicing elit');
    let [propentity1, setPropEntity1] = useState('Lorem');
    let [propentity2, setPropEntity2] = useState('quaerat');
    let [propentity3, setPropEntity3] = useState('temporibus');
    let [proplocation1, setPropLocation1] = useState('France');
    let [proplocation2, setPropLocation2] = useState('Poland');
    let [proplocation3, setPropLocation3] = useState('Germany');
    let [propexp1, setPropExp1] = useState('aporrot');
    let [propexp2, setPropExp2] = useState('molestias');
    let [propexp3, setPropExp3] = useState('corporis');
    let [propdate1, setPropDate1] = useState('2021-05-06');
    let [propdate2, setPropDate2] = useState('2021-04-07');
    let [propdate3, setPropDate3] = useState('2021-07-08');
    let [propfirm3, setPropFirm3] = useState('KFC');
    let [propfirm2, setPropFirm2] = useState('ZARA');
    let [propfirm1, setPropFirm1] = useState('Amrit');
    //tabel Internal
    let [intname1, setIntName1] = useState('dolor sit');
    let [intname2, setIntName2] = useState('amconsectetur');
    let [intname3, setIntName3] = useState('adipisicing elit');
    let [intentity1, setIntEntity1] = useState('Lorem');
    let [intentity2, setIntEntity2] = useState('quaerat');
    let [intentity3, setIntEntity3] = useState('temporibus');
    let [intlocation1, setIntLocation1] = useState('France');
    let [intlocation2, setIntLocation2] = useState('Poland');
    let [intlocation3, setIntLocation3] = useState('Germany');
    let [intexp1, setIntExp1] = useState('aporrot');
    let [intexp2, setIntExp2] = useState('molestias');
    let [intexp3, setIntExp3] = useState('corporis');
    let [intdate1, setIntDate1] = useState('2021-05-06');
    let [intdate2, setIntDate2] = useState('2021-04-07');
    let [intdate3, setIntDate3] = useState('2021-07-08');

    //Amount of fees
    let [amyear1, setAmYear1] = useState('2019');
    let [amyear2, setAmYear2] = useState('2018');
    let [amyear3, setAmYear3] = useState('2017');
    let [amcost1, setAmCost1] = useState('CS 153');
    let [amcost2, setAmCost2] = useState('CS 153');
    let [amcost3, setAmCost3] = useState('CS 47');
    let [amcost4, setAmCost4] = useState('CS 153');
    let [amcost5, setAmCost5] = useState('CS 32');
    let [amtotal1, setAmTotal1] = useState('3 500€');
    let [amtotal2, setAmTotal2] = useState('9 500€');
    let [amtotal3, setAmTotal3] = useState('10 500€');
    let [amtotal4, setAmTotal4] = useState('18 500€');
    let [amtotal5, setAmTotal5] = useState('15 500€');
    let [amlaw1, setAmLaw1] = useState('Clifford chance');
    let [amlaw2, setAmLaw2] = useState('Linklaters');
    let [amlaw3, setAmLaw3] = useState('Linklaters');
    let [amlaw4, setAmLaw4] = useState('Linklaters');
    let [amlaw5, setAmLaw5] = useState('Linklaters');
    


    
    


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
              <div className='file'>
                  <img src='media/fileicon.svg'/>
                  <p>{file}</p>
              </div>
          ):(
              <div className='file'>
         <input type="file"  name={file} onChange={event =>setFile(event.target.value)}/>
         </div>)}



            
         <h2>Services & projects</h2>
         {isChange == false?(
             <p>{service}</p>
         ):(
         <input type="text" placeholder="Services & projects" value={service} onChange={event =>setService(event.target.value)} />)}



         <p>Internal correspondates</p>
         <div className='correspodants'>
         {isChange == false?(
             <div className='photocorrespondates'>
             <img src={photosList[photonumber]?.url}/>
             <p>{correspondates}</p>
             </div>
         ):(
             <div className='photocorrespondates'>
                 <img src={photosList[0]?.url}/>
                 <select value='' onChange={event =>setCorrespondates(event.target.value) }>
                     <option value={usersList?.[1]?.name} >{usersList?.[1]?.name}</option>
                     <option value={usersList?.[2]?.name} >{usersList?.[2]?.name}</option>
                     <option value={usersList?.[3]?.name} >{usersList?.[3]?.name}</option>
                     <option value={usersList?.[4]?.name} >{usersList?.[4]?.name}</option>
                     <option value={usersList?.[5]?.name} >{usersList?.[5]?.name}</option>
                     <option value={usersList?.[6]?.name} >{usersList?.[6]?.name}</option>
                     <option value={usersList?.[7]?.name} >{usersList?.[7]?.name}</option>
                     <option value={usersList?.[8]?.name} >{usersList?.[8]?.name}</option>
                     <option value={usersList?.[9]?.name} >{usersList?.[9]?.name}</option>
                     
                 </select>
             </div>
         )}
         <div className='two22'>
            <div className='message'>
            <img src="media/message.svg"/>
            <p>Massage</p>
            </div >
            <div className='profile'>
            <img src="media/user.svg"/>
            <p>Profile</p>
            </div>
            </div>
         </div>

         <div className='correspodants'>
             
         {isChange == false?(
             <div className='photocorrespondates'>
             <img src={photosList[photonumber2]?.url}/>
             <p>{correspondates2}</p>
             </div>
         ):(
             <div className='photocorrespondates'>
                 <img src={photosList[0]?.url}/>
                 <select value='' onChange={event =>setCorrespondates2(event.target.value) }>
                     <option value={usersList?.[1]?.name} >{usersList?.[1]?.name}</option>
                     <option value={usersList?.[2]?.name} >{usersList?.[2]?.name}</option>
                     <option value={usersList?.[3]?.name} >{usersList?.[3]?.name}</option>
                     <option value={usersList?.[4]?.name} >{usersList?.[4]?.name}</option>
                     <option value={usersList?.[5]?.name} >{usersList?.[5]?.name}</option>
                     <option value={usersList?.[6]?.name} >{usersList?.[6]?.name}</option>
                     <option value={usersList?.[7]?.name} >{usersList?.[7]?.name}</option>
                     <option value={usersList?.[8]?.name} >{usersList?.[8]?.name}</option>
                     <option value={usersList?.[9]?.name} >{usersList?.[9]?.name}</option>
                     
                 </select>
             </div>
         )}
         <div className='two22'>
             <div className='message'>
            <img src="media/message.svg"/>
            <p>Massage</p>
            </div>
            
            


            <div className='profile'>
            <img src="media/user.svg"/>
            <p>Profile</p>
            </div>
         </div>
         </div>  
        </div>   


        <div className="tabelProposals">

        <h2>Proposals</h2>

        

        
        {isChange == false?(
            <div className='columns'>

                <div className='columnfirst'>
                    <h3>Name</h3>
                    <p>{propname1}</p>
                    <p>{propname2}</p>
                    <p>{propname3}</p>
                </div>

                <div className='column'>
                    <h3>Entity</h3>
                    <p>{propentity1}</p>
                    <p>{propentity2}</p>
                    <p>{propentity3}</p>
                </div>
                <div className='column'>
                    <h3>Location</h3>
                    <p>{proplocation1}</p>
                    <p>{proplocation2}</p>
                    <p>{proplocation3}</p>
                </div>
                <div className='column'>
                    <h3>Expertise</h3>
                    <p>{propexp1}</p>
                    <p>{propexp2}</p>
                    <p>{propexp3}</p>
                </div>
                <div className='column'>
                    <h3>Date</h3>
                    <p>{propdate1}</p>
                    <p>{propdate2}</p>
                    <p>{propdate3}</p>
                </div>
                <div className='column'>
                    <h3>Firm</h3>
                    <p>{propfirm1}</p>
                    <p>{propfirm2}</p>
                    <p>{propfirm3}</p>
                </div>
            </div>

        ):(
            <div className='columns'>

                <div className='columnfirst'>
                    <h3>Name</h3>
                    <input type="text" value={propname1} onChange={event =>setPropName1(event.target.value)}/>
                    <input type="text" value={propname2} onChange={event =>setPropName2(event.target.value)}/>
                    <input type="text" value={propname3} onChange={event =>setPropName3(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Entity</h3>
                    <input type="text" value={propentity1} onChange={event =>setPropEntity1(event.target.value)}/>
                    <input type="text" value={propentity2} onChange={event =>setPropEntity2(event.target.value)}/>
                    <input type="text" value={propentity3} onChange={event =>setPropEntity3(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Location</h3>
                    <input type="text" value={proplocation1} onChange={event =>setPropLocation1(event.target.value)}/>
                    <input type="text" value={proplocation2} onChange={event =>setPropLocation2(event.target.value)}/>
                    <input type="text" value={proplocation3} onChange={event =>setPropLocation3(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Expertise</h3>
                    <input type="text" value={propexp1} onChange={event =>setPropExp1(event.target.value)}/>
                    <input type="text" value={propexp2} onChange={event =>setPropExp2(event.target.value)}/>
                    <input type="text" value={propexp3} onChange={event =>setPropExp3(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Date</h3>
                    <input type="date" className='propinputdate' value={propdate1} onChange={event =>setPropDate1(event.target.value)}/>
                    <input type="date" className='propinputdate' value={propdate2} onChange={event =>setPropDate2(event.target.value)}/>
                    <input type="date" className='propinputdate' value={propdate3} onChange={event =>setPropDate3(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Firm</h3>
                    <input type="text" value={propfirm1} onChange={event =>setPropFirm1(event.target.value)}/>
                    <input type="text" value={propfirm2} onChange={event =>setPropFirm2(event.target.value)}/>
                    <input type="text" value={propfirm3} onChange={event =>setPropFirm3(event.target.value)}/>
                </div>

            </div>
        )}

        

        <h4>See more proposals</h4>

        </div>


        <div className="tabelInternal">

        <h2>Internal reviews</h2>

        

        
        {isChange == false?(
            <div className='columns'>

                <div className='columnfirst'>
                    <h3>Name</h3>
                    <p>{intname1}</p>
                    <p>{intname2}</p>
                    <p>{intname3}</p>
                </div>

                <div className='column'>
                    <h3>Entity</h3>
                    <p>{intentity1}</p>
                    <p>{intentity2}</p>
                    <p>{intentity3}</p>
                </div>
                <div className='column'>
                    <h3>Location</h3>
                    <p>{intlocation1}</p>
                    <p>{intlocation2}</p>
                    <p>{intlocation3}</p>
                </div>
                <div className='column'>
                    <h3>Expertise</h3>
                    <p>{intexp1}</p>
                    <p>{intexp2}</p>
                    <p>{intexp3}</p>
                </div>
                <div className='column'>
                    <h3>Date</h3>
                    <p>{intdate1}</p>
                    <p>{intdate2}</p>
                    <p>{intdate3}</p>
                </div>
                
            </div>

        ):(
            <div className='columns'>

                <div className='columnfirst'>
                    <h3>Name</h3>
                    <input type="text" value={intname1} onChange={event =>setIntName1(event.target.value)}/>
                    <input type="text" value={intname2} onChange={event =>setIntName2(event.target.value)}/>
                    <input type="text" value={intname3} onChange={event =>setIntName3(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Entity</h3>
                    <input type="text" value={intentity1} onChange={event =>setIntEntity1(event.target.value)}/>
                    <input type="text" value={intentity2} onChange={event =>setIntEntity2(event.target.value)}/>
                    <input type="text" value={intentity3} onChange={event =>setIntEntity3(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Location</h3>
                    <input type="text" value={intlocation1} onChange={event =>setIntLocation1(event.target.value)}/>
                    <input type="text" value={intlocation2} onChange={event =>setIntLocation2(event.target.value)}/>
                    <input type="text" value={intlocation3} onChange={event =>setIntLocation3(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Expertise</h3>
                    <input type="text" value={intexp1} onChange={event =>setIntExp1(event.target.value)}/>
                    <input type="text" value={intexp2} onChange={event =>setIntExp2(event.target.value)}/>
                    <input type="text" value={intexp3} onChange={event =>setIntExp3(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Date</h3>
                    <input type="date" className='propinputdate' value={intdate1} onChange={event =>setIntDate1(event.target.value)}/>
                    <input type="date" className='propinputdate' value={intdate2} onChange={event =>setIntDate2(event.target.value)}/>
                    <input type="date" className='propinputdate' value={intdate3} onChange={event =>setIntDate3(event.target.value)}/>
                </div>

               

            </div>
        )}

        

        <h4>See more Reviews</h4>

        </div>


        <div className="tabelAmount">

        <h2>Amount of fees</h2>

        

        
        {isChange == false?(
            <div className='columns'>

                <div className='columnfirst'>
                    <h3>Year</h3>
                    <p>{amyear1}</p>
                    <p>{amyear2}</p>
                    <p>{amyear3}</p>
                </div>

                <div className='column'>
                    <h3>Cost center</h3>
                    <p>{amcost1}</p>
                    <p>{amcost2}</p>
                    <p>{amcost3}</p>
                    <p>{amcost4}</p>
                    <p>{amcost5}</p>
                </div>
                <div className='column'>
                    <h3>Total amount</h3>
                    <p>{amtotal1}</p>
                    <p>{amtotal2}</p>
                    <p>{amtotal3}</p>
                    <p>{amtotal4}</p>
                    <p>{amtotal5}</p>
                </div>
                <div className='column'>
                    <h3>Law firm</h3>
                    <p>{amlaw1}</p>
                    <p>{amlaw2}</p>
                    <p>{amlaw3}</p>
                    <p>{amlaw4}</p>
                    <p>{amlaw5}</p>
                </div>
                
                
            </div>

        ):(
            <div className='columns'>

                <div className='columnfirst'>
                    <h3>Year</h3>
                    <input type="text" value={amyear1} onChange={event =>setAmYear1(event.target.value)}/>
                    <input type="text" value={amyear2} onChange={event =>setAmYear2(event.target.value)}/>
                    <input type="text" value={amyear3} onChange={event =>setAmYear3(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Cost center</h3>
                    <input type="text" value={amcost1} onChange={event =>setAmCost1(event.target.value)}/>
                    <input type="text" value={amcost2} onChange={event =>setAmCost2(event.target.value)}/>
                    <input type="text" value={amcost3} onChange={event =>setAmCost3(event.target.value)}/>
                    <input type="text" value={amcost4} onChange={event =>setAmCost4(event.target.value)}/>
                    <input type="text" value={amcost5} onChange={event =>setAmCost5(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Total amount</h3>
                    <input type="text" value={amtotal1} onChange={event =>setAmTotal1(event.target.value)}/>
                    <input type="text" value={amtotal2} onChange={event =>setAmTotal2(event.target.value)}/>
                    <input type="text" value={amtotal3} onChange={event =>setAmTotal3(event.target.value)}/>
                    <input type="text" value={amtotal4} onChange={event =>setAmTotal4(event.target.value)}/>
                    <input type="text" value={amtotal5} onChange={event =>setAmTotal5(event.target.value)}/>
                </div>

                <div className='column'>
                    <h3>Law firm</h3>
                    <input type="text" value={amlaw1} onChange={event =>setAmLaw1(event.target.value)}/>
                    <input type="text" value={amlaw2} onChange={event =>setAmLaw2(event.target.value)}/>
                    <input type="text" value={amlaw3} onChange={event =>setAmLaw3(event.target.value)}/>
                    <input type="text" value={amlaw4} onChange={event =>setAmLaw4(event.target.value)}/>
                    <input type="text" value={amlaw5} onChange={event =>setAmLaw5(event.target.value)}/>
                </div>

                

               

            </div>
        )}

        

       

        </div>







       

    </WrapperSection2>
   );
};