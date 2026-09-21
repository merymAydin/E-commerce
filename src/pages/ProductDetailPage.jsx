import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchProduct } from '../store/actions/productActions';
import { LoaderCircle } from 'lucide-react';

const ProductDetailPage = () => {

    const { productId } = useParams();
    const product = useSelector(state=>state.product.product);
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);

useEffect(() => {
  const loadProduct = async () => {
    try {
      setLoading(true);
      await dispatch(fetchProduct(productId));
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  loadProduct();
}, [dispatch, productId]);



    return (
        <div>
            {loading ? <LoaderCircle/> :
            product?.name
            }
            
        </div>
    )
}

export default ProductDetailPage;
