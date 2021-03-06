import React from 'react';
import ReactDOM from 'react-dom';


var noteDisplayBox = {
    display: 'inline',
    position: 'absolute',
    overflow: 'scroll',
    marginTop: 40,
    marginLeft: 40,
    width: 380,
    height: 460,
    backgroundColor: 'rgb(50,50,50)',
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
    marginLeft: '53.7%',
    width: 210,
    height:200,
    backgroundColor: 'rgb(220, 220, 220)',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgb(255, 67, 31)'

}

var formStyle = {
    display: 'inline',
    position: 'absolute',
    marginTop: 17,
    marginLeft: 12


}

var inputStyle = {
    display: 'inline',
    position: 'absolute',
    marginTop: -10,
    marginLeft: -6,
    width: 192,
    height: 180,
    borderRadius: 8,
    backgroundColor: 'rgba(50,50,50,.6)'

}

var displayBox = {
    display: 'inline',
    position: 'absolute',
    marginTop: 50,
    marginLeft: 20,
    width: 340,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgb(220, 220, 220)',
    fontSize: 8
}
var buttonCircle = {

    display: 'inline',
    position: 'absolute',
    marginTop: 400,
    marginLeft: 50,
    width: 20,
    height: 10,
    backgroundColor: 'rgb(15,15,15)'


}
var buttonPosition = {

    display: 'inline',
    position: 'absolute',
    marginTop: 200,
    marginLeft: 140,
    width: 50,
    height: 20,
    backgroundColor: 'rgb(220,220,220)',
    borderRadius: 3

}

var clearButton = {
    display: 'inline',
    position: 'absolute',
    marginTop: 216,
    marginLeft: 130,
    width: 50,
    height: 20,
    backgroundColor: 'rgb(220,220,220)',
    borderRadius: 3


}


export default class NoteDisplay extends React.Component{

  constructor(props){
    super(props);

      this.state = {
        value: '',
        note: '',
        showComponent: false,
        multiNote: []


    };





      this.buttonClick  = this.buttonClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.buttonClear  = this.buttonClear.bind(this);
      //this.updateText   = this.updateText.bind(this);
      this.deleteBox    = this.deleteBox.bind(this);

  }



  // componentWillUpdate(){
  //
  //   this.updateText();
  //
  // }







  handleChange(e){

    let noteInput = this.refs.noteValue.value;

      this.setState ({
          value: e.target.value,
          note: e.target.value
        });

            console.log("change is firing");
    //console.log(this.state.value);
            console.log("here: " + noteInput);
  }


  buttonClick(e){
      e.preventDefault();
      console.log("works: " + e.target[0].value);

      this.setState ({
        note: e.target[0].value,
        showComponent: true,
        multiNote: this.state.multiNote.concat([<Notes note = {this.state.note} clear = {this.deleteBox}/>])

      });

    //this.updateText();

  }

  // componentWillUpdate(){
  //
  //
  //     this.updateText();
  // }

  // updateText(){
  //
  //
  //   this.setState({
  //
  //     multiNote: this.state.multiNote.concat([<Notes note = {this.state.note} />])
  //     // multiNote: [<Notes note = {this.state.note}/>]
  //
  //   });
  //
  //
  // }

  deleteBox(e){
    e.preventDefault();

    let find = ReactDOM.findDOMNode(this.noteNumber);

    console.log(find);
    //let findNote = e.target.getAttribute(this.refs.);
    ///console.log(findNote);
    //let find = ReactDOM.findDOMNode(this.refs.note);
    //let unmount = ReactDOM.unmountComponentAtNode(find);
    //let find = ReactDOM.findDOMNode(e.currentTarget);

    //console.log("find: " + findNote);
    //var newArray = this.state.multiNote;
    //var index = newArray.indexOf(e.target.value);
     //var sparse = Object.keys(newArray);
    //var sparse = newArray.keys();

    //var index = e.currentTarget.dataset.index;



    //var index = newArray.indexOf(e.target.dataset.id);


    //console.log("keys: " + sparse + " " + "index: "+ index + " "+ "target:  " + e.currentTarget);
    //let unmount = ReactDOM.unmountComponentAtNode(find);
     //var array = newArray.slice(sparse, sparse + 1);

    //this.state.multiNote.indexOf(find);

    //console.log("index: " + this.state.newArray.indexOf(find));


    this.setState({

      multiNote: this.state.multiNote

    })


    //
    // this.setState ({
    //
    //     multiNote:
    // });

    //find.parentNode.removeChild(find);

  //  console.log(find);

    // var element = document.getElementsByTagName("div") ;
    //
    // var grab = element.activeElement;
    // //element.parentNode.removeChild(element);
    //
    // console.log('parent node: ' + element);
    // var newArray = this.state.multiNote.slice();
    // newArray.splice(index, index + 1);

      // this.setState({
      //   muliNote: newArray
      //
      // });

  }

  findIndex(index){


    var newArray = this.state.multiNote;

    newArray.splice(index, 1);

    console.log("index: " + index);

    this.setState({

      multiNote: newArray
    })




  }

  buttonClear(e){

    e.preventDefault();
    //this.deleteBox();



      console.log('clear is being clicked');

      this.deleteBox();
  }



  componentDidMount(){
     console.log('props values', this.props); //it will print the props values
  }



  render(){
    //const multiNotes = multiNote.map((moreNote) => <div> {moreNote} </div> );

      return(
        <div>

          <div style = {noteDisplayBox}>


            {this.state.multiNote.map((note, index) =>
              <div ref = {note => this.noteNumber = note} key = {index} onClick = {this.findIndex.bind(this, index)}> {note}</div>)
                //console.log("mapping: " + note + index + multiNote);
            }

          </div>
                <div style = {noteBox}>
                    <form style = {formStyle} onSubmit = {this.buttonClick}>
                        <textarea style = {inputStyle} value = {this.state.value} onChange = {this.handleChange}  ref = "noteValue">
                        </textarea>
                            <input style = {buttonPosition} type = "submit" value = "Submit"/>
                    </form>
                        {/* <button  style = {clearButton} onClick = {this.buttonClear}>Clear</button> */}
                </div>

            {/* <div>
                <button  style = {clearButton} onClick = {this.buttonClear}>Clear</button>
              {this.state.showComponent ? <Notes note = {this.state.note} />}
         </div> */}



                {/* <div style = {displayBox}>
                  <h1>
                  {this.state.note}</h1>



                </div> */}
                {/* <Notes note = {this.state.note} /> */}

              {/* //<Notes note = {this.state.note} /> */}

              <div>

                {/* <Notes clear = {this.buttonClear}/> */}
                  {/* {this.state.multiNote.map((note) =>
                    <div>{note}</div>

                  )} */}

                  {/* creates text box */}

                  {/* {this.state.multiNote} */}


              </div>

</div>

      );
  }
}


var noteStyle = {
    //display: 'inline',
    //position: 'absolute',
    position: 'relative',
    overflow: 'scroll',
    marginTop: 50,
    marginLeft: 15,
    width: '350px',
    height: '50px',
    backgroundColor: 'rgb(100, 100, 100)',
    borderRadius: '8px',
    fontSize: 8,
    color: 'rgb(255,255,255)',
    fontFamily: 'Raleway',




}

var textStyle = {

    marginLeft: 8
}

var deleteButton = {
    display: 'inline',
    position: 'absolute',
    marginLeft: 325,
    width: 25,
    height: 20,
    backgroundColor: 'rgb(100, 100,100)',
    borderRadius: '8px',





}

var xSpot = {
    display: 'inline',
    position: 'absolute',
    marginLeft: 11,
    marginTop: 4

}




class Notes extends React.Component{

  constructor(props){
    super(props)

    //this.clear = this.clear.bind(this);



  }
  clearBox(){

    this.props.clear();

  }




    render(){
      return (

        <div style = {noteStyle} >


          <div style = {deleteButton} onClick = {this.props.clear}>
                  <p style = {xSpot}>X</p>
          </div>

              <h1 style = {textStyle}> {this.props.note}</h1>



        </div>

        );
      }

}
