import React from "react";

export default function CreatePage() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Card Creator</h1>
          
          <div className="space-x-4">
            <a 
              href="/create"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
            >
              Create Card
            </a>
           </div> 
        </div>
        </div>   
    );
  }