const answers = {
    "¿Qué es la UASD?":
        "La Universidad Autónoma de Santo Domingo es la universidad pública y autónoma de la República Dominicana.",

    "¿Cuál es la misión de la UASD?":
        "La misión de la UASD es formar profesionales, desarrollar investigación y contribuir al desarrollo nacional.",

    "¿Qué es el Claustro Mayor?":
        "El Claustro Mayor es el máximo organismo académico de la universidad.",

    "¿Cuáles son los derechos de los estudiantes?":
        "Los estudiantes tienen derecho a recibir educación de calidad y participar en la vida universitaria."
};

function sendMessage() {

    const input = document.getElementById("question");
    const text = input.value.trim();

    if(text === "") return;

    addMessage(text,"user");

    let response =
    answers[text] ||
    "No encontré información suficiente dentro del Estatuto Orgánico de la UASD.";

    addMessage(response,"bot");

    input.value="";
}

function askQuestion(question){
    document.getElementById("question").value = question;
    sendMessage();
}

function addMessage(message,type){

    const chat = document.getElementById("chat");

    const div = document.createElement("div");

    div.className = type;

    div.textContent = message;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;
}
