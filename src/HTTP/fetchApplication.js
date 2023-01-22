
export function fetchApplication(urlCoordinates) {

   return fetch('http://router.project-osrm.org/route/v1/driving/'+`${urlCoordinates}`+'?steps=false&geometries=geojson')

}