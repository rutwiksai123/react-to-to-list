import React,{useState} from 'react'
import "../Components/CSS/Modal.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Button, Modal,ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const CreateTask = ({ modal, toggle,save }) => {

    const [category, setCategory] = useState('');
    const [discription, setDiscription] = useState('');
    
    //extracting name and value OR comparisn
    const handleChange = (e) =>{
        const {name,value} = e.target
        if(name === "category"){
            setCategory(value)
        }
        else{
            setDiscription(value)
        }
    }
    //grabbing value  OR push taskObj this array
    let handleSave = () =>{
        let taskObj = {}
        taskObj["Name"] = category
        taskObj["Description"] = discription
        save(taskObj)
    }
    return (
        // using bootstrap class 
       <Modal className='modal_css' isOpen={modal} toggle={toggle}>
           <ModalHeader className="modalHeader" toggle={toggle}>Create Task</ModalHeader>
           <ModalBody className='modalBody'>
               <form>
                    <div className='form-group'>
                        <label>Task Category</label>
                        <input type="text" className = "form-control" value = {category} onChange = {handleChange} name = "category"/>
                    </div>
                    <div className='from-group'>
                         <label>Task Discription</label>
                        <textarea rows="2" className='form-control textArea' value={discription} onChange = {handleChange} name="discription"/>
                    </div>
               </form>
           </ModalBody>
            <ModalFooter>
            <Button color='primary' onClick={handleSave}>Create</Button>
            <Button color='secondary' onClick={toggle}>Cancel</Button>
            </ModalFooter>
       </Modal>

    )
}

export default CreateTask