let movies = [
    { name: "Interstellar", year: 2014, genre: "Sci-Fi" },
    { name: "Inception", year: 2010, genre: "Thriller" },
    { name: "RRR", year: 2022, genre: "Action" }
];

function showMovies() {
    let search = document.getElementById("search").value.toLowerCase();

    let result = movies.filter(movie =>
        movie.name.toLowerCase().includes(search)
    );

    let output = "";

    result.forEach((movie, index) => {
        output += `
        <div class="card">
            <div class="poster">🎞️</div>
            <h3>${movie.name}</h3>
            <p>Year: ${movie.year}</p>
            <p>Genre: ${movie.genre}</p>
            <button class="delete" onclick="deleteMovie(${index})">
                Delete
            </button>
        </div>`;
    });

    document.getElementById("movies").innerHTML = output;
}

function addMovie() {
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;

    if (name == "" || year == "" || genre == "") {
        alert("Enter all movie details");
        return;
    }

    movies.push({
        name: name,
        year: year,
        genre: genre
    });

    showMovies();

    document.getElementById("name").value = "";
    document.getElementById("year").value = "";
    document.getElementById("genre").value = "";
}

function deleteMovie(index) {
    movies.splice(index, 1);
    showMovies();
}

showMovies();