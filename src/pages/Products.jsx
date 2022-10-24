import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../productsMock/mock'

const Products = () => {
  return (

    <section>
      <div>
        <h2 id='produtos' className='mt-10 text-center text-3xl font-bold'>Nossos Produtos</h2>
        <p className='text-center mt-4'>Temos uma ampla variedade de produtos para atender nossos clientes de forma completa e eficiente.</p>

        <div className='flex flex-wrap justify-center items-center gap-8 gap-y-8 p-10 m-auto'>

          {products.map(product => (

            <ProductCard
              key={product.title}
              img={product.img}
              title={product.title}
              text={product.text}
            />
          ))}
        </div>
      </div>
    </section>

  )
}

export default Products