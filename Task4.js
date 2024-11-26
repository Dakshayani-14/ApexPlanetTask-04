
// Sample Games Data with Images
const games = [
  { id: 1, name: "Action Hero", genre: "action", price: 50, rating: 4.5, image: "https://www.giantbomb.com/a/uploads/scale_medium/43/433397/3132490-ultimate_action_hero_giantbomb.jpg" },
  { id: 2, name: "Adventure Quest", genre: "adventure", price: 40, rating: 4.0, image: "https://www.artix.com/media/2036/web-adventurequest.jpg" },
  { id: 3, name: "Endless runner game", genre: "strategy", price: 60, rating: 5.0, image: "https://3.bp.blogspot.com/-KnBUzHJE9Lc/XLIgdKoC6mI/AAAAAAAAATg/-Gt-udABGM0fCRwC-gpmSJm76fwKH_vmwCLcBGAs/s1600/787866.jpg" },
  { id: 1, name: "Temple Run", genre: "Horror", price: 50, rating: 4.7, image: "https://miro.medium.com/v2/resize:fit:720/0*M2PRXFmqju1E2Rgr.jpg" },
  { id: 4, name: "Mystery of Ages", genre: "adventure", price: 35, rating: 3.8, image: "https://images-eu.ssl-images-amazon.com/images/I/91oqkgmNWmL.jpg" },
];

// Function to Render Games
function renderGames(filter = "all", sort = "asc") {
  const productList = document.getElementById("product-list");

  // Filter and Sort Games
  let filtered = games.filter((game) => filter === "all" || game.genre === filter);
  filtered.sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));

  // Generate HTML with Images
  productList.innerHTML = filtered
    .map(
      (game) => `
      <div class="game-card">
        <img src="${game.image}" alt="${game.name}" class="game-image">
        <h3>${game.name}</h3>
        <p>Genre: ${game.genre}</p>
        <p>Price: ${game.price}</p>
        <p>Rating: ${game.rating}⭐</p>
      </div>
    `
    )
    .join("");
}

// Event Listeners for Filters
document.getElementById("filter-category").addEventListener("change", (e) => {
  renderGames(e.target.value, document.getElementById("sort-price").value);
});

document.getElementById("sort-price").addEventListener("change", (e) => {
  renderGames(document.getElementById("filter-category").value, e.target.value);
});

// Initial Render
renderGames();


