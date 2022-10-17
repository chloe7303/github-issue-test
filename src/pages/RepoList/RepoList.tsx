import { useState } from 'react';

const RepoList = () => {
  const provider_token = localStorage.getItem('provider_token');
  const [token, setToken] = useState<string | null>(provider_token);

  return (
    <>
      {token && (
        <div className="font-semibold text-2xl p-6 m-7 text-center">
          <div>Hello,</div>
          <div> Please Sign in to GitHub.</div>
        </div>
      )}
      {!token && <div>repo list</div>}
    </>
  );
};

export default RepoList;
