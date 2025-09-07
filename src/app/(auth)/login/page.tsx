"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrate with your auth logic here
  };

  return (
    <div className="w-full max-w-md mx-auto py-10 px-4">
      <Card className="w-full shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-brand-700">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="font-semibold text-brand-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1"
              />
            </div>
            <div>
              <div className="flex items-center">
                <Label htmlFor="password" className="font-semibold text-brand-700">
                  Password
                </Label>
                <Link href="#" className="ml-auto text-sm underline text-brand-600 hover:text-brand-700 transition-colors">
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1"
              />
            </div>
            <div className="space-y-2 pt-2">
              <Button type="submit" className="w-full font-semibold bg-brand-600 hover:bg-brand-700 text-white transition">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline text-brand-600 hover:text-brand-700 transition-colors">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
