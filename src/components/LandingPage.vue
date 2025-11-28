<template>
    <div class="landing-content">
        <div class="center-section">
            <div class="img-area"></div>
            <div class="center-content">
                <div class="txt-area">
                    <h2>ULKA</h2>
                    <div class="slogan">
                        <h3 class="top-h3">SCHORNSTEINFEGER</h3>
                        <h3>ENERGIE & SICHERHEIT</h3>
                    </div>
                </div>
                <div class="side-qoute">
                    <h4>Wir sind ein Junger Meisterberieb und mit unseren breiten 
                        Aufgaben Gebiet stehen wir Ihnen gerne mit Rat und Tat 
                        zur Seite, denn
                    </h4>
                    <h3>jedes Gebäude ist so individuell 
                        wie die Menschen die es bewohnen!
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LandingPage"
}
</script>
<style>
.landing-content{
    height: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.center-section{
    background-color: rgb(184, 192, 119);
    width: 80%;
    max-width: 1440px;
    height: 80%;
    border-radius: 35px;
}

.center-content{
    display: flex;
    justify-content: space-between;
}

.img-area{
    background-image: url(./../assets/img/chimney3.png);
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 75%;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
}

.txt-area{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 18px 0px 0px 18px;
}

.slogan{
    display: flex;
    flex-direction: column;

}

h2{
    font-size: 72px;
    margin: 0;
}

h3{
    margin: 0;
    font-size: 28px;
}

.top-h3{
    text-decoration: underline;
    margin: 0;
}

.side-qoute{
    width: 55%;
    margin: 12px 24px 0px 0px;
}
</style>