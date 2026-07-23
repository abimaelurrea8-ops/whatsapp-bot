const express = require('express');
const router = express.Router();
const { whatsappWebhook } = require('../controllers/whatsappController');

// Verificación del webhook (para Meta)
router.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token && token === process.env.VERIFY_TOKEN) {
    console.log("Webhook verificado!");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Recibir mensajes
router.post('/webhook', whatsappWebhook);

module.exports = router;