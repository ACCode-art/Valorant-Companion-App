const indexAgents = document.querySelector('.indexAgents');
const indexMaps = document.querySelector('.indexMaps');
const indexWeapons = document.querySelector('.indexWeapons');
const indexSprays = document.querySelector('.indexSprays');
const button = document.querySelectorAll('button');

const menu = document.querySelector('.menu');
const exit = document.querySelector('.exit');
const menuOverlay = document.querySelector('.menuOverlay');

const agentsMain__left = document.querySelector('.agentsMain__left');
const agentsMain__right = document.querySelector('.agentsMain__right');

const loadAPI = async () => {
  const res = await fetch('https://valorant-api.com/v1/agents');
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
      background-image: url(${displayIconSmall});
    "
    >
    <div class="agentInformation">
      <p>${displayName}</p>
      <div class="no-show">
      <img class="no-showImg" src=${fullPortrait} alt="" />
      <p class="no-showDesc">
      ${description}</p>
    
    </div>

   
  
  </div>

    </div>`;

    agentsMain__left.insertAdjacentHTML('afterbegin', HTML);
  });
};

agentsMain__left.addEventListener('click', (event) => {
  const ai = event.target.closest('.agentInformation');
  const desc = ai.querySelector('.no-showDesc').textContent.trim();
  const img = ai.querySelector('.no-showImg').src;

  const name = ai.querySelector('p').textContent;

  const HTML = `<div class="agentMore">
  <p class='agentMore__name'>${name}</p>
  <img
    class="agentMore__img"
    src=${img}
    alt=""
  />
  <div class="agentMore__desc">
    <p>
    ${desc}
    </p>
  </div>
</div>`;

  agentsMain__right.innerHTML = HTML;
});

const loadMapsAPI = async () => {
  const res = await fetch('https://valorant-api.com/v1/maps');
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
    indexMaps.insertAdjacentHTML('afterbegin', HTML);
  });
};

const loadWeaponsAPI = async () => {
  const res = await fetch('https://valorant-api.com/v1/weapons');
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
    indexWeapons.insertAdjacentHTML('afterbegin', HTML);
  });
};

const loadSprayAPI = async () => {
  const res = await fetch('https://valorant-api.com/v1/sprays');
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

    indexSprays.insertAdjacentHTML('afterbegin', HTML);
  });
};

loadAPI();
/* loadMapsAPI();
loadWeaponsAPI();
loadSprayAPI(); */

button.forEach((e) => {
  const linkText = e.textContent.toLowerCase();
  e.addEventListener('click', () => {
    location.href = linkText;
  });
});

menu.addEventListener('click', () => {
  menuOverlay.classList.toggle('show');
});

exit.addEventListener('click', () => {
  menuOverlay.classList.toggle('show');
});
