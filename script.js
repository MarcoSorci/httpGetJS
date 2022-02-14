// const httpRequest = new XMLHttpRequest();
// httpRequest.onreadystatechange = handleserverresponse
// httpRequest.open('GET', "./assets/data.json")            //ready state 1
// httpRequest.send()            //ready state 2, al 3 scarica il file e esegue potenziali modifiche, al 4 is done

// function handleserverresponse() {
//     console.log("ready state " + httpRequest.readyState);
//     console.log("status " + httpRequest.status);
//     console.log("response " + httpRequest.responseText);
//     if (httpRequest.readyState===XMLHttpRequest.DONE /*("done" is state 4)*/ && httpRequest.status === 200) {
//         const arrayOfUsers = JSON.parse(httpRequest.responseText)
//         console.log(arrayOfUsers);
//     }
// }

fetch("./assets/data.json")
.then((response)=>response.json())
.then(onDataReady)
.catch(onError);

// function manageResponse(response) {
//     // console.log(response.json()); //can't use the .json() again after this 
//     return response.json()
// }

function onDataReady(data) {
    for (const user of data) {
        console.log("name: " + user.username);
    }
}

function onError(error) {
    console.log(error);
}