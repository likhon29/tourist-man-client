import React, { useState } from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer,CDBBox } from 'cdbreact';
import logo from '../../../Assets/images/logo-2.png'
import { Link } from 'react-router-dom';
const Footer = () => {
 
  
  return (
    <CDBFooter className="shadow bg-light mt-5">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <Link to="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="100px" />
              <span className="ml-3 h5 font-weight-bold">Tourist.Man</span>
            </Link>
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Tourist Man
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Devwares, 2022. All rights reserved.</small>
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