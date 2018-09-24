import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
      { id: 0, title: 'Note Title1', content: '1Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 1, title: 'Note Title2', content: '2Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 2, title: 'Note Title3', content: '3Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 3, title: 'Note Title4', content: '4Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 4, title: 'Note Title5', content: '5Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 5, title: 'Note Title6', content: '6Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 6, title: 'Note Title7', content: '7Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 7, title: 'Note Title8', content: '8Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 8, title: 'Note Title9', content: '9Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' }
      ]
    }
  }

  addNote = (newNote) => {
    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  deleteNote = (id, event) => {
    // event.preventDefault();
    const notes = this.state.notes.filter(note => note.id != id)
    this.setState({
      notes: notes
    })
  }

  editNote = (updatedNote) => {
    const notes = this.state.notes.map(oldNotes => updatedNote.find(editedNotes => editedNotes.id == oldNotes.id) || oldNotes)
    console.log(notes);
    this.setState({
      notes: notes
    })
  }

  render() {
    return (
      <div className="App">
        {/* SideBar always visible */}
        <SideBar />
        {/* Routes based on SideBar navigations or main-view navigations - note, edit, delete */}
        {/* main-view with all notes */}
        <Route exact path='/' render={props => ( <Notes {...props} notes={this.state.notes} /> )} />
        {/* main-view with specific note, contains DeleteNote component */}
        <Route path='/note/:id' render={props => ( <Note {...props} notes={this.state.notes} deleteNote={this.deleteNote} /> )} />
        {/* main-view create note goes here, class component */}
        <Route exact path='/create-note' render={props => ( <CreateNote {...props} notes={this.state.notes} addNote={this.addNote} /> )} />
        {/* main-view edit note goes here, class component */}
        <Route exact path='/note-edit/:id' render={props => ( <EditNote {...props} notes={this.state.notes} editNote={this.editNote} /> )} /> 
      </div>
    );
  }
}

export default App;
