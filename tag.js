window.onload = function(){
    var inject = ""
    var tagcontainer = document.getElementById("tagcontainer").innerHTML
    var tagfetched = document.getElementsByTagName("tag").item(0).classList
    for (let i of tagfetched) {
        console.log(`Tag ${i} Found`)
        inject += `<span class='tag'>#${i}</span>`
    }
    document.getElementById("tagcontainer").innerHTML += inject
    };