import propTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import {CloseButton, NormalButton} from '../Button/index' 

const useStyles = createUseStyles({
    CartItem: {
        display: 'flex',
        padding: 10,
        alignItems: 'center',
        columnGap: 30,
        backgroundColor: 'yellow',
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

const CartItem = ({ item }) => {
    const styles =useStyles({ item });

    const amount = item.count * item.price;
    
    return (
        <div className={styles.CartItem}>
            <div className={styles.column}>
                <span>{item.name} </span>
                <span>{item.price}$</span>
            </div>

            <div className={styles.counter}>
                <span>
                    <button>-</button>
                        <span className={styles.value}>{item.count}</span>
                    <button>+</button>
                </span>
            </div>

            <span>{amount}$</span>
            <CloseButton item={item}/>
            <NormalButton/>
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