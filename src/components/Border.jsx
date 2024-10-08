export default function Border({ children }) {
  return (
    <div className="mx-5 my-2.5 flex flex-col rounded-full border-2 border-black p-4 bg-white">
      {children}
    </div>
  );
}
