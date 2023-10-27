import { useNavigate } from 'react-router-dom';
import auth from '../utils/auth';

const Login = () => {
    const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR',
        })
    }).then(async (res) => {
        console.log(res)
        if (res.status === 400){
            return alert("your username or password is wrong");
        }            
        const { token } = await res.json();
        auth.storeAuthCredential(token);
        return navigate('/');
    });
  };

  return (
    <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
            >
            <img
                className="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
            />
            Flowbite
            </a>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                        Username
                        </label>
                        <input
                        type="username"
                        name="username"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        placeholder="username"
                        required=""
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                        Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        required=""
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            required=""
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                            htmlFor="remember"
                            className="text-gray-500"
                            >
                            Remember me
                            </label>
                        </div>
                        </div>
                        <a
                        href="#"
                        className="text-sm font-medium text-blue-600 hover:underline"
                        >
                        Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Sign in
                    </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Login