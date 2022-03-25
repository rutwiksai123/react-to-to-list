import React,{useState} from 'react'
import "../../Components/CSS/Card.css"
import EditsTask from '../../Models/EditsTask';
import { FaTrashAlt, FaPenSquare } from 'react-icons/fa';

const Card = ({ taskObj, index, deleteTask,updateListArray }) => {

  const [modal, setModal ] = useState(false)

  const toggle = () =>{
    setModal(!modal)
  }

  const updateTask = (obj) =>{
    updateListArray(obj , index)
  }

  const handleDelete = () =>{
    deleteTask(index)
  }

  return (
    <>
      <div className=' card_style'>
        <div className='card_left'>
          <h3 className='category'>{taskObj.Name} </h3>
        </div>
        <div className='card_right'>
          <h6 className='discription'>{taskObj.Description} </h6>
          <div className='edit_delete_btn'>
            <FaPenSquare className='edit_btn' onClick={() => setModal(true)} />
            <FaTrashAlt className='delete_btn' onClick = {handleDelete} />
          </div>
        </div>
        <EditsTask modal={modal} toggle ={toggle} updateTask={updateTask} taskObj ={taskObj}/>
      </div>
    </>
  )
}

export default Card