import React from 'react';
import './PageTitle.css'
const PageTitle = ({pageInfo}) => {
    const { title } = pageInfo;
    return (
       
            <div className="page-title  d-flex align-items-center  my-5">
                <div className="col-lg-12  text-center">
                    <h1 className="">{ title}</h1>
                </div> 
            </div>
     
    );
};

export default PageTitle;