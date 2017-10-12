import React from 'react';
import Notebackground from './Notebackground.jsx';
import NoteCreationBox from './NoteCreationBox.jsx';
import NoteDisplay from './NoteDisplay.jsx';


export default class App extends React.Component {

  render() {
    return (
     <div>

        <Notebackground />
        <NoteCreationBox />
        <NoteDisplay />


      </div>
    );
  }
}
