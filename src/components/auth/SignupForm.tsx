
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!agreeTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!");
    }, 1500);
  };

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold tracking-tight text-center text-career-purple">
          Create an account
        </CardTitle>
        <CardDescription className="text-center">
          Enter your information to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </Button>
          <Button variant="outline" className="w-full">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M19.7866 2H4.21337C3.06657 2 2.1333 2.93327 2.1333 4.08008V19.6534C2.1333 20.8002 3.06657 21.7335 4.21337 21.7335H19.7866C20.9334 21.7335 21.8667 20.8002 21.8667 19.6534V4.08008C21.8667 2.93327 20.9334 2 19.7866 2Z"
                fill="#0A66C2"
              />
              <path
                d="M8.55316 18.0001H5.81354V9.41206H8.55316V18.0001ZM7.18335 8.2268C6.31965 8.2268 5.6167 7.51349 5.6167 6.64979C5.6167 5.78609 6.31965 5.07275 7.18335 5.07275C8.04705 5.07275 8.75001 5.78609 8.75001 6.64979C8.75001 7.51349 8.04705 8.2268 7.18335 8.2268ZM18.1166 18.0001H15.3866V13.9001C15.3866 12.8868 15.3669 11.5668 13.9503 11.5668C12.5336 11.5668 12.3169 12.6734 12.3169 13.8201V18.0001H9.58723V9.41206H12.2169V10.6001H12.2566C12.6236 9.91349 13.5203 9.18682 14.8669 9.18682C17.6366 9.18682 18.1169 11.0201 18.1169 13.4268V18.0001H18.1166Z"
                fill="white"
              />
            </svg>
            LinkedIn
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              required 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="example@example.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input 
              id="confirm-password" 
              type="password" 
              required 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={agreeTerms} 
              onCheckedChange={(checked) => setAgreeTerms(checked === true)} 
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <Link to="/terms" className="text-career-purple hover:underline">
                terms and conditions
              </Link>
            </label>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-career-purple hover:bg-career-lightPurple" 
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-career-purple font-medium hover:underline">
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
