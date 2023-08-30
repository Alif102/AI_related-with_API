
const CardFetch = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/ai/tools")
    const data = await res.json();
    // console.log(data.data.tools) ;
    toolsData = data.data.tools;
    displayCards(toolsData);
    


}

const displayCards = (cardsData)=> {

    const CardContainer = document.getElementById('card-container');
    cardsData.forEach((cardData) => {
    console.log(cardData);
    const cardElement = document.createElement('div');
    cardElement.classList = 'card w-[350px] bg-blue-100 shadow-xl'
    cardElement.innerHTML = `
    <figure><img src=${cardData.image} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>

    
    ` 
    CardContainer.appendChild(cardElement);

    })

}

CardFetch();