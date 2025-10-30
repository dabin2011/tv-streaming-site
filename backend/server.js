const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/channels', (req, res) => {
  const channels = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `チャンネル${i + 1}`,
    streamUrl: `https://example.com/video${i + 1}`
  }));
  res.json(channels);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
