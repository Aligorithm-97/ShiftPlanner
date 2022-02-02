import React, {useState} from 'react';
import Axios from 'axios';


function CreateEvent() {

    const [eventExp,setEvent] = useState('')
    const [eventDate,setEventDate] = useState('')

    const createEvent = () =>{
        Axios.post('http://localhost:3001/eventcreator',{
            eventExp: eventExp, 
            eventDate: eventDate
        }).then(()=>{alert("successful event create")

        })

    };

        return (
            <div class="card" style={{width:"350px"}}>
                <h1><i class="fa fa-calendar-alt"></i> Event Creator </h1>
                <input type="text" name="eventExp" placeholder="Explain your event here" onChange={(e)=>{
                    setEvent(e.target.value)
                }} />
                <input type="date" name="eventDate" placeholder="Date of event" onChange={(e)=>{
                    setEventDate(e.target.value)
                }}/>
                <button onClick={createEvent}>Create</button>
            </div>
        )
}

export default CreateEvent;