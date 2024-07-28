import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const porduct = all_product.find((e)=> e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={porduct} />
      <ProductDisplay product={porduct}  />   
    </div>
  )
}

export default Product
