function goToStep2() {
    const code = document.getElementById('code-input').value;
    if(code.trim() !== "") {
        document.getElementById('step-1').style.display = 'none';
        document.getElementById('step-2').style.display = 'block';
    } else {
        alert("Veuillez saisir le code reçu.");
    }
}

function goToStep3() {
    const p1 = document.getElementById('old-pass').value;
    const p2 = document.getElementById('confirm-pass').value;
    
    if(p1.trim() !== "" && p2.trim() !== "") {
        document.getElementById('step-2').style.display = 'none';
        document.getElementById('step-3').style.display = 'block';
    } else {
        alert("Veuillez remplir les deux champs de mot de passe.");
    }
}