import React from "react";
import Home_Task from "./Home_Task";
import { useState , useEffect } from "react";
import Pickers from "../Data/Pickers";
import './Style/task_box.css'


function Task_Box({task , shift }) {

    const [showShift, setShowShift] = useState(true);

    const [Tasklist, setTaskList] = useState({});


    
  useEffect(() => {
    if (Pickers.length > 0) {
      
     let  TL = Pickers.filter((elem) => {
        return elem.shift == shift && elem.current_task == task;
      });

      setTaskList(TL);
    }
  }, []);


  

  return (
    <>
      <li className="li_nested_shift">
        <button className="home_button_task" onClick={() => {setShowShift(!showShift)}}  > {task} </button>
       {    showShift &&
        <ul className="nested_task">
          <li className="nested_task">

            {  Tasklist.length > 0 &&
                Tasklist.map((user) => {
                    return (
                        <Home_Task user={user}/>
                    )
                })
            }
            
          </li>
        </ul>
        }
      </li>
    </>
  );
}

export default Task_Box;
