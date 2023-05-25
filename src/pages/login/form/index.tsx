import { RoutePaths } from '@/constants/RoutePaths';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { goToLogin } from '@/services/auth-helper.service';
import { useAppDispatch } from '@/redux/hooks';

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const dispatch = useAppDispatch();

  const postData = async () => {
    await goToLogin(formData, dispatch);

    // setCookie("ACCESS_TOKEN", data?.access_token)
    router.push(RoutePaths.HOME);
  };

  const formOnSubmit = (e: any) => {
    e.preventDefault();
    postData();
  };

  return (
    <section className="flex flex-row justify-center h-screen w-full items-center">
      <div className="border-2 rounded-8 border-primary-800 p-32 space-y-24 min-w-280">
        <div>
          <h1 className="font-bold text-32 leading-40">WELCOME!</h1>
          <h3 className="font-semibold text-24 leading-30">
            Please sign in.
          </h3>
        </div>

        <form className="space-y-8" onSubmit={formOnSubmit}>
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

          <div className="pt-20 flex justify-end">
            <button
              className="border-1 rounded-8 p-4 text-12 leading-16 font-medium hover:bg-primary-600 hover:text-white-50"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

LoginForm.pageOptions = {
  requiresAuth: false,
};

export default LoginForm;
