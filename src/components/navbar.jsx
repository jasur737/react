function Navbar () {
    return (
       <nav className="container m-auto flex items-center between gap-28 mt-12">
         <a href=""><img src="src/assets/logo.svg" alt="Logo" /></a>
         <a className="text-[#D9D9D9] text-xl" href="#">Home</a>
         <a className="text-[#D9D9D9] text-xl" href="#">Select</a>
         <a className="text-[#D9D9D9] text-xl" href="#">Shop</a>
       </nav>
    )
}
export default Navbar
