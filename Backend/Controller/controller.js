import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const findMovies = async (req, res) => {
    try {
        const categories = ["action", "comedy", "horror", "drama"];
        let movies = [];

        console.log("Controller Called");

        // Get search query, page, and limit from request
        const searchText = req.query.search || "";
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 15; // Default to 8 movies per page

        console.log(`Search: ${searchText}, Page: ${page}, Limit: ${limit}`);

        if (!searchText) {
            for (const category of categories) {
                const response = await fetch(`http://www.omdbapi.com/?apikey=4bad4b7e&s=${category}&page=1`);
                const data = await response.json();
                if (data.Search) {
                    movies.push(...data.Search);
                }
            }
        } else {
            // Fetch movies from OMDB based on searchText and page
            const response = await fetch(`http://www.omdbapi.com/?apikey=4bad4b7e&s=${searchText}&page=${page}`);
            const data = await response.json();
            if (data.Search) {
                movies = data.Search;
            }
        }

        // Manually apply the limit since OMDB does not support limiting results
        const paginatedMovies = movies.slice(0, limit);

        res.json({ status: "success", data: paginatedMovies });

    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
};


const likedMovies = async (req, res) => {
    try {
        console.log(req.query.movieID)
        const filePath = path.join(__dirname, "likedMovies.json");
        const movieId = req.query.movieID;

        if (!movieId) {
            return res.status(400).json({ message: "Movie ID is required" });
        }

        let movies = {};
        try {
            const data = await fs.readFile(filePath, "utf-8");
            movies = JSON.parse(data);
        } catch (error) {
            if (error.code !== "ENOENT") throw error;
        }

        if (movies[movieId]) {
            delete movies[movieId];
        } else {
            movies[movieId] = true; 
        }

        await fs.writeFile(filePath, JSON.stringify(movies, null, 2));

        res.json({ message: "Like status updated", likedMovies: movies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const likedMoviesList = async (req, res) => {
    try {
        console.log("Hai")
        const filePath = path.join(__dirname, "likedMovies.json");
        console.log(filePath)


        const data = await fs.readFile(filePath, "utf-8");
        console.log(data,"Data")

        const likedMovies = Object.keys(JSON.parse(data));

        res.status(200).json({ success: true, likedMovies: likedMovies });
    } catch (error) {
        console.error("Error reading liked movies:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


const  controller = {
    findMovies,
    likedMovies,
    likedMoviesList
}

export default controller
