import React from 'react';

const App = () => {
  const channels = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `チャンネル${i + 1}`,
    streamUrl: `https://example.com/video${i + 1}`
  }));

  return (
    <div>
      <h1>12チャンネル型配信サイト</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {channels.map((ch) => (
          <div key={ch.id} style={{ width: '30%', margin: '10px' }}>
            <h2>{ch.name}</h2>
            <iframe
              width="100%"
              height="200"
              src={ch.streamUrl}
              title={ch.name}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
