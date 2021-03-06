import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote';
import AddNote from '../AddNote/AddNote';
import './NoteList.css'

class NoteList extends Component {
  render() {
    const { notes } = this.props;
    console.log('hi', this.props)

    return (
      <div className='NoteList'>
          <ul>
            {notes.map((note) => {
              return (<div key={note.id} className="note-box">
                <Link to={`notes/${note.id}`}>{note.name}</Link>
                <p>Date Modified on: {note.modified}</p>
                <button>Delete Note</button>
                </div>)
                ;
                
            })}
          </ul>
        <AddNote />
      </div>
    )
  }
}

export default NoteList;


