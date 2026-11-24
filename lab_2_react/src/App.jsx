import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#ffffff';
    document.body.style.color = theme === 'dark' ? '#f5f5f5' : '#111111';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button onClick={toggleTheme} style={{ margin: '10px', padding: '6px 12px', cursor: 'pointer' }}>
        Змінити тему ({theme === 'light' ? 'Темна' : 'Світла'})
      </button>
      <Header />
      <Experience />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
