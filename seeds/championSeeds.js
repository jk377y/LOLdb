const Champion = require("../models/champion");

const championData = [
    {
        id: "Aatrox",
        name: "Aatrox",
        title: "the Darkin Blade",
        lore: "Aatrox is a legendary warrior whose rage consumes him as mercilessly as the fires of his homeland. He wields his massive blade with deadly grace, slicing through legions of enemies to carve a path to his true destiny. But the blade that once brought hope and salvation to his war-torn people now threatens to destroy everything he holds dear.",
        skins: [0, 1, 2, 3, 7, 8, 9, 11, 20, 21],
        passive: {
          name: "Deathbringer Stance",
          description: "Periodically, Aatrox"s next basic attack deals bonus physical damage and heals him, based on the target"s max health.",
          image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Aatrox_Passive.png",
        },
        spells: [
          {
            id: "AatroxQ",
            name: "The Darkin Blade",
            description: "Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AatroxQ.png",
          },
          {
            id: "AatroxW",
            name: "Infernal Chains",
            description: "Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AatroxW.png",
          },
          {
            id: "AatroxE",
            name: "Umbral Dash",
            description: "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AatroxE.png",
          },
          {
            id: "AatroxR",
            name: "World Ender",
            description: "Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AatroxR.png",
          }
        ]
      },
      {
        id: "Ahri",
        name: "Ahri",
        title: "the Nine-Tailed Fox",
        lore: "Innately connected to the latent power of Runeterra, Ahri is a vastayan enchantress capable of manipulating magic to charm, seduce, and control the minds of her enemies. She is a fox spirit, also called a kitsune, who can morph into a human-like appearance, using her beauty to deceive mortals. She uses her abilities to feed on the life essence of men and make them fall for her before consuming their vitality.",
        skins: [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        passive: {
          name: "Vastayan Grace",
          description: "Ahri gains a brief burst of movement speed and her next spell has bonus magic damage and will heal her for a portion of the damage dealt.",
          image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Ahri_SoulEater.png",
        },
        spells: [
          {
            id: "AhriOrbofDeception",
            name: "Orb of Deception",
            description: "Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AhriOrbofDeception.png",
          },
          {
            id: "AhriFoxFire",
            name: "Fox-Fire",
            description: "Ahri releases three fox-fires, that lock on and attack nearby enemies.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AhriFoxFire.png",
          },
          {
            id: "AhriSeduce",
            name: "Charm",
            description: "Ahri blows a kiss that damages and charms an enemy it encounters, causing them to walk harmlessly towards her.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AhriSeduce.png",
          },
          {
            id: "AhriTumble",
            name: "Spirit Rush",
            description: "Ahri dashes forward and fires essence bolts, damaging 3 nearby enemies (prioritizes champions) and granting her increased movement speed.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AhriTumble.png",
          }
        ]
      },
      {
        id: "Akali",
        name: "Akali",
        title: "the Rogue Assassin",
        lore: "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.",
        skins: [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        passive: {
          name: "Assassin's Mark",
          description: "Akali's damaging abilities mark enemies with 'Assassin's Mark'. Akali's melee attacks against marked enemies will trigger a bonus magic damage and restore energy.",
          image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Akali_P.png",
        },
        spells: [
          {
            id: "AkaliQ",
            name: "Five Point Strike",
            description: "Akali flourishes her kamas, dealing damage based on her bonus Attack Damage and Ability Power.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkaliQ.png",
          },
          {
            id: "AkaliW",
            name: "Twilight Shroud",
            description: "Akali creates a shroud of twilight, gaining invisibility and movement speed. Attacking or using abilities will briefly reveal her. Enemies inside the shroud are slowed.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkaliW.png",
          },
          {
            id: "AkaliE",
            name: "Shuriken Flip",
            description: "Akali flips backward and fires a shuriken forward, dealing physical damage.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkaliE.png",
          },
          {
            id: "AkaliR",
            name: "Perfect Execution",
            description: "Akali dashes forward and lands two damaging strikes on her target. The first strike deals physical damage and the second strike deals magic damage. Enemies killed by Perfect Execution will restore the full cost of the ability and reduce its cooldown.",
            image: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AkaliR.png",
          }
        ]
      },
      {
        id: "Alistar",
        name: "Alistar",
        title: "the Minotaur",
        lore: "As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran's many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of Keiran Darkwill, General Boram Darkwill's youngest son, and was imprisoned, tried, and convicted of the crime of being a demigod. With his horns hacked off and his rage suppressed, Alistar spent the intervening years as a slave, rising to become the prized enforcer of Noxus's high command. Now, with Valoran in turmoil, Alistar seeks freedom for himself, and for his enslaved brethren.",
        skins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12],
        passive: {
          passiveName: "Triumphant Roar",
          passiveDescription: "Whenever Alistar casts a spell, nearby allies heal over time.",
          passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Alistar_E.png",
        },
        spells: {
          0: {
            spellId: "Pulverize",
            spellName: "Pulverize",
            spellDescription: "Alistar smashes the ground, dealing damage to nearby enemies and knocking them up.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AlistarQ.png",
          },
          1: {
            spellId: "Headbutt",
            spellName: "Headbutt",
            spellDescription: "Alistar charges at an enemy and rams them with his head, dealing damage and knocking them back.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AlistarW.png",
          },
          2: {
            spellId: "Trample",
            spellName: "Trample",
            spellDescription: "Alistar tramples nearby enemies, dealing damage and stunning them if they are affected by his Trample passive.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AlistarE.png",
          },
          3: {
            spellId: "FerociousHowl",
            spellName: "Unbreakable Will",
            spellDescription: "Alistar lets out a mighty roar, gaining damage reduction for a short time.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AlistarR.png",
          }
        },
      },
      {
        id: "Amumu",
        name: "Amumu",
        title: "the Sad Mummy",
        lore: "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.",
        skins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13],
        passive: {
          passiveName: "Cursed Touch",
          passiveDescription: "Amumu's basic attacks curse his target, causing them to take bonus true damage from incoming magic damage.",
          passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Amumu_P.png",
        },
        spells: {
          0: {
            spellId: "BandageToss",
            spellName: "Bandage Toss",
            spellDescription: "Amumu tosses a bandage, damaging and stunning the first enemy he hits.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AmumuQ.png",
          },
          1: {
            spellId: "Despair",
            spellName: "Despair",
            spellDescription: "Amumu cries, dealing damage to nearby enemies and applying his Curse to them.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AmumuW.png",
          },
          2: {
            spellId: "Tantrum",
            spellName: "Tantrum",
            spellDescription: "Amumu takes reduced damage from physical attacks and deals damage to nearby enemies each time he is hit.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AmumuE.png",
          },
          3: {
            spellId: "CurseoftheSadMummy",
            spellName: "Curse of the Sad Mummy",
            spellDescription: "Amumu entangles nearby enemies, dealing damage and rendering them unable to attack or move.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AmumuR.png",
          }
        },
      },      
      {
        id: "Anivia",
        name: "Anivia",
        title: "the Cryophoenix",
        lore: "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.",
        skins: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        passive: {
          passiveName: "Rebirth",
          passiveDescription: "Upon dying, Anivia will revert into an egg. If the egg can survive for six seconds, she is gloriously reborn.",
          passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Anivia_P.png",
        },
        spells: {
          0: {
            spellId: "FlashFrost",
            spellName: "Flash Frost",
            spellDescription: "Anivia launches a ball of ice that explodes when it hits an enemy, dealing damage and briefly stunning anyone in the area.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/FlashFrost.png",
          },
          1: {
            spellId: "Crystallize",
            spellName: "Crystallize",
            spellDescription: "Anivia condenses the moisture in the air into an impenetrable wall of ice to block movement.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Crystallize.png",
          },
          2: {
            spellId: "Frostbite",
            spellName: "Frostbite",
            spellDescription: "Anivia blasts her target with a freezing wind, dealing damage and applying a debuff that increases the damage they take from all sources.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Frostbite.png",
          },
          3: {
            spellId: "GlacialStorm",
            spellName: "Glacial Storm",
            spellDescription: "Anivia creates a blizzard around her that deals damage to enemies and chills them, slowing their movement and attack speed.",
            spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/GlacialStorm.png",
          }
        },
      },      
    {
        id: "Annie",
        name: "Annie",
        title: "the Dark Child",
        lore: "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.",
        skins: [0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 17, 18, 19, 21, 22],
        passive: {
            passiveName: "Pyromania",
            passiveDescription: "After casting 4 spells, Annie"s next offensive spell will stun its target.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Annie_P.png",
        },
        spells: {
            [0]: {
                spellId: "Disintegrate",
                spellName: "Disintegrate",
                spellDescription: "Annie hurls a mana-infused fireball, dealing damage and refunding the mana cost if it destroys the target.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Disintegrate.png",
            },
            [1]: {
                spellId: "Incinerate",
                spellName: "Incinerate",
                spellDescription: "Annie unleashes a cone of fire, dealing damage to all enemies in the area.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/Incinerate.png",
            },
            [2]: {
                spellId: "MoltenShield",
                spellName: "Molten Shield",
                spellDescription: "Annie grants herself or an ally a shield, and empowers her next attack with increased damage.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/MoltenShield.png",
            },
            [3]: {
                spellId: "InfernalGuardian",
                spellName: "Summon: Tibbers",
                spellDescription: "Annie summons Tibbers to the battlefield, damaging enemies in the area. Tibbers can attack and also burns enemies that stand near him.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/InfernalGuardian.png",
            }
        }
    },
    {
        id: "Aphelios",
        name: "Aphelios",
        title: "the Weapon of the Faithful",
        lore: "Emerging from moonlight"s shadow with weapons of nuanced precision, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by his sister Alune. And their bond is unbreakable. They are lethal protectors of the celestial faith, combating any who threaten it with merciless force.",
        skins: [0, 1, 2],
        passive: {
            passiveName: "The Hitman and the Seer",
            passiveDescription: "Aphelios has five different basic attacks, each with their own effects. He can switch between them by using his Q ability, Weapon Mastery.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Aphelios_P.png",
        },
        spells: {
            [0]: {
                spellId: "ApheliosQ",
                spellName: "Weapon Mastery: Calibrum",
                spellDescription: "Aphelios gains a basic attack with his sniper rifle, dealing bonus damage and marking the target. He can then follow up with an empowered attack from his off-hand weapon.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ApheliosQCalibrum.png",
            },
            [1]: {
                spellId: "ApheliosW",
                spellName: "Weapon Mastery: Severum",
                spellDescription: "Aphelios gains a basic attack with his scythe pistol, healing himself for a portion of the damage dealt. He can then follow up with an empowered attack from his off-hand weapon.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ApheliosWSeverum.png",
            },
            [2]: {
                spellId: "ApheliosE",
                spellName: "Weapon Mastery: Gravitum",
                spellDescription: "Aphelios gains a basic attack with his gravity cannon, slowing the target. He can then follow up with an empowered attack from his off-hand weapon.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ApheliosEGravitum.png",
            },
            [3]: {
                spellId: "ApheliosR",
                spellName: "Moonlight Vigil",
                spellDescription: "Aphelios unleashes a barrage of moonlit projectiles in a line, damaging enemies hit. He can choose the order in which his guns fire.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/ApheliosR.png",
            }
        }
    },
    {
        id: "Ashe",
        name: "Ashe",
        title: "the Frost Archer",
        lore: "Ashe is the leader of the Avarosan tribe and the warmother of the Freljord. Her people are born warriors, with a strong tradition of fortitude and endurance. Though her mother was lost to her at a young age, Ashe was raised by her devoted father, who taught her the skills of the bow and the importance of empathy. Now, as the Frost Archer, she uses her exceptional abilities to bring her tribe together and to ensure that they will endure even the toughest winters.",
        skins: [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        passive: {
            passiveName: "Frost Shot",
            passiveDescription: "Ashe"s basic attacks slow her targets, causing her to deal increased damage to them.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Ashe_P.png",
        },
        spells: {
            [0]: {
                spellId: "AsheQ",
                spellName: "Ranger"s Focus",
                spellDescription: "Ashe gains bonus attack speed and deals increased damage on her next attack, based on how long she spent focusing.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AsheQ.png",
            },
            [1]: {
                spellId: "AsheW",
                spellName: "Volley",
                spellDescription: "Ashe fires a volley of arrows in a cone, dealing damage and slowing enemies hit.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AsheW.png",
            },
            [2]: {
                spellId: "AsheE",
                spellName: "Hawkshot",
                spellDescription: "Ashe sends her hawk Spirit on a scouting mission, revealing a distant area and gaining gold for each enemy unit killed in the area.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AsheE.png",
            },
            [3]: {
                spellId: "AsheR",
                spellName: "Enchanted Crystal Arrow",
                spellDescription: "Ashe fires a massive arrow of ice in a straight line, stunning and dealing damage to the first enemy champion hit. Subsequent enemies take damage and are slowed.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AsheR.png",
            }
        }
    },
    {
        id: "AurelionSol",
        name: "Aurelion Sol",
        title: "the Star Forger",
        lore: "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.",
        skins: [0, 1, 2],
        passive: {
            passiveName: "Center of the Universe",
            passiveDescription: "Aurelion Sol"s stars deal damage to enemies as they orbit him. He can also travel faster and further by flying alongside his stars.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/AurelionSol_P.png",
        },
        spells: {
            [0]: {
                spellId: "AurelionSolQ",
                spellName: "Starsurge",
                spellDescription: "Aurelion Sol creates an expanding disk, which explodes to stun and damage enemies when it moves too far away from him.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AurelionSolQ.png",
            },
            [1]: {
                spellId: "AurelionSolW",
                spellName: "Celestial Expansion",
                spellDescription: "Aurelion Sol pushes his stars out to grant him more area of effect damage and speed. He can retract the stars to his body, dealing damage again and increasing his defenses.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AurelionSolW.png",
            },
            [2]: {
                spellId: "AurelionSolE",
                spellName: "Comet of Legend",
                spellDescription: "Aurelion Sol takes off and flies, dealing damage and knocking up all enemies in his path.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AurelionSolE.png",
            },
            [3]: {
                spellId: "AurelionSolR",
                spellName: "Voice of Light",
                spellDescription: "Aurelion Sol exhales starfire, dealing damage and slowing all enemies caught in the blast. He can control the direction of the blast by moving.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AurelionSolR.png",
            }
        }
    },
    {
        id: "Azir",
        name: "Azir",
        title: "the Emperor of the Sands",
        lore: "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power. With his buried city risen from the sand, Azir seeks to restore Shurima to its former glory.",
        skins: [0, 1, 2, 3, 4, 5, 6],
        passive: {
            passiveName: "Shurima"s Legacy",
            passiveDescription: "Azir can summon a Sand Soldier by placing a point within range of an enemy unit. Azir"s basic attacks deal bonus magic damage to targets in front of him if he has a Sand Soldier summoned. Sand Soldiers attack with Azir, dealing magic damage to enemies in a line.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Azir_P.png",
        },
        spells: {
            [0]: {
                spellId: "AzirQ",
                spellName: "Conquering Sands",
                spellDescription: "Azir sends all his Sand Soldiers forward, dealing magic damage to all enemies they pass through and shuffling them towards Azir.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AzirQ.png",
            },
            [1]: {
                spellId: "AzirW",
                spellName: "Arise!",
                spellDescription: "Azir summons a Sand Soldier to attack nearby targets for him. He can store multiple Sand Soldiers at once.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AzirW.png",
            },
            [2]: {
                spellId: "AzirE",
                spellName: "Shifting Sands",
                spellDescription: "Azir dashes to one of his Sand Soldiers, damaging enemies. If he hits an enemy champion, he gains a shield.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AzirE.png",
            },
            [3]: {
                spellId: "AzirR",
                spellName: "Emperor"s Divide",
                spellDescription: "Azir summons a wall of soldiers that march forward, knocking back and damaging enemies. The soldiers then remain as a wall, blocking movement and projectiles.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/AzirR.png",
            }
        }
    },
    {
        id: "Bard",
        name: "Bard",
        title: "the Wandering Caretaker",
        lore: "Bard travels through realms beyond the imagination of mortal beings. Some of Valoran"s greatest scholars have spent their lives trying to understand the mysteries he embodies. This enigmatic spirit has been given many names throughout the history of Valoran, but titles such as Cosmic Vagabond and Great Caretaker only capture a fleeting aspect of his true purpose. When the unknowable structure of the universe is threatened, Bard steers all existence away from utter annihilation.",
        skins: [0, 1, 2, 3, 4, 5, 6],
        passive: {
            passiveName: "Traveler"s Call",
            passiveDescription: "Bard periodically spawns a chime on the map, which can be collected by him or his allies to gain experience, mana, and a burst of speed. Additionally, Bard"s basic attacks deal bonus magic damage.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Bard_P.png",
        },
        spells: {
            [0]: {
                spellId: "BardQ",
                spellName: "Cosmic Binding",
                spellDescription: "Bard fires a bolt that will stun the first enemy struck and then travel through them, dealing magic damage to all enemy champions hit.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BardQ.png",
            },
            [1]: {
                spellId: "BardW",
                spellName: "Caretaker"s Shrine",
                spellDescription: "Bard creates a shrine that gradually restores health and mana to allied champions that walk over it. The shrine will decay after a few seconds, lasting longer if Bard remains near it.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BardW.png",
            },
            [2]: {
                spellId: "BardE",
                spellName: "Magical Journey",
                spellDescription: "Bard opens a portal in nearby terrain, allowing him and all allied champions to pass through it and move quickly to a distant location.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BardE.png",
            },
            [3]: {
                spellId: "BardR",
                spellName: "Tempered Fate",
                spellDescription: "Bard sends magical energy arcing to a location, putting all champions, minions, monsters, and turrets hit into stasis. Frozen units are invulnerable, untargetable, and unable to act.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BardR.png",
            }
        }
    },
    {
        id: "Blitzcrank",
        name: "Blitzcrank",
        title: "the Great Steam Golem",
        lore: "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he saw that his purpose could be extended, and modified himself to be a champion in the League of Legends. While Blitzcrank may have been intended to clean up dangerous materials, he now enjoys destroying anything and everything hesees as a threat to the peace and stability of Valoran. Despite his appearance as an unfeeling machine, Blitzcrank has a heart of gold, and goes out of his way to protect the people of Zaun.",
        skins: [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 20],
        passive: {
            passiveName: "Mana Barrier",
            passiveDescription: "When Blitzcrank"s life is brought below 30%, he creates a mana shield equal to 50% of his maximum mana for 10 seconds. The shield decays rapidly and cannot be reapplied for 90 seconds.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Blitzcrank_Passive.png",
        },
        spells: {
            [0]: {
                spellId: "BlitzcrankQ",
                spellName: "Rocket Grab",
                spellDescription: "Blitzcrank fires his right hand, pulling the first enemy struck towards him and dealing magic damage.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BlitzcrankQ.png",
            },
            [1]: {
                spellId: "BlitzcrankW",
                spellName: "Overdrive",
                spellDescription: "Blitzcrank supercharges himself to increase his movement and attack speed for 5 seconds. When this effect ends, Blitzcrank is slowed for a short time.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BlitzcrankW.png",
            },
            [2]: {
                spellId: "BlitzcrankE",
                spellName: "Power Fist",
                spellDescription: "Blitzcrank charges up his fist to make his next attack deal double his total attack damage and knock up his target.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BlitzcrankE.png",
            },
            [3]: {
                spellId: "BlitzcrankR",
                spellName: "Static Field",
                spellDescription: "Blitzcrank emits a static field around him, dealing magic damage to nearby enemies and silencing them for a short duration.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BlitzcrankR.png",
            }
        }
    },
    {
        id: "Brand",
        name: "Brand",
        title: "the Burning Vengeance",
        lore: "As a former member of a powerful Ionian family, Brand was a master of the magical pyre. But he was consumed by a terrible conflagration, turning him into a creature of fiery vengeance. In the time since, Brand has become a brutal, unrelenting force, driven by a burning desire for revenge against those who wronged him.",
        skins: [0, 1, 2, 3, 4, 5, 6, 9, 10],
        passive: {
            passiveName: "Blaze",
            passiveDescription: "Brand"s spells light his targets ablaze, dealing a percentage of their maximum health as magic damage over 4 seconds, and granting Brand bonus movement speed towards them.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Brand_Passive.png",
        },
        spells: {
            [0]: {
                spellId: "BrandQ",
                spellName: "Sear",
                spellDescription: "Brand launches a ball of fire forward, dealing magic damage to the first enemy it hits. If the target is ablaze, Sear will stun the target for a short duration.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BrandQ.png",
            },
            [1]: {
                spellId: "BrandW",
                spellName: "Pillar of Flame",
                spellDescription: "After a short delay, Brand creates a pillar of flame at a target area, dealing magic damage to all enemies within. Targets that are ablaze take additional damage.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BrandW.png",
            },
            [2]: {
                spellId: "BrandE",
                spellName: "Conflagration",
                spellDescription: "Brand blasts a target, dealing magic damage. If the target is ablaze, Conflagration spreads to nearby enemies.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BrandE.png",
            },
            [3]: {
                spellId: "BrandR",
                spellName: "Pyroclasm",
                spellDescription: "Brand unleashes a devastating torrent of fire, dealing magic damage each time it bounces. Targets that are ablaze take additional damage.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BrandR.png",
            }
        }
    },
    {
        id: "Braum",
        name: "Braum",
        title: "the Heart of the Freljord",
        lore: "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into rubble. Bearing an enchanted vault door as his shield, Braum roams the frozen north sporting a mustachioed smile as big as his muscles—a true friend to all those in need.",
        skins: [0, 1, 2, 3, 4, 5, 6, 8, 12],
        passive: {
            passiveName: "Concussive Blows",
            passiveDescription: "Braum"s basic attacks apply Concussive Blows to his target, stacking up to four times. Once the first stack is applied, any allied champion"s basic attack on the target generates an additional stack, and at four stacks the target is stunned and takes magic damage.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Braum_Passive.png",
        },
        spells: {
            [0]: {
                spellId: "BraumQ",
                spellName: "Winter"s Bite",
                spellDescription: "Braum propels freezing ice from his shield, slowing and dealing magic damage to the first enemy hit. Winter"s Bite applies a stack of Concussive Blows and briefly stuns the target if they already have four stacks.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BraumQ.png",
            },
            [1]: {
                spellId: "BraumW",
                spellName: "Stand Behind Me",
                spellDescription: "Braum leaps to a target allied champion or minion. On arrival, he and the target gain armor and magic resistance for a short duration.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BraumW.png",
            },
            [2]: {
                spellId: "BraumE",
                spellName: "Unbreakable",
                spellDescription: "Braum raises his shield, creating a barrier that absorbs incoming damage for a short duration. The first instance of damage blocked by the shield is negated entirely. While the shield is raised, Braum"s basic attacks apply Concussive Blows and his allies" basic attacks apply additional stacks.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BraumE.png",
            },
            [3]: {
                spellId: "BraumR",
                spellName: "Glacial Fissure",
                spellDescription: "Braum slams the ground, creating a fissure that deals magic damage and knocks up enemies. A line of ice persists afterwards, slowing enemies that walk on it.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/BraumR.png",
            }
        }
    },
    {
        id: "Caitlyn",
        name: "Caitlyn",
        title: "theSheriff of Piltover",
        lore: "Renowned as its finest peacekeeper, Caitlyn is also Piltover"s best shot at ridding the city of its elusive criminal elements. She is a patient hunter and a clever trap-setter, and one of the few truly good people in a city that tends to treat everything as a business transaction. Her steadfast refusal to compromise her ideals has made her a symbol of hope and security for her fellow citizens, despite the chaos that grips the world.",
        skins: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 13],
        passive: {
            passiveName: "Headshot",
            passiveDescription: "Caitlyn"s basic attacks and Ace in the Hole apply Headshot to champions and deal bonus damage. When Caitlyn lands a critical hit, she instead gains an amount of bonus attack speed for a short duration.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Caitlyn_Headshot.png",
        },
        spells: {
            [0]: {
                spellId: "CaitlynQ",
                spellName: "Piltover Peacemaker",
                spellDescription: "Caitlyn revs up her rifle for 1 second to unleash a penetrating shot in a line, dealing physical damage to all targets it passes through. It deals 67% damage to minions and monsters. Headshot applies on-hit effects and can critically strike.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CaitlynQ.png",
            },
            [1]: {
                spellId: "CaitlynW",
                spellName: "Yordle Snap Trap",
                spellDescription: "Caitlyn sets a trap to find sneaky yordles. When sprung, the trap reveals and roots the champion for 1.5 seconds and deals magic damage over 4 seconds. Caitlyn can have up to 3 traps active at a time. Yordle Snap Traps last for 90 seconds.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CaitlynW.png",
            },
            [2]: {
                spellId: "CaitlynE",
                spellName: "90 Caliber Net",
                spellDescription: "Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back. Caitlyn can use this ability to jump over walls.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CaitlynE.png",
            },
            [3]: {
                spellId: "CaitlynR",
                spellName: "Ace in the Hole",
                spellDescription: "Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CaitlynR.png",
            }
        }
    },
    {
        id: "Camille",
        name: "Camille",
        title: "the Steel Shadow",
        lore: "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros, overseeing its ascension to greater power—whatever the cost. She sees emotion as a weakness that must be stamped out, and logic as the only guiding principle. With the body of a couturier and the mind of a harsh disciplinarian, Camille is the top of the new-human order. Though Piltover prides itself on its transhuman technology, it was ultimately Camille who achieved the first and last word on the merging of flesh and steel.",
        skins: [0, 1, 2, 3, 4, 5],
        passive: {
            passiveName: "Adaptive Defenses",
            passiveDescription: "Camille"s basic attacks on champions grant a shield based on her maximum health. This shield lasts until it is broken.",
            passiveImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/passive/Camille_Passive.png",
        },
        spells: {
            [0]: {
                spellId: "CamilleQ",
                spellName: "Precision Protocol",
                spellDescription: "Camille"s next basic attack deals bonus physical damage and grants bonus movement speed. This spell can be recast within a short period of time to deal extra damage and slow the target.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CamilleQ.png",
            },
            [1]: {
                spellId: "CamilleW",
                spellName: "Tactical Sweep",
                spellDescription: "Camille blasts in a cone after a delay, dealing physical damage to all enemies hit. Enemies in the outer half of the cone take extra damage and are slowed.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CamilleW.png",
            },
            [2]: {
                spellId: "CamilleE",
                spellName: "Hookshot",
                spellDescription: "Camille fires a hookshot in a target direction, pulling her to the first terrain hit. She can then reactivate Hookshot within a short window of time to fire a second shot. If Camille hits an enemy champion with the second shot, she stuns them and deals bonus magic damage.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CamilleE.png",
            },
            [3]: {
                spellId: "CamilleR",
                spellName: "The Hextech Ultimatum",
                spellDescription: "Camille dashes to target champion, becoming untargetable and leaps into the air with them, knocking away all other champions in an area around them. For a duration, the target champion can"t leave the area around Camille. Camille"s basic attacks deal bonus magic damage to the target.",
                spellImage: "https://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/CamilleR.png",
            }
        }
    }


];



async function seedChampions() {
	try {
		await Champion.bulkCreate(championData);
		console.log("Seed data for Champion table inserted successfully.");
	} catch (error) {
		console.error("Error seeding data for Champion table:", error);
	}
}
module.exports = seedChampions;