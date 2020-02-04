import React from 'react';
import PropTypes from 'prop-types';
import { Action, withStateMachine } from 'react-automata';

const statechart = {
  initial: 'a',
  states: {
    a: {
      on: {
        NEXT: 'b',
      },
      onEntry: 'sayHello',
    },
    b: {
      on: {
        NEXT: 'a',
      },
      onEntry: 'sayCiao',
    },
  },
};

const CitiesStates = ({ transition }) => {
  const handleClick = () => {
    transition('NEXT');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>NEXT</button>
      <Action is="sayHello">Hello, A</Action>
      <Action is="sayCiao">Ciao, B</Action>
    </div>
  );
};

CitiesStates.propTypes = {};

export default withStateMachine(statechart)(CitiesStates);
