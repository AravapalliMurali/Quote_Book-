import React from 'react'
import QuoteForm from './QuoteForm'

export default function AddQuote(props){
    const {addItems} = props

    const formSubmit =(formData) =>{
        addItems(formData)
    }
    
    return(
        <div>
            <h2>Add Task</h2>
            <QuoteForm formSubmit ={formSubmit}/>
        </div>
    )
}