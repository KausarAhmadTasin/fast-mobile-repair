import Logo from "../Logo/Logo";

const Navbar = () => {
  type Navlink = {
    title: string;
    path: string;
  };

  const navlinks: Navlink[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="w-full bg-yellow-100">
      <div className="container mx-auto py-4 flex items-center justify-between px-6">
        <Logo />
        <div className="flex gap-x-4">
          {navlinks.map((navlink) => (
            <p
              className={`hover:text-primary font-semibold text-text-light`}
              key={navlink.path}
            >
              {navlink.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
