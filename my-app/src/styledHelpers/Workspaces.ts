import styled from 'styled-components'

export const PageWorkspaces = styled.div`
width: 785px;
//background-color:gray;
margin-bottom: 10px;
min-height: 100vh;
display: flex;
align-items: center;
//justify-content: center;
flex-direction: column;

`;

export const WrapperHeader = styled.div`
-webkit-border-radius: 10px;
-moz-border-radius: 10px;

background: #FFFFFF;
box-shadow: 0 4px 2px -2px gray;
//
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 750px;
border-radius: 10px;
.HeaderBottom{
    display: flex;
    align-items: flex-start;
}

.HeaderBottomPicRight{
    width: 30px;
    margin-right: 20px;
    margin-top: 10px;

}
.HeaderBottomText{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
    .BottomText{
        color: #92a2b7;
        margin-top: 5px;
        
    }
    .TopText{
        font-size: 18px;
        margin-top: 10px;
        color: #232c47;
    }
    
}
.HeaderPic{
    width: 750px;
    height: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.HeaderBottomPic{
    width: 50px;
    height: 50px;
    padding: 30px 20px;
}


`;
export const WrapperBanner = styled.div`
margin-top: 10px;
border-radius: 10px;
background-color: #e7e7e7;
border: solid 1px gray;
width: 100%;
.TopBanner{
    display: flex;
    justify-content: space-between;
    p{
        color: #898d93;
        margin: 10px;
    }
}
.BannerBox{
    display: flex;
    justify-content: space-around;
}
.BannerOption{
    background-color: white;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 2px -2px gray;
    img{
    width:25px;
    margin: 10px;
    }
}
.BannerTopText{
    margin-left: 10px;
    margin-bottom: 5px;
    color: #323a53;
}
.BannerBottomText{
    color:#6c7284 ;
    font-size: 13px;
    margin-left: 10px;
    margin-bottom: 10px;
    //padding-right: 10px;
    width: 220px;
}


`;
export const WrapperComments = styled.div`

`;