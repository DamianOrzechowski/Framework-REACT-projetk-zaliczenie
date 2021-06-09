import styled from 'styled-components'

export const Wrapper = styled.div`
margin-top:10px;
width: 768px;
height: 200px;
//
//background-color:red;
//


`;
export const TopSection = styled.div`
display:flex;
justify-content:space-between;
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
    
    //border-bottom: 1px gray solid;
    .listli{
        padding: 5px;
    }
}
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



`;
export const Comments = styled.div`
display: flex;
flex-direction: column;
align-items: center;

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