import React from 'react'
import QuoteList from './QuoteList'
import QuoteForm from './QuoteForm'

export default function QuoteContainer(props){

    return(
        <div>
            QuoteContainer component 
            <QuoteList/>
            <QuoteForm/>
        </div>
    )
}