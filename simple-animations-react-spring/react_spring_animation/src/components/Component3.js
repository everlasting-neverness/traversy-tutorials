import React from 'react';
import { Spring } from 'react-spring';

const Component1 = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      { props => (
        <div style={props}>
          <div style={c3Style}>
            <h1>Component3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Beatae adipisci praesentium minima iure cumque ratione obcaecati vitae rerum
              delectus distinctio veniam quas id voluptate, assumenda nobis
              nemo sunt. Hic, fugiat.
            </p>
          </div>
        </div>
      ) }
    </Spring>
  )
};

const c3Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
}

export default Component1;
