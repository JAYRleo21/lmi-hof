const members = [
  {
    id: 1,
    name: 'Wycombe Wanderers',
    ytLink: 'https://youtu.be/qgBKdDXo2Cs?t=4',
    ytId: 'qgBKdDXo2Cs',
    ytTime: '0',
    img: 'hof-Wycombe_Wanderers_FC_logo.png'
  }, {
    id: 2,
    name: 'Delia Smith',
    ytLink: 'https://youtu.be/QekzbS3jYgU?t=2492',
    ytId: 'QekzbS3jYgU',
    ytTime: '2492',
    img: 'hof-delia.png'
  }, {
    id: 3,
    name: 'Boilerman',
    ytLink: 'https://youtu.be/D3d2vCu1R_4?t=294',
    ytId: 'D3d2vCu1R_4',
    ytTime: '294',
    img: 'hof-boilerman.png'
  }, {
    id: 4,
    name: 'Heung-Min Dad',
    ytLink: 'https://youtu.be/VM5ODsX3wV8?t=2489',
    ytId: 'VM5ODsX3wV8',
    ytTime: '2489',
    img: 'hof-heung-min-dad.png'
  }, {
    id: 5,
    name: 'Glenn Tamplin',
    ytLink: 'https://youtu.be/Eoz1b63MH2c',
    ytId: 'Eoz1b63MH2c',
    ytTime: '0',
    img: 'hof-glenn-tamplin.png'
  }, {
    id: 6,
    name: 'Gunnersaurus',
    ytLink: 'https://youtu.be/s620B4vvo4M?t=10118',
    ytId: 's620B4vvo4M',
    ytTime: '10118',
    img: 'hof-gunnersaurus.png'
  }, {
    id: 7,
    name: 'Celestino',
    ytLink: 'https://youtu.be/i2fQIOPSOX4?t=831',
    ytId: 'i2fQIOPSOX4',
    ytTime: '831',
    img: 'hof-celestino.png',
    tooltip: 'No encontramos una foto de Celestino, Brendan Rodgers ocupará su lugar en representación'
  }, {
    id: 8,
    name: 'Cyril the swan',
    ytLink: 'https://youtu.be/D3d2vCu1R_4?t=1038',
    ytId: 'D3d2vCu1R_4',
    ytTime: '1038',
    img: 'hof-cyril.png'
  }
];
const membersContainer = document.getElementById('members');
let membersItems = '';
members.forEach(m => {
  membersItems += `<a href="${m.ytLink}" target="_blank" class="item" ${m.tooltip ? ('data-tooltip="'+m.tooltip+'"') : ''}>
    <picture>
      <img src="./assets/images/${m.img}" alt="">
    </picture>
  </a>`
});
membersContainer.innerHTML = membersItems;
