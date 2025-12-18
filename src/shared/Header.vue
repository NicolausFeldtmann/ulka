<template>
    <div class="header-content">
        <router-link class="logo-area" to="/">
            <img class="logo" src="./../assets/img/soloLogo.png" alt="logo">
        </router-link>
        <nav>
            <router-link class="nav-link" active-class="active-link" to="/">Start</router-link>
            <router-link class="nav-link" active-class="active-link" to="/tasks">Der Schornsteinfeger</router-link>
            <router-link class="nav-link" active-class="active-link" to="/team">Das sind Wir</router-link>
            <div class="dropdown">
                <div class="nav-link">Unsere Leisungen</div>
                <div class="dropdown-content">
                    <div class="drop-links">
                        <router-link class="drop-link" active-class="active-drop-link" to="/chimney">Schornstein- & Kaminreinigung</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/measure">Abgasmessungen</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/detector">Rauchwarnmelder</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/alert">CO-Warnmelder</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/exhaust">Abluftkontrolle & Reinigung</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/gascControll">Gasleiungskontrolle nach TRGI</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/certificate">Energieausweis</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/restruction">Individueller Sanierungsplan</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/calculation">Heizlastberechnung</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/funding">KfW & BAFA Förderung</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/advice">Beratung</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/safty">Brandsicherheit</router-link>
                        <router-link class="drop-link" active-class="active-drop-link" to="/env">Umwelstschutz</router-link>
                    </div>
                </div>
            </div>
            <router-link class="nav-link" active-class="active-link" to="/law">Gesetze und Verordnungen</router-link>
            <router-link class="nav-link" active-class="active-link" to="/contact">Kontackt</router-link>
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

.active-link{
    color: #2c3e50;
    background-color: rgb(184, 192, 119);
    transition: 0.5s;
}

.dropdown{
    position: relative;
    display: inline-block;
}

.dropdown:hover{
    color: #2c3e50;
    background-color: rgb(184, 192, 119);
    transition: 0.5s;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.dropdown-content{
    position: absolute;
    top: 100%;
    left: 0;
    max-height: 0;
    overflow: hidden;
    background-color: rgb(184, 192, 119);
    transition: max-height 0.5s ease-out;
    z-index: 1;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
}

.dropdown-content::-webkit-scrollbar{
    display: none;
}

.drop-links{
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    font-size: 24px;
}

.dropdown:hover .dropdown-content{
    max-height: 500px;
    overflow-y: auto;
    transition: max-height 0.5s ease-in;
}

.drop-link{
    display: block;
    color: #2c3e50;
    text-decoration: none;
    margin: 12px 8px 12px 8px;
    padding: 4px 4px 4px 4px;
}

.drop-link:hover{
    background-color: rgb(53, 104, 53);
    color: white;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.5s;
}
</style>