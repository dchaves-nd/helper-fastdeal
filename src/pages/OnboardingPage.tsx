import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import SidebarNav from '@/components/SidebarNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Adicionado CardHeader aqui
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { MadeWithDyad } from '@/components/made-with-dyad';

const sections = [
  { id: 'bem-vindo', title: 'Bem-vindo à Fastdeal!' },
  { id: 'acesso-plataforma', title: 'Acesso à plataforma' },
  { id: 'configuracoes-iniciais', title: 'Configurações iniciais' },
  { id: 'operacao-ferramenta', title: 'Operação da Ferramenta' },
  { id: 'geracao-midias', title: 'Geração de mídias' },
  { id: 'minhas-midias', title: 'Minhas mídias' },
  { id: 'agendador-post', title: 'Agendador de post' },
  { id: 'suporte', title: 'Suporte' },
];

const OnboardingPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -50% 0px', threshold: 0.5 } // Ajuste as margens e o limite conforme necessário
    );

    const currentContentRef = contentRef.current;
    if (currentContentRef) {
      const sectionElements = currentContentRef.querySelectorAll('section[id]');
      sectionElements.forEach((section) => observer.observe(section));
    }

    return () => {
      if (currentContentRef) {
        const sectionElements = currentContentRef.querySelectorAll('section[id]');
        sectionElements.forEach((section) => observer.unobserve(section));
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-fastdeal-bg font-verdana">
      <Header />
      <div className="flex flex-1 pt-20"> {/* pt-20 para compensar a altura do cabeçalho fixo */}
        <aside className="w-64 p-4">
          <SidebarNav sections={sections} activeSection={activeSection} />
        </aside>
        <main ref={contentRef} className="flex-1 p-8 space-y-10 max-w-4xl mx-auto">
          {/* Bem-vindo à Fastdeal! */}
          <section id="bem-vindo" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Bem-vindo à <span className="bg-gradient-fastdeal text-transparent bg-clip-text">Fastdeal!</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Fastdeal cria e publica conteúdos no Instagram, Facebook e WhatsApp para a sua franquia,
              gerando presença, engajamento e vendas. Com artes já aprovadas pela franqueadora,
              legendas, hashtags e sessões para download e dashboards de análise.
            </p>
          </section>

          <section id="acesso-plataforma" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Acesso à plataforma</h3>
            <p className="text-gray-700">
              Você receberá suas credenciais de acesso (usuário e senha) por e-mail.
              Utilize-as para fazer login na plataforma Fastdeal e começar a impulsionar sua franquia!
            </p>
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
              <p><strong>Placeholder:</strong> Imagem ou GIF mostrando o processo de login.</p>
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md mt-2">
                <span className="text-gray-500">Imagem de Acesso à Plataforma</span>
              </div>
            </div>
          </section>

          <section id="configuracoes-iniciais" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Configurações iniciais</h3>
            <p className="text-gray-700 mb-4">
              Para personalizar suas mídias e garantir que sua franquia esteja sempre atualizada,
              siga estes passos para configurar seu logo e dados de contato:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Acesse a seção "Meu Perfil" ou "Configurações".</li>
              <li>Faça o upload do seu logo em alta resolução.</li>
              <li>Preencha seus dados de contato, como telefone, endereço e redes sociais.</li>
              <li>Salve as alterações.</li>
            </ul>
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
              <p><strong>Placeholder:</strong> Imagem ou GIF mostrando a tela de configurações.</p>
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md mt-2">
                <span className="text-gray-500">Imagem de Configurações Iniciais</span>
              </div>
            </div>
          </section>

          <Separator className="my-10" />

          {/* Operação da Ferramenta */}
          <section id="operacao-ferramenta" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Operação da <span className="bg-gradient-fastdeal text-transparent bg-clip-text">Ferramenta</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aprenda a utilizar as principais funcionalidades da Fastdeal para criar e gerenciar suas campanhas.
            </p>
          </section>

          <section id="geracao-midias" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Geração de mídias</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="rounded-lg shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">1. Escolha um template da biblioteca</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Navegue pela nossa vasta biblioteca de templates aprovados pela franqueadora.
                    Selecione o que melhor se adapta à sua campanha.
                  </p>
                  <div className="w-full h-32 bg-gray-100 flex items-center justify-center rounded-md">
                    <span className="text-gray-500 text-sm">Placeholder: Imagem de seleção de template</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">2. Gere a mídia com seus dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Com o template escolhido, a plataforma automaticamente aplicará seu logo e dados de contato.
                    Você pode fazer pequenos ajustes se necessário.
                  </p>
                  <div className="w-full h-32 bg-gray-100 flex items-center justify-center rounded-md">
                    <span className="text-gray-500 text-sm">Placeholder: Imagem de geração de mídia</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">3. Acesse suas mídias e baixe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Suas mídias personalizadas estarão prontas para download.
                    Baixe-as e utilize-as em suas redes sociais!
                  </p>
                  <div className="w-full h-32 bg-gray-100 flex items-center justify-center rounded-md">
                    <span className="text-gray-500 text-sm">Placeholder: Imagem de download de mídia</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="minhas-midias" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Minhas mídias</h3>
            <p className="text-gray-700">
              Nesta seção, você pode visualizar todas as mídias que gerou.
              Organize, filtre e baixe seus posts a qualquer momento.
            </p>
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
              <p><strong>Placeholder:</strong> Imagem da galeria de mídias.</p>
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md mt-2">
                <span className="text-gray-500">Imagem de Minhas Mídias</span>
              </div>
            </div>
          </section>

          <section id="agendador-post" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Agendador de post</h3>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="font-semibold">Em breve: Esta funcionalidade está sendo desenvolvida e estará disponível em breve!</p>
            </div>
            <p className="text-gray-700 mt-4">
              Com o agendador, você poderá escolher sua conta, definir o tipo de mídia,
              gerenciar o conteúdo e agendar as datas de publicação para automatizar suas postagens.
            </p>
          </section>

          <Separator className="my-10" />

          {/* Suporte */}
          <section id="suporte" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              <span className="bg-gradient-fastdeal text-transparent bg-clip-text">Suporte</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Precisa de ajuda? Nossa equipe de suporte está pronta para auxiliar você em qualquer dúvida ou problema.
            </p>
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
              <h4 className="text-xl font-semibold mb-2">Entre em contato</h4>
              <p className="mb-2">Envie um e-mail para nossa equipe de suporte:</p>
              <a href="mailto:suporte@fastdeal.com.br" className="text-blue-600 hover:underline font-medium">
                suporte@fastdeal.com.br
              </a>
            </div>
          </section>
          <MadeWithDyad />
        </main>
      </div>
    </div>
  );
};

export default OnboardingPage;