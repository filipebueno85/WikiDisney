const getPersonagensId = async (id) => {
  const URL = `https://api.disneyapi.dev/characters/${id}`;
  const response = await fetch(URL);

  const data  = await response.json();

  return data;
  // console.log(data);
  // const resposta = data.map((
  //   _id,
  //   shortFilms,
  //   tvShows,
  //   videoGames,
  //   parkAttractions,
  //   allies,
  //   enemies,
  //   name,
  //   imageUrl,
  //   url,
  // ) => ({
  //   _id,
  //   shortFilms,
  //   tvShows,
  //   videoGames,
  //   parkAttractions,
  //   allies,
  //   enemies,
  //   name,
  //   imageUrl,
  //   url,
  // }),
  // );

  // return resposta;

} 

export default getPersonagensId;