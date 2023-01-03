const getPersonagens = async (character) => {
  const URL= `https://api.disneyapi.dev/character?name=${character}`;
  const response = await fetch(URL);
  const { data } = await response.json();
  return data;
//   const resposta = data.map((
//     _id,
//     shortFilms,
//     tvShows,
//     videoGames,
//     parkAttractions,
//     allies,
//     enemies,
//     name,
//     imageUrl,
//     url,
//   ) => ({
//     _id,
//     shortFilms,
//     tvShows,
//     videoGames,
//     parkAttractions,
//     allies,
//     enemies,
//     name,
//     imageUrl,
//     url,
//   }),
//   );

//  return resposta;
}

export default getPersonagens;


// https://api.disneyapi.dev/character?name=${character}