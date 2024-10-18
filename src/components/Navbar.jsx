import Button from "./Button";

export default function Navbar() {
  return (
    <div className="fixed top-8 w-full flex justify-center z-50">
      <nav className="w-[75%] bg-white">
        <div className="mx-auto max-w-7xl px-10 lg:px-16">
          <div className="flex h-16 items-center justify-between">

            {/* Left Section */}
            <div class="hidden md:flex space-x-6">
              <a href="#" class="text-slate-500 font-mono hover:text-black">Solution</a>
              <a href="#" class="text-slate-500 font-mono hover:text-black">About</a>
              <a href="#" class="text-slate-500 font-mono hover:text-black">Blog</a>
            </div>

            {/* Middle Section */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span class="text-xl font-bold font-mono text-gray-800 hover:cursor-pointer">
                Scientist.
              </span>
            </div>

            {/* Right Section */}
            <div class="flex items-center space-x-3">
              <Button initial={"Started"} icon={false} />
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}
