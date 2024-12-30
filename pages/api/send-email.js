import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Tous les champs sont obligatoires" });
  }

  try {
    await sendgrid.send({
      to: "bounouarakabil363@gmail.com", // Remplacez par votre email
      from: "bounouarakabil363@gmail.com", // Doit être vérifié sur SendGrid
      subject: `Nouveau message de ${name} - ${subject}`,
      text: message,
      html: `<p><strong>Nom :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Sujet :</strong> ${subject}</p>
             <p><strong>Message :</strong></p>
             <p>${message}</p>`,
    });

    return res.status(200).json({ success: "Email envoyé avec succès !" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
  }
}
