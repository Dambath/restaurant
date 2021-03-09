import React, {useEffect, useImperativeHandle, useState} from 'react'
import { Table, Tag, Space, Button, Modal, Input, Rate } from 'antd';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as restaurantsActions from '../../actions/restaurantsActions'


function Restaurants(props) {

    const [query, setQuery] = useState('')

    const [page, setPage] = useState(1)

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: image => <img style={{width: '40px', height: '40px'}} src={`http://37.18.30.124:9000/${image}`}/>
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Amount of place',
            dataIndex: 'amountOfPlace',
            key: 'amountOfPlace',
        },
        {
            title: 'Averag bill',
            dataIndex: 'averageBill',
            key: 'averageBill',
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
            render: rate => <Rate mountNode disabled defaultValue={rate} />
        },
        
        ];
        
        const data = props.restaurants.map((item) => {
            return {
                id: item.id,
                name: item.name,
                image: item.image,
                location: item.location,
                phone: item.phone,
                amountOfPlace: item.amountOfPlace,
                averageBill: item.averageBill,
                rate: item.rate
            }
        })
    
    

    const handleSearch = e => {
        setQuery(e.target.value)
        props.restaurantsActions.getRestaurants({query: e.target.value})
    }

    useEffect(() => {
        props.restaurantsActions.getRestaurants({query: ''});
    }, [])

    const handlePageChange = e => {
        props.restaurantsActions.getRestaurants({query: query, page: e})
    }

    return (
        <div>
            <Input type='search' onKeyUp={handleSearch}/>
            <Table columns={columns} dataSource={data} pagination={{total: props.total, pageSize: 6, onChange: handlePageChange}}/> 
        </div>
    )

}

const mapStateToProps = state => ({
    isLoading: state.restaurants.isLoading,
    restaurants: state.restaurants.restaurants,
    total: state.restaurants.total
})

const mapDispatchToProps = dispatch => ({
    restaurantsActions: bindActionCreators(restaurantsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);