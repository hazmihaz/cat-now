import App from './App.svelte'

let app

const target = document.getElementById('__cat-now-extension__')

if (target) {
    app = new App({ target })
}

export default app
