import { useState } from 'react';
import CartInputForm from '../../components/CartInputForm/index.jsx';
import Loader from '../../components/Loader/index.jsx';
import CartItemList from '../../components/CartItemList/index.jsx';
import TotalAmount from '../../components/TotalAmount/index.jsx';

const initialState = [
    { id: '456123', name: 'printer', price: 110, count: 2 },
    { id: '123456', name: 'RAM', price: 30, count: 0 },
    { id: '789456', name: 'motherboard', price: 150, count: 1 },
    { id: '987542', name: 'mouse', price: 15, count: 4 },
];

const Cart = () => {
    const [items, setItems] = useState(initialState);
    const [isLoading, setLoading] = useState(false);

    const handleRemoveItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleChangeCount = (id, step) => {
        setItems((prevItems) =>
        prevItems.map((item) =>
            item.id === id 
            ? { 
                ...item, 
                count: item.count + step >= 0 ? item.count + step : item.count,
            } 
            : item
        )
    );
    };

    return (
        <div className="cart">
            <CartInputForm />
            {isLoading && <Loader />}
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
