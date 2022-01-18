import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";



    // function App() {
    //   window.navigator.geolocation.getCurrentPosition(
    //     (position)=> console.log(position), //success call back
    //     (err)=>console.log(err) // failure call back
    //   );

    //   return (
    //     <div className="App">
    //     Hello
    //     </div>
    //   );
    // }
class App extends React.Component{

  // constructor(props){ //props same as functional component props
  //   super(props);
  //   this.state={lat:null,errMsg:''};  
  // }

  state={lat:null} //Alternate state initialization and the babel converts this code into the above constructor code.

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=> {
        console.log("hi");
        //setState comes from React.Component
         //success call back
        this.setState({lat: position.coords.latitude})
      },
      (err)=> {
        // failure call back
        this.setState({errMsg:err.message});
      } 
    );
  }

  renderContent(){
    if(this.state.lat && !this.state.errMsg){
      return <SeasonDisplay lat={this.state.lat}/>
    }
    if(!this.state.lat && this.state.errMsg){
      return <div>Error :{this.state.errMsg} </div>
    }
    return <Spinner text="Please Enable the Location "/>
  }
  
//React says we have to define render
  render(){
      return (
      <div className="border-red">
        {this.renderContent()}
      </div>)
  }
}
export default App;
