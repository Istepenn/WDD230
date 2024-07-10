const url1 = "data/members.json";
const cards = document.querySelector("#cards");

async function getBusinessesData() {
  try {
    const response = await fetch(url1);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayBusinesses(data.businesses);
  } catch (error) {
    console.error('Error fetching data:', error);
    cards.textContent = 'Failed to load data. Please try again later.';
  }
}

const displayBusinesses = (businesses) => {
  cards.innerHTML = ''; // Clear previous content before displaying new data
  businesses.forEach((business) => {
    let card = document.createElement("section");
    card.classList.add("business-card");

    let logo = document.createElement("img");
    logo.src = business.logo;
    logo.alt = `Logo of ${business.name}`;
    logo.loading = "lazy";
    logo.width = "100";
    logo.height = "100";

    let bName = document.createElement("h2");
    bName.textContent = business.name;

    let bDescription = document.createElement("p");
    bDescription.textContent = business.description;

    let address = document.createElement("p");
    address.textContent = business.address;

    let membership = document.createElement("h4");
    membership.textContent = `${business.membership} Membership`;

    let memberSince = document.createElement("p");
    memberSince.textContent = `Member Since: ${business.since}`;

    let website = document.createElement("a");
    website.href = business.url;
    website.textContent = business.url;
    website.target = "_blank";

    card.appendChild(logo);
    card.appendChild(bName);
    card.appendChild(bDescription);
    card.appendChild(address);
    card.appendChild(membership);
    card.appendChild(memberSince);
    card.appendChild(website);

    cards.appendChild(card);
  });
};

getBusinessesData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid-directory");
  display.classList.remove("list-directory");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list-directory");
  display.classList.remove("grid-directory");
});
