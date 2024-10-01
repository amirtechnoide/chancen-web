import React from "react";
interface IAuthLayout {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: IAuthLayout) => {
  return (
    <div className="min-h-screen h-screen w-full flex flex-col items-center justify-center relative">
      <div className="w-full py-6 flex items-center justify-center px-6">
        <Logo />
        {/* <div className="flex items-center gap-4 text-sm ">
          <p>{"Don't have an account?"}</p>
          <Button>Sign up</Button>
        </div> */}
      </div>
      <div className="h-1/2 w-full rounded-t-[16rem] bg-gradient-to-b from-slate-900 to-green-950 absolute bottom-0" />
      <div className="flex-grow flex flex-col items-center justify-center relative">
        {children}
      </div>
      <p className="text-white/70 relative py-8 capitalize">
        powered by <span className="text-green-700">Common factor</span> -
        Copyright &copy; 2024
      </p>
    </div>
  );
};

const Logo = () => {
  return (
    <h2 className="font-extrabold text-2xl text-slate-700">
      <span className="text-green-700 ">C</span>
      han
      <span className="text-white bg-green-700 pr-2">cen</span>
    </h2>
  );
};

export default AuthLayout;
