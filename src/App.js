import './App.css';
import React, {Component} from 'react'

class App extends Component{

  state = {
    users: [
      {
        name: "James Bond",
        age: 60
      },
      {
        name: "Tom Cruise",
        age: 50
      },
      {
        name: "John Wick",
        age: 45
      },
    ]
  }

  handleAddAge = (e) => {
    let newUsersList = [
      ...this.state.users,
    ]

    newUsersList[e.target.id].age += 1;

    this.setState({newUsersList});
  }

  render(){
    return(
      <div className='page'>
        <div className='container'>
          <h1 className='title'>Users</h1>
          {
            this.state.users.map((userInfo, index)=>{
              return(
                <div key={index} className="card">
                  <p className='bold'>{userInfo.name}</p>
                  <div className='d-flex'>
                    <p>Age: {userInfo.age}</p>
                    <button
                      id={index} 
                      className="btn primary"
                      onClick={this.handleAddAge}>+</button>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    );
  }
}

export default App;


