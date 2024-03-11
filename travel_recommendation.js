
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


    console.log('recommendations => ', recommendations);
    console.log('filteredRecommendations => ', filteredRecommendations)

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
            filtered = "nothing to recommend"
            break;
    }
    return filtered;
}
