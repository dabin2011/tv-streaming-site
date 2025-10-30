import React, { useEffect, useState } from 'react';

const App = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetch('/api/channels')
      .then(res => res.json())
      .then(data => setChannels(data));
  }, []);

  return (
    <div>
      <h1>12チャンネル型配信サイト</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {channels.map(ch => (
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
