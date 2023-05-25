import { RoutePaths } from '@/constants/RoutePaths';
import Link from 'next/link';
import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({});

  const postData = async () => {
    const response = await fetch('/api/user/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formData),
    });
  };

  const formOnSubmit = (e: any) => {
    e.preventDefault();
    postData();
    console.log('value: ', formData);
  };

  return (
    <section className="flex flex-row justify-center h-screen w-full items-center">
      <div className="border-2 rounded-8 border-primary-800 p-32 space-y-24 min-w-280">
        <div>
          <h1 className="font-bold text-32 leading-40">WELCOME!</h1>
          <h3 className="font-semibold text-24 leading-30">
            Please sign up.
          </h3>
        </div>

        <form className="space-y-8" onSubmit={formOnSubmit}>
          <div className="space-y-4">
            <div className="text-16 font-semibold leading-20">
              First Name
            </div>
            <input
              className="border-1 border-primary-600 rounded-8 focus:border-primary-800 px-10 py-4 w-full"
              type="text"
              name="f_name"
              onChange={(e) => {
                setFormData((p) => ({
                  ...p,
                  first_name: e.target.value,
                }));
              }}
              required
            />
          </div>

          <div className="space-y-4">
            <div className="text-16 font-semibold leading-20">
              Last Name
            </div>
            <input
              className="border-1 border-primary-600 rounded-8 focus:border-primary-800 px-10 py-4 w-full"
              type="text"
              required
              name="l_name"
              onChange={(e) => {
                setFormData((p) => ({
                  ...p,
                  last_name: e.target.value,
                }));
              }}
            />
          </div>

          <div className="space-y-4">
            <div className="text-16 font-semibold leading-20">
              Email
            </div>
            <input
              className="border-1 border-primary-600 rounded-8 focus:border-primary-800 px-10 py-4 w-full"
              type="email"
              required
              name="email"
              onChange={(e) => {
                setFormData((p) => ({
                  ...p,
                  email: e.target.value,
                }));
              }}
            />
          </div>

          <div className="space-y-4">
            <div className="text-16 font-semibold leading-20">
              Password
            </div>
            <input
              className="border-1 border-primary-600 rounded-8 focus:border-primary-800 px-10 py-4 w-full"
              type="password"
              required
              name="password"
              onChange={(e) => {
                setFormData((p) => ({
                  ...p,
                  password: e.target.value,
                }));
              }}
            />
          </div>

          <div className="pt-20 flex justify-between items-center">
            <div className="text-10">
              <span>Already have an account?</span>
              <Link href={RoutePaths.LOGIN}>
                <span className="underline text-primary-900">
                  SignIn
                </span>
              </Link>
            </div>
            <button
              className="border-1 rounded-8 p-4 text-12 leading-16 font-medium hover:bg-primary-600 hover:text-white-50"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
