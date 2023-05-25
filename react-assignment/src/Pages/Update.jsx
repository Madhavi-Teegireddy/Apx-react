import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from "../Styles/addsce.module.css"
import SideNavbar from '../Components/SideNavbar';


function Update() {
    const {id} = useParams();
    const [inputData, setInputData] = useState({
        id: id,
        sname: '',
        time: '' 
    })
    const navigate = useNavigate();
    // updating data
    useEffect(() => {
        axios.get(`https://mockapi-i4c2.onrender.com/scenerio/${id}`)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`https://mockapi-i4c2.onrender.com/scenerio/${id}` , inputData)
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/allscenerios')
        })
    }


  return (
    <>
    {/* side navbar section */}
    <SideNavbar/>
        <div className={style.cont}>
        {/* updating scenerios */}
      <div className={style.outcontent}>
        <h2 className={style.heading}>Update Scenerio</h2>
      <div className={style.content}>
        <div className={style.container}> 
          <div className={style.content}>
               
           {/* input form to add scenerio */}
            <form onSubmit={handleSubmit}>
            <div className={style.details}>
              <div className={style.box}>
                <label>Scenerio Name</label>
                 <input type="text" name='sname' value={inputData.sname}
                 onChange={e => setInputData({...inputData, sname: e.target.value})}/>
              </div>
              <div className={style.box}>
                <label>Scenerio Time (seconds)</label>
                 <input type="number" name='time' value={inputData.time}
                 onChange={e => setInputData({...inputData, time: e.target.value})}/>                    
              </div>
            </div>
             <button style={{backgroundColor:"green", padding:"10px",fontSize: "15px", width:"100px",
                border:"none", borderRadius:"4px", color:"white", cursor:"pointer"}}>Update</button>
              </form>
            </div>
        </div>
      </div>
    </div>

        
    </div>
    </>
  )
}

export default Update