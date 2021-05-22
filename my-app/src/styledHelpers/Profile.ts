import styled from 'styled-components'

export const Page = styled.div`
width: 785px;
background-color:white;
border-radius:10px;

`;
//Section1
export const WrapperSection1 = styled.div`
border-bottom: 2px solid grey;
`;
//
export const TopSection = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
margin-top:10px;
font-size:20px;
img{
    width:20px;
    height:20px;
    margin-left:10px;
    margin-right:10px;
}
.X{
margin-left:50px;
margin-right:10px;
}
`;
//
export const BottomSection = styled.div`
margin-top:10px;
display:flex;
align-items:center;

.photo{
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-left:20px;
    margin-right:30px;
    color:#6ca9b9;
    p{
    margin-top:5px;
    }
    img{
        width:70px;
        border-radius:40px;
    }
}
.namecity{
    div{
    display:flex;
    flex-direction:column;
    align-items:center;
    input{
        margin-top:5px;
        margin-bottom:5px;
       
    }
    p{margin-top:8px;
        margin-bottom:8px;}}
}
.leftside{
    display:flex;
}
.rightside{
    
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-end;

    img{
        width:20px;
        
        margin-top:10px;
        margin-right:10px;
    }

    .rightbot{
        div{
        display:flex;
        justify-content: center;
        
        flex-direction:column;
        margin-right:10px;
        margin-bottom:5px;
        input{
            margin-top:10px;
        }
        p{
            
            margin-bottom:8px;
            text-align: center;
        }
    }
    }
}

form{
    display:flex;
    justify-content:space-between;
    width:100vw;
}

`;
//Section2
export const WrapperSection2 = styled.div`
background-color:blue;
`;
//Section3
export const WrapperSection3 = styled.div`
background-color:green;
.correspodants{
    background-color:#f5f5fb;
    display:flex;
img{
    width:20px;
}
};
`;
//Section4
export const WrapperSection4 = styled.div`
`;
export const WrapperSection5 = styled.div`
background-color:blue;
`;
export const WrapperSection6 = styled.div`
background-color:green;
`;
export const Columns = styled.div`
display:flex;
input{
    width:100px;
}
`;