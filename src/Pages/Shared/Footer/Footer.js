import React, { useState } from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer,CDBBox } from 'cdbreact';
import logo from '../../../Assets/images/logo-2.png'
import { Link } from 'react-router-dom';
const Footer = () => {
 
  
  return (
    <CDBFooter className="shadow mt-5 bg-dark ">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <Link to="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="100px"
            />
            <span className="ml-4 h5 mb-0 text-light font-weight-bold">Tourist Man</span>
          </Link>
         
        </CDBBox>
        <small className="ml-2 text-light">&copy; Tourist Man, 2022. All rights reserved.</small>
        <CDBBox display="flex">
          <CDBBtn flat color="" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>

  );
};
export default Footer;

// <CDBFooterLink href="/qna">QNA</CDBFooterLink>
//               <CDBFooterLink href="/">About Us</CDBFooterLink>
//               <CDBFooterLink href="/">Contact</CDBFooterLink>
//               <CDBFooterLink href="/blogs">Blog</CDBFooterLink>

{/* <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink> 
            <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Loop</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink>
            */}