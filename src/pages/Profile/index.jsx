import React, { useContext, useState, useEffect } from 'react';
import RecipeAppContext from '../../context/Context';
import Header from '../../components-global/Header';
import ButtonsProfile from './components/ButtonsProfile';
import './style/style.css';
import Footer from '../../components-global/Footer';

const Profile = () => {
  const { localBol } = useContext(RecipeAppContext);
  const [emailP, setEmailP] = useState('');

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('user'));
    if (!email) return (<div>Loading...</div>);
    setEmailP(email);
  }, []);

  if (!emailP.email) return (<div>Loading...</div>);

  return (
    <div className="container-Profile">
      <Header title={'Perfil'} />
      <p data-testid="profile-email">{emailP.email}</p>
      <div className="container-buttonsP">
        <ButtonsProfile />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
