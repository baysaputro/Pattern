// function DetectConnection(){
//   return "Haiiiii"
//   if(navigator.onLine){
//     return { isOnline: true }
//   } else {
//     return { isOnline: false }
//   }
// }

const CheckInternetConnection = () => {
  console.log("HALLO FROM CheckInternetConnection")
  console.log(window.navigator)
  return "INTERNET ADA"
}

export default CheckInternetConnection