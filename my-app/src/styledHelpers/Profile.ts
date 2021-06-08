import styled from 'styled-components'

export const Page = styled.div`
width: 785px;
background-color:white;
border-radius:10px;
min-height: 100vh;

h1{
    margin-top: 20px;
    margin-left: 20px;
}

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
        height: 20px;
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
//SEction21
.WrapperSec21{
border-bottom: 2px solid grey;
width: 100%;
}
.Section21{
margin-left: 20px;
margin-top:10px;
display:flex;
align-items:flex-start;
justify-content:space-between;
}
.LeftSection21{
    .Title21{
    color: gray;
    };
    p{
        margin-bottom: 8px;
    }
    select{
        margin-right: 2%;
        margin-bottom: 7px;
    }
    
}
.photochange{
        width:20px;
        height: 20px;
        margin-top:10px;
        margin-right:10px;
    
        
    }
    .twoselect21{
        display: flex;
        p{
        margin-right: 10px;
        //color

       
    }
    }

///


.WrapperSec22{
    border-bottom:  solid 2px gray; display: flex;
    flex-direction: column;
    h2{
        margin-top: 10px;
        margin-left: 20px;
    }
    p{
        margin-top: 10px;
        margin-left: 20px;
    }
    .graycolor{
        color: gray;
    }
    .file{
        background-color:#f5f5fb;
        padding: 5px 0px;
    
       margin-top: 10px;
       margin-left: 20px;
       margin-right: 20px;
        display: flex;
        align-items: center;
        img{
            margin-left:5px;
        }
        p{
            margin: 0px;
            margin-left: 5px;
        }
        input{
            margin:0px;
            margin-left: 5px;
        }
        
        
        
        
        
        
    }
    input{
        margin-left: 20px;
        margin-top: 10px;
        width: 200px;
    }
    img{
        width: 20px;
        height: 20px;
        
        
    }
    .correspodants{
    background-color:#f5f5fb;
    display:flex;
    justify-content: space-between;
    
    margin: 10px 20px;
    padding: 5px 0px;


    .photocorrespondates{
        
        display: flex;
        align-items: center;
        margin-left: 5px;
        
        
        img{
            border-radius: 50%;
        }
        p{
            margin: 0px;
        }
        select{
            margin-right: 5px;

        }
        img{
            margin-right: 5px;
        }
    }
    .two22{
        display: flex;

        
    }
    .message{
        margin-right: 40px;;
        display: flex;
        align-items: center;
        
        p{
            margin: 0px;
        }
        img{
            margin-right: 5px;
        }
    }
    .profile{
        
        display: flex;
        align-items: center;
        margin-right: 300px;
        
        p{
            margin: 0px;
            
        }
        img{
            margin-right: 5px;
        }
    }
    
    
}


}

.tabelProposals{
    border-bottom: gray solid 2px;
    h4{
        margin-left: 600px;
        margin-top: 20px;
        ;
        margin-bottom: 20px;
        color: #73adbc;
        font-weight: bold;
    }
    

    h2{
        margin-left: 20px;
        margin-top: 10px;
        margin-bottom: 30px;
        font-weight: bold;
    }
    
    .columns{
        display: flex;
        .columnfirst{
            
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            width: 120px;
            h3{
                border-bottom: gray 1px solid;
                font-weight: bold;
            }
            p{
                margin-top: 8px;

            }
            input{
                margin-top: 6px;
                width: 100px;

            }
        }
        .column{
            
            display: flex;
            flex-direction: column;

            width: 120px;
            h3{
                border-bottom: gray 1px solid;
                font-weight: bold;
            }
            p{
                margin-top: 8px;

            }
            input{
                margin-top: 6px;
                width: 100px;
                //height: 30px;

            }
            .propinputdate{
                height: 18px;;
            }

        }
    }

}

.tabelInternal{
    border-bottom: gray solid 2px;
    h4{
        margin-left: 20px;
        margin-top: 20px;
        ;
        margin-bottom: 20px;
        font-weight: bold;
        
    }
    

    h2{
        margin-left: 20px;
        margin-top: 10px;
        margin-bottom: 30px;
        font-weight: bold;
    }
    
    .columns{
        display: flex;
        .columnfirst{
            
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            width: 120px;
            h3{
                border-bottom: gray 1px solid;
                font-weight: bold;
            }
            p{
                margin-top: 8px;

            }
            input{
                margin-top: 6px;
                width: 100px;

            }
        }
        .column{
            
            display: flex;
            flex-direction: column;

            width: 120px;
            h3{
                border-bottom: gray 1px solid;
                font-weight: bold;
            }
            p{
                margin-top: 8px;

            }
            input{
                margin-top: 6px;
                width: 100px;
                //height: 30px;

            }
            .propinputdate{
                height: 18px;;
            }

        }
    }

}
.tabelAmount{
    border-bottom: gray solid 2px;
    height: 220px;
    h4{
        margin-left: 20px;
        margin-top: 20px;
        ;
        margin-bottom: 20px;
        
    }
    

    h2{
        margin-left: 20px;
        margin-top: 10px;
        margin-bottom: 30px;
        font-weight: bold;
    }
    
    .columns{
        display: flex;
        .columnfirst{
            
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            width: 160px;
            h3{
                font-weight: bold;
            }
            p{
                margin-top: 8px;

            }
            input{
                margin-top: 6px;
                width: 100px;

            }
        }
        .column{
            
            display: flex;
            flex-direction: column;

            width: 160px;
            h3{
                font-weight: bold;
            }
            p{
                margin-top: 8px;

            }
            input{
                margin-top: 6px;
                width: 100px;
                //height: 30px;

            }
            .propinputdate{
                height: 18px;;
            }

        }
    }

}
`;










