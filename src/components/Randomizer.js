import React from "react";

/**Notes
 * Display the image of the AudioPhile LP logo
 * Logo will spin when the randomizer button is clicked
 * While spinning, an album is selected from the user's collection (Amplify or Dynamo DB)
 * After spinning,
 * The album image will replace the logo
 * A 'view album details' button will render. onClick will call handleAlbumClick callback in ProtectedComponents)
 * The randomize button will remain but beneath the view album details button
 * If randomize is clicked again, the AudioPhile logo reappears, begins to spin while a new album is selected and the whole process repeats.
 */

function Randomizer(props) {
  //Concat user albums and releases, assign to a variable

  //Should I sort the albums before randomizing?

  return <h1>Randomizer</h1>;
}

export default Randomizer;
