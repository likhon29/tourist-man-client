import React from 'react';
import './PageTitle.css'
const PageTitle = ({pageInfo}) => {
    const { title } = pageInfo;
    return (
       
            <div className="page-title row d-flex align-items-center  my-5">
                <div className="col-lg-8 my-auto text-center">
                    <h1 className="">{ title}</h1>
                    
                </div> 
            </div>
     
    );
};

export default PageTitle;