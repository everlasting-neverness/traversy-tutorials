import React, { Component } from 'react';
import { Spring } from 'react-spring';

class Component2 extends Component {



  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        { props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae adipisci praesentium minima iure cumque ratione obcaecati vitae rerum
                delectus distinctio veniam quas id voluptate, assumenda nobis
                nemo sunt. Hic, fugiat.
              </p>
              <button style={btn} onClick={this.props.toggle}>Toggle Component3</button>
            </div>
          </div>
        ) }
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
}

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
}

export default Component2;
