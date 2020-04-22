import React from 'react';
import propTypes from 'prop-types';

import Generics from './Generics';

function Drink(props) {
  const { convertTypeToData, data, making, type, history } = props;

  return (
    <Generics
      data={convertTypeToData('bebida', data)}
      making={making}
      type={type}
      history={history}
    />
  );
}

Drink.propTypes = {
  convertTypeToData: propTypes.func.isRequired,
  data: propTypes.instanceOf(Object).isRequired,
  making: propTypes.string,
  type: propTypes.string.isRequired,
  history: propTypes.instanceOf(Object).isRequired,
};

Drink.defaultProps = {
  making: undefined,
};

export default Drink;
