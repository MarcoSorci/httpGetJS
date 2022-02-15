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
    .then((response) => response.json())
    .then(onDataReady)
    .catch(onError);

// function manageResponse(response) {
//     // console.log(response.json()); //can't use the .json() again after this 
//     return response.json()
// }

function onDataReady(data) {
    const list = document.getElementById("book-list")
    for (const book of data) {
        const listElement = document.createElement("li")

        listElement.className = "book-card"

        addTextToHtmlElement(listElement, book.title, true, "bold large-font"), //no commas in the classnames

        addTextToHtmlElement(listElement, book.author, true, "large-font")

        addTextToHtmlElement(listElement, book.price)

        list.appendChild(listElement)

        //innerhtml accepts text and HTML, createtextnode just text, textcontent is never used
    }
}

function addTextToHtmlElement(htmlElement, text, isNewLine = false, className) {
    const span = document.createElement("span")  //doing this because without it the text does not have any tags

    span.className += className + " "  //the space is in case you add another class in the future

    const textnode = document.createTextNode(text)
    span.appendChild(textnode)
    htmlElement.appendChild(span)
    if (isNewLine) {
        const newline = document.createElement("br")
        htmlElement.appendChild(newline)
    }
}

function onError(error) {
    console.log(error);
}