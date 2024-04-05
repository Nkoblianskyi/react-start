import styles from'./style.module.scss';

const CartInputForm = () => (
    <div className={styles.cartInputForm}>
        <form> 
            <label className={styles.label}> 
                <span>name</span>
                <input type='text'></input>
            </label>

            <label className={styles.label}> 
                <span>price</span>
                <input type='number'></input>
            </label>

            <button type='submit'>+add</button>
        </form>
    </div>
);

export default CartInputForm;