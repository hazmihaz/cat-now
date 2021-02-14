<script>
    import DarkModeSwitch from './DarkModeSwitch.svelte'
</script>

<header>
    <div>
        <img src="favicon.png" alt="" />
        <h1>Cat Now!</h1>
    </div>
    <div>
        <DarkModeSwitch />
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1.5rem;
        border-bottom: 1px solid var(--color-separator);
        color: var(--color-title);
    }

    header > div {
        display: flex;
        align-items: center;
    }

    header img {
        display: inline-block;
        width: 32px;
        height: 32px;
    }

    header h1 {
        display: inline-block;
        margin: 0 1rem;
        font-size: 20px;
    }
</style>
