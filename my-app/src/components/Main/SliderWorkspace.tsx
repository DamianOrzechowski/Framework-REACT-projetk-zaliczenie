import {FC} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {SliderWrapper,Wrapper,Tile} from '../../styledHelpers/SliderWrapper'
import { useState } from 'react';
import {useHistory} from 'react-router'

export const SliderWorkspace: FC =()=>{
  /*const [data,setData] = useState('kot')
  const history = useHistory()
  function Zmien() {
    setData('Supplier contract')
    const location = {
      pathname:`/WorkSpaces/${data}`
    }
    history.push(location)
  }*/

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
      };
   return(
    
       <SliderWrapper>
         
           <Slider {...settings}>

           <Link to="/Test">
           <Wrapper>
            <Tile>
            
              <img className="background" src="media/contract2.jpg" />
              <div className="TileTitle">
                <div className="TileImgSquare">
                   <img className="TileImg" src="media/sticky-note-regular.svg"/>
                </div>
                <p className="Title">Client contract</p>
              </div>
              

              <div className="TypeUsers">
              <img className="TypeUsersImg" src="media/sticky-note-regular.svg"/>
              <p className="TypeUsersText">Contract</p>
              <img className="TypeUsersImg" src="media/people.svg" />
              <p className="TypeUsersText">150 users</p>
              </div>

              <p className="date">Lastes update 2 days</p>
            </Tile>
           </Wrapper>
           </Link>

           <Link to="/Workspaces/SuppilerContract" >
           <Wrapper>
            <Tile>
              <img className="background" src="media/contract2.jpg" />
              <div className="TileTitle">
                <div className="TileImgSquare">
                   <img className="TileImg" src="media/book-solid.svg"/>
                </div>
                <p className="Title">Suppiler contract</p>
              </div>

              <div className="TypeUsers">
              <img className="TypeUsersImg" src="media/book-solid.svg"/>
              <p className="TypeUsersText">Contract</p>
              <img className="TypeUsersImg" src="media/people.svg" />
              <p className="TypeUsersText">125 users</p>
              </div>

              <p className="date">Lastes update 2 days</p>
            </Tile>
            </Wrapper>
            </Link>

            <Link to="/Test">
            <Wrapper>
            <Tile>
              <img className="background" src="media/contract2.jpg" />
              <div className="TileTitle">
                <div className="TileImgSquare">
                   <img className="TileImg" src="media/sticky-note-regular.svg"/>
                </div>
                <p className="Title">Corporate</p>
              </div>

              <div className="TypeUsers">
              <img className="TypeUsersImg" src="media/sticky-note-regular.svg"/>
              <p className="TypeUsersText">Contract</p>
              <img className="TypeUsersImg" src="media/people.svg" />
              <p className="TypeUsersText">250 users</p>
              </div>

              <p className="date">Lastes update 2 days</p>
            </Tile>
            </Wrapper>
            </Link>
            

            <Link to="/Test">
            <Wrapper>
            <Tile>
              <img className="background" src="media/contract2.jpg" />
              <div className="TileTitle">
                <div className="TileImgSquare">
                   <img className="TileImg" src="media/sticky-note-regular.svg"/>
                </div>
                <p className="Title">Grup Norms</p>
              </div>

              <div className="TypeUsers">
              <img className="TypeUsersImg" src="media/sticky-note-regular.svg"/>
              <p className="TypeUsersText">Contract</p>
              <img className="TypeUsersImg" src="media/people.svg" />
              <p className="TypeUsersText">30 users</p>
              </div>

              <p className="date">Lastes update 2 days</p>
            </Tile>
            </Wrapper>
            </Link>

            <Link to="/Test">
            <Wrapper>
            <Tile>
              <img className="background" src="media/contract2.jpg" />
              <div className="TileTitle">
                <div className="TileImgSquare">
                   <img className="TileImg" src="media/house2.svg"/>
                </div>
                <p className="Title">Estate Contracts</p>
              </div>

              <div className="TypeUsers">
              <img className="TypeUsersImg" src="media/house2.svg"/>
              <p className="TypeUsersText">Contract</p>
              <img className="TypeUsersImg" src="media/people.svg" />
              <p className="TypeUsersText">35 users</p>
              </div>

              <p className="date">Lastes update 2 days</p>
            </Tile>
            </Wrapper>
            </Link>

            <Link to="/Test">
            <Wrapper>
            <Tile>
              <img className="background" src="media/contract2.jpg" />
              <div className="TileTitle">
                <div className="TileImgSquare">
                   <img className="TileImg" src="media/sticky-note-regular.svg"/>
                </div>
                <p className="Title">Online</p>
              </div>

              <div className="TypeUsers">
              <img className="TypeUsersImg" src="media/sticky-note-regular.svg"/>
              <p className="TypeUsersText">Contract</p>
              <img className="TypeUsersImg" src="media/people.svg" />
              <p className="TypeUsersText">160 users</p>
              </div>

              <p className="date">Lastes update 2 days</p>
            </Tile>
            </Wrapper>
            </Link>

            <Link to="/Test">
            <Wrapper>
            <Tile>
              <img className="background" src="media/contract2.jpg" />
              <div className="TileTitle">
                <div className="TileImgSquare">
                   <img className="TileImg" src="media/arrow-down.svg"/>
                </div>
                <p className="Title">Shops</p>
              </div>

              <div className="TypeUsers">
              <img className="TypeUsersImg" src="media/arrow-down.svg"/>
              <p className="TypeUsersText">Contract</p>
              <img className="TypeUsersImg" src="media/people.svg" />
              <p className="TypeUsersText">180 users</p>
              </div>

              <p className="date">Lastes update 2 days</p>
            </Tile>
            </Wrapper>
            </Link>

            <Link to="/Test">
            <Wrapper>
            <Tile>
              <img className="background" src="media/contract2.jpg" />
              <div className="TileTitle">
                <div className="TileImgSquare">
                   <img className="TileImg" src="media/entities.svg"/>
                </div>
                <p className="Title">Buissnes</p>
              </div>

              <div className="TypeUsers">
              <img className="TypeUsersImg" src="media/entities.svg"/>
              <p className="TypeUsersText">Contract</p>
              <img className="TypeUsersImg" src="media/people.svg" />
              <p className="TypeUsersText">120 users</p>
              </div>

              <p className="date">Lastes update 2 days</p>
            </Tile>
            </Wrapper>
            </Link>

            <Link to="/Test">
            <Wrapper>
            <Tile>
              <img className="background" src="media/contract2.jpg" />
              <div className="TileTitle">
                <div className="TileImgSquare">
                   <img className="TileImg" src="media/book-solid.svg"/>
                </div>
                <p className="Title">Commercial</p>
              </div>

              <div className="TypeUsers">
              <img className="TypeUsersImg" src="media/book-solid.svg"/>
              <p className="TypeUsersText">Contract</p>
              <img className="TypeUsersImg" src="media/people.svg" />
              <p className="TypeUsersText">150 users</p>
              </div>

              <p className="date">Lastes update 2 days</p>
            </Tile>
            </Wrapper>
            </Link>

            <Link to="/">
            <Wrapper>
            <Tile>
              <img className="background" src="media/contract2.jpg" />
              <div className="TileTitle">
                <div className="TileImgSquare">
                   <img className="TileImg" src="media/people.svg"/>
                </div>
                <p className="Title">Manager</p>
              </div>

              <div className="TypeUsers">
              <img className="TypeUsersImg" src="media/people.svg"/>
              <p className="TypeUsersText">Contract</p>
              <img className="TypeUsersImg" src="media/people.svg" />
              <p className="TypeUsersText">140 users</p>
              </div>

              <p className="date">Lastes update 2 days</p>
            </Tile>
            </Wrapper>
            </Link>
           

          </Slider>
           
        </SliderWrapper>
   );
};