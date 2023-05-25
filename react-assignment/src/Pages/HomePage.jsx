import React, { useState, useEffect } from 'react'
import SideNavbar from '../Components/SideNavbar'
import style from "../Styles/Allsce.module.css"
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { RiDeleteBin5Fill } from "react-icons/ri"
import { MdModeEdit } from "react-icons/md"


const HomePage = () => {
  const [data, setData] = useState([]);
  // getting data from axios
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://mockapi-i4c2.onrender.com/vehicle`);
        setData(res.data);
      } catch (error) {
        console.log(error);
        setData([]);
      }
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
  axios.delete(`https://mockapi-i4c2.onrender.com/vehicle/${id}`)
    .then((res) => {
      console.log("Deleted", res);
      // Remove the deleted item from the data state
      setData((data) => data.filter((item) => item.id !== id));
      alert("Scenerio deleted")
    })
    .catch((err) => console.log(err));
};

  async function deleteAllScenarios() {
    try {
      await axios.delete(`https://mockapi-i4c2.onrender.com/scenerio`);
      setData([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    {/* sidenavbar section */}
      <SideNavbar/> 
      <div className={style.cont}>
        {/* displaying all vehicles */}
        <div className={style.outcontent}>
          <div className={style.section}>
            <div>All Vehicles</div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Vehicle ID</th>
                <th>Vehicle Name</th>
                <th>Position X</th>
                <th>Position Y</th>
                <th>Speed</th>
                <th>Direction</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, i) => (
                <tr key={e.id}>
                  <td>{i+1}</td>
                  <td>{e.name}</td>
                  <td>{e.pos_x}</td>
                  <td>{e.pos_y}</td>
                  <td>{e.speed}</td>
                  <td>{e.direction}</td>
                  <td style={{color:"black", fontSize:"20px"}}>
                    <Link to={`updateveh/${e.id}`} style={{color:"black", textDecoration:"none"}}>
                    <MdModeEdit/></Link></td>
                  <td style={{color:"black", fontSize:"20px"}} onClick={() => handleDelete(e.id)}><RiDeleteBin5Fill/></td>
                </tr>
              ))}
            </tbody>
          </table> 
        </div>     
      </div>
    </>
  )
}

export default HomePage;
