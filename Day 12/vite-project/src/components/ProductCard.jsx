function ProductCard({ image, name, category, price, rating, inStock }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <p className="category">{category}</p>
      <p className="price">₹{price.toLocaleString('en-IN')}</p>
      <div className="product-bottom">
        <p className="rating">⭐ {rating}</p>
        <p className={inStock ? 'stock in-stock' : 'stock out-stock'}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
    </article>
  )
}

export default ProductCard