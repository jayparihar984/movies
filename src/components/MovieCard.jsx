import { useRouter } from "next/navigation";

export function MovieCard({ movie }) {
  const router = useRouter();
  return (
    <div
      className="singleCardDataShow p-2 text-white rounded-md hover:cursor-pointer hover:bg-gray-700"
      onClick={() => {
        router.push(`/movies/${movie._id}`);
      }}
    >
      {movie.poster != "" ? (
        <img
          src={process.env.NEXT_PUBLIC_API_URL + "uploads/" + movie.poster}
        />
      ) : (
        <img src={process.env.NEXT_PUBLIC_API_URL + "uploads/no-img.jpg"} />
      )}

      <h1 className="text-2xl font-bold mt-2">{movie.title}</h1>
      <p className="text-slate-300">{movie.description}</p>
      <p className="text-slate-400 my-2">
        {/*new Date(movie.createdAt).toLocaleDateString()*/}
        {movie.publishing_year}
      </p>
    </div>
  );
}

export default MovieCard;
