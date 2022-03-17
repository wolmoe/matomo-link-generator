const fbGroups = [
    { name: "Deutsches Reiseblogger Netzwerk", token: "drbn", url: "https://www.facebook.com/groups/1592456464360261" },
    { name: "Wenn einer eine Reise tut", token: "weert", url: "https://www.facebook.com/groups/wenneinereinereisetut" },
    { name: "Reise-Blogger", token: "rblogger", url: "https://www.facebook.com/groups/764952823579067" },
    { name: "Blogartikel Österreich", token: "baoe", url: "https://www.facebook.com/groups/blogartikel" },
    { name: "Blogger Community Deutsch", token: "bcd", url: "https://www.facebook.com/groups/diebloggercommunity" },
    { name: "U1000 Sammelpost", token: "u1000", url: "https://www.facebook.com/groups/U1000Reiseblogger" },
    { name: "WordPress-Bistro", token: "wpb", url: "https://www.facebook.com/groups/wp.bistro" }
];

const listSection = document.getElementById("linkSection"); // Get list section

const createMatomoURL = () => {
    // Prepare link creation
    const matomoSnippet = "?pk_campaign=fb-group&pk_kwd="; // Standard Matomo Snippet
    listSection.innerHTML = ""; // Clear list section
    
    // Get contents from form
    const blogPostURL = document.getElementById("blogPostURL").value;
    const introText = document.getElementById("introText").value;
    
    // Create table with links
    for (let key in fbGroups) {
        let newLink = document.createElement("tr");
        let postCopy = introText + "\\n" + blogPostURL + matomoSnippet + fbGroups[key].token;
        newLink.innerHTML = `
            <td class="align-middle">
                <strong>${fbGroups[key].name}:</strong>
            </td>
            <td id="${fbGroups[key].token}">
                ${introText}<br>
                ${blogPostURL + matomoSnippet + fbGroups[key].token}
            </td>
            <td class="align-middle">
                <a class="btn btn-sm btn-primary" onclick="copyToClipboard('${postCopy}')" href="${fbGroups[key].url}" target="_blank">Copy & To Group</a>
            </td>
            `;
        listSection.appendChild(newLink);
    }
};

// Reset all fields to empty
const reset = () => {
    listSection.innerHTML = "";
    document.getElementById("blogPostURL").value = "";
    document.getElementById("introText").value = "";
};

// Duplicate td content to new textarea, copy to clipboard and delete textarea
const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};