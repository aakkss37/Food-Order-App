import css from './Cart.module.css'

const Cart = ()=>{
        const cardItem = <ul className={css['cart-items']}>{
                        [
                                {
                                        id: 'm6',
                                        name: 'Schnitzel',
                                        price: 16.5,
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
                                <li>{item.name}</li>
                        ))
                }</ul>

        return <div>
                {cardItem}
                <div className={css.total}>
                        <span>Total Amount</span>
                        <span>$48.48</span>
                </div>
                <div className={css.action}>
                        <button className={css['button--alt']}>Close</button>
                        <button className={css.button}>Order</button>
                </div>
        </div>
}
export default Cart