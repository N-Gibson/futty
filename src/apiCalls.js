export const getLeagueMatchDay = async (day) => {
  const response = await fetch (`https://api.football-data.org/v2/competitions/PL/matches?matchday=${day}`);
  if(!response.ok) {
    throw new Error('There was an error getting the games today')
  }
  const data = await response.json();
  return data;
}