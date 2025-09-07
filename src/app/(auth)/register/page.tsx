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

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrate with your registration logic here
  };

  return (
    <div className="w-full max-w-md mx-auto py-10 px-4">
      <Card className="w-full shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-brand-700">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first-name" className="font-semibold text-brand-700">
                  First name
                </Label>
                <Input
                  id="first-name"
                  placeholder="Max"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full mt-1"
                />
              </div>
              <div>
                <Label htmlFor="last-name" className="font-semibold text-brand-700">
                  Last name
                </Label>
                <Input
                  id="last-name"
                  placeholder="Robinson"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full mt-1"
                />
              </div>
            </div>
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
              <Label htmlFor="password" className="font-semibold text-brand-700">
                Password
              </Label>
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
                Create an account
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline text-brand-600 hover:text-brand-700 transition-colors">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
