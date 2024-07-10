// scripts/links.js

const baseURL = 'https://yourgithubpagesurl'; // Replace with your GitHub Pages URL
const linksURL = './data/links.json'; // Adjust path as per your project structure

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data); // For testing purposes, remove in production
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const activityList = document.querySelector('.activity-list');

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.textContent = week.week;

        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const linkItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}/${link.url}`;
            anchor.textContent = link.title;
            linkItem.appendChild(anchor);
            linksList.appendChild(linkItem);
        });

        weekItem.appendChild(linksList);
        activityList.appendChild(weekItem);
    });
}

getLinks();
