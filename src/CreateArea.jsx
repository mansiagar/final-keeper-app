import React, {useState} from "react";



function CreateArea(props){
    const [note, setNote] =useState({
        title:"",
        content:""
    });

     function handleOnChange(event){
        const {name,value} = event.target;
        setNote(prevNote =>{
          return{
                ...prevNote, //spread operator
                [name]: value //key value pair
            };
        });
     }
    function submitNote(event){
         event.preventDefault();
         props.onAdd(note);
         setNote(
            {
                title:"",
                content:""
            }
         );

    }

    return (
        <div>
            <form>
          
                <input name= "title" placeholder="Title" value={note.title} onChange={handleOnChange}/>
                <textarea name= "content" placeholder="Take A note " rows ="3" value={note.content}  onChange={handleOnChange}/>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}
export default CreateArea;