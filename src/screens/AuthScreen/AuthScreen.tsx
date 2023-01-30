import LoginForm from "@/SharedComponents/Login/Login";

function AuthScreen() {
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="sm:w-1/4">
        <LoginForm />
      </div>
    </div>
  );
}

export default AuthScreen;
