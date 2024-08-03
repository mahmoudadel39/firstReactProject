import React from 'react'
import {Card ,Button} from 'react-bootstrap'
import { ProductItem } from './ProductItem'

export  function Products() {
  return (
    <div className="container p-5 mt-5 mx-auto">
        <div className="row">
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
        </div>
    </div>
  )
}
