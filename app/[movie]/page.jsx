import Image from "next/image";

export async function genarateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return res.results.map((movie) => ({ movie: toString(movie.id) }));
}

export default async function page({ params }) {
  const { movie } = params;

  const imgPath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();

  return (
    <div className="w-ull max-w-[1240px] mx-auto">
      <div
        className="bg-gradient-to-r from-red-600 h-96 w-full bg-cover bg-center relative
        "
      >
        <Image
          className="w-full h-full object-cover absolute mix-blend-overlay"
          src={imgPath + res.poster_path}
          alt=""
          width={500}
          height={500}
        ></Image>
        <div className="w-full h-full flex md:flex-row flex-col items-center pl-10">
          <h1 className="text-3xl font-bold">
            Welcome to <br /> <span className="text-6xl ">{res.title}</span>
          </h1>
        </div>
      </div>

      <h1 className="text-4xl py-5">Movie Details</h1>

      <div className="text-white flex md:flex-row pl-6  flex-col">
        <Image
          src={imgPath + res.poster_path}
          width={150}
          height={150}
          alt="tes"
          className=""
        ></Image>
        <div className="p-3">
          
          <h1>{res.release_date}</h1>
          <p className="py-3">{res.overview}</p>
        </div>
      </div>
    </div>
  );
}
