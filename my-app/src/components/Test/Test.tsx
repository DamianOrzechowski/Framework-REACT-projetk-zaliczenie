
import React ,{FC, useEffect,useState} from 'react';
import {Page} from '../../styledHelpers/Profile'
import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import {IUsersReducer} from '../../reducers/usersReducers'
import { IPostsReducer } from '../../reducers/postsReducers';

import { useSelector } from 'react-redux';

import styled from 'styled-components'
import { Comments } from '../../styledHelpers/CommentsSectionStyle';

export const Lista = styled.div`
display: flex;
`;

export const Test: FC = () => {
  const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
  const { commentsList } = useSelector<IState, ICommentsReducer>(globalState => globalState.comments);
  const { postsList } = useSelector<IState, IPostsReducer>(globalState => globalState.posts);
  
  
  



  let [commentsTable,setCommentsTable] = useState([{name:commentsList?.[0]?.name,body:commentsList?.[0]?.body,user:usersList?.[0]?.name}])
  for (let index = 1; index < commentsList.length; index++) {
    if(commentsTable.length < 500){
    let commentname = commentsList?.[index]?.name;
    let commentbody = commentsList?.[index]?.body;
    let commentuser = usersList?.[0]?.name;
    commentsTable.push({name:commentname,body:commentbody,user:commentuser})
    } 
}
console.log(commentsTable)

const renderData = (commentsTable:any) => {
  return (
    <ul>
      {commentsTable.filter((val:any)=>{
                  if(searchTerm==''){
                      return val;
                  }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                      return val;

                  };
              }).map((comments:any) => {
        return <li>{comments.name}  <div>{comments.user}</div></li>
        ;
      })}
    </ul>
  );
};

let [currentPage,setCurrentPage] = useState(1)
  let [itemsPerPage,setItemsPerPage] = useState(20)
  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem-itemsPerPage;
  let currentitem = commentsTable.slice(indexOfFirstItem,indexOfLastItem)

  const pages = []
  for(let i=1; i <=Math.ceil(commentsTable.length/itemsPerPage);i++){
pages.push(i)
  }
  

  const handleclick = ( event:any)=>{
    setCurrentPage(Number(event.target.tabIndex))
  }

  const renderPageNumbers =pages.map((numberpage)=>{
    return(
     <li onClick={handleclick} tabIndex={numberpage}> {numberpage} </li>
    );
  })
  function prevPage() {
    if(currentPage===1){
     console.log('strona pierwsza')
    }else{
    setCurrentPage(currentPage-1)
  console.log('strona 1')}
    
  }
  function nextPage() {
    if(currentPage === pages.length){
      console.log('ostatnia strona')

    }else{
      console.log('następan')
      setCurrentPage(currentPage+1)
    }
    
    
  }
  const [searchTerm,setSerachTerm] = useState('')
  function serchtermfun(event:any) {
    setSerachTerm(event.target.value)
    console.log(commentsTable.filter((val)=>{
      if(searchTerm==''){
          return val;
      }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val;

      };
  }))
    
    
  }
  //console.log(commentsTable)

  return(
    <Page>
      <input type="text" onChange={serchtermfun}/>
      <Lista>
        <button onClick={prevPage}>prev</button>
      {renderPageNumbers}
      <button onClick={nextPage}>next</button>
      </Lista>
      {renderData(currentitem)}

      
     

    </Page>

  )}
  

