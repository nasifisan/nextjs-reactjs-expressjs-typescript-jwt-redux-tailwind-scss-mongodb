import { RoutePaths } from '@/constants/RoutePaths';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-1/2">
        <Image
          src="/loginIcon.png"
          height="400"
          width="400"
          alt="loginIcon"
        />
      </div>

      <div className="w-1/2">
        <Link href={RoutePaths.LOGIN_FORM}>
          <button className="bg-black-900 text-white-400 px-20 py-6 rounded-8 text-16 font-bold">
            Signin with existing ID
          </button>
        </Link>

        <div className="space-x-4 flex items-center">
          <span className="text-12 leading-16 text-black-900">
            Don't have an account?
          </span>
          <span className="text-14 font-semibold underline leading-20 text-primary-600">
            <Link href={RoutePaths.REGISTER}>Create Now</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
