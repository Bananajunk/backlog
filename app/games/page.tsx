import IGDB from "~/lib/igdb";

const Games = async () => {
  const games = await IGDB.getLatestReleases();

  return (
    <main>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Games;
