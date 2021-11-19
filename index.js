
var placeList = [ 
    {name: "New York", time: "Fri 27 Nov 2014", desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", tickets: "Buy Tickets"},
    {name: "Singapore", time: "Tue 25 Aug 2012", desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", tickets: "Buy Tickets"},
    {name: "Los Angeles", time: "Wed 15 Dec 2019", desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", tickets: "Buy Tickets"},

]
for (let i = 0; i < placeList.length; i++) {
    var nameTextNode = document.createTextNode(placeList[i].name);
    var timeTextNode = document.createTextNode(placeList[i].time);
    var descTextNode = document.createTextNode(placeList[i].desc);
    var ticketsTextNode = document.createTextNode(placeList[i].tickets);
    var head = document.createElement("H3");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var a = document.createElement("A");
    

    document.body.appendChild(nameTextNode);
    head.appendChild(nameTextNode);
    document.body.appendChild(head);
    

    document.body.appendChild(timeTextNode);
    para1.appendChild(timeTextNode);
    document.body.appendChild(para1);

    document.body.appendChild(para2);
    para2.appendChild(descTextNode);
    document.body.appendChild(para2);

    document.body.appendChild(ticketsTextNode);
    a.appendChild(ticketsTextNode);
    document.body.appendChild(a);
    
    head.setAttribute("class", "place-heading");
    para1.setAttribute("class", "place-time");
    para2.setAttribute("class", "place-desc");
    a.setAttribute("src", "");
    a.setAttribute("class", "btn s-full-width");

    var img = document.createElement("IMG");
    var divPlaceBody = document.createElement("DIV");

    document.body.appendChild(img);
    document.body.appendChild(divPlaceBody);
    divPlaceBody.appendChild(head);
    divPlaceBody.appendChild(para1);
    divPlaceBody.appendChild(para2);
    divPlaceBody.appendChild(a);

    divPlaceBody.setAttribute("class", "place-body");
    img.setAttribute("src", "./assets/img/place/place 1.jpg");
    img.setAttribute("class", "place-img");
    img.setAttribute("alt", "New York");

    var div = document.createElement("DIV");

    document.body.appendChild(div);
    div.appendChild(img);
    div.appendChild(divPlaceBody);
    div.setAttribute("class", "col col-third mt-16 s-col-full");
    
    document.getElementsByClassName("place-list")[0].appendChild(div);
}