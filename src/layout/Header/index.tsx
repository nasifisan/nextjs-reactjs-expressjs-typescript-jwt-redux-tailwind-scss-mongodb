import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaHome,
  FaShoppingCart,
  FaProductHunt,
} from 'react-icons/fa';

import { RoutePaths } from '@/constants/RoutePaths';
import { useAppSelector } from '@/redux/hooks';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useAppSelector((state) => state.Auth.user);

  useEffect(() => {
    if (
      user &&
      user.UserId &&
      user.UserId !== '' &&
      user.UserId !== process.env.NEXT_PUBLIC_ANONYMOUS_USER_ID
    ) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return (
    <div className="w-full sticky z-999 top-0 bg-white-50">
      <nav className="main-container flex justify-between items-center py-16">
        <div className="rounded-full shrink-0">
          <Image
            className="rounded-full"
            src="/logo.jpeg"
            width="80"
            height="80"
            alt="site-logo"
            priority
          />
        </div>

        <div className="flex flex-row gap-32 items-center text-24 text-black">
          <Link href={RoutePaths.HOME}>
            <FaHome />
          </Link>
          <Link href="#">
            <FaShoppingCart />
          </Link>
          <Link href="#">
            <FaProductHunt />
          </Link>
          {/* <Link href="#">Auction</Link>
          <Link href="#">Search</Link> */}
        </div>

        {isLoggedIn ? (
          <select>
            <option>
              <button>My Profile</button>
            </option>
            <option>
              <button>Logout</button>
            </option>
          </select>
        ) : (
          <Link href={RoutePaths.LOGIN}>
            <button className="btn-btn">Signin/Signup</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
