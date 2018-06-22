$(document).ready(function () {

    var url = "https://api.myjson.com/bins/hg7fm";
    var fetchData = fetch(url, {
        method: "GET",
    })
    fetch(url)
        .then(onDataFetched)
        .catch(onDataFetchedFailed);

    function onDataFetched(response) {
        response.json()
            .then(onConversionToJsonSuccessful)
            .catch(onConversionToJsonFailed);
    }

    function onDataFetchedFailed(error){
        console.log("Failed to import json", error);
    }
    
    function onConversionToJsonFailed(error){
        console.log("Not a json mate", error);
    }
    
    function onConversionToJsonSuccessful(json){
        console.log("success", json);
        url = json;
    }
    
})
