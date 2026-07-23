const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function askAI(message, business) {
  const prompt = `
Eres el asistente del negocio "${business.name}".
Habla con estilo: ${business.style}.
Información del negocio:
- Ubicación: ${business.location}
- Horarios: ${business.hours}
- Menú: ${JSON.stringify(business.menu)}
- Catálogo: ${JSON.stringify(business.catalog)}

Cliente dice: "${message}"

Responde como si fueras el negocio.
  `;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices[0].message.content;
}

module.exports = { askAI };
