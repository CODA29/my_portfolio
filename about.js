gsap.registerPlugin(Flip);

const cards = document.querySelectorAll(".card");
// loop through each cards and  get their indexes 
cards.forEach((card, index)=> {
    
    card.addEventListener('click',()=> {
       
        // get state 
        const state = Flip.getState(cards);

        

        const isCardActive = card.classList.contains("active");

        // add is-inactive class to the unclicked cards
        cards.forEach((otherCard, otherIdx) => {
            
            otherCard.classList.remove("active");
            otherCard.classList.remove("is-inactive");
            if(!isCardActive && index !== otherIdx){
                otherCard.classList.add("is-inactive");
                otherCard.removeAttribute("data-aos");
                
            };
        });
        // add the active class to the clicked card
        if(!isCardActive){
            card.classList.add("active");
            card.removeAttribute("data-aos")
        } 

        
        Flip.from(state, {
            duration: .5,
            ease: "expo.out",
            absolute: true,
            
        })
    });
    

}) 
