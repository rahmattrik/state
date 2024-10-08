import { useState } from "react";
import Button from "./Button";
import Border from "./Border";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState({ email: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  }

  if (isSent) {
    navigate(`/response`);
  } else {
    return (
      <form
        className="mx-auto flex flex-row items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();

          if (email.email.trim() === "") {
            alert("Please, fill the form");
          } else {
            setIsSent(true);
          }
        }}
      >
        <Border>
          <textarea
            className="h-6 w-52 resize-none font-mono focus:outline-none overflow-hidden whitespace-nowrap"
            name="email"
            placeholder="example@mail.com"
            value={email.email}
            onChange={handleChange}
          />
        </Border>
        <Button type={"submit"} initial={"Subscribe"} />
      </form>
    );
  }
}
