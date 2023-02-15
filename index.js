const myEmojis = ["🍛", "🍺", "🎸"]
const emojiContainer = document.querySelector("#emoji-container")
const inputSwitch = document.querySelector('#input-switch')
const spanElem = document.createElement("span")

emojiContainer.append(spanElem)

const animateText = (method) => {
    const targetClass = ['shift', 'pop'].includes(method) ? 'shake-text' : 'scale'
    emojiContainer.classList.add(targetClass)
    setTimeout(() => {
        emojiContainer.classList.remove(targetClass)
    }, 300);
}

const renderEmojis = (method = "", input = "")  => {
    if (method) {
        if (method === "shift" || method === "pop") {
            myEmojis[method]()
        } 
        else if(method === "unshift" || method === "push") {
            myEmojis[method](input)
        }
        animateText(method)
    }
    spanElem.textContent = myEmojis.join("")
}

renderEmojis()

document.querySelector('emoji-picker').addEventListener('emoji-click', e => {
    const method = inputSwitch.checked ? "push" : "unshift"
    renderEmojis(method, e.detail.unicode)
})

document.querySelector("#remove-btn").addEventListener("click", () => {
    const method = inputSwitch.checked ? "pop" : "shift"
    renderEmojis(method)
})
