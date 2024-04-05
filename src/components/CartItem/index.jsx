import propTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    counter: {
        display: 'flex',
        width: '100px',
        columGap: '10px',
        color: 'green',
    },
    value: ({ item }) => {
        return {
            color: item.value ? 'red' : 'green',
        }
    },
    red: {
        color: 'red',
        fontWeight: 800,
    },
});

const CartItem = ({ item }) => {
    const styles =useStyles({ item });

    const amount = item.count * item.price;
    
    return (
        <div className='cart-item'>
            <span>{item.name} </span>
            <span>{item.price}$</span>

            <div className={styles.counter}>
                <span>
                    <button>-</button>
                        <span className={styles.value}>{item.count}</span>
                    <button>+</button>
                </span>
            </div>

            <span>{amount}$</span>
            <button>x</button>
        </div>
    );
};

CartItem.propTypes = {
    item: propTypes.shape({
            name: propTypes.string.isRequired,
            price: propTypes.number.isRequired,
            count: propTypes.number.isRequired,
        }),
};

export default CartItem;