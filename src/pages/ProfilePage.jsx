import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../redux/actions/userAction';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { userInfo } = useSelector((state) => state.user);
  const {
    userDetails: user,
    loading,
    error,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin');
    } else {
      if (!user.name) {
        dispatch(getUserDetails(userInfo._id));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [navigate, userInfo, dispatch, user]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="profile">
      <form className="form">
        <div>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center' }}>
            User Profile
          </h1>
        </div>
        {error && <Message variant="danger">{error}</Message>}
        <br />
        <div>
          <label htmlFor="name">Name</label>:-
          <input
            style={{ textAlign: 'center' }}
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>:-
          <input
            style={{ textAlign: 'center' }}
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
