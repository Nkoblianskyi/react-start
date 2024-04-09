import {useState} from 'react';
import CartInputForm from '../../components/CartInputForm/index.jsx';
import Loader from '../../components/Loader/index.jsx';
import CartItemList from '../../components/CartItemList/index.jsx';
import TotalAmount from '../../components/TotalAmount/index.jsx';

const initialState = [
    { id: '1', name: 'printer', price: 110, count: 2 },
    { id: '2', name: 'RAM', price: 30, count: 0 },
    { id: '3', name: 'motherboard', price: 150, count: 1 },
    { id: '4', name: 'mouse', price: 15, count: 4 },
];

const Cart = () => {
    const [items, setItems] = useState(initialState);

    const handleRemoveItem = () => {
        setItems([
            { id: '1', name: 'printer', price: 110, count: 2 },
            { id: '2', name: 'RAM', price: 30, count: 0 },
            { id: '4', name: 'mouse', price: 15, count: 4 },
        ]);
    };

    return (
        <div className="cart">
            <CartInputForm />
            <Loader />
            <CartItemList items={items} onRemoveItem={handleRemoveItem}/>
            <TotalAmount items={items} />
        </div>
    );
};

export default Cart;
