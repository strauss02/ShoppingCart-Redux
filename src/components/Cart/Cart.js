import React from 'react'
import styles from './Cart.module.css'

import CartItem from './CartItem/CartItem'

import { connect } from 'react-redux'

const Cart = ({ cart }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {/* <CartItem key={item.id} item={item} /> */}
        {cart.map((item) => (
          <CartItem itemData={item} key={item.id} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: (1 items)</span>
          <span>$ 10.00</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(Cart)
