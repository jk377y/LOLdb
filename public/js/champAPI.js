let leagueOfLegendsAPI = "https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"
// grabbing object containing ALL champion data from api
fetch(leagueOfLegendsAPI)
    .then(response => response.json())
    .then(data => {
    let champArray = Object.keys(data.data)   // creates array of the first key values in the data response object
    for(let i = 0; i < champArray.length; i++) {
        let champIndex = champArray[i];      //  array of just champion names
        let allChampObjects = data.data[champIndex];  // returns all 162 champion objects
        //  fully destructures each champion 
        let {data: 
                {[champIndex]: {
                    blurb,
                    id,
                    image: {full, group, sprite},
                    info: {attack, defense, difficulty, magic},
                    key,
                    name,
                    partype,
                    stats: {armor, armorperlevel, attackdamage, attackdamageperlevel, attackrange, attackspeed, attackspeedperlevel, crit, critperlevel, hp, hpperlevel, hpregen, hpregenperlevel, movespeed, mp, mpperlevel, mpregen, mpregenperlevel, spellblock, spellblockperlevel},
                    tags: {[0]: role1, [1]: role2},
                    title
                }}
            } = data;
            console.log(name, id);
            document.querySelector('#fuck').textContent = name, id;
            document.querySelector('#fuck1').textContent = name, id;
            document.querySelector('#fuck2').textContent = name, id;
        }})
        // h1.textContent = data.data[4].name;
        