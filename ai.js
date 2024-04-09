const loadData = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
    const data = await res.json();
    const ais = data.data.tools;
    // console.log(data);

    // console.log(ais);
    displayData(ais);

}

const displayData = ais => {
    const aiContainer = document.getElementById('AI-container');
    // console.log(ais);

    ais = ais.slice(0, 6);
    ais.forEach(ai => {
        const aiCard = document.createElement('div');
        aiCard.classList = `card card-compact  bg-base-100 shadow-2xl`;
        aiCard.innerHTML = ` 
        <figure>
            <img src="${ai.image}" alt="${ai.name}" />
        </figure>
        
        <div class="text-xl  p-2 ml-2">
            <p class="font-bold ">Features :</p>
            <ol class="list-decimal">
            <li class='font-semibold ml-4'>${ai.features[0]}</li>
            <li class='font-semibold ml-4'>${ai.features[1]}</li>
            <li class='font-semibold ml-4'>${ai.features[2]}</li>
            
            </ol>
        </div>
        <hr>
        <div>
            <p class="font-bold p-2 ml-2 ">${ai.name} </p>  
            <p class="font-bold p-2 ml-2 ">${ai.published_in} </p>
        </div>
        <div class="card-actions justify-center">
            <button onclick="loadDetails('${ai.id}')" class="btn btn-primary ">Show Details</button>
        </div>
    
      `;
        aiContainer.appendChild(aiCard);
    })

}
loadData();
const loadDetails = async (id) => {
    // console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    const aiDetais = data.data
    console.log(aiDetais);
    displayDetails(aiDetais);

}
const displayDetails = (aiDetais) => {

    const aiDescription = document.getElementById('ai-description');
    aiDescription.classList = `font-semibold text-xl p-5`
    aiDescription.innerText = aiDetais.description;

    const con1 = document.getElementById('con1');
    // con1.innerHTML=`flex grow justify-center`;
    // plan 1 
    const plan1name = document.getElementById('plan1-name');
    const plan1price = document.getElementById('plan1-price');
    plan1name.innerText = aiDetais.pricing[0].plan;
    plan1name.classList = `p-5 text-center text-xl`;
    plan1price.innerText = aiDetais.pricing[0].price;
    plan1price.classList = `p-5 text-center text-xl`;
    // plan 2
    const plan2name = document.getElementById('plan2-name');
    const plan2price = document.getElementById('plan2-price');
    plan2name.innerText = aiDetais.pricing[1].plan;
    plan2name.classList = `p-5 text-center text-xl`;
    plan2price.innerText = aiDetais.pricing[1].price;
    plan2price.classList = `p-5 text-center text-xl`;
    // // plan3 
    const plan3name = document.getElementById('plan3-name');
    const plan3price = document.getElementById('plan3-price');
    plan3name.innerText = aiDetais.pricing[2].plan;
    plan3name.classList = `p-4 text-center text-xl`;
    plan3price.innerText = aiDetais.pricing[2].price;
    plan3price.classList = `p-4 text-center text-xl`;

    // fearure 
    const fli1 = document.getElementById('fli1');
    fli1.innerHTML=aiDetais.features['1'].feature_name;
    fli1.classList=`px-3  text-md`;

    const fli2 = document.getElementById('fli2');
    fli2.innerHTML=aiDetais.features['2'].feature_name;
    fli2.classList=`px-3  text-md`;

    const fli3 = document.getElementById('fli3');
    fli3.innerHTML=aiDetais.features['3'].feature_name;
    fli3.classList=`px-3  text-md`;

    // integration 
    const ili1 = document.getElementById('ili1');
    ili1.innerHTML=aiDetais.integrations[0];
    ili1.classList=`px-3  text-md`;

    const ili2 = document.getElementById('ili2');
    ili2.innerHTML=aiDetais.integrations[1];
    ili2.classList=`px-3  text-md`;

    const ili3 = document.getElementById('ili3');
    ili3.innerHTML=aiDetais.integrations[2];
    ili3.classList=`px-3  text-md`;



    // logo 

    const logo= document.getElementById('logo');
    const img=document.createElement('img');
    img.src= aiDetais.image_link[0]
    logo.textContent=``;
    logo.appendChild(img);
    






    // call of modal function
    show_details_modal.showModal()

}