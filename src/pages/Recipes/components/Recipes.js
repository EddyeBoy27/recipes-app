import React, { useContext, useEffect } from 'react';
import context from '../../../context/Context';
import RenderAllCards from '../../../components-global/RenderAllCards';
import RenderByFilter from '../components/RenderByFilter';

const Recipes = () => {
  const { selectedFilterContext: [selectedFilter], dataBase: [db] } = useContext(context);

  useEffect(() => { }, [db]);

  return (
    <div>
      {selectedFilter === 'All' && <RenderAllCards />}
      {selectedFilter !== 'All' && <RenderByFilter />}
    </div>
  );
};

export default Recipes;