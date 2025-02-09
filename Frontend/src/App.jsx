// import React, { useEffect, useState } from "react";
// import { FilmIcon, Heart, HeartIcon, PlayCircle, Search } from "lucide-react";
// import "./App.css";
// import useDebouncedValue from "./hook/debouncedHook";
// import Footer from "./components/footer";

// function App() {
//   const [search, setSearch] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [favorites, setFavorites] = useState({});
//   const [fav, setFav] = useState([]);
//   const [liked, setLiked] = useState();
//   const debouncedSearchTerm = useDebouncedValue(search, 500);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/api/movies?search=${debouncedSearchTerm}`);
//         const data = await response.json();
//         setMovies(data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchMovies();
//   }, [debouncedSearchTerm]);

//   useEffect(() => {
//     const likedMovies = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/api/likedMovies`);
//         const data = await response.json();
//         const newArray = data.likedMovies;
//         setFav((prevFav) => [...prevFav, ...newArray]);
//         console.log(data.likedMovies)
//         console.log(fav, "data");
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     likedMovies();
//   }, [liked])

// useEffect(() => {
//   const favouriteMovies = async () => {
//     try {
//       await fetch(`http://localhost:4000/api/favorite?movieID=${liked}`);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   favouriteMovies();
// }, [liked]);

//   useEffect(() => {
//     setPage(1);
//   }, [debouncedSearchTerm]);

//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//   };

//   const toggleFavorite = (movieId) => {
//     setLiked(movieId); // Toggle like state
//     setFavorites((prevFavorites) => ({
//       ...prevFavorites,
//       [movieId]: !prevFavorites[movieId], // Toggle favorite status
//     }));
//   };

//   return (
//     <>
//       <div className="background-container min-h-screen">
//         {/* Navigation Bar */}
//         <nav className="w-full text-white p-4 flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <FilmIcon className="h-8 w-8 text-red-500" />
//             <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
//               FlickVault
//             </span>
//           </div>

//           <div className="flex items-center space-x-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search movies..."
//                 onChange={handleSearch}
//                 className="bg-black/30 border border-gray-600 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-red-500 text-sm w-96"
//               />
//               <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             </div>

//             <a href="#movies" className="flex items-center space-x-1 hover:text-red-500 transition-colors">
//               <FilmIcon className="h-5 w-5" />
//               <span>Movies</span>
//             </a>
//             <a href="#favorites" className="flex items-center space-x-1 hover:text-red-500 transition-colors">
//               <HeartIcon className="h-5 w-5" />
//               <span>Favorites</span>
//             </a>
//           </div>
//         </nav>
//       </div>

//       {/* Movie Cards Section */}
//       <div className="container px-4 py-8">
//         <h2 className="text-3xl font-bold text-center text-white mb-8">Featured Movies</h2>
//         <div className="relative mx-60">
//           <input
//             type="text"
//             placeholder="Search movies..."
//             onChange={handleSearch}
//             className="bg-black/30 border border-gray-600 rounded-md py-2 px-4 pl-10 my-5 focus:outline-none focus:border-red-500 text-sm w-[1000px]"
//           />
//           <Search className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {movies.map((movie) => (
//             <div key={movie.imdbID} className="relative group">
//               <div className="rounded-lg overflow-hidden backdrop-blur-sm bg-black/30 border border-white transition-transform duration-300 group-hover:scale-105">
//                 {/* Movie Poster */}
//                 <div className="relative">
//                   <img
//                     src={movie.Poster || "https://via.placeholder.com/300x400?text=No+Image"}
//                     alt={movie.Title}
//                     className="w-full h-64 object-cover"
//                     onError={(e) => e.target.src = "https://via.placeholder.com/300x400?text=No+Image"}
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
//                     <PlayCircle className="w-16 h-16 text-red-500" />
//                   </div>
//                 </div>


//                 {/* Movie Details */}
//                 <div className="p-4">
//                   <h3 className="text-white text-xl font-semibold mb-2">
//                     {movie.Title.length > 20 ? movie.Title.slice(0, 25) + "..." : movie.Title}
//                   </h3>
//                   <div className="flex justify-between items-center text-gray-300">
//                     {/* Heart Button */}
//                     <button onClick={() => toggleFavorite(movie.imdbID)}>
//                       <Heart
//                         size={24}
//                         className={favorites[movie.imdbID] ? "text-red-500" : "text-gray-500"}
//                         fill={favorites[movie.imdbID] ? "red" : "transparent"}
//                         stroke="red"
//                       />
//                     </button>
//                     <span className="text-white">{movie.Year}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;




import React, { useEffect, useState } from "react";
import { FilmIcon, Heart, HeartIcon, PlayCircle, Search } from "lucide-react";
import "./App.css";
import useDebouncedValue from "./hook/debouncedHook";
import Footer from "./components/footer";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [fav, setFav] = useState([]);
  const [liked, setLiked] = useState();
  const debouncedSearchTerm = useDebouncedValue(search, 500);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/movies?search=${debouncedSearchTerm}`);
        const data = await response.json();
        setMovies(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const likedMovies = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/likedMovies`);
        const data = await response.json();
        console.log("Fetched Liked Movies:", data.likedMovies);

        setFav((prevFav) => {
          const updatedFav = [...prevFav, ...data.likedMovies];
          console.log("Updated Fav:", updatedFav);
          return updatedFav;
        });
      } catch (error) {
        console.error("Error fetching liked movies:", error);
      }
    };

    likedMovies();
  }, []);

  useEffect(() => {
    const favouriteMovies = async () => {
      try {
        await fetch(`http://localhost:4000/api/favorite?movieID=${liked}`);
      } catch (error) {
        console.log(error);
      }
    };
    favouriteMovies();
  }, [liked]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const toggleFavorite = (movieId) => {
    setLiked(movieId);
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [movieId]: !prevFavorites[movieId],
    }));
  };

  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Navigation Bar */}
        <nav className="w-full text-white p-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2">
            <FilmIcon className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              FlickVault
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search movies..."
                onChange={handleSearch}
                className="w-full bg-gray-900 border border-gray-600 rounded-full py-2 px-4 pl-10 text-sm text-white focus:outline-none focus:border-red-500"
              />
              <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>

            <a href="#movies" className="hidden sm:flex items-center space-x-1 hover:text-red-500 transition-colors">
              <FilmIcon className="h-5 w-5" />
              <span>Movies</span>
            </a>
            <a href="#favorites" className="hidden sm:flex items-center space-x-1 hover:text-red-500 transition-colors">
              <HeartIcon className="h-5 w-5" />
              <span>Favorites</span>
            </a>
          </div>
        </nav>

        {/* Search Bar (for Mobile) */}
        <div className="sm:hidden px-4">
          <input
            type="text"
            placeholder="Search movies..."
            onChange={handleSearch}
            className="w-full bg-gray-900 border border-gray-600 rounded-md py-2 px-4 pl-10 text-sm text-white focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Movie Cards Section */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Featured Movies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <div key={movie.imdbID} className="relative group">
                <div className="rounded-lg overflow-hidden bg-gray-800 border border-gray-700 transition-transform duration-300 group-hover:scale-105">
                  {/* Movie Poster */}
                  <div className="relative">
                    <img
                      src={movie.Poster || "https://via.placeholder.com/300x400?text=No+Image"}
                      alt={movie.Title}
                      className="w-full h-64 object-fit"
                      onError={(e) => (e.target.src = "https://via.placeholder.com/300x400?text=No+Image")}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                      <PlayCircle className="w-16 h-16 text-red-500" />
                    </div>
                    <button className="absolute top-2 right-2" onClick={() => toggleFavorite(movie.imdbID)}>
                        <Heart
                          size={24}
                          className={fav.includes(movie.imdbID) ? "text-red-500" : "text-gray-500"}
                          fill={fav.includes(movie.imdbID) ? "red" : "transparent"}
                          stroke="red"
                        />
                      </button>
                  </div>

                  <div className="p-4">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {movie.Title.length > 20 ? movie.Title.slice(0, 20) + "..." : movie.Title}
                    </h3>
                    <div className="flex justify-between items-center text-gray-400">
                      <span className="text-white">{movie.Year}</span>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
