import React, { useState } from 'react'
import { processImage } from '../utils/index'
import { Link } from 'react-router-dom'
import { BsStar } from 'react-icons/bs';
import { RiExchangeLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addWishList } from '../../actions/cartAction';
import { Button } from "reactstrap";

export default function Item(props) {
  const dispatch = useDispatch()

  const onToggleWishList = () => {
    // dispatch({type: 'ADD_WISH_LIST', product: props.data})
    dispatch(addWishList(props.data))
  }

  const onPress = () => {
    props.toggle(props.data)
  }

  return (
    <div class="product-item card text-center">
      <div style={{ position: 'absolute', top: 5, right: 10 }}
        onClick={onToggleWishList}>
        <BsStar />
      </div>

      <Button style={{ position: 'absolute', top: 40, right: 5 }} onClick={onPress} >
        <RiExchangeLine />
      </Button>

      <Link to={`/product/${props.data._id}`}>
        <img src={processImage(props.data.image)} alt='' />
      </Link>
      <h4>
        <Link to={`/product/${props.data._id}`}>{props.data.name}</Link>
      </h4>
      <p>Giá Bán: <span>{props.data.price}</span></p>
    </div >
  )
}
