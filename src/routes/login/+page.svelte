<script>
    let email = "";
    let password = "";
    let confirmPassword = "";
    let register = false;

    function handleAuthentication() {
        console.log("email: ", email);
        console.log("password: ", password);
    }

    function toggleRegister() {
        register = !register;
        let email = "";
        let password = "";
        let confirmPassword = "";
    }
</script>

<div class="container">
    <form>
        <h1>{register ? "Register" : "Login"}</h1>
        <label for="email">Email</label>
        <input type="text" bind:value={email} placeholder="email" />
        <label for="password">Password</label>
        <input type="password" bind:value={password} placeholder="password" />
        {#if register}
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" bind:value={confirmPassword} placeholder="confirm password" />
        {/if}
        <div class="options">
            <div>
                <p>
                    {register
                        ? "Already have an account?"
                        : "Don't have an account?"}
                </p>
                <p on:click={toggleRegister} on:keydown={() => {}} class="tag">
                    {register ? "Login" : "Register"}
                </p>
            </div>
        </div>
        <button type="submit" on:click={handleAuthentication}>Login</button>
    </form>
</div>

<style>
    .tag {
        color: cyan;
        cursor: pointer;
    }

    form button:hover {
        background: hsl(217, 39%, 35%);
    }
    label {
        color: white;
        font-size: 1remrem;
        transform: translateY(10px);
    }
    .options {
        font-size: smaller;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 400px;
        max-width: 100%;
        background: #374151;
        border-radius: 10px;
        padding: 25px;
    }
    form input {
        width: 100%;
        border: none;
        color: black;
        padding: 10px;
        border-radius: 10px;
    }
    form button {
        border: none;
        background: #4c1d95;
        color: white;
        padding: 14px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        display: grid;
        place-items: center;
    }
    h1 {
        color: white;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
    }
</style>
