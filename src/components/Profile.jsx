import { getImageURL } from "../utils/utils";

//Function for catch data from Gallery.jsx with: profile and size
export default function Profile({ profile, size }) {
  return (
    <div className="m-2 flex flex-row">
      <img
        className="transform rounded-full transition-transform duration-150 ease-in-out hover:scale-125 hover:cursor-pointer"
        src={getImageURL(profile)}
        alt={profile.name}
        width={size}
        height={size}
      />
    </div>
  );
}
