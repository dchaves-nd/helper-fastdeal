import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const OnboardingPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Bem-vindo ao Fastdeal</h1>
          <p className="mt-2 text-lg text-gray-600">Sua plataforma de gestão de negócios.</p>
        </div>

        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Comece Agora</CardTitle>
            <CardDescription>Crie sua conta ou faça login para continuar.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
              <Button variant="outline" className="w-full">
                Criar Conta
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Esqueceu sua senha?{' '}
              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Redefinir
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Entre em Contato</CardTitle>
            <CardDescription>Precisa de ajuda ou tem alguma dúvida?</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-4">
              <p className="mb-2">Envie um e-mail para nossa equipe de suporte:</p>
              <a
                href="mailto:marketing@thefastdeal.com.br"
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                marketing@thefastdeal.com.br
              </a>
            </div>
            <div>
              <p className="mb-2">Ou ligue para nós:</p>
              <a href="tel:+5511999999999" className="text-gray-600 hover:text-gray-800 font-medium">
                +55 (11) 99999-9999
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingPage;