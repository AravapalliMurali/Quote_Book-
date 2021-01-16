import React from 'react'
import QuoteItem from './QuoteItem'

export default function QuoteList(props){
    const {Quotes , RemoveItem} = props

     return(
         <div>
             {Quotes.length === 0 ? (
                 <div>
                     <h2> NO quotes found</h2>
                     <p>Add your first quote</p>
                 </div>
             ) : (
                 <div>
                     <h2>My Quotes - {Quotes.length}</h2>
                     {
                         Quotes.map(ele=>{
                             return(
                                 <QuoteItem key={ele.id} {...ele}
                                  RemoveItem ={RemoveItem}/>
                             )
                         })
                     }
                 </div>
             )}
         </div>
     )
}