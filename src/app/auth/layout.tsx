import React from "react";
interface IAuthLayout {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: IAuthLayout) => {
  return <div>{children}</div>;
};

export default AuthLayout;
