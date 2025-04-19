// src/components/FilterButtons.js
const FilterButtons = ({ currentFilter, setFilter }) => {
    return (
      <div className="filter-buttons">
        <button
          className={currentFilter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={currentFilter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          className={currentFilter === 'incomplete' ? 'active' : ''}
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </button>
      </div>
    );
  };
  
  export default FilterButtons;