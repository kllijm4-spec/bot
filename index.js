const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Discord Bot is running!');
});

// รองรับระบบ Interactions Endpoint ของ Discord (Webhook)
app.post('/', (req, res) => {
  const { type } = req.body;
  if (type === 1) {
    return res.json({ type: 1 }); // ตอบรับ PING จาก Discord
  }
  return res.status(400).send('Unknown request');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
