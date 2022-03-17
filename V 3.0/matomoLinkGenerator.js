const fbGroups = [
    { name: "Deutsches Reiseblogger Netzwerk", token: "drbn", url: "https://www.facebook.com/groups/1592456464360261" },
    { name: "Wenn einer eine Reise tut", token: "weert", url: "https://www.facebook.com/groups/wenneinereinereisetut" },
    { name: "Reise-Blogger", token: "rblogger", url: "https://www.facebook.com/groups/764952823579067" },
    { name: "Blogartikel Österreich", token: "baoe", url: "https://www.facebook.com/groups/blogartikel" },
    { name: "Blogger Community Deutsch", token: "bcd", url: "https://www.facebook.com/groups/diebloggercommunity" },
    { name: "U1000 Sammelpost", token: "u1000", url: "https://www.facebook.com/groups/U1000Reiseblogger" },
    { name: "WordPress-Bistro", token: "wpb", url: "https://www.facebook.com/groups/wp.bistro" }
];

const matomoSnippet = "?pk_campaign=fb-group&pk_kwd=";

const listSection = document.getElementById("linkSection");

function createMatomoURL() {

    listSection.innerHTML = "";

    // Formular auslesen
    let blogPostURL = document.getElementById("blogPostURL").value;
    let introText = document.getElementById("introText").value;
    
    // Tabelle mit Links erzeugen
    for (let key in fbGroups) {
        let newLink = document.createElement("tr");
        newLink.innerHTML = `
            <td class="align-middle">
                <strong>${fbGroups[key].name}:</strong>
            </td>
            <td>
                ${introText}<br>
                ${blogPostURL + matomoSnippet + fbGroups[key].token}
            </td>
            <td class="align-middle">
                <a class="btn btn-sm btn-primary" href="${fbGroups[key].url}" target="_blank">To Group</a>
            </td>
            `;
        listSection.appendChild(newLink);
    }
}

const reset = () => {
    listSection.innerHTML = "";
    document.getElementById("blogPostURL").value = "";
    document.getElementById("introText").value = "";
}

