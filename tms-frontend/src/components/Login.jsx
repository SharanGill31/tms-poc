import { useState, useContext } from 'react';
import { useMutation } from '@apollo/client/react';
import { AuthContext } from '../context/AuthContext';
import { LOGIN } from '../graphql/mutations';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(null);

  const { login } = useContext(AuthContext);
  const [loginMutation, { loading }] = useMutation(LOGIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    try {
      const { data } = await loginMutation({
        variables: { username, password },
      });

      if (data?.login) {
        login(data.login);
      }
    } catch (err) {
      setFormError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Login
        </h2>

        {formError && (
          <div className="mb-4 text-center text-red-600 font-medium">
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
