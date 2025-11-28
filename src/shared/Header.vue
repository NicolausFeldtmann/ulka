<template>
    <div class="header-content">
        <div class="logo-area">
            <img class="logo" src="./../assets/img/soloLogo.png" alt="logo">
        </div>
        <nav>
            <div class="link-box">
                <a class="nav-link" href="#">Start</a>
            </div>
            <div>
                <a class="nav-link" href="#">Der Schornsteinfeger</a>
            </div>
            <div>
                <a class="nav-link" href="#">Das sind Wir</a>
            </div>
            <div>
                <a class="nav-link" href="#">Unsere Leisungen</a>
            </div>
            <div>
                <a class="nav-link" href="#">Gesetze und Verordnungen</a>
            </div>
            <div>
                <a class="nav-link" href="#">Kontackt</a>
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
}
</style>