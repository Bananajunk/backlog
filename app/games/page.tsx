import Image from "next/image";
import IGDB from "~/lib/igdb";
import AddToBacklog from "./components/AddToBacklog";

const Games = async () => {
  const games = await IGDB.getLatestReleases();

  return (
    <main className="overflox-x-auto w-full max-w-screen-xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Release Date</th>
            <th>Platforms</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>
                <div className="flex items-center space-x-3">
                  <Image
                    src={game.cover?.image_id}
                    alt={`Cover image for ${game.name}`}
                    width={500}
                    height={500}
                    className="mask mask-parallelogram-3 w-32 h-32"
                  />
                  <div className="font-bold">{game.name}</div>
                </div>
              </td>
              <td>{new Date(game.first_release_date * 1000).toDateString()}</td>
              <td>
                <div className="flex items-center space-x-2 w-fit">
                  {game.platforms.map((platform) => (
                    <Image
                      key={platform.id}
                      alt={`${platform.slug} Logo`}
                      src={platform.platform_logo.image_id}
                      width={platform.platform_logo.width}
                      height={platform.platform_logo.height}
                      className="mask mask-circle w-10 h-10 p-2 bg-primary"
                    />
                  ))}
                </div>
              </td>
              <th>
                <AddToBacklog id={game.id} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Games;
