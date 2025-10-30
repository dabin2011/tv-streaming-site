const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// APIルート
app.get('/api/channels', (req, res) => {
  const channels = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `チャンネル${i + 1}`,
    streamUrl: `https://example.com/video${i + 1}`
  }));
  res.json(channels);
});

// Reactのビルドファイルを提供
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
