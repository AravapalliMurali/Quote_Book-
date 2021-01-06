import React,{useState} from 'react'
 
export default function QuoteForm(props){
    const [name,setName] = useState('')
    const [body,setBody] = useState('')

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleBody = (e) =>{
        setBody(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        const formData = {
            id:Number(new Date()),
            name:name,
            body:body
        }
        console.log(formData)

    }

    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <label>Name</label><br/>
                <input type="text" value={name} onChange ={handleName} placeholder="Enter the name "/><br/>

                <label>Body</label><br/>
                <textarea type="text" value ={body} onChange ={handleBody} placeholder='enter the quote '/>
                <br/>

                <input type ="submit" value ="save"/>
            </form>
        </div>
    )
}