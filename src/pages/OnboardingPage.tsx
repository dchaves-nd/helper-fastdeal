import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const OnboardingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">Bem-vindo ao Fastdeal!</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Sua plataforma para gerenciar suas postagens de forma eficiente.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Primeiros Passos:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Crie sua primeira postagem para começar.</li>
              <li>Explore as funcionalidades de agendamento e publicação.</li>
              <li>Monitore o desempenho de suas postagens.</li>
            </ul>
          </div>

          <div className="border-t pt-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Precisa de Ajuda?</h3>
            <p className="mb-2">Envie um e-mail para nossa equipe de suporte:</p>
            <a href="mailto:marketing@thefastdeal.com.br" className="text-blue-600 hover:underline font-medium">
              marketing@thefastdeal.com.br
            </a>
          </div>

          <div className="mt-8">
            <Link to="/dashboard">
              <Button className="w-full py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition-colors">
                Ir para o Dashboard
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingPage;