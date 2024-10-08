export function getImageURL(profile) {
  //Catch data profile from Profile.jsx
  const baseUrl = 'https://i.imgur.com/';
  return `${baseUrl}${profile.imageId}.jpg`;
}
