import { useState, useEffect } from 'react';
import CartInputForm from '../../components/CartInputForm/index.jsx';
import Loader from '../../components/Loader/index.jsx';
import CartItemList from '../../components/CartItemList/index.jsx';
import TotalAmount from '../../components/TotalAmount/index.jsx';
import {fetchCartItems, deleteItem, addItem, updateItem} from '../../api/cartApi.js';

const initialState = [
    { id: '456123', name: 'printer', price: 110, count: 2, extendedGuarantee: false },
    { id: '123456', name: 'RAM', price: 30, count: 0, extendedGuarantee: false},
    { id: '789456', name: 'motherboard', price: 150, count: 1, extendedGuarantee: true},
    { id: '987542', name: 'mouse', price: 15, count: 4, extendedGuarantee: false }
];

const Cart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState ('');

const handleChangeCount = (id, step) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const updatedItem = {
                        ...item, 
                        count: item.count + step >= 0 ? item.count + step : item.count,
                    }

                    updateItem(id, { count: updatedItem.count});

                    return updateItem;
                } else {
                    return item;
                }
            }
        ));
};

const handleRemoveItem = (id) => {
    setIsLoading(true);

    deleteItem(id)
        .then(() => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        })
        .catch(({ message }) => setError(message))
    .finally(() => {
        setIsLoading(false);
}
    )};

const handelAddItem = (newItem) => {
    setIsLoading(true);

    addItem(newItem)
    .then((data) => {
        setItems((prev) => [...prev, data]);
    })
    .catch(({message}) => setError(message))
    .finally(() => {
        setIsLoading(false);
    });
}
    
    useEffect(() => {
    setIsLoading(true);

    fetchCartItems()
        .then(setItems)
        .catch(({message}) => setError(message))
        .finally(() => {
            setIsLoading(false);
        });
}, []); // componentDidMount

// Оновлення даних в localStorage
// useEffect(() => {
//     // localStorage.setItem('cart', JSON.stringify(items));
//     // updateItem();
// }, [items]);


    return (
        <div className='cart'>
            <CartInputForm onSubmit={handelAddItem}/>
            
            {isLoading && <Loader />}

            {error && <p>{error}</p>}

            <CartItemList
                items={items}
                onChangeCount={handleChangeCount}
                onRemoveItem={handleRemoveItem}
            />
            <TotalAmount items={items} />
        </div>
    );
};

export default Cart;