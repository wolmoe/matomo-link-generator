const fbGroups = {
    "Deutsches Reiseblogger Netzwerk":"drbn",
    "Wenn einer eine Reise tut":"weert",
    "Reise-Blogger":"rblogger",
    "Reise Blogs":"rblogs",
    "Blogartikel Österreich":"baoe",
    "Alles außer Fashion und Beauty":"aafub",
    "Blogger Community Deutsch":"bcd",
    "Blog sucht Leser":"bsl",
    "Urlaubertraum":"ut",
    "U1000":"u1000",
    "WordPress-Bistro":"wpb"
};

const matomo = "?pk_campaign=fb-group&pk_kwd=";

const listSection = document.getElementById("linkSection");

function createMatomoURL() {

    listSection.innerHTML = "";

    let blogPostURL = document.getElementById("blogPost").value;
    
    for (let index in fbGroups) {
        let newLink = document.createElement("tr");
        newLink.innerHTML = "<td><b>" + index + ": </b></td>" + "<td>" + blogPostURL + matomo + fbGroups[index] + "</td>";
        listSection.appendChild(newLink);
    }
}