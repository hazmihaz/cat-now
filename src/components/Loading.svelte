<div>
    <div class="circle" />
</div>

<style>
    div {
        padding: 1rem;
    }
    .circle {
        width: 64px;
        height: 64px;
        margin: 0 auto;
        background: #666;
        border-radius: 50%;
        animation: fadeIn 0.5s infinite alternate linear;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
    }
</style>
