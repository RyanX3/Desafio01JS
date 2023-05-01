const cookieClose = document.querySelector("#cookieClose")
const classClose = document.querySelector(".close")
const classOpen = document.querySelector(".open")
const button = document.querySelector("button")

button.addEventListener("click", closeReset)
cookieClose.addEventListener('click', open)  

function open () {
  classClose.classList.toggle("hide")
  classOpen.classList.toggle("hide")
  document.querySelector(".open p").innerText = getPhrase()
  
}

function closeReset () {
  
  classClose.classList.toggle("hide")
  classOpen.classList.toggle("hide")
}

const phrasesCookie = [
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "Você é capaz de fazer coisas incríveis se acreditar em si mesmo.",
  "Não deixe para amanhã o que pode fazer hoje.",
  "Acredite em si mesmo e tudo será possível.",
  "O fracasso é apenas uma oportunidade para recomeçar com mais experiência.",
  "Nunca é tarde demais para definir novas metas e começar a persegui-las.",
  "A persistência é o caminho para o sucesso.",
  "Não desista só porque as coisas estão difíceis, lute até o fim.",
  "A sorte favorece os corajosos.",
  "A melhor maneira de prever o futuro é criá-lo."
]

function getPhrase() {
  const randomPhrases = Math.floor(Math.random() * phrasesCookie.length);
  return phrasesCookie[randomPhrases];
}
