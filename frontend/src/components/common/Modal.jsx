import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";
import NavbarLinks from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropDown";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactDom from "react-dom";
import { createPortal } from 'react-dom';

const Modal = ({ setFlag }) => {
  // const [flag, setFlag]= useState(false)
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  // console.log("sub links", subLinks)

  // const matchRoute = (route) => {
  //   return matchPath({ path: route }, location.pathname);
  // };

  return createPortal(
    <>
      <div
        onClick={() => setFlag(false)}
        className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-[#484646ea] "
      ></div>

      <div className="w-screen  flex flex-col justify-center items-center">
        <div
          className="w-[70%] h-screen text-richblack-5 absolute top-[0%]   z-50 bg-[#0c0c0c73] flex flex-col justify-start items-center  gap-[80px] rounded-md pb-20 "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <button
            className="bg-richblack-900 text-richblack-100 h-[60px] px-5 text-[20px] font-bold rounded-t-md w-[100%] text-right "
            onClick={() => setFlag(false)}
          >
            X
          </button>

          {/* ********************************************** */}

          <div className="flex flex-col gap-y-20  justify-center items-center">
            <nav className="md:hidden block">
              <ul className=" flex flex-col gap-y-8 text-richblack-25 ">
                {NavbarLinks.map((link, index) => (
                  <li key={index}>
                    {link.title === "Courses" ? (
                      <>
                        <div
                          className={`group relative flex cursor-pointer items-center gap-1 
                          text-richblack-25
                          `}
                        >
                          <p>{link.title}</p>
                          <BsChevronDown />
                          <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                            {loading ? (
                              <p className="text-center">Loading...</p>
                            ) : subLinks?.length ? (
                              <>
                                {subLinks
                                  ?.filter(
                                    (subLink) => subLink?.courses?.length > 0
                                  )
                                  ?.map((subLink, i) => (
                                    <Link
                                      to={`/catalog/${subLink.name
                                        .split(" ")
                                        .join("-")
                                        .toLowerCase()}`}
                                      className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                      key={i}
                                    >
                                      <p>{subLink.name}</p>
                                    </Link>
                                  ))}
                              </>
                            ) : (
                              <p className="text-center">No Courses Found</p>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link to={link?.path}>
                        <p
                          onClick={() => setFlag(false)}
                          className={`text-richblack-25`}
                        >
                          {link.title}
                        </p>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Login / Signup / Dashboard */}
            <div className="md:hidden flex items-center gap-x-10 ">
              {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                <Link to="/dashboard/cart" className="relative">
                  <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                  {totalItems > 0 && (
                    <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                      {totalItems}
                    </span>
                  )}
                </Link>
              )}
              {token === null && (
                <Link to="/login">
                  <button
                    onClick={() => setFlag(false)}
                    className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100"
                  >
                    Log in
                  </button>
                </Link>
              )}
              {token === null && (
                <Link to="/signup">
                  <button
                    onClick={() => setFlag(false)}
                    className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100"
                  >
                    Sign up
                  </button>
                </Link>
              )}
              {token !== null && <ProfileDropdown />}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.querySelector(".myCreatePortal")
  );
};

export default Modal;
