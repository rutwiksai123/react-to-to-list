import React from 'react'
import "../CSS/CategoryList.css"
const CategoryCards = ({ taskObj }) => {
  return (
    <div className='categoryList' >
        <hr />
        <h4 >{taskObj.Name} </h4>
     
    </div>
  )
}

export default CategoryCards