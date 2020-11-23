import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Item from './components/item'
import { getProducts } from './services/Api'
import Spinner from './components/spinner';
import Modals from './components/Modals';
import { addFeatureProduct, addNewProduct, addWishListPro } from '../actions/cartAction'

function Product() {
  // state con trong function, k phai state cuc bo cua redux 
  // const [featureProduct, setFeatureProduct] = useState([]);
  //const [newProduct, setNewProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [curProduct, setCurProduct] = useState()
  // lay tu state ve de map ra ui (new)
  const featureProduct = useSelector(state => state.cart.featureProduct);
  const newProduct = useSelector(state => state.cart.newProduct);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const onToggle = (data) => {
    setCurProduct(data)
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      // fetch data ve
      const [featurePro, newProduct] = await Promise.all(
        [getProducts({ limit: 6, isFeatured: true }),
        getProducts({ limit: 6, isFeatured: false })])
      // setFeatureProduct(featurePro.data.data)
      // save data vao redux duoi dang initstate  
      dispatch(addFeatureProduct(featurePro.data.data))
      dispatch(addNewProduct(newProduct.data.data))
      // set data vao thang state trong func de map ra 
      // setFeatureProduct(featurePro.data.data)
      // setNewProduct(newProduct.data.data)
      setIsLoading(false)
      // console.log('product new', newProduct.data.data);
    }

    fetchData();
  }, []);


  return (
    <>
      <Spinner loading={isLoading} />
      <div class="products">
        <h3>Sản phẩm nổi bật</h3>
        <div class="product-list card-deck">
          {featureProduct?.map(e => <Item key={e._id} data={e} toggle={onToggle} />)}
        </div>
      </div>

      <div class="products">
        <h3>Sản phẩm mới</h3>
        <div class="product-list card-deck">
          {newProduct?.map(e => <Item key={e._id} data={e} toggle={onToggle} />)}
        </div>
      </div>
      <Modals
        isOpen={isOpen}
        toggle={onToggle}
        curProduct={curProduct}
      />
    </>
  );
}

export default Product