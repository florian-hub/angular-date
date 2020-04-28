import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth = true;
  numeroDeQuestion = 0 ;
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';

  entries = [
    {
      header: 'header',
      content: 'content'
    }
  ]

  appareils = [
    { 
      date: '–13,7 milliards d’années,',
      event: 'Le Big Bang.'
    }, 
    {
      date: '– 4,5 milliards',
      event:'La formation du système solaire.'
 },
    {
      date: '– 4 milliards',
      event:'La formation de la Terre. '
},
    {
      date: '– 3,8 milliards',
      event:'Les premières traces de vie sur la Terre. '
},
    {
      date: '– 220 millions',
      event:'La vie sort de la mer.' 
},
    {
      date: '– 200 millions',
      event:'Les premiers mammifères.'
 },
    {
      date: '– 2,8 millions d’années',
      event:'Apparition du genre Homo, dans la Corne de l’Afrique.' 
},
    {
      date: '– 450 000',
      event:'L’homme de Néandertal, probablement en Europe de l’Ouest.'
 },
    {
      date: '– 400 000',
      event:'Maîtrise du feu (plus anciennes traces découvertes, en Europe).'
 },
    {
      date: '– 300 000',
      event:'Apparition de l’Homo sapiens.'
 },
    {
      date: '– 100 000',
      event:'Les premiers rituels funéraires, dans la grotte de Qazfeh en Israël. '
},
    {
      date: '– 65 000',
      event:'Première peinture rupestre connue (la grotte de la Pasiega en Espagne).'
 },
    {
      date: '– 60 000',
      event:'Premier voyage en bateau par des Homo sapiens (dans le sud de l’Océanie).'
 },
    {
      date: '– 40 000',
      event:'Première sculpture connue, la Vénus de Hohle Fels en Allemagne.'
 },
    {
      date: '– 35 000 ans',
      event:'Dessins de quatorze animaux différents, notamment chevaux, rhinocéros et panthères, dans la grotte Chauvet en Ardèche (France).' 
},
    {
      date: '– 30 000',
      event:'Disparition de l’homme de Néandertal. '
},
    {
      date: '– 10 000',
      event:'Début du néolithique au Proche-Orient ; culture des plantes et domestication des animaux.'
    }, 

    {
      date: ' – 5 000',
      event:'Apparition des premières villes, en Mésopotamie'
},
    {
      date: ' – 4 500',
      event:'Premières sépultures mégalithiques (le tumulus de Bougon dans les Deux-Sèvres)' 
},
    {
      date: '– 3 500',
      event:'Domestication du cheval (dans l’actuel Kazakhstan)' 
},
    {
      date: '– 3 500',
      event:'L’écriture apparaît, en Mésopotamie'
},
    {
      date: ' – 3 500',
      event:'Invention de la roue en Mésopotamie'
},
    {
      date: ' – 2 500',
      event:'Premières monnaies, dans l’empire d’Akkad en Mésopotamie'
},
    {
      date: ' – 2 000',
      event:'Premier texte de fiction connu L’Épopée de Gilgamesh, texte sumérien' 
},
    {
      date: '– 1 590',
      event:'Premières momies, de pharaons sur la rive gauche du Nil' 
},
    {
      date: '– 1 000',
      event:'Construction du Premier Temple de Jérusalem' 
},
    {
      date: '– 800',
      event:'Premières versions de la Bible et de l’Odyssée' 
},
    {
      date: '– 753',
      event:'Fondation de Rome' 
},
    {
      date: '– 600',
      event:'Le moulin à vent est inventé en Perse' 
},
    {
      date: '– 587',
      event:'Destruction du premier temple de Jérusalem' 
},
    {
      date: '– 540',
      event:'Mort de Siddhârtha Gautama, Bouddha historique' 
},
    {
      date: '– 500',
      event:'Vie de Confucius, en Chine' 
},
    {
      date: '– 479',
      event:'Académie de Platon à Athènes' 
},
    {
      date: '– 300',
      event:'Invention du papier, en Chine'
},
    {
      date: ' – 300',
      event:'Le verre transparent, en Grèce'
},
    {
      date: ' – 273',
      event:'Début du règne d’Ashoka en Inde'
},
    {
      date: ' – 221',
      event:'Qin Shi Huang, premier empereur chinois ; début de la construction de la muraille de Chine' 
},
    {
      date: '33',
      event:'Mort de Jésus à Jérusalem'
},
    {
      date: ' 64',
      event:'Incendie de Rome, début des persécutions contre les chrétiens'
},
    {
      date: ' 224',
      event:'Début de l’Empire sassanide en Perse' 
},
    {
      date: '380',
      event:'Édit de Théodose autorisant la seule religion chrétienne' 
},
    {
      date: '395',
      event:'Partage de l’Empire romain en empires d’Occident et d’Orient'
},
    {
      date: ' 476',
      event:'Chute de l’Empire romain d’Occident' 
},
    {
      date: '570',
      event:'Naissance de Mahomet' 
},
    {
      date: '622',
      event:'Début du calendrier musulman' 
},
    {
      date: '683',
      event:'Apparition de la cité de Sriwijaya en Indonésie, première puissance du monde' 
},
    {
      date: '940',
      event:'Les premiers billets de banque, en Chine sous les Song du Nord' 
},
    {
      date: '1025',
      event:'Déclin de Sriwijaya après une défaite contre une dynastie du sud de l’Inde'
},
    {
      date: ' 1054',
      event:'Schisme entre l’Église catholique et l’Église orthodoxe d’Orient' 
},
    {
      date: '1099',
      event:'Prise de Jérusalem par les croisés pendant la première croisade' 
},
    {
      date: '1146',
      event:'L’ogive apparaît en architecture, notamment avec la basilique de Vézelay'
},
    {
      date: ' 1200',
      event:'Début de la superpuissance économique de Bruges' 
},
    {
      date: '1206-1227',
      event:'Empire de Gengis Khan' 
},
    {
      date: '1235',
      event:'Début de l’empire du Mali' 
},
    {
      date: '1271',
      event:'Conquête de la Chine par le Mongol Kubilaï Khan' 
},
    {
      date: '1337-1453',
      event:'Guerre de Cent Ans en Europe' 
},
    {
      date: '1347-1350',
      event:'Peste noire en Europe' 
},
    {
      date: '1350',
      event:'Venise prend le pouvoir en Occident' 
},
    {
      date: '1371',
      event:'Haijin (interdiction des voyages en mer) par l’empereur de Chine'
},
    {
      date: ' 1390',
      event:'Début du royaume Kongo en Afrique' 
},
    {
      date: 'Début du XIVe siècle',
      event:'Invention de la peinture à l’huile' 
},
    {
      date: '1410',
      event:'La caravelle est inventée à Gibraltar et améliorée par les Portugais' 
},
    {
      date: '1453',
      event:'Les Turcs s’emparent de Constantinople ; fin de l’Empire byzantin' 
},
    {
      date: '1455',
      event:'La Bible, premier livre imprimé en caractères mobiles' 
},
    {
      date: '1492',
      event:'Découverte de l’Amérique' 
},
    {
      date: '1498',
      event:'Vasco de Gama contourne l’Afrique pour atteindre les Indes' 
},
    {
      date: '1517',
      event:'Les « 95 thèses » de Luther en Allemagne' 
},
    {
      date: '1519-1522',
      event:'Magellan effectue le premier tour du monde' 
},
    {
      date: '1526',
      event:'Début de l’Empire moghol en Inde' 
},
    {
      date: '1537',
      event:'Création de la première Bourse du monde à Anvers'
},
    {
      date: ' 1539',
      event:'Ordonnance de Villers-Cotterêts et déclin du latin en Europe' 
},
    {
      date: '1541',
      event:'Calvin fonde l’Église réformée à Genève' 
},
    {
      date: '1543',
      event:'Découverte de l’héliocentrisme par Copernic' 
},
    {
      date: '1564',
      event:'Invention du violon à Crémone' 
},
    {
      date: '1571',
      event:'Bataille de Lépante ; fin de l’expansionnisme ottoman' 
},
    {
      date: '1581',
      event:'Ouverture du premier musée ouvert au public la galerie des Offices à Florence' 
},
    {
      date: '1602',
      event:'Fondation de la Compagnie hollandaise des Indes orientales' 
},
    {
      date: '1618-1648',
      event:'Guerre de Trente Ans entre catholiques et protestants du Saint-Empire' 
},
    {
      date: '1620',
      event:'Début de la puissance d’Amsterdam' 
},
    {
      date: '1679',
      event:'Habeas Corpus en Angleterre'
},
    {
      date: ' 1682',
      event:'Couronnement de Pierre Ier en Russie' 
},
    {
      date: '1687',
      event:'Formulation mathématique de la gravitation par Newton ; invention du piano, à Padoue'},
    {
      date: ' 1689',
      event:'Bill of Rights en Angleterre'
},
    {
      date: ' 1694',
      event:'Création de la première banque centrale, en Angleterre' 
},
    {
      date: '1751-1772',
      event:'Parution de l’Encyclopédie à Paris' 
},
    {
      date: '1759',
      event:'Invention du chronomètre par John Harrison' 
},
    {
      date: '1763',
      event:'Fin de la guerre de Sept Ans ; début de l’hégémonie britannique' 
},
    {
      date: '1769',
      event:'Machine à vapeur de James Watt'
},
    {
      date: ' 1776',
      event:'Déclaration d’indépendance américaine' 
},
    {
      date: '1789',
      event:'Déclaration des droits de l’homme et du citoyen à Paris' 
},
    {
      date: '1804',
      event:'Premier Empire en France' 
},
    {
      date: '1806',
      event:'Dissolution du Saint-Empire romain germanique' 
},
    {
      date: '1812',
      event:'La première locomotive entre en service' 
},
    {
      date: '1815',
      event:'Acte final du congrès de Vienne' 
},
    {
      date: '1822',
      event:'Indépendance du Brésil puis des autres pays d’Amérique du Sud' 
},
    {
      date: '1826',
      event:'Invention de la photographie'
},
    {
      date: ' 1840',
      event:'Invention du télégraphe'
},
    {
      date: ' 1841',
      event:'Invention du tube de peinture souple' 
},
    {
      date: '1848',
      event:'Printemps des peuples en Europe' 
},
    {
      date: '1868',
      event:'Début de l’ère Meiji au Japon'
},
    {
      date: ' 1869',
      event:'Inauguration du canal de Suez' 
},
    {
      date: '1870',
      event:'Unité italienne' 
},
    {
      date: '1871',
      event:'Proclamation de l’Empire allemand et Commune de Paris' 
},
    {
      date: '1876',
      event:'Le téléphone' 
},
    {
      date: '1878',
      event:'La lampe électrique'
},
    {
      date: ' 1885',
      event:'Le vaccin contre la rage'
},
    {
      date: ' 1886',
      event:'Le moteur à explosion' 
},
    {
      date: '1887',
      event:'Le gramophone' 
},
    {
      date: '1894',
      event:'Droit de vote des femmes et salaire minimum, en Nouvelle-Zélande'
},
    {
      date: ' 1895',
      event:'Le cinéma, en France' 
},
    {
      date: '1900',
      event:'Exposition universelle de Paris' 
},
    {
      date: '1908',
      event:'La Ford T et la production à la chaîne' 
},
    {
      date: '1914',
      event:'Attentat de Sarajevo' 
},
    {
      date: '1915',
      event:'Génocide arménien'
},
    {
      date: ' 1917',
      event:'Entrée en guerre des États-Unis' 
},
    {
      date: '1917',
      event:'Révolutions russes' 
},
    {
      date: '1918',
      event:'Victoire des Alliés et armistice' 
},
    {
      date: '1919',
      event:'Traité de Versailles créant la Société des Nations' 
},
    {
      date: '1922',
      event:'Fondation de l’URSS' 
},
    {
      date: '1923',
      event:'Atatürk devient président de la Turquie sur les ruines de l’Empire ottoman' 
},
    {
      date: '1926',
      event:'La télévision' 
},
    {
      date: '1928',
      event:'La pénicilline' 
},
    {
      date: '1929',
      event:'Grande crise économique mondiale' 
},
    {
      date: '1933',
      event:'Grande famine en Russie ; Hitler chancelier d’Allemagne' 
},
    {
      date: '1936-1938',
      event:'Procès de Moscou' 
},
    {
      date: '1939',
      event:'L’Allemagne envahit la Pologne'
},
    {
      date: ' 1941',
      event:'Attaque japonaise de Pearl Harbor'
},
    {
      date: ' 1942-1943',
      event:'Bataille de Stalingrad'
},
    {
      date: ' 1944',
      event:'Débarquement allié en Normandie ; signature des accords de Bretton Woods'
},
    {
      date: ' 1945',
      event:'Capitulation allemande, découverte des camps d’extermination ; bombardement nucléaire d’Hiroshima et de Nagasaki ; capitulation japonaise'
},
    {
      date: ' 1946',
      event:'Procès à Nuremberg des dirigeants nazis'
},
    {
      date: ' 1947',
      event:'Plan Marshall pour la reconstruction de l’Europe occidentale ; plan Jdanov d’aide de l’URSS pour l’Europe de l’Est ; indépendance de l’Inde' 
},
    {
      date: '1948',
      event:'Création de l’État d’Israël ; assassinat de Gandhi ; Mao Tsé-toung prend le pouvoir en Chine continentale' 
},
    {
      date: '1949',
      event:'Naissance de l’OTAN' 
},
    {
      date: '1950-1953',
      event:'Guerre de Corée'
},
    {
      date: ' 1951',
      event:'Création de la Communauté européenne du charbon et de l’acier (CECA)' 
},
    {
      date: '1954',
      event:'La France renonce à l’Indochine ; début de la guerre en Algérie'
},
    {
      date: ' 1955',
      event:'Conférence de Bandung en Indonésie et pacte de Varsovie' 
},
    {
      date: '1956',
      event:'Révolte en Hongrie ; indépendances de la Tunisie et du Maroc ; invention du container' 
},
    {
      date: '1957',
      event:'Traité de Rome créant la Communauté économique européenne (CEE)' 
},
    {
      date: '1960',
      event:'Indépendances africaines' 
},
    {
      date: '1962',
      event:'Crise de Cuba' 
},
    {
      date: '1963',
      event:'Assassinat du président Kennedy' 
},
    {
      date: '1968',
      event:'Assassinat de Martin Luther King ; printemps de Prague, et Mai en Europe' 
},
    {
      date: '1971',
      event:'Fin de l’étalon or et flottement du dollar' 
},
    {
      date: '1973',
      event:'Le premier téléphone portable commercialisé'
},
    {
      date: ' 1975',
      event:'Fin de la guerre du Vietnam' 
},
    {
      date: '1978',
      event:'Ouverture de la Chine au monde sous l’égide de Deng Xiaoping' 
},
    {
      date: '1981',
      event:'Le premier ordinateur portable est commercialisé' 
},
    {
      date: '1985',
      event:'Gorbatchev devient Secrétaire général du Comité central du Parti communiste de l’Union soviétique' 
},
    {
      date: '1987',
      event:'Première Intifada en Palestine' 
},
    {
      date: '1989',
      event:'Chute du mur de Berlin' 
},
    {
      date: '1990',
      event:'Libération de Nelson Mandela en Afrique du Sud' 
},
    {
      date: '1991',
      event:'Chute de l’URSS ; premier site Internet' 
},
    {
      date: '1992',
      event:'Traité de Maastricht en Europe' 
},
    {
      date: '2000',
      event:'3G'},
    {
      date: ' 2001',
      event:'Attentat à New York' 
},
    {
      date: '2002',
      event:'L’euro' 
},
    {
      date: '2008',
      event:'Crise des subprimes ; la 4G'
},
    {
      date: ' 2017',
      event:'La Blockchain'
    }
  ];

  constructor() {
  }
  questionSuivante() {
    this.numeroDeQuestion++;
    console.log(this.numeroDeQuestion);
}
recommencer() {
  this.numeroDeQuestion=0;
  console.log(this.numeroDeQuestion);
}
retour() {
  this.numeroDeQuestion--;
  console.log(this.numeroDeQuestion);
}

// addEntry() {
//   this.entries.push({
//     header: 'header',
//     content: 'content'
//   })
// }

// removeEntry() {
//   this.entries.pop();
// }

// onHeaderClick(event) {
//   if (!this.expandEnabled) {
//     event.stopPropagation();
//   }
// }

// onDotClick(event) {
//   if (!this.expandEnabled) {
//     event.stopPropagation();
//   }
// }

// onExpandEntry(expanded, index) {
//   console.log(`Expand status of entry #${index} changed to ${expanded}`)
// }

// toggleSide() {
//   this.side = this.side === 'left' ? 'right' : 'left';
// }






}

