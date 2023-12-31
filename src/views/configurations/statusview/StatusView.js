import  { useEffect, useState } from 'react'
import axios from 'axios'
import * as React from 'react'

import { DataGrid } from '@mui/x-data-grid';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';

import appSettings from 'src/AppSettings' // read the app config
import {  decrypt } from 'n-krypta';

import {useNavigate} from 'react-router-dom';

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CForm,
    CButton,
    CInputGroup,

  } from '@coreui/react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

import WriteLog from 'src/components/logs/LogListener';

import AlertMessages from 'src/components/alertmessages/AlertMessages';

  const StatusView = () => {

    const navigate = useNavigate();
  
    var userID = ""
    var userRole = ""
    //const [message,setMessage] = useState("")
    //const [colorMessage,setColorMessage] = useState('red')

    const [status,setStatus] = useState([])
    const [open, setOpen] = React.useState(false);
    const [rowselected,SetRowSelected] = useState("")

    function CheckRole() {
      try {
  
        userRole = decrypt(window.localStorage.getItem('Kgr67W@'), appSettings.secretkeylocal)
  
      }
      catch(err) {
        WriteLog("Error","StatusView","CheckRole Local Storage is tampered", err.message,userID)
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
  
      }, [])


    const columns = React.useMemo(() => [
      {
        field: 'id',
        headerName: 'Actions',
        type: 'actions',
        disableClickEventBubbling: true,
        renderCell: (params) => {
          return (
            <div >
           
              <EditTwoToneIcon cursor="pointer" onClick={()=> handleClick(params.row.id)}/>
              <DeleteOutlineTwoToneIcon cursor="pointer" onClick={()=> handleClickOpen(params.row.id)}/>
              
            </div>

          );
        }
      },
        {
          field: 'statusName',
          headerName: 'Status Name',
          width: 200,
          editable: false,
        },
        {
          field: 'statusDescription',
          headerName: 'Description',
          width: 300,
          editable: false,
        },

      ],[]);

      function handleNew(params) {
        params = ""
        // console.log("This " + params)
         navigate('/configurations/assetstatus',{state:{params}})
         
       }

       function handleClick(params) {

        // console.log("This " + params)
         navigate('/configurations/assetstatus',{state:{params}})
         
       }


      const handleClickOpen = (param) => {
          
            SetRowSelected(param)
            checkStatus(param)
            setOpen(true);

      };
    
      const handleClose = () => {
        setOpen(false);
      };


      function checkStatus(param) {
        try {
          if(userID == "") 
          {
            getUserInfo()
          }

          let rowId = param
          const url = 'http://localhost:3001/status/checkStatusfordelete'
          axios.post(url,{rowId})
          .then(res => {
            const dataResponse = res.data.message;
            if(dataResponse == "Record Found") {
             
              AlertMessages('Status selected still in use',"Warning")

              setOpen(false);
            } else if (dataResponse == "No Record Found") {
              setOpen(true);
       
            }
          }).catch(err => {
            //console.log(err)
            AlertMessages("Error in checking status !","Error")
         
          })
      
        }
        catch(err) {
          console.log(err)
        }
      }

       function handleDelete() {
        try {
          let rowId = rowselected
        const url = 'http://localhost:3001/status/deleteStatus'
        axios.post(url,{rowId})
        .then(res => {
          
          const dataResponse = res.data.message;
          if(dataResponse == "Record Deleted") {
            AlertMessages("Status successfully deleted","Success")
            setOpen(false)
            LoadData()
            //window.location.reload();
          } else if (dataResponse == "No Record Deleted") {
            AlertMessages("No Record deleted !","Error")
           
            WriteLog("Error","StatusView","useEffect /status/deleteStatus",res.data.message2,userID)
          }
        }).catch(err => {
          WriteLog("Error","StatusView","useEffect /status/deleteStatus","Delete Error on then/catch \n" + err.message,userID)
        })

       }
       catch(err) {
        WriteLog("Error","StatusView","handleDelete ","Delete Error on try/catch response \n" + err.message ,userID)
       }
      }


    useEffect(() => {
        LoadData()
      },[])
    
    function LoadData(){
      if(userID == "") 
      {
        getUserInfo()
      }
      
      const url = 'http://localhost:3001/status/viewallstatus'
      axios.post(url)
      .then(res => {
        const dataResponse = res.data.message;
        if(dataResponse == "Record Found") {
          setStatus(res.data.result)
        } else if (dataResponse == "No Record Found") {
            AlertMessages("Nore Record Found","Warning")
           
            WriteLog("Error","StatusView","LoadData /status/viewallstatus",res.data.message2,userID)
        }
      }).catch(err => {
        WriteLog("Error","StatusView","LoadData /status/viewallstatus","DB Error then/catch \n" + err.message,userID)
      })
    }


      /// For Dialog
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
    <CCard className="mb-3" size="sm"  >
      <CCardHeader>
        <h6>
        <span className="message" style={{ color: '#5da4f5'}}> <> Status </></span> 
       
        </h6>
      </CCardHeader>
     
      <CForm >
        <CRow >
            <CCol xs={12}>
              <CCardBody>
                <AlertMessages/>
              <CButton onClick={handleNew} >Create New </CButton>
                <CInputGroup size="sm" className="mb-3">
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={status}
                                columns={columns}
                                initialState={{
                                pagination: {
                                    paginationModel: {
                                    pageSize: 10,
                                    },
                                },
                                }}
                                pageSizeOptions={[10]}
                                rowSelection={true}
                                getRowId={(row) => row.id}
                                
                            />
                        </div>
                </CInputGroup>
                <div className="d-grid">
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        PaperComponent={PaperComponent}
                        aria-labelledby="draggable-dialog-title"
                      >
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                          Status
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Are you sure you want to Delete ?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus onClick={handleClose}>
                            No
                          </Button>
                          <Button onClick={handleDelete}>Yes</Button>
                        </DialogActions>
                      </Dialog>
                    </div>
              </CCardBody>
            </CCol>

        </CRow>
      </CForm>
    </CCard>
  </CCol>


  )
}

export default StatusView
