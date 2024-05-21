import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <div>
        <h2>Error Page 404</h2>
        <Link to={'/'}>
          <button className="btn">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
