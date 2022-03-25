import React,{useState, useEffect} from 'react'
import "../CSS/Category.css"
import CreateTask from '../../Models/CreateTask';
import CategoryCards from './CategoryCards';

const Category = () => {

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

  return (
    <>
      <div className='category_list'>
       <div>
         {taskList && taskList.map((obj ,index)=> <CategoryCards taskObj = {obj} index={index} />) }
       </div>
      </div>
      <CreateTask save={saveTask}/>
    </>
  )
}
  
export default Category;