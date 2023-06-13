import React from 'react';

const ScrollArea = () => {
  const items = [
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
  ];
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '300px',
        width: '100%',
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 #f5f5f5',
      }}
    >
      <ul style={{ padding: '0 0', margin: '0 0' }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              listStyleType: 'none',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '14px',
            }}
          >
            <img src="./player.svg" alt="player" />
            <div style={{ padding: '0 12px', display: 'flex', alignItems: 'center' }}>
              <p style={{ fontWeight: '600', fontSize: '16px' }}>{item[0]}</p>
              <p className="paragraph--p4">{item[1]}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollArea;
