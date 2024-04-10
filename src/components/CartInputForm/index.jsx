import styles from './style.module.scss';
// import Button from '../Button/index';

const CartInputForm = () => (
    <div className={styles.cartInputForm}>
        <form> 
            <label className={styles.label}> 
                <span className={styles.span}>name</span>
                <input type='text'></input>
            </label>

            <label className={styles.label}> 
                <span className={styles.span}>price</span>
                <input type='number'></input>
            </label>

            <label className={styles.label}> 
                <span>extended guarantee</span>
                <input type='checkbox'></input>
            </label>

            <button className={styles.buttonAdd} type='submit'>+add</button>
        </form>
    </div>
);

export default CartInputForm;