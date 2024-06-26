
import React, { useState,setState } from "react";
import { useMemo, useEffect } from "react";
import axios from "axios";
import Table from "../component/tableButton"
import { IoMoon } from "react-icons/io5";
import { MdLightMode, MdOutlineAccountTree } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import {
  MdOutlineAddAlert,
  MdBarChart,
  MdSummarize,
  MdNotificationsNone,
  MdOutlineLightMode,
  MdDarkMode,
} from "react-icons/md";
import { Divider } from "@mui/material";
import { FaRegBell , FaSearch } from "react-icons/fa";
import Notification from "./notification";
  const PointContainer = ({ darkMode, toggleDarkMode }) => {
    const [showNotifications, setShowNotifications] = useState(false);


    const columns = useMemo(
        () => [
          {
            Header: "SNO",
            accessor: "sno"
          },
          {
            Header: "Date",
            accessor: "Date",
          },
          {
            Header: "Activity_name",
            accessor: "Activity_name",
          },
          {
            Header: "Activity_code",
            accessor: "Activity_code",
          },
          {
            Header: "Activity_type",
            accessor: "Tpye",
          },
         
          {
            Header: "Activity Category",
            accessor: "Activity_type",
          },
          {
            // Second group - Details
            Header: "Points",
            accessor: "points",
    
          },
          {
            Header: "Organiser",
            accessor: "Organier",
          },
        
        ],
        []
      );
      const [data, setData] = useState([]);
      const [showregister, setshowregister] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:2500/detailer");
            // Assuming your data has an 'id' field, otherwise, adjust accordingly
            setData(response.data.message.map((row, index) => ({ ...row, sno: index + 1 })));
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
      console.log(data);
      const handleDeleteRow = async(id) => {
        setshowregister(!showregister)
        const response=await axios.post('http://localhost:2500/changeregister', {
          id: id,
     
        })
          
        setData((prevData) => prevData.filter((row) => row.id !== id));
      };
  return (
    
    <div className={`con ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header101">
        <div className="Dash-pt">Points Container</div>
        <div className="theme">
          <div className="noti" onClick={() => setShowNotifications(!showNotifications)} >
            <MdNotificationsNone />
          </div>
          <div className="light" onClick={toggleDarkMode}>
            {darkMode ? <IoMoon /> : <MdLightMode />}
          </div>
        </div>
      </div>
    <div className="allbody" >
      <Table columns={columns} data={data} Table_header_name="Points Container" handleDeleteRow={handleDeleteRow} />
    </div>

    {showNotifications && (
        <Notification></Notification>
      )}
    </div>
  )
}

export default PointContainer