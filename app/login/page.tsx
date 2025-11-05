'use client';

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        
        <button
          onClick={() => signIn("google")}
          className="w-full py-3 mb-4 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Continue with Google
        </button>
        
        <button
          onClick={() => signIn("github")}
          className="w-full py-3 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
        >
          Continue with GitHub
        </button>
      </div>
    </div>
  );
}
