/* eslint-disable react/prop-types  */
import React, { useState, useEffect } from 'react'
//useContext,
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import {useNavigate} from 'react-router-dom';
import { encrypt } from 'n-krypta';
//decrypt, compare
import appSettings from 'src/AppSettings' // read the app config

//import bcrypt from 'bcryptjs'

import { HashedPassword,ComparePassword } from 'src/components/pass_helper/PassUtil'

const Login = () => {

  const [message,setMessage] = useState("")
  const [colorMessage,setColorMessage] = useState('red')
  const navigate = useNavigate();

  const [values,setValues] = useState({
    username: '',
    password: ''

  })



useEffect(() => {

  if (!window.localStorage.getItem("id") == null) {
    if (window.localStorage.getItem("id") !== "0"){
      navigate('/dashboard')
    }
    
  } else{
    localStorage.clear();
    window.localStorage.setItem('id',"0")
  }

},[]);

  const handleInput = (e) => {
    setValues(prev => ({...prev,[e.target.name]: [e.target.value.trim()]}))
  }

  useState (() => {
   return ({

   })
  },[values])


  function  handleSubmit(event) {
    try { 

      

      event.preventDefault();
      localStorage.clear();
        if((!values.username == "") && (!values.password == ""))
        {
          //const password = encrypt(values.password, appSettings.secretkey); 
         
          const hashedpass = HashedPassword(values.password.toString())
          // bcrypt.hashSync(values.password.toString(),10)
          const username = values.username  
          ///console.log("Myvalue -- " + password)
          const url = 'http://localhost:3001/checkLogin'
          //axios.post(url,{username,password})
          axios.post(url,{username})
          .then(res => {
           
              if( res.data.message === "Record Found"){

                const userid = res.data.result[0].userDisplayID
                const displayName = res.data.result[0].displayName 
                const img = res.data.result[0].imgFilename 
                const name = res.data.result[0].Name
                const dbpassword = res.data.result[0].password

                console.log("Encrypted : " + hashedpass)
                console.log("DB Encrypted : " + dbpassword)
                

                const isValid = ComparePassword(values.password.toString(),dbpassword)
                //bcrypt.compareSync(dbpassword,hashedpass)
                console.log(isValid)
                if(isValid) {

                // encrypt to local storage use new different key
                
                const encryptedID = encrypt(userid, appSettings.secretkeylocal); 
                const userRoles = encrypt(res.data.result[0].userRole,appSettings.secretkeylocal); 
                const userDepartmentID = encrypt(res.data.result[0].departmentDisplayID,appSettings.secretkeylocal); 

                window.localStorage.removeItem('id');
                window.localStorage.removeItem('display');
                window.localStorage.removeItem('userimg');
                window.localStorage.removeItem('Kgr67W@'); // This is a user Role
                window.localStorage.removeItem('LkgdW23!'); // This is for DepartmentID
                window.localStorage.removeItem('Kvsf45_');
                window.localStorage.clear()
                window.localStorage.setItem('id',encryptedID)
                window.localStorage.setItem('display',displayName)
                window.localStorage.setItem('userimg',img);
                window.localStorage.setItem('Kgr67W@',userRoles)
                window.localStorage.setItem('LkgdW23!',userDepartmentID)
                window.localStorage.setItem('Kvsf45_','0');
               
                navigate('/dashboard');

               }
                else {
                  setMessage("Username and password do not match")
                 setColorMessage("red")
                }

              }else {
               
                setMessage("Username and password do not match")
                setColorMessage("red")
              }
          })
          .catch(err => {
              setMessage( err.message)
              setColorMessage("red")
          })
        }

    }catch(err) {
      console.log(err)

    }
  }

  return (

    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h3>
                    <span className="message" style={{ color: '#5da4f5'}}> <>Login </></span> 
                    </h3>
                    <br></br>
                    <h6>
                      <span className="message" style={{ color: colorMessage}}><p>{message}</p></span>

                      <p className="text-medium-emphasis">Sign In to your account</p>
                    </h6>
                    
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput name="username"
                       placeholder="Username"
                      autoComplete="username"
                      onChange={handleInput}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={handleInput}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type='submit'>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>
                    <span className="message" > <>Sign up </></span> 
                    </h2>
                    <p>
                      By clicking the {'"' }Sign Up { '"'}, you are creating an account to Asset Management System, and
                      
                      you are agree to Asset Management Terms of Use and Privacy Policy
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
