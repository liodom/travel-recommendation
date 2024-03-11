
async function getData(){
    let recommendations;
    let filteredRecommendations;

    // FETCH RECOMMENDATIONS
    await fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => recommendations = data)
    .catch(error => console.log(error));
    
        
    // GET TEXT FROM TEXT INPUT
    const recommendationSearchInputText = document.getElementById("input-recommendation").value;
    const lowerCaseInput = recommendationSearchInputText.toLowerCase();

    // FILTER RECOMMENDATIONS
    filteredRecommendations = filterRecommendations(recommendations, lowerCaseInput)
    
    // DISPLAY RESULTS
    const searchResultsContainer = document.querySelector(".search-results");
    searchResultsContainer.classList.add("show")

    console.log('filtered Recommendations => ', filteredRecommendations)
    console.log('filtered Recommendations.length => ', filteredRecommendations.length)

    const results = filteredRecommendations.length > 0 ? 'cities' in filteredRecommendations[0] ? filteredRecommendations.reduce((acc, curr) => [...acc, curr.cities], []).map(recommendation => createResultCard(recommendation)).join("") : filteredRecommendations.map(recommendation => createResultCard(recommendation)).join("") : 'no results' ;
    console.log('results => ', results)

    searchResultsContainer.innerHTML = results;


    
    // CLEAR INPUT TEXT FIELD
    
    
    console.log('recommendations => ', recommendations);
    console.log('filteredRecommendations => ', filteredRecommendations)
    
}

function createResultCard(recommendation){
    const {imageUrl, name, description} = recommendation;
    return `
        <div class='result-element'>
            <img src=${imageUrl} alt=${name} />

            <div>
                <span>${name}</span>
                <p>${description}</p>
                <button>Visit</button>
            </div>
        </div>
    `
}

function clearSearchResults(){ 
    // DISPLAY RESULTS
    const searchResultsContainer = document.querySelector(".search-results");
    searchResultsContainer.classList.remove("show")
}

function filterRecommendations(Allrecommendations, lowerCaseText) {
    let filtered;
    
    switch(lowerCaseText){
        case 'beach':
            case 'beaches':
            filtered = Allrecommendations["beaches"]
            break;
        case 'temple':
        case 'temples':
            filtered = Allrecommendations["temples"]
            break;
        case 'countries':
        case 'country':
            filtered = Allrecommendations["countries"]
            break;
        default:
            filtered = ""
            break;
    }
    return filtered;
}
