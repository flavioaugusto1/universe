export default function Focus({
    home,
    universe,
    explorer
}) {


    function Home() {
        home.classList.add('in-focus')
        universe.classList.remove('in-focus')
        explorer.classList.remove('in-focus')
    }

    function Universe() {
        home.classList.remove('in-focus')
        universe.classList.add('in-focus')
        explorer.classList.remove('in-focus')
    }

    function Explorer() {
        home.classList.remove('in-focus')
        universe.classList.remove('in-focus')
        explorer.classList.add('in-focus')
    }
    

    return {
        Home,
        Universe,
        Explorer
    }

}