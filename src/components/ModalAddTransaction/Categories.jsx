import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/transactions/selectors';

function Categories() {
  const categories = useSelector(selectCategories);
  // const dispatch = useDispatch();
  // console.log(categories);
  return (
    <select name="categoryId">
      {categories.map(category => {
        // console.log(category);
        return (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        );
      })}
    </select>
  );
}

export default Categories;
