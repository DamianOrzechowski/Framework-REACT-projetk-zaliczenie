import {useState, FC, useEffect} from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import ReactPaginate from "react-paginate";



export const Test: FC =()=>{
 
   /*const { commentsList } = useSelector<IState, ICommentsReducer>(globalState => globalState.comments);
   let [commentsTable,setCommentsTable] = useState([{name:commentsList?.[0]?.name,body:commentsList?.[0]?.body}])
   for (let index = 1; index < commentsList.length; index++) {
      if(commentsTable.length < 500){
      let commentname:string = commentsList?.[index]?.name;
      let commentbody:string = commentsList?.[index]?.body;
      commentsTable.push({name:commentname,body:commentbody})
      }
  }*/
 
  //console.log(commentsTable)

  const [comments, setComments] = useState(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].slice(0,10));
  const [pageNumber, setPageNumber] = useState(0);
  const[prwada,setprawda]=useState(true);
  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = comments
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((comment) => {
      return (
        <div className="user">
          <h3>{comment}</h3>
          
        </div>
      );
    });

    const pageCount:number = Math.ceil(comments.length / usersPerPage);

  const changePage = (selected:any) => {
    setPageNumber(selected);
  };
  console.log()



   return(
      <div >
       {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        pageRangeDisplayed={usersPerPage}
        marginPagesDisplayed={10}
      />
       
      </div>
   );


};