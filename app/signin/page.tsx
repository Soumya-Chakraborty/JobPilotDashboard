"use client";

import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to the Job Pilot website
      window.location.href = "https://jobpilot1.netlify.app/";
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-n-8">
      <div className="w-full max-w-md rounded-2xl bg-n-7 p-8 shadow-lg">
        <div className="mb-8 flex justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-color-1">
            <span className="text-2xl font-bold text-white">JP</span>
          </div>
        </div>
        
        <h2 className="mb-6 text-center text-2xl font-bold text-n-1">Sign In to Job Pilot</h2>
        
        {error && (
          <div className="mb-4 rounded border border-red-500 bg-red-500/10 px-4 py-3 text-red-500">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-n-3">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-n-5 bg-n-6 px-4 py-2 text-n-1 focus:outline-none focus:ring-2 focus:ring-color-1"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-n-3">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-n-5 bg-n-6 px-4 py-2 text-n-1 focus:outline-none focus:ring-2 focus:ring-color-1"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center rounded-lg bg-color-1 px-4 py-2 font-bold text-n-8 transition duration-300 hover:bg-color-1/90"
          >
            {isLoading ? (
              <>
                <svg className="-ml-1 mr-3 size-5 animate-spin text-n-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-n-4">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-color-1 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 