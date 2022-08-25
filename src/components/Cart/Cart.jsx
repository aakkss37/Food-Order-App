import Modal from '../UI/Modal'
import css from './Cart.module.css'

const Cart = ()=>{
        const cardItem = <ul className={css['cart-items']}>{
                        [
                                {
                                        id: 'm6',
                                        name: 'Schnitzel',
                                        price: 16.51,
                                        amount: 3
                                },
                                {
                                        id: 'm7',
                                        name: 'Barbecue Burger',                        
                                        price: 12.99,
                                        amount: 2
                                },
                                {
                                        id: 'm8',
                                        name: 'Green Bowl',
                                        price: 18.99,
                                        amount: 1
                                }
                        ]
                        .map((item)=>(
                                <li>
                                        <span>{item.name}</span>
                                        <span>${item.price}</span>
                                </li>
                        ))
                }</ul>

        return <Modal>
                {cardItem}
                <div className={css.total}>
                        <span>Total Amount</span>
                        <span>$48.48</span>
                </div>
                <div className={css.actions}>
                        <button className={css['button--alt']}>Close</button>
                        <button className={css.button}>Order</button>
                </div>
        </Modal>
}
export default Cart