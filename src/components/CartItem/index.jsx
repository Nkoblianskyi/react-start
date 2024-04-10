import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { CloseButton } from '../Button/index'
import styles from './style.module.scss'

const useStyles = createUseStyles({
    CartItem: {
        display: 'flex',
        padding: 10,
        alignItems: 'center',
        columnGap: 30,
        backgroundColor: 'aqua',
        width: '100%',
        justifyContent: 'space-between',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    counter: {
        display: 'flex',
        columGap: 10,
    },
    value({ item }) {
        return {
            color: !item.count ? 'red' : 'green',
            fontWeight: !item.count ? 800 : 400,
            padding: 10,
        };
    },
});

const CartItem = ({ item, onRemoveItem, onChangeCount }) => {
    const styles =useStyles({ item });
    const amount = item.count * item.price;
    
    const decrement = () => onChangeCount(item.id, -1);
    const increment = () => onChangeCount(item.id, +1);
    const remove = () => onRemoveItem(item.id);

    return (
        <div className={styles.CartItem}>
            <div className={styles.column}>
                <span>{item.name} </span>
                <span>{item.price}$</span>
            </div>

            <div className={styles.counter}>
                <span>
                    <button onClick={decrement}>-</button>
                        <span className={styles.value}>{item.count}</span>
                    <button onClick={increment}>+</button>
                </span>
            </div>

            <span>{amount}$</span>
            <CloseButton item={item} onRemoveItem={remove}/>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            count: PropTypes.number,
        }),
    onRemoveItem: PropTypes.func.isRequired,
    onChangeCount: PropTypes.func.isRequired,
};

export default CartItem;