<script>
    import { onMount } from 'svelte'
    import Loading from './components/Loading.svelte'
    import CopyClipboard from './components/CopyClipboard.svelte'
    import { saveAs } from 'file-saver'
    import Footer from './components/Footer.svelte'
    import Header from './components/Header.svelte'

    const baseUrl = 'https://cataas.com'
    let src = ''
    let tags = ''

    const download = () => {
        saveAs(src, 'cat ' + tags)
    }

    const copy = () => {
        const app = new CopyClipboard({
            target: document.getElementById('clipboard'),
            props: { text: src },
        })
        app.$destroy()
    }

    onMount(async () => {
        const res = await fetch(baseUrl + '/cat?json=true')
            .then((r) => r.json())
            .catch((e) => console.error('Error fetching cat', e))

        src = baseUrl + res.url
        tags = res.tags.join(' ')
    })
</script>

<Header />
<main>
    <div class="img-container">
        <div class="bg-loader">
            <Loading />
        </div>
        <a href={src} target="_blank">
            <img {src} alt="" class="img-main" />
        </a>
    </div>
    <div class="actions">
        <button on:click={download}>Download</button>
        <button on:click={copy}>Copy URL</button>
    </div>
    <div id="clipboard" class="hidden">{src}</div>
</main>
<Footer />

<style>
    main {
        padding: 1.5rem;
        margin: 0 auto;
        width: 400px;
        text-align: center;
    }

    .bg-loader {
        position: absolute;
        width: 100%;
    }

    .img-container {
        position: relative;
        display: grid;
        align-items: center;
        min-height: 200px;
        object-fit: contain;
    }

    .img-main {
        display: block;
        position: relative;
        max-height: 320px;
        max-width: 100%;
        margin: 0 auto;
        border-radius: 8px;
    }

    .actions {
        padding-top: 1.5rem;
        margin: 0 -0.5rem;
        display: flex;
    }
    .actions button {
        display: block;
        width: 100%;
        margin: 0 0.5rem;
    }

    .hidden {
        display: none;
    }
</style>
