import React, { useState,useEffect } from 'react'
import { FaPlusSquare } from 'react-icons/fa';
import "../CSS/Schedule.css"
import Card from "./Card"
import CreateTask from '../../Models/CreateTask';


const Schedule = () => {

  //copy from reactstrap useState
  const [modal, setModal] = useState(false);
  
  //set your modal to opposite of previous modal State
  const toggle = () => {
    setModal(!modal)
  }

  const[taskList, setTaskList] = useState([]);

   useEffect(() =>{
     let arr = localStorage.getItem("taskList")
     if(arr){
      let obj = JSON.parse(arr)
       setTaskList(obj)
     }
   },[])
  
  const saveTask = (taskObj) =>{
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setModal(false)
    setTaskList(tempList)
  }


  const deleteTask =(index) =>{
    let tempList = taskList
    tempList.splice(index,1)
    localStorage.setItem("taskList" , JSON.stringify(tempList))
    setTaskList(taskList)
    window.location.reload()
  }

  const updateListArray = (obj, index) =>{
    let tempList = taskList
    tempList[index]=obj
    localStorage.setItem("taskList" ,JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  return (
    <>

      <div className='scheddule_list'>
    
        <FaPlusSquare className="add_icon" onClick={() => setModal(true)} />
          <div className='card_component'>
          {taskList && taskList.map((obj ,index)=> <Card taskObj = {obj} index={index} deleteTask={deleteTask} updateListArray ={updateListArray}/>) }
          </div >
      </div>
          {/* passing a props */}
      <CreateTask toggle={toggle} modal={modal} save ={saveTask} />
    </>
  )
}

export default Schedule;