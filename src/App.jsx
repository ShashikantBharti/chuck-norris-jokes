import { useState, useEffect } from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    console.log(data);
    setJoke(data.value);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <div className='container'>
        <h6>Chuck Norris Jokes</h6>
        <p className='joke'>{joke}</p>
        <button onClick={fetchJoke}>
          <MdDoubleArrow />
        </button>
      </div>
    </>
  );
}

export default App;
