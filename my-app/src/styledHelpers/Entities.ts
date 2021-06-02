import styled from 'styled-components'

export const Page = styled.div`
width: 785px;
background-color:white;
border-radius:10px;
margin-bottom: 10px;;
min-height: 100vh;
.fullscreen{
    
    width: 100vw;
    background-color: white;
    z-index: auto;
    margin-left: -490px;
    margin-top: -90px;
    min-height: 150vh;
    .Box{
        
        

width: 90vw;
display: flex;
justify-content: center;
//height: 500px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);}
}
.TopNav{
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    img{
        width: 20px;

    }
    .LeftTopNav{
        display: flex;
        align-items: center;
        p{
            margin-right: 5px;
            color: gray;
            font-size: 20px;
        }
    }
    .RightTopNav{
        display: flex;
        margin-right: 20px;
        
        .Mosaic{
            display: flex;
            align-items: center;
            padding: 10px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border:solid 1px #EDEDED;
            
            img{
                margin-right: 5px;
            }
            p{
                color: gray;
            }
            background-color: #EDEDED;
            
        }
        .MosaicDifferent{
            display: flex;
            align-items: center;
            padding: 10px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border:solid 1px #EDEDED;
            background-color: white;
            
            img{
                margin-right: 5px;
            }
            p{
                color: gray;
            }

        }
        .Line{
            display: flex;
            align-items: center;
            padding: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border-right: solid 1px #EDEDED;
            border-bottom: solid 1px #EDEDED;
            border-top: solid 1px #EDEDED;
            background-color:#EDEDED ;
            
        }
        .LineDifferent{
            display: flex;
            align-items: center;
            padding: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border-right: solid 1px #EDEDED;
            border-bottom: solid 1px #EDEDED;
            border-top: solid 1px #EDEDED;
            

        }

    }
}

.BottomNav{
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 15px;
    }
    .LeftBottomNav{
        display: flex;
        align-items: center;
        div{
            display: flex;
            align-items: center;
        }
        .ExpandedMenu{
            background-color: #EDEDED;
            padding: 5px;
            border-radius: 10px;
            img{
                margin:5px;
            }
        }
        .More{
            padding: 0px 5px;
            border-right: gray 1px solid;
            height: 30px;
        }
        .Sort{
            img{
                margin-left: 5px;
                margin-right: 2px;
            }
            p{
                color: gray;
                margin-right: 5px;
            }
        }
        .Filter{
            height: 30px;
            border-right: gray 1px solid;
            img{
                margin-right: 2px;
            }
            p{
            margin-right: 5px;
            color: gray;
            }
        }
        .Full-Screen{
            height: 30px;
            border-right: gray 1px solid;
            img{
            margin: 0px 5px;
            }
        }
        .Share{
            margin-left: 5px;
            img{
                margin-right: 2px;
            }
            p{
                color: gray;
            }
        }

    }
}
.RightBottomNav{
    display: flex;
    .inputsection{
    background-color:white;
    display:flex;
border: solid 1px #EDEDED;
border-radius:5px;
padding: 5px 5px;
margin-right: 20px;
img{
    width:15px;
}
input{
    border: none;
    width:100px;
}}
}
.Followed{
    padding: 0px 20px;
    
    display: flex;
    border-left: 1px gray solid;
    align-items: center;
    
    p{
        color: gray;
        margin: 0px 5px;
    }
    
}

.Box{margin-left: 20px;
margin-right: 20px;
width: 700px;
//height: 500px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);}

.company{
    display: flex;
    align-items: center;
    margin:5px;
    border: solid 1px #ededed;
    border-radius: 10px;
    width: 200px;
    
    img{
        width: 50px;
        height: 50px;
        margin:10px;
        
    }
    .textspace{
        p{
            font-size: 10px;
            color: #92a2b7;
        }
        h2{
            color:#232c47;
            margin-bottom: 5px;
        }

    }
    
}

}
.BoxDifferent{margin-left: 20px;
margin-right: 20px;
width: 700px;
//height: 500px;

    display: grid;
    grid-template-columns: repeat(1, 1fr);}

.company{
    display: flex;
    align-items: center;
    margin:5px;
    border: solid 1px #ededed;
    border-radius: 10px;
    width: 200px;
    
    img{
        width: 50px;
        height: 50px;
        margin:10px;
        
    }
    .textspace{
        p{
            font-size: 10px;
            color: #92a2b7;
        }
        h2{
            color:#232c47;
            margin-bottom: 5px;
        }

    }
    
}

}
`;
