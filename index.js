
var placeList = [
    { name: "New York", time: "Fri 27 Nov 2014", desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", tickets: "Buy Tickets" },
    { name: "Singapore", time: "Tue 25 Aug 2012", desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", tickets: "Buy Tickets" },
    { name: "Los Angeles", time: "Wed 15 Dec 2019", desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", tickets: "Buy Tickets" },
]
for (let i = 0; i < placeList.length; i++) {
    var place = placeList[i];
    var nameTextNode = document.createTextNode(place.name);
    var timeTextNode = document.createTextNode(place.time);
    var descTextNode = document.createTextNode(place.desc);
    var ticketsTextNode = document.createTextNode(place.tickets);
    var head = document.createElement("H3");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var a = document.createElement("A");


    head.appendChild(nameTextNode);


    para1.appendChild(timeTextNode);

    para2.appendChild(descTextNode);

    a.appendChild(ticketsTextNode);

    head.setAttribute("class", "place-heading");
    para1.setAttribute("class", "place-time");
    para2.setAttribute("class", "place-desc");
    a.setAttribute("src", "");
    a.setAttribute("class", "btn s-full-width");

    var img = document.createElement("IMG");
    var divPlaceBody = document.createElement("DIV");

    divPlaceBody.appendChild(head);
    divPlaceBody.appendChild(para1);
    divPlaceBody.appendChild(para2);
    divPlaceBody.appendChild(a);

    divPlaceBody.setAttribute("class", "place-body");
    img.setAttribute("src", "./assets/img/place/place 1.jpg");
    img.setAttribute("class", "place-img");
    img.setAttribute("alt", "New York");

    var div = document.createElement("DIV");

    div.appendChild(img);
    div.appendChild(divPlaceBody);
    div.setAttribute("class", "col col-third mt-16 s-col-full");

    document.getElementsByClassName("place-list")[0].appendChild(div);
}


function addNewItem(){

    let inputHeadAdd = document.getElementsByClassName("input-add")[0].value,
        inputHeadTextNode = document.createTextNode(inputHeadAdd),
        inputDateAdd = document.getElementsByClassName("input-add")[1].value,
        inputDateTextNode = document.createTextNode(inputDateAdd),
        inputDescAdd = document.getElementsByClassName("input-add")[2].value,
        inputDescTextNode = document.createTextNode(inputDescAdd),
        header = document.createElement("h2"),
        date = document.createElement("P"),
        desc = document.createElement("P");
        aadd = document.createElement("A");

    header.appendChild(inputHeadTextNode);
    date.appendChild(inputDateTextNode);
    desc.appendChild(inputDescTextNode);

    var divAdd = document.createElement("DIV");
    var imgAdd = document.createElement("IMG");
    var divPlaceBodyAdd = document.createElement("DIV");

    imgAdd.setAttribute("class", "place-img");
    imgAdd.setAttribute("src", "./assets/img/place/place 1.jpg");
    imgAdd.setAttribute("alt", "");
    divAdd.setAttribute("class", "col col-third mt-16 s-col-full");
    divPlaceBodyAdd.setAttribute("class", "place-body");
    header.setAttribute("class", "place-heading");
    date.setAttribute("class", "place-time");
    desc.setAttribute("class", "place-desc");
    aadd.setAttribute("class", "btn s-full-width");

    
    divAdd.appendChild(imgAdd);
    divPlaceBodyAdd.appendChild(header);
    divPlaceBodyAdd.appendChild(date);
    divPlaceBodyAdd.appendChild(desc);
    divPlaceBodyAdd.appendChild(aadd);
    divAdd.appendChild(divPlaceBodyAdd);
    
    var textInButton = document.createTextNode("Buy Tickets");
    aadd.appendChild(textInButton);



    return(divAdd);
}

var y = document.querySelector(".add-button");
y.addEventListener('click', function(){
    document.getElementsByClassName("place-list")[0].appendChild(addNewItem());

})






