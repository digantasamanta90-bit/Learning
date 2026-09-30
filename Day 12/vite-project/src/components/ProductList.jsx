import ProductCard from './ProductCard'
import keyboardImage from '../assets/products/keyboard.png'
import mouseImage from '../assets/products/mouse.png'
import headsetImage from '../assets/products/headset.png'
import hubImage from '../assets/products/hub.png'
import standImage from '../assets/products/stand.png'
import webcamImage from '../assets/products/webcam.png'

function ProductList() {
  const products = [
    {
      image: keyboardImage,
      name: 'Mechanical Keyboard',
      category: 'Accessories',
      price: 2499,
      rating: 4.5,
      inStock: true,
    },
    {
      image: mouseImage,
      name: 'Wireless Mouse',
      category: 'Accessories',
      price: 120099,
      rating: 4.2,
      inStock: true,
    },
    {
      image: headsetImage,
      name: 'Gaming Headset',
      category: 'Audio',
      price: 3499,
      rating: 4.7,
      inStock: true,
    },
    {
      image: hubImage,
      name: 'USB-C Hub',
      category: 'Accessories',
      price: 1799,
      rating: 4.3,
      inStock: false,
    },
    {
      image: standImage,
      name: 'Laptop Stand',
      category: 'Accessories',
      price: 999,
      rating: 4.1,
      inStock: true,
    },
    {
      image: webcamImage,
      name: 'Webcam',
      category: 'Cameras',
      price: 2299,
      rating: 4.6,
      inStock: true,
    },
  ]

  return (
    <main className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          rating={product.rating}
          inStock={product.inStock}
        />
      ))}
    </main>
  )
}

export default ProductList