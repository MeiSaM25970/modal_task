"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavigateBack() {
  const router = useRouter();

  return (
    <div className="p-8 border w-96 shadow-lg rounded-md">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
        <div className="mt-2 px-7 py-3">
          <p className="text-lg text-gray-500">Modal Body</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
