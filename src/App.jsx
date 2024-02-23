import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
   const [notes, setNotes] = useState([]);
  function addNote(newNotes){
    setNotes (prevNotes => {
      return [...prevNotes, newNotes]
    }

    )
  }// prevNotes is parameter that hold the previous notes
  function deleteNote(id){
    setNotes(prevNotes => 
      {
        return prevNotes.filter((noteItem , index) => {
          return index !== id; // return only whose item that not equal to id 
        });
      });
  }
  return (
    <div>
      <Header />
      <CreateArea  onAdd= {addNote}/>
      {notes.map((noteItem , index )=>
      {
        return (
          <Note 
          key ={index} //map function has parameter index
          id ={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          />
        );
      }) }
      <Footer />
    </div>
  );
}
// onAdd is function that access the value of CreateArea 
//filter function is used to filterd element and id matching elemnet deleted
//noteItem is function parameter that access the value of notes and notes.map hold the value of note Item
export default App;
