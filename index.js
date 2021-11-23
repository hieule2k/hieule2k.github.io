
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

var btn = document.createElement("Button");
document.getElementsByClassName("content-section")[1].appendChild(btn);
btn.setAttribute("class", "event");
document.querySelector(".event").innerHTML = "try me";

function createDiv() {
    var placeAdd = { name: "Ha Noi", time: "Fri 27 Nov 2016", desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", tickets: "Buy Tickets" };

    var nameTextNode1 = document.createTextNode(placeAdd.name);
    var timeTextNode1 = document.createTextNode(placeAdd.time);
    var descTextNode1 = document.createTextNode(placeAdd.desc);
    var ticketsTextNode1 = document.createTextNode(placeAdd.tickets);
    var headAdd = document.createElement("H3");
    var paraAdd = document.createElement("p");
    var para2Add = document.createElement("P");
    var aadd = document.createElement("A");

    var imgAdd = document.createElement("IMG");
    var divPlaceBodyAdd = document.createElement("DIV");
    var divAdd = document.createElement("DIV");

    headAdd.appendChild(nameTextNode1);
    paraAdd.appendChild(timeTextNode1);
    para2Add.appendChild(descTextNode1);
    aadd.appendChild(ticketsTextNode1);

    divPlaceBodyAdd.appendChild(headAdd);
    divPlaceBodyAdd.appendChild(paraAdd);
    divPlaceBodyAdd.appendChild(para2Add);
    divPlaceBodyAdd.appendChild(aadd);

    divAdd.appendChild(imgAdd);
    divAdd.appendChild(divPlaceBodyAdd)

    divAdd.setAttribute("class", "col col-third mt-16 s-col-full")
    imgAdd.setAttribute("src", "./assets/img/place/place 1.jpg");
    imgAdd.setAttribute("class", "place-img");
    imgAdd.setAttribute("alt", "New York");
    divPlaceBodyAdd.setAttribute("class", "place-body");
    headAdd.setAttribute("class", "place-heading");
    paraAdd.setAttribute("class", "place-time");
    para2Add.setAttribute("class", "place-desc");
    aadd.setAttribute("src", "");
    aadd.setAttribute("class", "btn s-full-width");
    return divAdd;
}




var y = document.querySelector(".event")
y.addEventListener("click", function(){
    document.getElementsByClassName("place-list")[0].appendChild(createDiv());
})





