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
margin-top: 10px;
width: 100%;

`;
export const TopSection = styled.div`
display:flex;
justify-content:space-between;

.title{
    font-size:20px;
    
    margin-left:10px;
    color:#4c5262;
}

.rightsection{
    display:flex;
    align-items:center;
    

}

.inputsection{
    background-color:white;
    display:flex;
border: solid 1px #EDEDED;
border-radius:5px;
padding: 5px 5px;
img{
    width:15px;
}
input{
    border: none;
    width:100px;
}}

.expandedsection{
    display:flex;
    align-items:center;
    margin-left:10px;
    margin-right:10px;
    p{
        margin-left:5px;
        margin-right:5px;
        color:#063970;
    }
    img{
        width:30px;
        height:30px;
    }
    .buttondown{
        width:10px;
        height:10px;
    }
   
}
.list{
    position:absolute;
    background-color:white;
    margin-top: 80px;
    background-color:#f1f1f1;
    color: #063970;
    width: 125px;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: 1px gray solid;
    .listli{
        padding: 5px;
    }
}


`;
export const BottomSection = styled.div`
margin-top: 10px;
display: flex;
justify-content:space-around ;
width: 100%;
div{
    display: flex;
    border: gray solid 1px;
    border-radius: 5px;
    box-shadow: 0 4px 2px -2px gray;
    img{
        padding: 5px;
    }
    p{
        padding: 5px;
    }
}
img{
    width: 15px;
}
.all{
color: #3f52a7;
background-color: #eaecf5;
}
.green{
    color: #4ba54b;
background-color: #cce5cc;
}
.yellow{
    color: #e1bf70;
background-color: #f2e5c4;
}
.blue{
    color: #41a0ce;
background-color: #edf6fa;
}
.darkgray{
    color: #4c5367;
background-color: #cccccc;
}
.gray{
    color: #6c7183;
background-color: #e8e8e8;
}
.white{
    color: black;
background-color: white;
}
`;
export const Comment = styled.div`
margin-top: 10px;
margin-bottom:10px ;
background-color: white;
border-radius: 10px;
box-shadow: 0 4px 2px -2px gray;
width: 100%;
img{
    width: 10px;
    border-radius: 10px;
}
.commentTitle{
    color: #2e439f;
    font-weight: bold;
    font-size: 20px;
    margin-left: 20px;
    padding-top: 10px;
}
.commentBody{
    margin-left: 20px;
    padding-top: 10px;
    width: 600px;
}
.bottomText{
    padding-top: 10px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    
    img{
        height: 10px;
        margin-right: 10px;
    }
    p{
        margin-right: 10px;
        color: #8b909e;
    }
}

`;
export const CommentsSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;