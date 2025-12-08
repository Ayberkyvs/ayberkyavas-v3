import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import LoginButton from "./LoginButton";
import Link from "next/link";

const LoginDialog = ({ className }: { className?: string }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className={className}>
          <Button className="small!">Log In</Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col py-6">
          <DialogHeader>
            <DialogTitle className="mb-2">Sign In with Google</DialogTitle>
            <DialogDescription>
              Use your Google account to continue. It's quick and secure.
            </DialogDescription>
          </DialogHeader>
          <LoginButton longText />
          <p className="small text-muted">
            By signing in, you agree to our Terms of Service and{" "}
            <Link href="/privacy-policy" className="text-center text-blue-100">
              Privacy Policy
            </Link>
            .
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginDialog;
