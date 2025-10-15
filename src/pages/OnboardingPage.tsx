import React, { useEffect, useState, useRef } from 'react';
import SidebarNav from '@/components/SidebarNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { MadeWithDyad } from '@/components/made-with-dyad';

// Lista plana de IDs para o IntersectionObserver
const sectionIds = [
  'bem-vindo',
  'acesso-plataforma',
  'configuracoes-iniciais',
  'operacao-ferramenta',
  'geracao-midias',
  'minhas-midias',
  'agendador-post',
  'suporte',
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
      { rootMargin: '-100px 0px -50% 0px', threshold: 0.5 }
    );

    const currentContentRef = contentRef.current;
    if (currentContentRef) {
      // Observar as seções dentro do novo container de conteúdo
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
    <div className="min-h-screen bg-gradient-fastdeal-bg font-verdana">
      <SidebarNav activeSection={activeSection} />
      <main className="ml-64">
        <div ref={contentRef} className="p-8 space-y-10 max-w-4xl mx-auto">
          {/* Bem-vindo à Fastdeal! */}
          <section id="bem-vindo" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Bem-vindo à <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text inline-block">Fastdeal!</span>
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
              <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de Acesso à Plataforma" className="w-full h-48 object-cover rounded-md mt-2" />
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
              <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de Configurações Iniciais" className="w-full h-48 object-cover rounded-md mt-2" />
            </div>
          </section>

          <Separator className="my-10" />

          {/* Operação da Ferramenta */}
          <section id="operacao-ferramenta" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Operação da <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text inline-block">Ferramenta</span>
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
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de seleção de template" className="w-full h-32 object-cover rounded-md" />
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
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de geração de mídia" className="w-full h-32 object-cover rounded-md" />
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
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de download de mídia" className="w-full h-32 object-cover rounded-md" />
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
              <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem da galeria de mídias" className="w-full h-48 object-cover rounded-md mt-2" />
            </div>
          </section>

          <section id="agendador-post" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Agendador de post</h3>
            <p className="text-gray-700 mt-4">
              Com o agendador, você poderá escolher sua conta, definir o tipo de mídia,
              gerenciar o conteúdo e agendar as datas de publicação para automatizar suas postagens.
            </p>
          </section>

          <Separator className="my-10" />

          {/* Suporte */}
          <section id="suporte" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text inline-block">Suporte</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Precisa de ajuda? Nossa equipe de suporte está pronta para auxiliar você em qualquer dúvida ou problema.
            </p>
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
              <h4 className="text-xl font-semibold mb-2">Entre em contato</h4>
              <p className="mb-2">Envie um e-mail para nossa equipe de suporte:</p>
              <a href="mailto:contato@thefastdeal.com.br" className="text-blue-600 hover:underline font-medium">
                contato@thefastdeal.com.br
              </a>
            </div>
          </section>
          <MadeWithDyad />
        </div>
      </main>
    </div>
  );
};

export default OnboardingPage;