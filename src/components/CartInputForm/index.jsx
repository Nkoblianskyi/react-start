import { useState } from 'react';
import styles from './style.module.scss';
// import Button from '../Button/index';

const CartInputForm = ({ onSubmit }) => {
    // const formRef = useRef (null);
    const [name, setName] = useState ('');
    const [price, setPrice] = useState (0);
    const [extendedGuarantee, setExtendedGuarantee] = useState(false);

    const handelNameChange = (e) => setName(e.target.value);
    const handelPriceChange = (e) => setPrice(e.target.value);
    const handelExtendedGuaranteeChange = (e) => setExtendedGuarantee(e.target.checked);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            // id: Date.now().toString(), 
            count: 1, 
            name, 
            price: Number(price), 
            extendedGuarantee,
        });

        // formRef.current.reset();
        setName('');
        setPrice(0);
        setExtendedGuarantee(false);
    };

    return (
    <div className={styles.cartInputForm}>
        <form className={styles.form} onSubmit={handleSubmit}> 
            <label className={styles.label}> 
                <span className={styles.span}>name</span>
                <input type='text' 
                value={name} 
                onChange={handelNameChange}></input>
            </label>

            <label className={styles.label}> 
                <span className={styles.span}>price</span>
                <input type='number' 
                value={price} 
                onChange={handelPriceChange}></input>
            </label>

            <label className={styles.label}> 
                <span>extended guarantee</span>
                <input type='checkbox' 
                checked={extendedGuarantee} 
                onChange={handelExtendedGuaranteeChange}></input>
            </label>

            <button className={styles.buttonAdd} type='submit'>+add</button>
        </form>
    </div>
    );
};

export default CartInputForm;