import { ValueCard } from "./Components/ValueCard.js";
import { TeamCard } from "./Components/TeamCard.js";
import { AboutAssets, ValuesData, TeamData, NetworkStatsData } from "./Data/data.js";

const heroImage = document.getElementById("heroImage");
const missionImageOne = document.getElementById("missionImageOne");
const missionImageTwo = document.getElementById("missionImageTwo");
const mapImage = document.getElementById("mapImage");

heroImage.src = AboutAssets.hero;
missionImageOne.src = AboutAssets.missionOne;
missionImageTwo.src = AboutAssets.missionTwo;
mapImage.src = AboutAssets.map;

const valuesCardsElement = document.getElementById("valuesCards");
valuesCardsElement.innerHTML = ValuesData.map((card) => ValueCard(card)).join("");

const teamCardsElement = document.getElementById("teamCards");
teamCardsElement.innerHTML = TeamData.map((card) => TeamCard(card)).join("");

const networkStatsElement = document.getElementById("networkStats");
networkStatsElement.innerHTML = NetworkStatsData.map((item) => `
    <div class="flex items-center gap-2 text-[16px] leading-6 font-medium text-[#0f172a]">
        <i class="fa-regular fa-circle-check text-[14px] text-[#2968ff]"></i>
        <span>${item}</span>
    </div>
`).join("");

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1
    });
});
