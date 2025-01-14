
// Definiujemy listę stref czasowych, które chcemy wyświetlić
const timezones = ['America/New_York', 'Europe/London', 'Asia/Tokyo'];
 
// Funkcja, która wyświetla aktualny czas w podanych strefach czasowych
function showWorldClocks() {
  const currentTime = moment(); // Pobieramy aktualny czas
 
  // Iterujemy przez listę stref czasowych i wyświetlamy ich odpowiednie czasy
  timezones.forEach((timezone) => {
    const time = currentTime.tz(timezone).format('HH:mm:ss');
    console.log(`Czas w strefie ${timezone}: ${time}`);
  });
}
 
// Uruchamiamy funkcję, aby wyświetlić zegary światowe
showWorldClocks();