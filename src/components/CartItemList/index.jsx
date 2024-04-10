import PropTypes from 'prop-types';

import CartItem from '../CartItem';
import styles from './style.module.css';

//onRemoveItem, onDecrement, onIncrement = ...rest
const CartItemList = ({ items, ...rest }) => (
    <div className={styles.cartItemList}>
        {items.map((item) => (
            <CartItem 
            key={item.id}
            item={item}
            {...rest}
            />
        ))}
    </div>
);

CartItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            count: PropTypes.number,
        })
    ),
};

export default CartItemList;