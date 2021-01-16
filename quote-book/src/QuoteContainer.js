import React,{useState} from 'react'
import QuoteList from './QuoteList'
import AddQuote from './AddQuote'

export default function QuoteContainer(props){
    const [Quotes , setQuotes] = useState([])

    const addItems = (quote) =>{
        const result = [quote , ...Quotes]// adding the quote object into Quotes array 
        setQuotes(result)
    }

    const removeItem = (id)=>{
        const result = Quotes.filter(ele => ele.id != id)
        console.log(result)
        setQuotes(result)
    }
    return( 
        <div>
            <QuoteList Quotes = {Quotes} removeItem ={removeItem} />
            <AddQuote addItems =  {addItems}/>
        </div>
    )
}