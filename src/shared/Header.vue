<template>
    <div class="header-content">
        <router-link class="logo-area" to="/">
            <img class="logo" src="./../assets/img/soloLogo.png" alt="logo">
        </router-link>
        <nav>
            <div class="link-box">
                <router-link class="nav-link" to="/">Start</router-link>
            </div>
            <div>
                <router-link class="nav-link" to="/tasks">Der Schornsteinfeger</router-link>
            </div>
            <div>
                <router-link class="nav-link" to="/team">Das sind Wir</router-link>
            </div>
            <div>
                <router-link class="nav-link" to="/service">Unsere Leisungen</router-link>
            </div>
            <div>
                <router-link class="nav-link" to="/law">Gesetze und Verordnungen</router-link>
            </div>
            <div>
                <router-link class="nav-link" to="/contact">Kontackt</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "HeaderElement"
}
</script>
<style>
.header-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 48px 0px 0px 48px;
}

nav{
    background-color: rgb(53, 104, 53);
    width: 80%;
    height: 128px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-bottom-left-radius: 75px;
    border-top-left-radius: 75px;
    padding: 0px 100px 0px 28px;
}

.logo-area{
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo{
    height: 128px;
}

.nav-link{
    color: white;
    text-decoration: none;
    font-size: 28px;
    padding: 8px 8px 8px 8px;
    border-radius: 15px;
    transition: 0.5s;
}

.nav-link:hover{
    color: #2c3e50;
    background-color: rgb(184, 192, 119);
    transition: 0.5s;
}
</style>