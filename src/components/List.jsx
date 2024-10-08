import { scientists } from "../utils/data";
import { getImageURL } from "../utils/utils";

//This is different from Profile and Gallery
function Card({ children }) {
  return (
    <div className="m-5 flex flex-row rounded-full border-2 border-black p-4">
      {children}
    </div>
  );
}

export default function List(size=90) {
  const listItems = scientists.map((scientist) => (
    <li
      className="mx-auto grid grid-cols-2 items-center justify-center"
      key={scientist.id}
    >
      <Card>
        <div className="m-2.5 flex items-center justify-center">
          <img
            className="transform rounded-full transition-transform duration-200 ease-in-out hover:scale-125"
            src={getImageURL(scientist.profile)}
            alt={scientist.profile.name}
            width={size}
            height={size}
          />
        </div>
        <div className="m-2.5 flex flex-col items-center justify-center text-justify align-left">
          <p className="max-w-sm">
            <b className="hover:cursor-pointer">{scientist.profile.name}</b>
            <br />
            {" " + scientist.profession + " "}
            known for {scientist.accomplisment}
          </p>
          <br />
          <p>
            More details 
          </p>
        </div>
      </Card>
    </li>
  ));

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center">
      <ul className="items-center justify-center">{listItems}</ul>
    </div>
  );
}
