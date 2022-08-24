import React from "react";
import s from './Paginator.module.css'

const Paginator = ({currentPage, pageSize, totalUsersCount, onPageChanged}) => {

  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <div className={s.paginationWrap}>
      {pages.map(page => {
          return (
            <span key={page}
                  className={currentPage === page ? s.selectedPage : ''}
                  onClick={(e) => {
                    onPageChanged(page)
                  }}>
              {page}
            </span>
          )
        }
      )}
    </div>
  )
}

export default Paginator;
