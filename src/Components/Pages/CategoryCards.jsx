import React from 'react'
import "../CSS/CategoryList.css"
const CategoryCards = ({ taskObj }) => {
  return (
      <div className='categoryList' >
          
              <li >{taskObj.Name} </li>
        
      </div>
  )
}

export default CategoryCards