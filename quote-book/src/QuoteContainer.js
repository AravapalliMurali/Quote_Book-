import React,{useState,useEffect} from 'react'
import QuoteList from './QuoteList'
import AddQuote from './AddQuote'

export default function QuoteContainer(props){
    const [Quotes , setQuotes] = useState([])

    useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('Quotes')) || []
        setQuotes(result)
    },[])

    useEffect(()=>{
        localStorage.setItem('Quotes' , JSON.stringify(Quotes))
    },[Quotes])


    const addItems = (quote) =>{
        const result = [quote , ...Quotes]// adding the quote object into Quotes array 
        setQuotes(result)
    }

    const RemoveItem = (id) =>{
        const result = Quotes.filter(ele =>{
            return  ele.id !== id
        })
        setQuotes(result)
    }

    return( 
        <div>
            <QuoteList Quotes = {Quotes} RemoveItem ={RemoveItem} />
            <AddQuote addItems =  {addItems}/>
        </div>
    )
}