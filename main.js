const favoriteMovies = [
    {
        name: "21 jump street",
        year: 2012 ,
        director: "Phil Lord & Christopher Miller",
        picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_h9zhj7NlKNRU9ZtUH_rUJw593COMsUPx9gYNmkdND02-OMmS"
    },
    {
        name: "Fast & Furious 7",
        year: 2015 ,
        director: "James Wan",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mnZjW9M72N74nLri81ZhO7GE3Z3c8S82Z_J9dUNoH3THriCA"
    },
    {
        name: "Dragon Ball Z: Battle of Gods",
        year: 2013,
        director: "Masahiro Hosoda ",
        picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5s11qkXrDySqDDV2y8cxy84XIadKBaOF2XsNgyLwKsaZsjWGg" 
    }
]

const favoriteMoviesEl = document.querySelector('ol');
let template = ''
for (let i = 0; i < favoriteMovies.length; i++) {
  const item = `
    <li>
        <p>Name: ${favoriteMovies[i].name}</p>
        <p>Year: ${favoriteMovies[i].year}</p>
        <p>Director: ${favoriteMovies[i].director}</p>
        <img src="${favoriteMovies[i].picture}"
    </li>
  `
  template += item;
}
favoriteMoviesEl.innerHTML = template;