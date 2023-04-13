import { useSelector } from 'react-redux';

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div className="home">
      <h1>Welcome {userInfo && userInfo.name}</h1>
    </div>
  );
};

export default HomePage;
