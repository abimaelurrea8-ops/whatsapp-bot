async function whatsappWebhook(req, res) {
  try {
    console.log("Webhook recibido:", JSON.stringify(req.body, null, 2));
    return res.sendStatus(200);
  } catch (error) {
    console.log("Error:", error);
    return res.sendStatus(500);
  }
}

module.exports = { whatsappWebhook };