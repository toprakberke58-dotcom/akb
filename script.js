// Mesajın aşamaları burada. Metinleri istediğin gibi değiştirebilirsin.
const steps = [
  {
    label: "BİR KÜÇÜK NOT",
    title: "Merhaba, ben Toprak.",
    message: "Sana küçük bir şey hazırladım. Sonuna kadar bakmak ister misin?",
    button: "Başlayalım →"
  },
  {
    label: "İLK İPUCU",
    title: "Küçük şeyler bazen özeldir.",
    message: "Bazen birinin gününü güzelleştirmek için büyük şeylere gerek yoktur. Bazen onunla konuşmak bile yeterlidir.",
    button: "Bir ipucu daha →"
  },
  {
    label: "ASLINDA...",
    title: "Bunu söylemek istiyordum.",
    message: "Seninle konuşmak hoşuma gidiyor. Bunu sıradan bir mesajla söylemek yerine sana küçük bir sürpriz hazırlamak istedim.",
    button: "Son mesajı gör →"
  },
  {
    label: "SON MESAJ",
    title: "Seni Gerçelten Seviyorum. ❤️",
    message: "Peki, sen ne düşünüyorsun? Ne hissediyorsan rahatça söyleyebilirsin. Cevabın ne olursa olsun, bunu bilmeni istedim.",
    button: "Baştan oku ↺"
  }
];

const terminal = document.getElementById("terminal");
const terminalTag = document.getElementById("terminalTag");
const content = document.getElementById("content");
const startButton = document.getElementById("startButton");
const stepLabel = document.getElementById("stepLabel");
const heading = document.getElementById("heading");
const message = document.getElementById("message");
const nextButton = document.getElementById("nextButton");
const stepCount = document.getElementById("stepCount");

let currentStep = 0;

function showStep(index) {
  const step = steps[index];
  stepLabel.textContent = step.label;
  heading.textContent = step.title;
  message.textContent = step.message;
  nextButton.textContent = step.button;
  stepCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(steps.length).padStart(2, "0")}`;
  content.classList.remove("hidden");
  content.style.animation = "none";
  void content.offsetWidth;
  content.style.animation = "";
}

function startExperience() {
  terminal.classList.add("hidden");
  terminalTag.textContent = "MESSAGE DECRYPTED // ♥";
  showStep(currentStep);
}

startButton.addEventListener("click", () => {
  currentStep = 0;
  startExperience();
});

nextButton.addEventListener("click", () => {
  if (currentStep === steps.length - 1) {
    currentStep = 0;
    terminal.classList.remove("hidden");
    terminalTag.textContent = "SYSTEM MESSAGE // TOPRAK";
    content.classList.add("hidden");
    return;
  }

  currentStep += 1;
  showStep(currentStep);
});
