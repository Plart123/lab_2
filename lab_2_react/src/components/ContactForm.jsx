import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
      <div style={{ background: '#fff', color: '#000', padding: '20px', width: '300px', margin: '100px auto', borderRadius: '8px' }}>
        <h3>Зворотний зв'язок</h3>
        
        <form action="https://formspree.io/f/xaeeaqag" method="POST">
          <div>
            <label>Ім'я:</label><br />
            <input type="text" name="name" required style={{ width: '100%' }} />
          </div><br />
          <div>
            <label>Email:</label><br />
            <input type="email" name="email" required style={{ width: '100%' }} />
          </div><br />
          <div>
            <label>Телефон:</label><br />
            <input type="tel" name="phone" required style={{ width: '100%' }} />
          </div><br />
          <div>
            <label>Повідомлення:</label><br />
            <textarea name="message" required style={{ width: '100%' }}></textarea>
          </div><br />
          <button type="submit">Надіслати</button>
          <button type="button" onClick={() => setIsOpen(false)}>Закрити</button>
        </form>
      </div>
    </div>
  );
}
