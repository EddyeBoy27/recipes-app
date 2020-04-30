import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import context from '../../context/Context';
import RecipeCard from './recipeCard';
import Loading from '../Loading';
import './style/index.css';

const cRoute = (minPrefix, id, setIsLoading, setIdRecipe, history) => {
  setIsLoading(true);
  setIdRecipe(id);
  history.push(`/receitas/${minPrefix === 'meals' ? 'comida' : 'bebida'}/${id}`);
};

const renderCardsFunction = (adjustedData, prefix) => (
  <div>
    {adjustedData.map((recipe) => (
      <div className="container-cardsF" key={`${Math.random()} ${JSON.stringify(recipe)}`}>
        <RecipeCard details={recipe} dataBase={prefix} />
      </div>
    ))}
  </div>
);

const RenderCards = () => {
  const history = useHistory();
  const { results: [data], dataBase: [db], isOnSearchBar, isLoading,
    setIsLoading, setIdRecipe } = useContext(context);
  const prefix = db === 'themealdb' ? 'Meal' : 'Drink';
  const minPrefix = db === 'themealdb' ? 'meals' : 'drinks';
  let adjustedData = data.meals || data.drinks;
  if (data.length === 12) {
    adjustedData = data.map(({ [minPrefix]: [returnedData] }) => returnedData);
  }
  return (
    <div className="container-all-recipes">
      {isLoading && <Loading />}
      {!adjustedData && !isLoading && <div>Faça sua pesquisa</div>}
      {isOnSearchBar && adjustedData && adjustedData.length === 1
        && cRoute(minPrefix, adjustedData[0][`id${prefix}`], setIsLoading, setIdRecipe, history)}
      {adjustedData && renderCardsFunction(adjustedData, prefix)}
    </div>
  );
};

export default RenderCards;
