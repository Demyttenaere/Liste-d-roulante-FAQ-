const allCross = document.querySelectorAll('.visible-pannel img');
/* Renvoie un tableau de toutes les images dans visible pannel*/



allCross.forEach(icone =>{ 
/*Pour chaque élément du tableau allCross faire : */

icone.addEventListener('click', function(){
/*on veut definir une fonction à chaque clique sur icone qui n'est pas encore defini*/

const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
/* On recupere la hauteur grace a scrollHeight pour la placer dans height */

const currentChoice = this.parentNode.parentNode.childNodes[3];
/* On recup le paragraphe grace a son enplacement */
/*var gras = document.getElementById('test');*/

const titleChoice = this.parentNode.childNodes[1];

if(this.src.includes('icon-arrow-down')){ /* On definit l'icone */
        this.src ='icon-arrow-up.png'; 
        /*Une fois cliquer on veut changer l'icone, on donne la nouvelle source */
        gsap.to(currentChoice, {duration:0.2, height : height+18, opacity:1, margin:"-10px 0px -3px 0px"});
        /* On importe gsap dans l'HTML pour l'utiliser ici, très pratique ! On définit ensuite à l'intèrieur notre point de départ et les modifications */
        
        titleChoice.style.fontWeight="bold";
    } 
    else if (this.src.includes('icon-arrow-up')){   
        /*On fait l'inverse du if pour fermer le tou*/ 
        this.src ='icon-arrow-down.svg';
        gsap.to(currentChoice, {duration:0.2, height : 0, opacity:0, padding: "0px 0px 0px 0px"})
        titleChoice.style.fontWeight="400";
    }
})
})