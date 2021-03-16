const indexAgents = document.querySelector(".indexAgents");
const indexMaps = document.querySelector(".indexMaps");
const indexWeapons = document.querySelector(".indexWeapons");
const indexSprays = document.querySelector(".indexSprays");
const button = document.querySelectorAll("button");

const menu = document.querySelector(".menu");
const exit = document.querySelector(".exit");
const menuOverlay = document.querySelector(".menuOverlay");

const loadAPI = async () => {
  const res = await fetch("https://valorant-api.com/v1/agents");
  info = await res.json();

  const { data } = info;

  data.map((agent) => {
    const {
      displayName,
      fullPortrait,
      description,
      abilities,
      displayIconSmall,
      characterTags,
    } = agent;

    const HTML = `<div
    class="agentContainer"
    style="
      background-image: url(${fullPortrait});
    "
  >
    <div class="agentContainer__info">
      <div class="agentContainer__top">
        <p>${displayName}</p>
        <img src=${displayIconSmall}></img>

      </div>
      <div class="agentContainer__desc">
      ${description}
      </div>
      <div class="agentContainer__abilities">
        ${abilities
          .map((ability) => {
            return `<p class='agentAbilityName'>${ability.displayName}</p><p class= agentAbilitydesc>${ability.description}</p>`;
          })
          .join("")}
      </div>
    </div>
  </div>`;

    indexAgents.insertAdjacentHTML("afterbegin", HTML);
  });
};

const loadMapsAPI = async () => {
  const res = await fetch("https://valorant-api.com/v1/maps");
  info = await res.json();

  const { data } = info;

  data.map((mp) => {
    const { splash, displayName, coordinates } = mp;
    const HTML = `<div
 class="mapContainer"
 style="
   background-image: url(${splash});
 "
>
 <p>${displayName}</p>
 <p class='coords'>${coordinates}</p>
</div>`;
    indexMaps.insertAdjacentHTML("afterbegin", HTML);
  });
};

const loadWeaponsAPI = async () => {
  const res = await fetch("https://valorant-api.com/v1/weapons");
  info = await res.json();

  const { data } = info;

  data.map((gun) => {
    const { displayIcon, displayName } = gun;
    const {
      weaponStats: { fireRate },
    } = gun;

    const HTML = `<div class="weaponsContainer">
    <div class="weaponsContainerTop">
      <img
        src="${displayIcon}"
        alt=""
      />
    </div>
    <div class="weaponsContainerBottom">
      <div class="bottom__left">
        <h1>Firerate: ${Math.floor(fireRate)}</h1>
      </div>
      <div class="bottom__right">
        <p>${displayName}</p>
      </div>
    </div>
  </div>`;
    indexWeapons.insertAdjacentHTML("afterbegin", HTML);
  });
};

const loadSprayAPI = async () => {
  const res = await fetch("https://valorant-api.com/v1/sprays");
  info = await res.json();

  const { data } = info;

  data.map((spray) => {
    const { fullIcon, displayName } = spray;

    const HTML = ` <div
    class="sprayContainer"
    style="
      background-image: url(${fullIcon});
    "
  >
    <h2>${displayName}</h2>
  </div>`;

    indexSprays.insertAdjacentHTML("afterbegin", HTML);
  });
};

loadAPI();
loadMapsAPI();
loadWeaponsAPI();
loadSprayAPI();

button.forEach((e) => {
  const linkText = e.textContent.toLowerCase();
  e.addEventListener("click", () => {
    location.href = linkText;
  });
});

menu.addEventListener("click", () => {
  menuOverlay.classList.toggle("show");
});

exit.addEventListener("click", () => {
  menuOverlay.classList.toggle("show");
});
