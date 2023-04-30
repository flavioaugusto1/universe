import Router from "./router.js"
import Focus from "./config-nav.js"

const home = document.querySelector(".home")
const universe = document.querySelector(".universe")
const explorer = document.querySelector(".explorer")

const router = new Router()
router.add("/home", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explorer", "/pages/explorer.html")
router.add("404", "/pages/404.html")


router.handle()
window.onpopstate = () => {
    const { pathname } = window.location
    switch (pathname) {
        case "/home": {
            focus.Home()
            router.handle()
            break;
        }
        case "/universe": {
            focus.Universe()
            router.handle()
            break;
        }

        case "/explorer": {
            focus.Explorer()
            router.handle()
            break;
        }
    }
}
window.route = () => router.route()

const focus = Focus({
    home,
    universe,
    explorer
})

home.addEventListener("click", () => {
    focus.Home()
})

universe.addEventListener("click", () => {
    focus.Universe()
})

explorer.addEventListener("click", () => {
    focus.Explorer()
})