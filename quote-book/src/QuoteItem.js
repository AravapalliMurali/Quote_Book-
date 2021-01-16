import React from 'react'

export default function QuoteItem(props){
    const {id , name , body , RemoveItem} = props

    const handleRemove = () =>{
        const confirmation  = window.confirm('Are you sure ?')
        if(confirmation){
            RemoveItem(id)
        }
    }

    return(
        <div>
            <blockquote>{body}---{name}</blockquote>
            <button>Edit</button>
            <button onClick = {handleRemove}>Remove</button>
        </div>
    )
}