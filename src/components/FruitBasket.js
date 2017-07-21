import React, { Component }  from 'react'

import App from './App'
import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList'

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter
          filters={props.filters}
          updateFilterCallback={props.handleFilterChange} />
        <FilteredFruitList
          filter={props.currentFilter} />
          fruit={props.fruit}
      </div>
    )
  }

  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: (e) => {
      console.log('Need filter callback for FruitBasket!');
    }
  }

export default FruitBasket
