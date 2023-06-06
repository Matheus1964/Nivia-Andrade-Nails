import ProductItem from './ProductItem'
import './ProductList.css'
import products from './ProductItem/products.js'
import { useState } from 'react'
import { Pagination } from 'react-bootstrap'

function ProductList(){

  const [productCounts, setProductCounts] = useState(Array(products.length).fill(0))
  const [activePage, setActivePage] = useState(1)
  const ITEMS_PER_PAGE = 15;

  function handleCountChange(index, value) {
    setProductCounts((prevProductCount) => {
      const newCountProduct = [...prevProductCount]
      newCountProduct[index] = value
      return newCountProduct
    })
  }

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  function renderProducts(){
    const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE; 
    const visibleProducts = products.slice(startIndex, endIndex);

    return visibleProducts.map((product, index) => (
      <ProductItem
        key={product.id}
        productId={product.id}
        count={productCounts[startIndex + index] || 0}
        setCount={(value) => handleCountChange(startIndex + index, value)}
        source={product.src}
      />
    ));
  };

  const pageItems = [];
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  for (let page = 1; page <= totalPages; page++) {
    pageItems.push(
      <Pagination.Item className="pagination-item"
        style={{
        backgroundColor: page === activePage ? 'rgb(250, 0, 255)' : '',
      }}
        key={page}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  }
  
  return (
    <div className="container-product-list">
      <div className="product-list-div">
      {
        renderProducts()
      }

      </div>
      <div className="pagination-div">
          <Pagination className="pagination">{pageItems}</Pagination>
      </div>
    </div>
    
  )
}


export default ProductList;