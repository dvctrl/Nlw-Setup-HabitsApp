const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener(
  "click",
  (addButtonClick = () => {
    /* const today = new Date().toLocaleDateString("pt-br").slice(0, -5) */
    const today = '25/01'
    const dayExist = nlwSetup.dayExists(today)

    if (dayExist) {
      alert("Dia ja incluso!")
      return
    } else {
      alert("dia adicionado com sucesso ✅")
    }

    nlwSetup.addDay(today)
  })
)
form.addEventListener(
  "change",
  (save = () => {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  })
)

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)

nlwSetup.load()
