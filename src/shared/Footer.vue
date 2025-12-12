<template>
    <div class="footer-content">
        <div class="footer-link-area">
            <router-link class="footer-link" active-class="active-link" to="/impress">Impressum</router-link>
            <div class="seperator"></div>
            <router-link class="footer-link" active-class="active-link" to="/privacy">Datenschutz</router-link>
        </div>
        <router-link class="logo-footer-area" to="/">
            <img class="logo" src="./../assets/img/soloLogo.png" alt="logo">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "FooterElement"
}
</script>
<style>
.footer-content{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0px 48px 48px 0px;

}
.footer-link-area{
    background-color: rgb(53, 104, 53);
    width: 80%;
    height: 128px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-right-radius: 75px;
    border-top-right-radius: 75px;
}

.logo-footer-area{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 48px 0px 0px;
}

.logo{
    height: 128px;
}

.footer-link{
    color: white;
    text-decoration: none;
    font-size: 28px;
    margin: 0px 24px 0px 24px;
    padding: 8px 8px 8px 8px;
    border-radius: 15px;
    transition: 0.5s;
}

.footer-link:hover{
    color: #2c3e50;
    background-color: rgb(184, 192, 119);
}

.active-link{
    color: #2c3e50;
    background-color: rgb(184, 192, 119);
    transition: 0.5s;
}

.seperator{
    height: 48px;
    border: 1px solid white;
    margin: 0px 24px 0px 24px;
}
</style>