import { useEffect, useState, useCallback } from 'react';
import { Customer } from './types/customer';
import { customerApi } from './__fakeApi__/customerApi';
import useMounted from './hooks/useMounted';
import './App.css';

function App() {
  const mounted = useMounted();
  const [customers, setCustomers] = useState<Customer[]>([]);

  const getCustomers = useCallback(async () => {
    try {
      const data = await customerApi.getCustomers();

      if (mounted.current) {
        setCustomers(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  console.log(customers);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to React</h1>
        <p>See Console For Results</p>
      </header>
    </div>
  );
}

export default App;
