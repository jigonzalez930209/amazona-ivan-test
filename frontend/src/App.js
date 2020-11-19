import React from 'react';
import Product from './components/Product';
import data from './data'

//{}(){}()$_
function App() {
  return (
    <div className='grid-container'>
      <header className='row'>
        <div>
          <a className='brand' href='index.html'>
            amazona
          </a>
        </div>
        <div>
          <a href='cart.html'>Cart</a>
          <a href='signin.html'>Sig In</a>
        </div>
      </header>
      <main>
        <div className='row center'>
          {data.products.map((products) => (
            <Product key={products._id} products={products} />
          ))}
        </div>
      </main>
      <footer className='row center'>All right reserved</footer>
    </div>
  )
}

export default App
