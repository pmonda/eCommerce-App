export default function NavBar() {
  return (
    <div className="mx-[20px] font-bold text-white text-5xl flex-wrap">
      <p className="mb-[20px]">Ecommerce Site</p>
      <navbar className="shadow-2xl mx-auto rounded-full  bg-gradient-to-r from-red-500  via-slate-400 to-cyan-700 animate-gradient text-xl space-x-5 min-w-screen flex bg--300 font-semibold px-5 py-2">
        <div className="flex-no-wrap flex items-left justify-between ">
          <a
            className="text-white rounded-md px-4 py-2 hover:bg-blue-400"
            href="/"
          >
            Home
          </a>
          <a
            className="text-white rounded-md px-4 py-2 hover:bg-blue-400"
            href="/about"
          >
            About
          </a>
          <a
            className="text-white rounded-md px-4 py-2 hover:bg-blue-400"
            href="/shop"
          >
            Shop
          </a>
        </div>

        <div className="relative flex items-right">
          <a
            href="/cart"
            type="button"
            class="rounded-md px-4 py-2 hover:bg-blue-400 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-3.5 h-3.5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
          </a>
        </div>
      </navbar>
    </div>
  );
}
