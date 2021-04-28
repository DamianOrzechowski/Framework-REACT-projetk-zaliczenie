import styled from 'styled-components'
import { Colors } from '../styledHelpers/Colors';
//Top Bar//
export const Wrapper = styled.div`
margin-bottom:20px;
background:white;
 display: flex;
 justify-content: center;
 padding:5px;
 //box-shadow:5px 5px 10px;
 -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
  border-top: 4px solid black;
`;

export const Menu = styled.div`
display:flex;

justify-content:space-around;
p{
    margin-left:20px;
    margin-right:100px;
    display:flex;
    align-items:center;
}
`;

export const InnerWrapper = styled.div`
//width:1200px;
display:flex;
justify-content:space-between;
align-items:center;
text-align:center;
width:100%;
background: ${Colors.white};
`;
export const RightIcons = styled.div`
img{
    
    padding:8px;
    margin-right:10px;
    
}
#border{
    background:#EDEDED;
    border-radius: 25px 25px 25px 25px;
    padding:8px;
}
`;
export const InputWrapper = styled.div`

display:flex;
border: solid 1px #EDEDED;
border-radius:10px;
padding: 5px 5px;
input{
    border: none;
    width:400px;
}

`;
export const ExpandedMenuWrapper = styled.div`
background:white;
img{
    margin-left:5px;
    width:30px;
}
`;
//ExpandedMenu//
export const ExpandedMenuUl = styled.div`
background-color: white;
position:absolute;
border: 1px solid #EDEDED;


padding: 10px;
width: 200px; 
margin-top:38px;
input{
    border: solid 1px #EDEDED;
    border-radius:10px;
    padding:5px;
    width:90%;
    
}
#group{
    color:#c9c9c9;
    text-align:left;
    font-size:15px;
    margin-top:10px;
    margin-bottom:10px;
}
`;

export const LiExpandedMenu = styled.div`
li{
    display:flex;
    margin-top:10px ;
    p{
    
        text-align:center;
        white-space: nowrap;
        color:black;
text-decoration:underline white;
        
    }
    img{
       width:20px;
    }
}

#Settings{
    margin-bottom:10px;
}
`;

export const Account = styled.div`
display:flex;
align-items:center;

li{

display:flex;
align-items:center;
//justify-content:left;
img{
    
    width:30px;
    border-radius: 50%;
    

}
div{
p{
    
    white-space: nowrap;
    color:black;
    
}
p:last-child{
    margin-top:2px;
    font-size:9px;
    color:violet;
}

}

}
`;
export const Logout = styled.div`
border-top:solid 2px #EDEDED;
li{
    
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding-top:10px;
    margin-right:-50%;
    
    

    margin-top:5px ;
    p{
    
        text-align:center;
        white-space: nowrap;
        color:#c9c9c9;
text-decoration:underline white;
        
    }
}

`;
//main lastes publication
 export const LastesPublications = styled.div`
font-family: 'Roboto', sans-serif;
width:50vw;
display:flex;
#dateimg{
    display:flex;
    align-items:center;
    color:grey;
    justify-content:flex-start;
    
    img{
        width:20px;
        border-radius:50px;
        margin: 0px 10px;
    }
}
//
#dateimgpub{
    
    display:flex;
    align-items:center;
    color:white;
    justify-content:flex-start;
    font-size:10px;
    
    
    
    img{
        width:20px;
        border-radius:50px;
        margin: 0px 10px;
        margin-bottom:8px;
        margin-right:0px;
        
        
    }
}
//
#imgpub{
    border-top-left-radius: 10px;
    
    border-bottom-left-radius: 10px;
    
    width:33%;
    height:275px;
    background-image: url("media/dubai.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    color:white;
    p{
        margin-left:10px;
        margin-bottom:10px;
    }
    
    

    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    
    
    
     
}}
//lastes publication
#lastespub{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color:white;
    width:67%;
}
#publications{
    margin:10px;
    

}
#publication{
    display:flex;
    align-items:center;
}
#titlepublication{
    
        font-size:20px;
        color:#36516D;
        text-decoration:underline white;
        
}
#imgleft{
   img{ width:90px;}
   margin-right:10px;
   margin-top:5px;
   margin-bottom:5px;
}
#rightside{
    div{
    margin-top:5px;
     p {
        font-size:10px;
        
    }}
}

`;
//Main page
export const Page = styled.div`
//border: 5px solid red;
`;