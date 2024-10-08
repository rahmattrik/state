import Border from "./Border";

export default function TextArea({ name, value, placeholder,handleChange }) {
  return (
    <div>
      <Border>
        <textarea 
            className="h-6 w-75 resize-none font-mono focus:outline-none overflow-hidden whitespace-nowrap"
            name={name} 
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
      </Border>
    </div>
  );
}