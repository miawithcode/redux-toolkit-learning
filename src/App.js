import { useEffect } from 'react';

import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    document.body.classList.toggle('modal-open', isOpen);
  }, [isOpen]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
