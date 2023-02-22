import '../index.css';

export default function Navigation() {
  return (
    <div className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <h1 className="w-3/12 font-semibold text-lg">
            FECG Lahr
        </h1>
        <nav className="nav font-semibold text-lg">
            <ul className="flex items-center">
                <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer active">
                    <a href="#">Gottesdienst</a>
                </li>
                <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <a href="#">Kinderstunden</a>
                </li>
                <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <a href="#">Jungschar</a>
                </li>
                <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <a href="#">Jugend</a>
                </li>
                <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <a href="#">Rehabilitation</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

