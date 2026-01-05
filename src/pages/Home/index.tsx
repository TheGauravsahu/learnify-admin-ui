import LoginForm from "@/components/auth/LoginForm";

export default function HomePage() {
  return (
    <div className="bg-background flex flex-col md:flex-row items-center md:justify-between h-screen w-full text-white">
      <div className="w-full flex md:items-center justify-center md:pt-4 h-full overflow-hidden disable-caret z-0">
        <img
          src="/login-illus.svg"
          alt="Login"
          className="w-full h-[50%] p-5 md:h-full"
        />
      </div>
      <div className="md:w-1/2 absolute md:relative md:top-0 md:translate-y-0 top-1/2 -translate-y-1/2">
        <LoginForm />
      </div>
    </div>
  );
}
