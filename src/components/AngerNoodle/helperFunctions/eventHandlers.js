export const handleKeyPress = (event) => {
    if (event.key === ' ') {
        console.log('space press here! ');
    }
}
// useEffect(
//     () => {
//         // Add event listener
//         document.addEventListener("keydown", handleKeyPress);
//         // Remove event listener on cleanup
//         return () => {
//             document.removeEventListener("keydown", handleKeyPress);
//         };
//     },
//     []
// );