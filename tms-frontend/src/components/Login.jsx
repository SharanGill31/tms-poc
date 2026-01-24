import { useState, useContext } from 'react';
import { useMutation } from '@apollo/client/react';
import { AuthContext } from '../context/AuthContext';
import { LOGIN } from '../graphql/mutations';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const [loginMutation, { loading, error }] = useMutation(LOGIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginMutation({
        variables: { username, password },
      });

      if (data?.login) {
        login(data.login); // token goes to AuthContext → localStorage
      }
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  if (loading) return <p className="text-center mt-10">Logging in...</p>;
  if (error) return <p className="text-center text-red-500">{error.message}</p>;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block mb-4 p-2 border w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block mb-4 p-2 border w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;