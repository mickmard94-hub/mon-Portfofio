
function voirprojet1() {
      window.location.href = "maths.html","_blank"; // pour voir mon projet de maths financieres
}
function voirprojet2() {
     window.open("DOCUMENTS/PROJET POUBANB.pdf", "_blank");// pour voir mon projet PouBanb
}           
function voirprojet3() {
     window.open("DOCUMENTS/PROGRAMME HDE IDANTITE M Klinik Dan 1.0.pdf");// pour voir mon projet HDE
}
function voirmesprojets() {
    const section = document.getElementById("projet");
    if (section) {
        section.scrollIntoView({ 
            behavior: "smooth", // effet qui fait défiler la page jusqu'à la section, défilement fluide, en haut de l'écran. 
            block: "start" // Pour éviter de faire la section à propos de parraitre brusquement.
        }); 
    }
}

    function validerformulaire(){
    const nom = document.getElementById("lastname").value;
    const prenom = document.getElementById("firstname").value;
    const sujet = document.getElementById("sujet").value;
    const message = document.getElementById("message").value;

    if (!nom || !prenom || !sujet || message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    return true; 
}