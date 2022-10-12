<script>
	import { page } from '$app/stores';
</script>

<header class="header_links">
	<a href="/" class="header_link" class:active={$page.url.pathname === '/'}>Home</a>
	<a href="/mathFact" class="header_link" class:active={$page.url.pathname === '/mathFact'}>Generate Math Fact</a>
	<a href="/randomGrade" class="header_link" class:active={$page.url.pathname === '/randomGrade'}>Generate Random Grade</a>
</header>

<style>
    header {
        background-color: #1b1c21;
        height: 75px;
        position: fixed;
        top: -2px;
        left: -2px;
        right: -2px;
        border: #958e8e solid 1px;
        justify-content: flex-end;
        z-index: 5;
    }

    .header_link {
        color: white;
        font-size: 20px;
        padding-left: 50px;
        padding-right: 50px;
        position: relative;
        top: 30%;
        text-underline-offset: 5px;
    }

    .header_links {
        display: flex;
    }
</style>
