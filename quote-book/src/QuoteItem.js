import React from 'react'

export default function QuoteItem(props){
    const {id , name , body , removeItem} = props

    const handleRemove = (id) =>{
        removeItem(id)
    }

    return(
        <div>
            {body}---{name}
            <button>Edit</button>
            <button onClick = {handleRemove}>Remove</button>
        </div>
    )
}