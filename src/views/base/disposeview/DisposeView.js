// eslint-disable-next-line
import  { useEffect, useState } from 'react'
import axios from 'axios'
import * as React from 'react'

//import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



import TextField from '@mui/material/TextField';

import { DataGrid,useGridApiRef } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

import DefaulImgDispose from "../../../assets/images/DefaultDispose.png"

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CButton,
  CFormSelect,

  CInputGroup,

} from '@coreui/react'

import emailjs from '@emailjs/browser'
import utils_getDate from '../../../components/DateFunc';
//import {NextApiRequest,NextApiResponse} from 'next'
/// End of sending email 

import {useNavigate} from 'react-router-dom';

import appSettings from 'src/AppSettings' // read the app config
import {  decrypt } from 'n-krypta';
// encrypt, compare
//import { buildTimeValue } from '@testing-library/user-event/dist/types/utils';

import WriteLog from 'src/components/logs/LogListener';
import utils_getDateMMDDHR from 'src/components/DateFuncMMDD';

import { v4 as uuidv4 } from 'uuid';
import { ButtonGroup, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import GenerateDisposeDocPDF from 'src/components/generatereport/GenerateDisposeDocPDF';
import AlertMessages from 'src/components/alertmessages/AlertMessages';
import WriteUserInfo from 'src/components/logs/LogListenerUser';

const DisposeView = () => {

  const navigate = useNavigate();
  
  var userID = ""
  var userRole = ""

  const [message,setMessage] = useState("")
  const [colorMessage,setColorMessage] = useState('red')


  const [iselected,SetTotalSelected] = useState(0)
  const [open, setOpen] = React.useState(false);

    const [receiverInfo,setReceiverInfo] = useState ({
      receiveremail: '',
      receivername: ''
      })
  
  const [dispose,setDispose] = useState([])
  const [rowselected,SetRowSelected] = useState({})
  const[docRef_Dispose,setdocRef_Dispose] = useState([])

  const[docRef_selected_Dispose,setDocRef_selectedDispose] = useState("")

  const apiRef = useGridApiRef();

function CheckRole() {
  try {

    userRole = decrypt(window.localStorage.getItem('Kgr67W@'), appSettings.secretkeylocal)

  }
  catch(err) {
    WriteLog("Error","DisposeView","CheckRole Local Storage is tampered", err.message,userID)
    navigate('/dashboard')
  }
}

function getUserInfo() {
  try {
    CheckRole()
      if (userRole == "Admin" || userRole == "IT")
        {
            if((!window.localStorage.getItem('id') == null) || (window.localStorage.getItem('id') !== "0")) {
              userID = decrypt(window.localStorage.getItem('id'), appSettings.secretkeylocal)
              window.localStorage.removeItem('Kvsf45_')
            
            }else{ 
              navigate('/login')
          }
        }
      else {
        navigate('/dashboard')
      }
        
      }
  catch(err) {
    navigate('/dashboard')
    }
}


useEffect(() => {
  getUserInfo()
  GetEmailInfo()
 // LoadDispose()
 },[])


function LoadDispose() {

  
  try {
    getUserInfo()

   
    const url = 'http://localhost:3001/dispose/viewallassetdispose_forApproval'
    //viewallassetdispose_withNoDocRef'
    axios.post(url)
    .then(res => {
    const dataResponse = res.data.message;
    if(dataResponse == "Record Found") {

      setdocRef_Dispose(res.data.result)

    } 
    else
    {

      setdocRef_Dispose([])
    }
    }).catch(err => {
    WriteLog("Error","DisposeView","useEffect /dispose/viewallassetdispose_withNoDocRef","Error in then/catch \n" + err.message,userID)
    })
}
catch(err) {
    WriteLog("Error","DisposeView"," useEffect /dispose/viewallassetdispose_withNoDocRef","Error in try/catch \n" + err.message,userID)
}      

}


 useEffect(() => {
 
      try {
        getUserInfo()
        setDocRef_selectedDispose("")

        const url = 'http://localhost:3001/dispose/viewallassetdispose_forApproval'
        //viewallassetdispose_withNoDocRef'
        axios.post(url)
        .then(res => {
        const dataResponse = res.data.message;
        if(dataResponse === "Record Found") {
          
          setdocRef_Dispose(res.data.result)

        } 
        else
        {
          setdocRef_Dispose([])
        }
        }).catch(err => {
        WriteLog("Error","DisposeView","useEffect /dispose/viewallassetdispose_withNoDocRef","Error in then/catch \n" + err.message,userID)
        })
    }
    catch(err) {
        WriteLog("Error","DisposeView"," useEffect /dispose/viewallassetdispose_withNoDocRef","Error in try/catch \n" + err.message,userID)
    }      

 }, [])


 useEffect(() => {
 
  try {
    getUserInfo()
    const url = 'http://localhost:3001/dispose/viewallassetdispose_withNoDocRef'
    //viewallassetdispose_withNoDocRef'
    axios.post(url)
    .then(res => {
    const dataResponse = res.data.message;
    if(dataResponse == "Record Found") {
      
      setDispose(res.data.result)
      
    } 
    else
    {
      SetRowSelected({})
      setDispose([])
    }
    }).catch(err => {
    WriteLog("Error","DisposeView","useEffect /dispose/viewallassetdispose_withNoDocRef","Error in then/catch \n" + err.message,userID)
    })
}
catch(err) {
    WriteLog("Error","DisposeView"," useEffect /dispose/viewallassetdispose_withNoDocRef","Error in try/catch \n" + err.message,userID)
}      

 }, [])

 function LoadDispose_withNoDocRef() {
  try {
        getUserInfo()
        const url = 'http://localhost:3001/dispose/viewallassetdispose_withNoDocRef'
        //viewallassetdispose_withNoDocRef'
        axios.post(url)
        .then(res => {
        const dataResponse = res.data.message;
        if(dataResponse == "Record Found") {
          
          setDispose(res.data.result)
          
        } 
        else
        {
          setDocRef_selectedDispose("")

        }
        }).catch(err => {
        WriteLog("Error","DisposeView","LoadDispose_withNoDocRef /dispose/viewallassetdispose_withNoDocRef","Error in then/catch \n" + err.message,userID)
        })
    }
    catch(err) {
        WriteLog("Error","DisposeView"," LoadDispose_withNoDocRef /dispose/viewallassetdispose_withNoDocRef","Error in try/catch \n" + err.message,userID)
    }      
   
 }

 /*
function LoadData(){
    try {
        getUserInfo()
        const url = 'http://localhost:3001/dispose/viewallassetdispose'
        axios.post(url)
        .then(res => {
        const dataResponse = res.data.message;
        if(dataResponse == "Record Found") {
            setDispose(res.data.result)
        } 
        else
        {
          
          setDispose([])

        }
        }).catch(err => {
        WriteLog("Error","DisposeView","LoadData /dispose/viewallassetdispose","Error in then/catch \n" + err.message,userID)
        })
    }
    catch(err) {
        WriteLog("Error","DisposeView"," LoadData /dispose/viewallassetdispose","Error in try/catch \n" + err.message,userID)
    }      
  }
*/
  /*
  
  function LoadDispos(){
    try {
        getUserInfo()
        const url = 'http://localhost:3001/dispose/viewallassetdispose_withNoDocRef'
        axios.post(url,{docRef_selected_Dispose})
        .then(res => {
        const dataResponse = res.data.message;
        if(dataResponse == "Record Found") {
          setdocRef_Dispose(res.data.result) 
        } 
        else
        {
          setdocRef_Dispose([])
        }
        }).catch(err => {
        WriteLog("Error","DisposeView","LoadDispos /dispose/viewallassetdispose_DocRef","Error in then/catch \n" + err.message,userID)
        })
    }
    catch(err) {
        WriteLog("Error","DisposeView"," LoadDispos /dispose/viewallassetdispose","Error in try/catch \n" + err.message,userID)
    }      
  }

  */

useEffect(() => {
// console.log
}, [receiverInfo])

function GetEmailInfo(param) {
    getUserInfo()
    
  try {
    const rowId = userID
    const url = 'http://localhost:3001/email/getemailinfo'
    axios.post(url,{rowId})
    .then(response => {
      const dataResponse = response.data.message;
      if(dataResponse == "Record Found") {
    
                setReceiverInfo({...receiverInfo,
                receiveremail: response.data.result[0].email,
                receivername: response.data.result[0].userName})


      } else if (dataResponse == "No Record Found") {
        WriteLog("Error","DisposeView","GetEmailInfo /email/getemailinfo",dataResponse + "\n" + response.data.message,userID)
      }
    }).catch(err => {
      WriteLog("Error","DisposeView","GetEmailInfo /assets/getallassetsavailable","then/catch \n " + err.message,userID)
    })

  }
  catch(err) {
    WriteLog("Error","DisposeView","GetEmailInfo /assets/updateassetdeploy","Error in try/catch",userID)
  }
}

function handleClick(event) {
try {

  
  event.preventDefault()
  setOpen(false)



  const id = uuidv4();
  var strdocRef_Dispose =  id.slice(0,5).toUpperCase()
  strdocRef_Dispose = strdocRef_Dispose + utils_getDateMMDDHR()

    rowselected.forEach((irow, index) => { 
        if(!irow == '') {
        CheckDispose(irow,strdocRef_Dispose)

      
          
        const rowIds = apiRef.current.getAllRowIds();
        const rowId = rowIds
        //randomArrayItem(rowIds);
    
        apiRef.current.updateRows([{ id: rowId, _action: 'delete' }]);

        }
       })
       
     

     

       
       sendEmail()
       SetRowSelected({})
       setDocRef_selectedDispose("")
       DataGrid.re
       LoadDispose()
       LoadDispose_withNoDocRef()
      
      
       
       /*
       else if((!check_approve_dispose === "1") || (!check_approve_dispose === "0"))
       {
        WriteLog("Error","DisposeView","Get_LocalStorage_Dispose","LocalStorage is tampered \n ",userID)
       }
       else {
        WriteLog("Error","DisposeView","Get_LocalStorage_Dispose","Local Storage issue \n ",userID)
       }
      */
       

}
catch(err) {
    
    setOpen(false)
    navigate('/dashboard')
}

}

  function handleSubmit(event) {
    try {

      event.preventDefault();

      setMessage("")
      setColorMessage("red")  

      try {

       
        if(Object.keys(rowselected).length.toString() !== "0") {
        
          SetTotalSelected(Object.keys(rowselected).length.toString())
          GetEmailInfo(userID)
          setOpen(true)

        } else {
          AlertMessages('No Asset selected to Generate Document !','Warning')
        }

      }
      catch(err) {
       // console.log(err)
        setOpen(false);
      }


    }
    catch(err) {
      WriteLog("Error","AssetUser","handleSubmit ","Error in try/catch " + err.message,userID)
    }

  }

  const handleClose = () => {
    setOpen(false);
  };

  function CheckDispose(params,params_docRef_Dispose) {

    getUserInfo()
    try {
  
      const rowId = params
      
        const url = 'http://localhost:3001/dispose/checkassetdispose_approve_exist'
        axios.post(url,{rowId})
        .then(res => { 
          const dataResponse = res.data.message 
          
          if(dataResponse == "Record Found"){ 
            GenerateDocRef(rowId,res.data.result[0].assetID,params_docRef_Dispose)

          } else if(dataResponse == "No Record Found") {
            setMessage("Asset already mark as Dispose contact Support Team")
            setColorMessage('red')
            WriteLog("Error","DisposeView","CheckDispose /dispose/checkassetdispose_approve_exist", dataResponse + "\n Asset already mark as Dispose contact Support Team",userID)
          } 
        })
        .catch(err => {
        WriteLog("Error","DisposeView","CheckDispose /dispose/checkassetdispose_approve_exist","Error in then/catch \n" + err.message,userID)
        //navigate('/500');
        //navigate('/page/Page404')
        })
      
    }
    catch(err) {
      WriteLog("Error","DisposeView","CheckDispose","Error in try/catch \n" + err.message,userID)
    }
  
    
  }

  function GenerateDocRef(disposeid,assetid,params_docRef_Dispose) {
    try {



      getUserInfo()
      const docRef_Dispose = params_docRef_Dispose
      const url = 'http://localhost:3001/dispose/AssetDispose_docRefGenerated'
      axios.post(url,{userID,disposeid,assetid,docRef_Dispose})
      .then(res => {
        const dataResponse = res.data.message 
        
        if(dataResponse == "Update Error") {
          WriteLog("Error","DisposeView","GenerateDocRef /dispose/AssetDispose_docRefGenerated", res.message2,userID)
          //window.localStorage.setItem('Kvsf45_','0')
        } else if( dataResponse === "Update Success") {
        //  window.localStorage.setItem('Kvsf45_','1')
          WriteLog("Message","DisposeView","GenerateDocRef /dispose/AssetDispose_docRefGenerated", 
          "Asset Dispose DocRef Generated "
          + "\n AssetID: " + assetid
          + "\n Dispose ID: " + disposeid 
          + "\n Docref : " + docRef_Dispose,userID)
        }

      })
      .catch(err => {
      WriteLog("Error","DisposeView","GenerateDocRef /dispose/AssetDispose_docRefGenerated","Error in then/catch \n" + err.message,userID)
      
      })
    }
    catch(err) {
      WriteLog("Error","DisposeView"," GenerateDocRef /dispose/AssetDispose_docRefGenerated","Error in try/catch \n" + err.message,userID)
    }
  }


/////////// For Data Grid 

const columns = React.useMemo(() => [
    {
        field: 'isApprove',
        headerName: 'Approve',
        width: 70,
        editable: false,
    },
    {
    field: 'serialNo',
    headerName: 'Serial No',
    width: 100,
    editable: false,
    },
    {
    field: 'assetCode',
    headerName: 'Code',
    width: 150,
    editable: false,
    },
    {
        field: 'assetName',
        headerName: 'Name',
        width: 150,
        editable: false,
    },
    {
    field: 'assetCategName',
    headerName: 'Category',
    width: 150,
    editable: false,
    },
    {
        field: 'boxName',
        headerName: 'Box',
        width: 150,
        editable: false,
    },
    {
    field: 'suppliername',
    headerName: 'Supplier',
    width: 200,
    editable: false,
    },
    
    {
        field: 'statfrom',
        headerName: 'Status From',
        width: 150,
        editable: false,
    },
    {
        field: 'statto',
        headerName: 'Status Dispose',
        width: 150,
        editable: false,
    },
    {
        field: 'displayName',
        headerName: 'User',
        width: 150,
        editable: false,
    },
    {
        field: 'disposedate',
        headerName: 'Date',
        width: 150,
        editable: false,
    },

],[]);

/////////// End of Datagrid 

  function sendEmail() {

    let strDate =   utils_getDate();

    GetEmailInfo()
   
    try {
    var templateParams = {
    email_to: receiverInfo.receiveremail,
    email_sender: appSettings.email_sender,
    reply_to : appSettings.reply_to,
    name: receiverInfo.receivername,
    notes: "Asset is now approve for Dispose",
    date: strDate
};
 
  const allow_send_email_approve_dispose = appSettings.ALLOW_SENDEMAIL_APPROVE_DISPOSE
  if(allow_send_email_approve_dispose === "send")
  {
    emailjs.send(appSettings.YOUR_SERVICE_ID, appSettings.YOUR_TEMPLATE_ID, templateParams,appSettings.public_key)
    .then(function(response) {
       
      WriteUserInfo("Info","DisposeView",userID,receiverInfo.receivername,"",
      "Email sent for Asset (Disposal )Approval : "
      + "\nNotes : " + templateParams.notes,userID)

    }, function(error) {
      WriteUserInfo("Error","DisposeView",userID,
      "Info : " 
      + "Failed sending email Approve Dispose : " + userID + "\n"
      + "Notes : " + templateParams.notes + "\n "
      + "Response : " + error
      ,userID)
    });
  }
  else {
    WriteUserInfo("Info","DisposeView",userID,receiverInfo.receivername,"",
      "Asset ( Disposal ) Approval : "
      + "\nNotes : " + templateParams.notes,userID)
  }

  }
  catch(err) {
    console.log(err)
  }
  }

  const handleViewPDF =() => 
  {
   
      if(!docRef_selected_Dispose == "") {

      try {
        if (userID === "")
        {
          getUserInfo()
        }
        console.log(docRef_selected_Dispose)
        var docref_dispose = docRef_selected_Dispose
        const url = 'http://localhost:3001/dispose/viewallassetdispose_byDocReference'
        axios.post(url,{docref_dispose})
        .then(res => { 
        const dataResponse = res.data.message;
        if(dataResponse == "Record Found") {

            GenerateDisposeDocPDF(res.data.result,docref_dispose)
        } 
        else
        {
          
          setdocRef_Dispose([])

        }
        }).catch(err => {
        WriteLog("Error","DisposeView","handleViewPDF /dispose/viewallassetdispose_DocRef","Error in then/catch \n" + err.message,userID)
        })
    }
    catch(err) {
        WriteLog("Error","DisposeView"," handleViewPDF /dispose/viewallassetdispose","Error in try/catch \n" + err.message,userID)
    }      
  }
  else {
    AlertMessages('No data document to load','Warning')
  }
      

  }
  
  const handleInput =(event) => {
    try {
   
    setDocRef_selectedDispose(event.target.value.trim())
    }
  
  catch {
    AlertMessages('No Dispose Document Reference selected !','Warning')
  }
  }
////////// For Dialog Box

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}


  return (
    
    <CCol xs={12}>

     
        <CCard className="mb-3" size="sm" >
          <AlertMessages/>
          <CCardHeader className="mb-3" size="sm">
                <h6>
                <span className="message" style={{ color: '#5da4f5'}}> <> Dispose </></span> 
                <br></br>
                <strong><span className="message" style={{ color: colorMessage}}><p>{message}</p></span> </strong>
                </h6>
          </CCardHeader>
          <CCardBody>
          <CForm onSubmit={handleSubmit}>
            <CRow>
                <CCol xs={3} className='mb-3'>
                  <FormControl fullWidth  size="sm" >
                      
                      <InputLabel id="docref">Dispose Reference No.</InputLabel>
                        <Select  className="mb-1" aria-label="Small select example"
                          name='docref' onChange={handleInput} value={docRef_selected_Dispose}
                          error = {
                          docRef_selected_Dispose
                            ? false
                            : true
                          }
                          label="Select Reference No."
                          >
                            { 
                            docRef_Dispose.map((val) => 
                              
                              <MenuItem key={val.docRef_Dispose} value={val.docRef_Dispose} >{val.docRef_Dispose}</MenuItem>

                            )
                            }
                        </Select>
                        <div className="d-grid" style={{
                                display: 'flex',
                                alignItems: 'left',
                                justifyContent: 'left',
                              
                                }}>
                    

                          <CButton onClick={handleViewPDF} style={{  margin:'5px', width: '115%' }} color="info"> View Dispose Document  </CButton>
                        </div>
                        <div className="d-grid" style={{
                          display: 'flex',
                          alignItems: 'left',
                          justifyContent: 'left',
                          }} >
                          <CButton style={{  margin:'5px', width: '100%' }} color="success" onClick={handleSubmit}>Generate Dispose Document</CButton>
                        </div>
                  </FormControl>
                </CCol>
                
                <CCol xs={9}>
                <div className="formInput" width='100px' >
                      <img src={
                        DefaulImgDispose
                      }
                      alt="" width={'100%'} height={'200px'} 
                         />
                    </div>
                </CCol>               
            </CRow>
  
          <CRow>
     
                  <CCol >
                
                      <div style={{ height: 400, width: '100%' }}>

                          <DataGrid
                              apiRef={apiRef}
                              rows={dispose}
                              columns={columns}
                              initialState={{
                              pagination: {
                                  paginationModel: {
                                  pageSize: 10,
                                  },
                              },
                              }}
                              checkboxSelection
                              pageSizeOptions={[10]}
                            //  rowSelection={true}
                            //  getRowId={(row) => row.id}
                              onRowSelectionModelChange={id => SetRowSelected(id)}
                          />
                      </div>
                      
                
                  </CCol>
          </CRow>
              <CRow>



              <Dialog
                      open={open}
                      onClose={handleClose}
                      PaperComponent={PaperComponent}
                      aria-labelledby="draggable-dialog-title"
                    >
                      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                          Dispose
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Are you sure you want to Generate Document on selected Asset(s) ?
                          <br></br>
                          <br></br>
                          Selected : {iselected}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                          Cancel
                        </Button>
                        <Button onClick={handleClick}>Generate</Button>
                      </DialogActions>
                </Dialog>
              </CRow>

        </CForm>

          </CCardBody>

        </CCard>
    
    </CCol>
    
    
  )
}

export default DisposeView
