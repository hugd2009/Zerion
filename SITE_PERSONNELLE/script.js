const navigation_2 = document.querySelector(".navigation_2");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navigation_2.classList.add("scrolled");
  } else {
    navigation_2.classList.remove("scrolled");
  }
});

let premierMessage = true;

async function envoyerMessage() {
  let message;
  if (premierMessage) {
    message = document.getElementById("input-accueil").value;
    document.getElementById("accueil").style.display = "none";
    document.getElementById("chat").style.display = "block";
    premierMessage = false;
  } else {
    message = document.getElementById("input-chat").value;
    document.getElementById("input-chat").value = "";
  }

  const response = await fetch("https://managing-unseemly-unfixed.ngrok-free.dev/api/chat", {
    method: "POST",
    body: JSON.stringify({
      model: "llama3.2",
      messages: [{ role: "user", content: message }],
      stream: false,
    }),
  });

  const data = await response.json();

  const bulle = document.createElement("p");
  bulle.innerText = message;
  bulle.classList.add("bulle-user");
  document.getElementById("message").appendChild(bulle);

  const bulleIA = document.createElement("p");
  bulleIA.innerText = data.message.content;
  bulleIA.classList.add("bulle-ia");
  document.getElementById("message").appendChild(bulleIA);
}

function typeWriter(event) {
  if (event.key === "Enter") {
    envoyerMessage();
  }
}

function downloadCV() {
  const link = document.createElement("a");
  link.href = "./Fichier/CV_Hugo.pdf";
  link.download = "CV_Hugo.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function downloadPortfolio() {
  const link = document.createElement("a");
  link.href = "./Fichier/Portfolio_Hugo.pdf";
  link.download = "Portfolio_Hugo.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
