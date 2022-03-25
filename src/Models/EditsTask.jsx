import React,{useState, useEffect} from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Button, Modal,ModalHeader, ModalBody, ModalFooter } from "reactstrap"


const EditsTask = ({ modal, toggle,updateTask,taskObj }) => {
    const [category, setCategory] = useState('');
    const [discription, setDiscription] = useState('');
    
    const handleChange = (e) =>{

        const {name,value} = e.target

        if(name === "category"){
            setCategory(value)
        }
        else{
            setDiscription(value)
        }

    }
    
    const handleUpdate= (e) =>{
        e.preventDefault()
        let tempObj = {}
        tempObj["Name"] = category
        tempObj["Description"] = discription
        updateTask(tempObj)
    }

    useEffect(() =>{
        setCategory(taskObj.Name)
        setDiscription(taskObj.discription)
    },[])

    return (
       <Modal isOpen={modal} toggle={toggle}>
           <ModalHeader toggle={toggle}>Update Task</ModalHeader>
           <ModalBody>
               <form>
                    <div className='form-group'>
                        <label>Task Category</label>
                        <input type="text" className='mb-1 form-control' value={category} onChange = {handleChange} name="category"/>
                    </div>
                    <div className='from-group'>
                         <label>Task Discription</label>
                        <textarea  rows="5" className='form-control' value={discription} onChange = {handleChange} name="discription"/>
                    </div>
               </form>
           </ModalBody>
            <ModalFooter>
            <Button color='primary' onClick={handleUpdate}>Update</Button>
            <Button color='secondary' onClick={toggle}>Cancel</Button>
            </ModalFooter>
       </Modal>

    )
}

export default EditsTask