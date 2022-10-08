import { useRouteError } from "react-router-dom";
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage: FC = () => {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
        <Link to='/'>回到首页</Link>
    </div>
  );
}