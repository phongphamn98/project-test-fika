import { Pagination, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStarWars } from '../../redux/actions/starWarsActions';
import './homePage.less';

const renderItem = (item) => {
   return item !== 'unknown' && item !== 'n/a' ? <div className="item-data">{item}</div> : <ion-icon name="help-outline" size='medium' />;
}

const columns = [
   {
      title: 'Name',
      dataIndex: 'name',
   },
   {
      title: 'Birth year',
      dataIndex: 'birth_year',
      align: 'center',
      render: (item) => renderItem(item),
   },
   {
      title: 'Height',
      dataIndex: 'height',
      align: 'center',
      render: (item) => renderItem(item),
   },
   {
      title: 'Gender',
      dataIndex: 'gender',
      align: 'center',
      render: (item) => renderItem(item),
   },
   {
      title: 'Mass',
      dataIndex: 'mass',
      align: 'center',
      render: (item) => renderItem(item),
   },
   {
      title: 'Hair color',
      dataIndex: 'hair_color',
      align: 'center',
      render: (item) => renderItem(item),
   },
   {
      title: 'Skin color',
      dataIndex: 'skin_color',
      align: 'center',
      render: (item) => renderItem(item),
   },
   {
      title: 'Eye color',
      dataIndex: 'eye_color',
      align: 'center',
      render: (item) => renderItem(item),
   },
];

const HomePage = () => {
   const [currentIndex, setCurrentIndex] = useState(1);
   const dispatch = useDispatch();

   const starWarsState = useSelector(state => state.starWarsState);
   const { totalCount, listStarWar, loading } = starWarsState;

   useEffect(() => {
      dispatch(fetchStarWars(currentIndex));
   }, [currentIndex, dispatch]);

   return (
      <div>
         <div className="header">STAR WARS</div>
         <Table
            align={'right'}
            loading={loading}
            columns={columns}
            dataSource={listStarWar}
            pagination={false}
            rowKey="name"
         />
         <Pagination
            className="pagination"
            current={currentIndex}
            onChange={setCurrentIndex}
            total={totalCount}
            showSizeChanger={false} />
      </div>
   )
};


export default HomePage;