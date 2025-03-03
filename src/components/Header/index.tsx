import { Button } from '#src/components/Button';
import './header.css';
import { welcome } from './header.css.ts';
import AcmeSVG from './Acme.svg?react';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <AcmeSVG />
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className={welcome}>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} children="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} children="Log in" />
            <Button primary size="small" onClick={onCreateAccount} children="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
