import React, { useState } from 'react'
import style from "../Styles/addveh.module.css"
import SideNavbar from '../Components/SideNavbar'
import axios from 'axios'

// initial data 
const initialState = {
      sce_name: "",
      name: "",
      pos_x: "",
      pos_y: "",
      speed: "",
      direction: "",
}

const AddVehicle = () => {

  const [formValue, setFormValue] = useState(initialState);
  const {sce_name, name, pos_x, pos_y, speed, direction} = formValue


  // form submission data from axios
const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sce_name || sce_name === "Select Scenerio"|| !name || !pos_x || !pos_y || !speed || 
    !direction || direction === "Select Direction") {
        alert("Please select All Fields");
    } else if (name.trim() === "") { 
        alert("Vehicle Name cannot be empty");
    } else {
        axios.post("https://mockapi-i4c2.onrender.com/vehicle", {
            sce_name,
            name,
            pos_x,
            pos_y,
            speed,
            direction          
        })
        .then(res => {
            console.log("Posting Data", res);
            alert("Vehicle data Added Successfully");

            window.location.reload()
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong");
        });
    }
}

const onScenerioChange = (e) => {
    setFormValue({
        ...formValue,
       sce_name : e.target.value
    })
}

const onDirectionChange = (e) => {
    setFormValue({
        ...formValue,
       direction : e.target.value
    })
}

  const onInputChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
}

  return (
    <>
    {/* side navbar section */}
    <SideNavbar/>
    {/* add vehicle form section */}
    <div className={style.cont}>
      <div className={style.outcontent}>
        <h2 className={style.heading}>Add Vehicle</h2>
      <div className={style.content}>
        <div className={style.container}> 
          <div className={style.content}>
               {/* input form to add scenerio */}
                <form onSubmit={handleSubmit}>
                <div className={style.details}>

                  <div className={style.box}>
                    <label>Scenerios List</label>
                    <select className={style.categoryCh} 
                    onChange={onScenerioChange} 
                    value={sce_name}
                    >
                        <option>Select Scenerio</option> 
                        <option value="test">Test Scenerio</option>
                        <option value="speed">Speed Scenerio</option>
                        <option value="safety">Safety Scenerio</option>
                        <option value="abc">Scenerios ABC</option>
                    </select>                    
                  </div>

                  <div className={style.box}>
                    <label>Vehicle Name</label>
                    <input type="text" value={name} name="name" onChange={onInputChange} />
                  </div>

                  <div className={style.box}>
                    <label>Speed</label>
                    <input type="number" required value={speed} name="speed" onChange={onInputChange} />
                  </div>

                  <div className={style.box}>
                    <label>Position X</label>
                    <input type="number" required value={pos_x} name="pos_x" onChange={onInputChange} />
                  </div>

                  <div className={style.box}>
                    <label>Position Y</label>
                    <input type="number" required value={pos_y} name="pos_y" onChange={onInputChange} />
                  </div>

                  <div className={style.box}>
                    <label>Direction</label>
                    <select className={style.categoryCh} 
                    onChange={onDirectionChange} 
                    value={direction}
                    >
                        <option>Select Direction</option> 
                        <option value="towards">Towards</option>
                        <option value="backwards">Backwards</option>
                        <option value="upwards">Upwards</option>
                        <option value="downwards">Downwards</option>
                    </select>                    
                  </div>                                    
                </div>
                {/* button to add reset and go back */}
                <div className={style.btn}>
                  <button type="submit" style={{backgroundColor:"green", color:"white"}}>Add</button>
                  <button type="button" onClick={() => setFormValue(initialState)} style={{backgroundColor:"orange", color:"white"}}>Reset</button>
                  <button type="button" onClick={() => window.history.back()} style={{backgroundColor:"blue", color:"white"}}>Go Back</button>
                </div>
              </form>

            </div>
        </div>
      </div>
    </div>

        
    </div>
    </>
  )
}

export default AddVehicle