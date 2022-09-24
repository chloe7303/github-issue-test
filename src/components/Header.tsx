import { useState, useEffect } from 'react';
import { supabase } from '../client';
import styled from 'styled-components';
import {
  MarkGithubIcon,
  ThreeBarsIcon,
  BellIcon,
  PlusIcon,
} from '@primer/octicons-react';

const Wrapper = styled.header`
  background-color: #161b22;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 32px;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1011px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const ToggleButton = styled(ThreeBarsIcon)`
  color: #fff;
  display: none !important;
  @media screen and (max-width: 1011px) {
    display: block !important;
  }
`;

const NotificationButton = styled(BellIcon)`
  color: #fff;
  display: none !important;
  @media screen and (max-width: 1011px) {
    display: block !important;
  }
`;

const SearchInput = styled.input`
  height: 28px;
  width: 270px;
  padding-inline: 12px;
  border: 0.1px solid rgba(255, 255, 255, 0.4);
  background-color: transparent;
  border-radius: 6px;
  margin-left: 16px;
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const NavList = styled.nav`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-left: 16px;
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const Nav = styled.span`
  margin-right: 16px;
`;

const Info = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const DropdownCaret = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: '';
  border-style: solid;
  border-width: 4px 4px 0;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  color: #fff;
`;

const Button = styled.button`
  color: #fff;
  font-weight: 700;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const Avatar = styled.img`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: 5px;
`;

const navlist = ['Pull requests', 'Issues', 'Marketplace', 'Explore'];

function Header() {
  const [user, setUser] = useState<{} | null>(null);
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
    window.addEventListener('hashchange', () => {
      checkUser();
    });
  }
  async function signInWithGithub() {
    console.log('sign in');

    const { user, session } = await supabase.auth.signIn(
      {
        provider: 'github',
      },
      {
        scopes: 'repo gist notifications',
      }
    );

    setUser(user!);
    setAvatarUrl(user?.user_metadata.avatar_url);
    setToken(session?.provider_token!);
  }

  async function signOut() {
    console.log('sign out');
    await supabase.auth.signOut();
    setUser(null);
    setAvatarUrl('');
    setToken('');
  }

  return (
    <Wrapper>
      <NavBar>
        <ToggleButton />
        <MarkGithubIcon size="medium" fill="#fff" />
        <SearchInput placeholder="Search or jump to..."></SearchInput>
        <NavList>
          {navlist.map((nav) => (
            <Nav key={nav}>{nav}</Nav>
          ))}
        </NavList>
        <NotificationButton />
      </NavBar>
      {user ? (
        <Info>
          <BellIcon fill="#fff" />
          <PlusIcon fill="#fff" />
          <DropdownCaret />
          {avatarUrl && <Avatar src={avatarUrl} />}
          <DropdownCaret />
          <Button onClick={signOut}>Sign out</Button>
        </Info>
      ) : (
        <Button onClick={signInWithGithub}>Sign in</Button>
      )}
    </Wrapper>
  );
}

export default Header;
