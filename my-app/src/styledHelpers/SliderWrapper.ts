import styled from 'styled-components'

export const SliderWrapper = styled.div`
margin-top:10px;
width: 768px;
height: 200px;

`;
export const Wrapper = styled.div`

    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;   
    

`;

export const Tile = styled.div`
    width: 245px;
    height: 150px;
    background-color: white;
    border-radius:10px;
    position: relative;

    .background{
        position: relative;
        width:245px;
        height:60px;
        //z-index:-1;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    .TileTitle{
        position: relative;
        
    }
    .TileImgSquare{
        position: relative;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:5px;
        background:white;


        width:50px;
        height:50px;
        border: 1px solid #f5f7f9;
        box-shadow: 0 4px 2px -2px gray;

        margin-top:-20px;
        margin-left:10px;
        img{
            width:25px;
            position: relative;
        }
    }
    .Title{
        position: relative;
        margin-left:70px;
        margin-top:-25px;
        color:#4c5369;
    }

    .TypeUsers{
        margin-left:10px;
        margin-top:15px;
        display:flex;
        align-items:center;
    }
    .TypeUsersImg{
        width:12px;
    }
    .TypeUsersText{
        font-size:12px;
        margin: 0px 8px;
        color:#939dac;
    }
    .date{
        margin-left:10px;
        margin-top:10px;
        font-size:10px;
        color:#c3c9d0;
    }

`;
