import React from 'react'
import { ProductCard } from './ProductCard'
import './ProductList.css'
import {cart} from '../states/CartAtom'
import { useRecoilState } from 'recoil'


const ProductList = () => {

  let [cartList,setCartList]=useRecoilState(cart)

  let handleAddToCart=(e)=>{
    setCartList([...cartList,{...products[e.target.id]}])
  }
  const products = [
  { id: 1, name: "Laptop Gaming", price: "20.000.000đ", img: "https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone_17_256gb-3_2.jpg?_gl=1*1dvnuat*_gcl_aw*R0NMLjE3Njg3ODY5ODUuRUFJYUlRb2JDaE1JMnR2TV9ieVdrZ01WTVBVOEFoM3g0dzF2RUFBWUFTQUFFZ0x3bl9EX0J3RQ..*_gcl_au*MjAyOTcxMjcxMy4xNzY4Nzg2OTg1*_ga*MTU5NTg2MDIyOC4xNzY4Nzg2OTg1*_ga_QLK8WFHNK9*czE3Njg3ODY5ODUkbzEkZzEkdDE3Njg3ODcwMTYkajI5JGwwJGg5NTcxODk2OTA." },
  { id: 2, name: "Chuột Không Dây", price: "500.000đ", img: "https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone_17_256gb-3_2.jpg?_gl=1*1dvnuat*_gcl_aw*R0NMLjE3Njg3ODY5ODUuRUFJYUlRb2JDaE1JMnR2TV9ieVdrZ01WTVBVOEFoM3g0dzF2RUFBWUFTQUFFZ0x3bl9EX0J3RQ..*_gcl_au*MjAyOTcxMjcxMy4xNzY4Nzg2OTg1*_ga*MTU5NTg2MDIyOC4xNzY4Nzg2OTg1*_ga_QLK8WFHNK9*czE3Njg3ODY5ODUkbzEkZzEkdDE3Njg3ODcwMTYkajI5JGwwJGg5NTcxODk2OTA." },
  { id: 3, name: "Bàn Phím Cơ", price: "1.200.000đ", img: "https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone_17_256gb-3_2.jpg?_gl=1*1dvnuat*_gcl_aw*R0NMLjE3Njg3ODY5ODUuRUFJYUlRb2JDaE1JMnR2TV9ieVdrZ01WTVBVOEFoM3g0dzF2RUFBWUFTQUFFZ0x3bl9EX0J3RQ..*_gcl_au*MjAyOTcxMjcxMy4xNzY4Nzg2OTg1*_ga*MTU5NTg2MDIyOC4xNzY4Nzg2OTg1*_ga_QLK8WFHNK9*czE3Njg3ODY5ODUkbzEkZzEkdDE3Njg3ODcwMTYkajI5JGwwJGg5NTcxODk2OTA." },
  { id: 4, name: "Tai Nghe", price: "800.000đ", img: "https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone_17_256gb-3_2.jpg?_gl=1*1dvnuat*_gcl_aw*R0NMLjE3Njg3ODY5ODUuRUFJYUlRb2JDaE1JMnR2TV9ieVdrZ01WTVBVOEFoM3g0dzF2RUFBWUFTQUFFZ0x3bl9EX0J3RQ..*_gcl_au*MjAyOTcxMjcxMy4xNzY4Nzg2OTg1*_ga*MTU5NTg2MDIyOC4xNzY4Nzg2OTg1*_ga_QLK8WFHNK9*czE3Njg3ODY5ODUkbzEkZzEkdDE3Njg3ODcwMTYkajI5JGwwJGg5NTcxODk2OTA." },
  { id: 5, name: "Màn Hình 24 inch", price: "3.500.000đ", img: "https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone_17_256gb-3_2.jpg?_gl=1*1dvnuat*_gcl_aw*R0NMLjE3Njg3ODY5ODUuRUFJYUlRb2JDaE1JMnR2TV9ieVdrZ01WTVBVOEFoM3g0dzF2RUFBWUFTQUFFZ0x3bl9EX0J3RQ..*_gcl_au*MjAyOTcxMjcxMy4xNzY4Nzg2OTg1*_ga*MTU5NTg2MDIyOC4xNzY4Nzg2OTg1*_ga_QLK8WFHNK9*czE3Njg3ODY5ODUkbzEkZzEkdDE3Njg3ODcwMTYkajI5JGwwJGg5NTcxODk2OTA." }
];
  return (
    <div className='container'>
         <h3 style={{display:'block',fontSize:'25px',textAlign:'center',margin:'10px'}}>Product List</h3>
        <div className='product-grid'>
            {products.map((item)=>{
                return <ProductCard key={item.id} product={item} onClick={handleAddToCart} ></ProductCard>
            })}


        </div>
         <h3 style={{display:'block',fontSize:'25px',textAlign:'center',margin:'10px'}}>Cart List</h3>
         <div>
          {cartList.map((cartItem)=>{ 
            return <div key={cartItem.id}>
              <h2>{cartItem.name}</h2>
              <h2>{cartItem.price}</h2><br />
            </div>

          })}
         </div>

        
    </div>
  )
}

export default ProductList
