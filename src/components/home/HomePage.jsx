import { Pagination, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStarWars } from '../../redux/actions/starWarsActions';
import './homePage.less';


const columns = [
   {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: text => <a>{text}</a>,
   },
   {
      title: 'Birth year',
      key: 'birth_year',
      dataIndex: 'birth_year',
      align: 'center',
      render: (item) => <div>{item !== 'unknown' ? item : ''}</div>
   },
   {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
      align: 'center',
      render: (item) => <div>{item !== 'unknown' ? item : '0'}</div>
   },
   {
      title: 'Gender',
      key: 'gender',
      dataIndex: 'gender',
      align: 'center',
      render: (item) => <div>{item !== 'n/a' ? item : 'unknown'}</div>
   },
   {
      title: 'Mass',
      dataIndex: 'mass',
      key: 'mass',
      align: 'center',
      render: (item) => <div>{item !== 'unknown' ? item : '0'}</div>
   },
   {
      title: 'Hair color',
      key: 'hair_color',
      dataIndex: 'hair_color',
      align: 'center',
      render: (item) => <div>{item !== 'n/a' ? item : 'none'}</div>
   },
   {
      title: 'Skin color',
      key: 'skin_color',
      dataIndex: 'skin_color',
      align: 'center',
      render: (item) => <div>{item !== 'n/a' ? item : '0'}</div>
   },
   {
      title: 'Eye color',
      key: 'eye_color',
      dataIndex: 'eye_color',
      align: 'center',
      render: (item) => <div>{item !== 'n/a' ? item : '0'}</div>
   },
];

const HomePage = () => {
   const [currentIndex, setCurrentIndex] = useState(1);
   const dispatch = useDispatch();

   const starWarsState = useSelector(state => state.starWarsState);
   console.log('starWarsState', starWarsState);

   const { totalCount, listStarWar, loading } = starWarsState;

   useEffect(() => {
      dispatch(fetchStarWars(currentIndex));
   }, [currentIndex]);

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