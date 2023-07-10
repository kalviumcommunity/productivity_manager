import React from "react";
import "./Style/home_task.css";
import Man from "./../assets/images/man.png";
import {useSelector} from 'react-redux'

function Home_Task({ user }) {

  let reduxData = useSelector( (state) => { return state.Pickers })

  

  let handleChangeTask = ( ) => {



  }




  return (
    <div className="home_task_parent">
      <div className="home_task_user">
        <img src={Man} alt="" />
        <div>
          <h4>{user.name}</h4>
          <select className="home_task_task_list" name="" id=""  onChange={(e) => { handleChangeTask(e)}} >
          <option value="No Task">Task</option>
          <option value="Cluster">Cluster</option>
          <option value="Packing">Packing</option>
          <option value="Odd/Case">Odd/Case</option>
          <option value="Leave">Leave</option>
          <option value="Break">Break</option>
          <option value="Other">Other</option>
        </select>
         
        </div>
      </div>
      <div>
       
      <p>
            ID :{" "}
            <strong>
              {" "}
              <span> {user.current_id} </span>
            </strong>
          </p>

       
        <select className="home_task_task_list" name="" id="">
          <option value="">No Shift</option>
          <option value="">First Shift</option>
          <option value="">Second Shift</option>
          <option value="">Night Shift</option>
          
        </select>
      </div>
      <div>
      <p>
          {" "}
          Start Time :{" "}
          <strong>
            {" "}
            <span> 13:40 </span>
          </strong>{" "}
        </p>
        
        <button className="end_shift_button">End Shift</button>
      </div>
    </div>
  );
}

export default Home_Task;
