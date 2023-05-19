<script>
    import { onMount } from "svelte";

    let isMenuOpen = false;
    let innerWidth = 0;

    onMount(() => {
        function onResize() {
            innerWidth = window.innerWidth;
            if (innerWidth <= 968 && !isMenuOpen) {
                isMenuOpen = false;
                document.querySelector(".list").style.display = "none";
            } else if (innerWidth > 968) {
                document.querySelector(".list").style.display = "flex";
                isMenuOpen = false;
            }
            if(innerWidth <= 968 && isMenuOpen){
                document.querySelector(".list").style.display = "flex";
                isMenuOpen = true;
            }
        }
        window.addEventListener("resize", onResize);
    });

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        console.log(isMenuOpen);
        if (!isMenuOpen) {
            document.querySelector(".list").style.display = "none";
        }
        if (isMenuOpen) {
            document.querySelector(".list").style.display = "flex";
        }
    }
</script>

<nav>
    <label for="logo" class="logo">CookBook</label>
    <div class="hamburger" on:click={toggleMenu} on:keydown={() => {}}>
        <div class="line" />
        <div class="line" />
        <div class="line" />
        <div class="line" />
    </div>
    <ul class="list">
        <li><a href="/login">Login</a></li>
        <li><a href="/">Recipes</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
    </ul>
</nav>

<style>
    .logo {
        font-size: 1.5rem;
        font-weight: 600;
        color: #000;
        text-decoration: none;
    }
    .list {
        height: auto;
        display: flex;
        list-style: none;
        float: right;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 25px 40px;
        background: #707f96;
        height: 70px;
        width: 100%;
    }
    li > a {
        text-decoration: none;
        color: white;
        padding: 10px 25px;
    }
    li > a:hover {
        color: #fff;
        background-color: #000;
        border-radius: 5px;
    }
    .hamburger {
        display: none;
    }
    @media (max-width: 968px) {
        .hamburger {
            display: block;
            cursor: pointer;
        }
        nav {
            padding: 0 50px;
        }
        .line {
            width: 25px;
            height: 3px;
            background-color: #000;
            margin: 5px;
        }
        .list {
            display: none;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            width: 100vw;
            background: #111827;
            transition: all 0.5s ease;
            overflow: hidden;
        }
        nav ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        nav ul li {
            font-size: 1rem;
            margin: 10px 0;
        }
    }
</style>
