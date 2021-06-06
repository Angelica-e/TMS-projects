import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, DeviceBlock, DeviceLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchDevices } from '../redux/actions/devices';


const categoryNames = ['iPhone', 'MacBook', 'AirPods', 'Аксессуары'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ devices }) => devices.items);
  const isLoaded = useSelector(({ devices }) => devices.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {

    dispatch(fetchDevices(sortBy, category));
  }, [category, sortBy]);


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);


  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <DeviceBlock onClickAddDevice={(obj) => console.log(obj)} key={obj.id} isLoading={true} {...obj} />)
          : Array(8)
          .fill(0)
          .map((_, index) => <DeviceLoadingBlock key={index} />)}
      </div>
    </div>
  )
}

export default Home
