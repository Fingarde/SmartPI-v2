let menu = document.getElementsByClassName('menu-item');
let index = 0;
let show = 6;

$(window).keydown( (key) => 
{
    if(show == 0) {
        document.getElementById('menu').classList.remove('menu-hide')
        
    }

    show = 6;

    menu[index].classList.remove('menu-item-selected')
    if(key.which == 39)
    {
        index++
        
        if(index > menu.length - 1) index = 0
    }
    else if(key.which == 37)
    {
        index--

        if(index < 0) index = menu.length - 1
    }

    menu[index].classList.add('menu-item-selected')
});

function hideMenu() {
    if(show > 0)
        show--
    else
        document.getElementById('menu').classList.add('menu-hide')
}

let days = new Array('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche')
let months = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'decembre')

function clock()
{
	let date = new Date();

	let day = days[date.getDay()];
	let month = months[date.getMonth()];
       
    document.getElementsByClassName('date')[0].innerHTML = day + ' ' + ('0' + date.getDate()).slice(-2) + ' ' + month;
	document.getElementsByClassName('hour')[0].innerHTML = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
}

function getMeteo()
{
	$.get('https://api.openweathermap.org/data/2.5/weather?q=Aubi%C3%A8re,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric', (data) => 
	{
		document.getElementsByClassName('temp')[0].innerHTML = Math.round(data.main.temp) + '°'
		   
		document.getElementsByClassName('icon')[0].src = 'img/meteo/' + data.weather[0].icon + '.svg'

		let description

		switch(data.weather[0].icon)
		{
			case '01d':
			case '01n':
				description = "Beau temps"
				break
			case '02d':
			case '02n':
				description = "Partiellement nuageux"
				break
			case '03d':
			case '03n':
				description = "Nuageux"
				break
			case '04d':
			case '04n':
				description = "Très nuageux"
				break
			case '09d':
			case '09n':
				description = "Forte pluie"
				break
			case '10d':
			case '10n':
				description = "Pluie"
				break
			case '11d':
			case '11n':
				description = "Tonnerre"
			case '13d':
			case '13n':
				description = "Neige"
				break
			case '50d':
			case '50n':
				description = "Brouillard"
				break
		}

		document.getElementsByClassName('weather')[0].innerHTML = description
		
	})
}

let cours = [
    {"nom": "Bases de la Programmation orientée objets", "salle": "B23", "horaire": ["08:00", "10:00"]},
    {"nom": "Graphes et Langages", "salle": "B14", "horaire": ["10:00", "12:00"]},
    {"nom": "Graphes et Langages", "salle": "A12", "horaire": ["13:30", "15:30"]},
    {"nom": "Bases de la Programmation orientée objets", "salle": "A18", "horaire": ["15:30", "17:30"]}
]

function calendar() {
    let calendar = document.getElementById("calendar")

    cours.forEach(cour => {
        let div = document.createElement("div");
        div.classList.add('cours')
       
        // Nom
        let name = document.createElement("div");
        name.classList.add('cours-name', 'primary-font')

        let textName = document.createTextNode(cour.nom);
        name.appendChild(textName);

        // Salle
        let salle = document.createElement("div");
        salle.classList.add('cours-salle', 'secondary-font')

        let textSalle = document.createTextNode(cour.salle);
        salle.appendChild(textSalle);

         // Salle
         let horaire = document.createElement("div");
         horaire.classList.add('cours-horaire', 'secondary-font')
 
         let textHoraire = document.createTextNode(cour.horaire.join(" à "));
         horaire.appendChild(textHoraire);

        div.append(name)
        div.append(salle)
        div.append(horaire)
        calendar.appendChild(div);
    })
   
}

let bgs = [
    "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/8c69b0074168eb4eed9d7c72890e9bd7/photo-1591972578732-fc089819c722.jpg",
    "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2405x1600/86075e5d12e96b8e6431dfc217d94acd/photo-1592010554720-51a950bda4cb.jpg",
    "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2405x1600/4997c0c2151c29f5ea3579413c49f08a/photo-1591167844762-3c3456a61d8d.jpg",
    "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2398x1600/2902177bdf4aee3234027c5eb0695aa8/photo-1593223772770-1841a123740a.jpg",
    "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/33ba9f40bff6c6995979ff288e1db798/photo-1592436078279-b5971be2d8fc.jpg",
    "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2407x1600/8199131a338ef2c079c449428092ad31/photo-1563364664-399838d1394c.jpg"
]

function wallpaper() {
    $('body').bgswitcher({
        images: bgs,
        effect: "fade",
        interval: 5000

});
    //document.body.style.background = `url("${bgs[Math.floor( Math.random() * bgs.length)]}")`
}

wallpaper()
calendar()
getMeteo()
clock()

setInterval(wallpaper, 1000)
setInterval(hideMenu, 1000)
setInterval(getMeteo, 5 * 60 * 1000) // every 5min
setInterval(clock, 500);