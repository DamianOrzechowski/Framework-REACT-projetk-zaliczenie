import {FC} from 'react';
import {Page } from '../../styledHelpers/Entities'
import useDropdown from 'react-dropdown-hook';
import {FilterMenu} from '../../components/Entities/FilterMenu'
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { useState } from 'react';
import { reduceEachTrailingCommentRange, validateLocaleAndSetLanguage } from 'typescript';



export const Entities: FC =()=>{
    const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);
    let jpg1 = photosList[7]?.url;let jpg2 = photosList[400]?.url;let jpg3 = photosList[125]?.url;let jpg4 = photosList[2]?.url;let jpg5 = photosList[68]?.url;
    let [companies,setCompany]= useState([{name:'LTA',jpg:jpg1},{name:'KFC',jpg:jpg2},{name:'HCL',jpg:jpg5},{name:'EPAM',jpg:jpg3},{name:'EY',jpg:jpg4},{name:'KFC',jpg:jpg2},{name:'KFC',jpg:jpg2},{name:'HCL',jpg:jpg5},{name:'HCL',jpg:jpg5},{name:'LTA',jpg:jpg1},{name:'KFC',jpg:jpg2},{name:'EY',jpg:jpg4},{name:'EY',jpg:jpg4},{name:'LTA',jpg:jpg1},{name:'LTA',jpg:jpg1},{name:'LTA',jpg:jpg1},{name:'KFC',jpg:jpg2},{name:'HCL',jpg:jpg5},{name:'EPAM',jpg:jpg3},{name:'EY',jpg:jpg4},{name:'KFC',jpg:jpg2},{name:'KFC',jpg:jpg2},{name:'HCL',jpg:jpg5},{name:'HCL',jpg:jpg5},{name:'LTA',jpg:jpg1},{name:'KFC',jpg:jpg2},{name:'EY',jpg:jpg4},{name:'EY',jpg:jpg4},{name:'LTA',jpg:jpg1},{name:'LTA',jpg:jpg1},]);
    const [sort, setSort] = useState(true)
    function sortCompanies() {
        if(sort === true){
            setCompany(companies.sort((a,b) => 0 - (a.name > b.name ? -1 : 1)))
            setSort(false);
            console.log(companies)
        }
        else{
            setCompany(companies.sort((a,b) => 0 - (a.name > b.name ? 1 : -1)))
            setSort(true);
            console.log(companies)
        }
    }
    const [searchTerm,setSerachTerm] = useState('')
    const [lineStyle,setLineStyle] = useState(true)
    function changeStyle() {
        if(lineStyle === true){
            setLineStyle(false)

        }else if(lineStyle === false){
            setLineStyle(true)
        }
        
    }
    const [fullscreen,setFullscreen] = useState(true)
    function FullScreenfunction() {
        if(fullscreen === true){
            setFullscreen(false)

        }else if(fullscreen === false){
            

            
            setFullscreen(true)

        }
        
    }

    
    
   return(
       <Page>
           <div className='TopNav'>
               <div className='LeftTopNav'>
                   <p>Entities</p>
                   <img src="media/cog.svg"/>
               </div>

               <div className='RightTopNav' >
                   <div className={lineStyle === true?('Mosaic'):('MosaicDifferent')}     onClick={changeStyle}>
                       <img src="media/squares.png"/>
                       <p>Mosaic</p>

                   </div>
                   <div className={lineStyle === true?('LineDifferent'):('Line')} onClick={changeStyle}>
                       <img src="media/line.png" />

                   </div>

               </div>
           </div>

           <div className='BottomNav'>
               <div className='LeftBottomNav'>

                   <div className='ExpandedMenu'>
                       <img src="media/circle.png"/>
                       <p>All</p>
                       <img src="media/arrow-down.svg"/>
                   </div>
                   <div className='More'>
                       <img src="media/more.svg"/>
                   </div>
                   <div className='Sort' onClick={sortCompanies}>
                       <img src="media/sort.png"/>
                       <p>Sort</p>

                   </div>
                   <div onClick={toggleDropdown} className='Filter'>
                   {dropdownOpen && 
                    
                    <FilterMenu/>
                     
                     
                 }

                       <img src="media/filter.png"/>
                       <p>Filters</p>

                   </div>
                   <div className='Full-Screen' onClick={FullScreenfunction}>
                       <img src="media/full-screen.svg" alt="" />

                   </div>
                   <div className='Share'onClick={() => navigator.clipboard.writeText('http://localhost:3000/Entities')}>
                       <img src="media/share.svg"/>
                       <p>Share</p>

                   </div>

               </div>

               <div className='RightBottomNav'>
                    <div className='inputsection'>
                        <input type="text" placeholder='Search...' onChange={event =>{setSerachTerm(event.target.value)}}/>
                        <img src="media/search.svg"/>
                    </div>
                    <div className='Followed'>
                    <img src="media/follow.png"/>
                        <p>Followed</p>
                        <img src='media/arrow-down.svg'/>

                    </div>
                    
                </div>
           </div>

           <div className={lineStyle === true?('Box'):('BoxDifferent')}>
               
              {companies.filter((val)=>{
                  if(searchTerm==''){
                      return val;
                  }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                      return val;

                  };
              }).map(company=>(
                  <div className='company'>
                      
                        <img src={company.jpg} />
                      <div className='textspace'>
                      <h2>{company.name}</h2>
                      <p>company description</p>
                      </div>
                  </div>

              ))}


           </div>




       </Page>

   );
};