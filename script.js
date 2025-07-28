const pagesAndProjects = [
    {
        name: "Percolation",
        url: "https://nickskurka.github.io/Percolation"
    },
    {
        name: "Sprite-Generator",
        url: "https://nickskurka.github.io/Sprite-Generator"
    },
    {
        name: "Darts",
        url: "https://nickskurka.github.io/Darts"
    },
    {
        name: "Chess_Analyzer_V1",
        url: "https://github.com/nickskurka/Chess_Analyzer_V1"
    }
];

const socialMedia = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nickskurka"
    },
    {
        name: "GitHub",
        url: "https://github.com/nickskurka"
    }
];

const linksContainer = document.getElementById('links-container');

function createLinkSection(title, links) {
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    linksContainer.appendChild(titleElement);

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.target = "_blank"; // Open in new tab
        linksContainer.appendChild(a);
    });
}

createLinkSection("Pages / Projects", pagesAndProjects);
createLinkSection("Social Media", socialMedia);
