export function Footer() {
  return (
    <footer className="pb-12">
      <form className="mx-auto w-max py-6 lg:py-12">
        <fieldset>
          <label className="text-lg tracking-wide">
            Schrijf je in voor onze nieuwsbrief!
          </label>
          <div className="mt-2">
            <input
              className="rounded-l-md p-2 py-1 outline outline-gray-200"
              type="email"
            />
            <button
              className="rounded-r-md bg-green-300 p-2 py-1 text-white outline outline-green-300"
              type="submit"
            >
              Verzenden
            </button>
          </div>
        </fieldset>
      </form>
      <div className="text-center text-sm text-slate-600">
        <p>Copyright &copy; {new Date().getFullYear()} Consolebundels</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}
