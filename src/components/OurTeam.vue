<template>
    <div class="teamContent">
        <div class="centerSection">
            <h2>Unser Team</h2>
            <div class="teamEntry" v-for="(member, key) in team" :key="key">
                <div class="meberImgArea">
                    <img class="memberImg" :src="require(`@/assets/img/${member.img}`)" alt="">
                </div>
                <div class="seperator"></div>
                <div class="memberInfo">
                    <h3>{{ member.name }}</h3>
                    <p>{{ member.position }}</p>
                    <a class="memberPhone" v-if="member.phone" href="tel:{{ member.phone }}">{{ member.phone }}</a>
                    <a class="memberMail" v-if="member.mail" href="mail:{{ member.mail }}">{{ member.mail }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { team } from '@/team-DB';

    export default {
        name: "OurTeam",
        data() {
            return {
                team
            }
        }
    }
</script>
<style>
    .teamContent{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .centerSection{
        background-color: rgb(184, 192, 119);
        width: 80%;
        max-width: 1440px;
        height: 80%;
        border-radius: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .teamEntry{
        width: 80%;
        height: 448px;
        padding: 0px 28px 0px 28px;
        margin: 28px 0px 28px 0px; 
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: solid 1px rgb(53, 104, 53);
        border-radius: 35px;
        box-shadow:
              -11px 12px 13px -4px rgba(0, 0, 0, 0.19);
    }

    .memberImg{
        width: 280px;
        border-radius: 35px;
    }

    .seperator{
        height: 80%;
        border: solid 1px rgb(53, 104, 53);
    }

    .memberInfo{
        height: 80%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .memberPhone{
        color: #2c3e50;
        text-decoration: none;
        transition: 0.5s;
    }

    .memberPhone:hover{
        color: rgb(53, 104, 53);
        text-decoration: underline;
    }

    .memberMail{
        color: #2c3e50;
        text-decoration: none;
        transition: 0.5s;
    }

    .memberMail:hover{
        color: rgb(53, 104, 53);
        text-decoration: underline;
    }
    </style>