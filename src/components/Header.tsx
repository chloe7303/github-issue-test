import { useState, useEffect } from 'react';
import { supabase } from '../client';
import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: #161b22;
`;

const Button = styled.button`
  color: #fff;
  font-weight: 700;
  padding-block: 25px;
  background-color: transparent;
  border: 0;
  font-size: 20px;
  cursor: pointer;
`;

const Avatar = styled.img`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

function Header() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    checkUser();
  }, []);

  function checkUser() {
    const user = supabase.auth.user();
    console.log(user);
    setUser(user!);
    setAvatarUrl(user?.user_metadata.avatar_url);
    // setToken(session?.provider_token!);
    window.addEventListener('hashchange', () => {
      checkUser();
    });
  }
  async function signInWithGithub() {
    console.log('sign in');

    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: 'github',
      },
      {
        scopes: 'repo gist notifications',
      }
    );

    console.log('error', error);
    setUser(user!);
    setAvatarUrl(user?.user_metadata.avatar_url);
  }
  async function signOut() {
    console.log('sign out');
    await supabase.auth.signOut();
    setUser({});
  }

  return (
    <Wrapper>
      {JSON.stringify(user) !== '{}' ? (
        <>
          <Button onClick={signOut}>Sign out</Button>
          <Avatar src={avatarUrl} />
        </>
      ) : (
        <Button onClick={signInWithGithub}>Sign in</Button>
      )}
    </Wrapper>
  );
}

export default Header;
