import { Link, useLocation } from "react-router-dom";

export default function BreadcrumbArea({ imgUrl }) {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full">
        <img
          className="w-full object-contain object-center"
          src={imgUrl}
          alt="breadcrumb background"
        />
      </div>

      {/* Breadcrumb Section */}
      <div className="flex justify-center w-full py-3 items-center bg-[#f7f7f7]">
        <nav aria-label="breadcrumb" className="text-sm text-gray-700">
          <ol className="flex flex-wrap space-x-2 font-sans">
            {/* Home link */}
            <li>
              <Link
                to="/"
                className="text-black transition-all duration-300 font-medium hover:text-[var(--main-color)]"
              >
                Home
              </Link>
            </li>

            {/* Dynamic breadcrumb paths */}
            {paths.map((path, index) => {
              const fullPath = "/" + paths.slice(0, index + 1).join("/");
              const isLast = index === paths.length - 1;

              return (
                <li key={path} className="flex items-center">
                  <span className="mx-1 text-gray-500">/</span>
                  {isLast ? (
                    <span className="text-black transition-all duration-300 font-semibold capitalize">
                      {decodeURIComponent(path)}
                    </span>
                  ) : (
                    <Link
                      to={fullPath}
                      className="text-black transition-all duration-300 inline-block hover:text-[var(--main-color)] capitalize"
                    >
                      {decodeURIComponent(path)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
