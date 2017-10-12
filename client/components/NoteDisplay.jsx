import React from 'react';


var noteDisplayBox = {
    display: 'inline',
    position: 'absolute',
    marginTop: 40,
    marginLeft: 40,
    width: 380,
    height: 460,
    backgroundColor: 'white',
    borderRadius: 10
};

var createNoteButton = {
    display: 'inline',
    position: 'absolute',
    marginTop: 6,
    marginLeft: 595,
    width: 60,
    height: 20,
    backgroundColor: 'white',
    borderRight: 10,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: 'rgb(0,150,0)',
    borderWidth: 1

}

var noteCreateText = {
    display: 'inline',
    position: 'absolute',
    marginTop: 4,
    marginLeft: 5,
    fontSize: 12,
    fontFamily:'Raleway'
}

var noteBox = {
    display: 'inline',
    position: 'absolute',
    marginTop: 60,
    marginLeft: 430,
    width: 210,
    height:200,
    backgroundColor: 'rgb(220, 220, 220)',
    borderRadius: 8

}

var formStyle = {
    display: 'inline',
    position: 'absolute',
    marginTop: 17,
    marginLeft: 12,


}

var inputStyle = {
    display: 'inline',
    position: 'absolute',
    marginTop: 8,
    marginLeft: 6,
    width: 192,
    height: 180,
    borderRadius: 8

}

var displayBox = {
    display: 'inline',
    position: 'absolute',
    marginTop: 270,
    marginLeft: 450,
    width: 170,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgb(220, 220, 220)'
}

export default class NoteDisplay extends React.Component{

  constructor(props){
    super(props);

      this.state = {value: ''

                    };

      this.buttonClick = this.buttonClick.bind(this);
      this.handleChange = this.handleChange.bind(this);

  }


  buttonClick(){
    console.log("works");
  }

  handleChange(){
    this.setState = {
      value: ' '

    };
    console.log("change is firing");
  }

  render(){


      return(

          <div style = {noteDisplayBox}>

                <div onClick = {this.buttonClick} style = {createNoteButton}>

                    <h1 style = {noteCreateText}>New...</h1>

                </div>



                <div style = {noteBox}>


                  <form style = {formStyle} id = "noteForm">



                  </form>

                    <textarea style = {inputStyle} type = "text"  onSubmit = {this.handleChange} form = "noteForm"  />


                </div>


                <div style = {displayBox}>


                </div>


          </div>



      );
  }
}
