import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";

const WelcomeSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Fastdeal!</h1>
        <p className="text-xl text-gray-600">
          Comece a explorar sua plataforma de gestão de negócios.
        </p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default WelcomeSection;