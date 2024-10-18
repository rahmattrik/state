import { scientists } from "../utils/data";
import Border from "./Border";
import Profile from "./Profile";

export default function Gallery() {
  return (
    <>
      <div>
        <Border>
          <div className="flex flex-row flex-nowrap items-center">
            {scientists.map((scientist) => (
              //Throw data to Profile.jsx
              <Profile 
                key={scientist.id} 
                profile={scientist.profile} 
                size={90} 
              />
            ))}
          </div>
        </Border>
      </div>
    </>
  );
}
