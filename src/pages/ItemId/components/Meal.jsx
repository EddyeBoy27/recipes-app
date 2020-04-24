import React from 'react';
import propTypes from 'prop-types';

import Generics from './Generics';

function Meal(props) {
  const { convertTypeToData, data, making, type, history } = props;

  return (
    <Generics
      data={convertTypeToData('comida', data)}
      making={making}
      type={type}
      history={history}
    />
  );
}

Meal.propTypes = {
  convertTypeToData: propTypes.func.isRequired,
  data: propTypes.instanceOf(Object).isRequired,
  making: propTypes.string,
  type: propTypes.string.isRequired,
  history: propTypes.instanceOf(Object).isRequired,
};

Meal.defaultProps = {
  making: undefined,
};

export default Meal;
