import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import TableComponent from '../../../components/TableComponent';
import AddProductModal from './AddProductModel';
import toastr from "toastr";
import axios from 'axios';
import ViewProduct from './ViewProduct';

const Maindiv = styled.div`
  .upload-service{
    background-color:#ffd160;
    border-radius:50px;
  }
  .enteries{
    height:30px;
    border-radius:4px;
  }
  .search-btn{
    height:35px;
    width:100%;
    border:1px solid #ffd160;
  }
`;

export function Products() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [productsLoader, setProductsLoader] = useState(false);
  const [products, setProducts] = useState(null);
  const [productsCount, setProductsCount] = useState(0);
  const [productsPage, setProductsPage] = useState(1);

  const handleShowLogoutModal = () => setShowLogoutModal(true);
  const handleCloseLogoutModal = () => setShowLogoutModal(false);

  useEffect(() => {
    loadProducts(productsPage);
  }, []); // Removed 'products' from the dependency array

  const handleAddProduct = (props) => {
    const productData = {
      name: props.name,
      content: props.content,
      featured_image: props.featured_image,
      price: props.price,
    };

    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('description', productData.content);
    formData.append('featured_image', productData.featured_image);
    formData.append('price', productData.price);

    const token = localStorage.getItem('token');

    axios.post('http://localhost:5000/add-product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response);
        loadProducts(productsPage);
        toastr.success(response.data.message);
        setShowLogoutModal(false);
        return true;
      })
      .catch(error => {
        console.error(error);
        toastr.error(error.response.data.message);
        return false;
      });
  };

  const Logout = () => {
    handleShowLogoutModal();
  };

  const createData = (id, name, featured_image, price, status) => {
    return {
      id,
      name,
      featured_image,
      price,
      status
    };
  };

  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'featured_image',
      numeric: false,
      disablePadding: false,
      label: 'Featured Image',
    },
    {
      id: 'price',
      numeric: false,
      disablePadding: false,
      label: 'Price',
    },
    {
      id: 'status',
      numeric: false,
      disablePadding: false,
      label: 'Status',
    }
  ];


  const loadProducts = (page) => {
    setProductsLoader(true);

    const token = localStorage.getItem('token');

    axios.get('http://localhost:5000/view-product/?page='+page, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setProductsPage(page);
        const productData = response.data.data;
        setProductsCount(response.data.productsCount);

        if (productData) {
          setProducts(productData);
          setProductsLoader(false);
        }

      })
      .catch(error => {
        console.error(error);
        if (error.response) {
          toastr.error(error.response.data.message);
        }
      });
  }

  return (
    <Maindiv>
      <div className='row p-5'>
        <div className="col-sm-12 d-flex justify-content-start mb-3">
          <div className="col-md-6 py-2"><h4 className='text-white'>Products</h4></div>
          <div className='col-md-6 text-end'>
            <button className='primary-button' onClick={Logout}><FontAwesomeIcon icon={faPen}></FontAwesomeIcon> Add Product</button>
          </div>
        </div>
        <div className="col-sm-12 ">
          <ViewProduct loadProducts={loadProducts} products={products} className={'w-100'} productsLoader={productsLoader} productsCount={productsCount} productsPage={productsPage}/>
        </div>
      </div>
      <AddProductModal
        show={showLogoutModal}
        handleClose={handleCloseLogoutModal}
        handleAddProduct={handleAddProduct}
      />
    </Maindiv>
  );
}
