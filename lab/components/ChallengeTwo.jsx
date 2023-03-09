import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    setTimeout(() => {
      this.randomize();
    }, 3000)
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    const randomArr = [];
    studentList.forEach(student => {
      const randomIndex = Math.floor(Math.random() * (randomArr.length + 1));
      randomArr.splice(randomIndex, 0, student);
    });
    this.setState((prev) => ({...prev, arr: [...randomArr]}));
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {
              /* display the list of students by iterating through the array */
              this.state.arr.map((student, index) => {
                return (
                  <React.Fragment key={index} >
                    <li>{student}</li>
                  </React.Fragment>
                )
              })
            }
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}
