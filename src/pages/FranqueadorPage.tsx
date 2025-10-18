import React, { useEffect, useState, useRef } from 'react';
import SidebarNav from '@/components/SidebarNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button'; // Importar o componente Button

// Lista plana de IDs para o IntersectionObserver
const sectionIds = [
  'bem-vindo',
  'acesso-plataforma',
  'configuracoes-iniciais',
  'geracao-conteudos', // ID atualizado
  'geracao-midias',
  'configuracao-distribuicao',
  'suporte',
];

const FranqueadorPage = () => {
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
      <SidebarNav activeSection={activeSection} sidebarTitle="Gerenciando Mídias para suas Franquias" /> {/* Título atualizado aqui */}
      <main className="ml-64">
        <div ref={contentRef} className="p-8 space-y-10 max-w-4xl mx-auto">
          {/* Bem-vindo à Fastdeal! */}
          <section id="bem-vindo" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Bem-vindo à <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text inline-block">Fastdeal!</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Fastdeal cria e publica conteúdos no Instagram, Facebook e WhatsApp para a sua franquia,
              gerando presença, engajamento e vendas. Este guia foi desenvolvido para franqueadores que desejam
              entregar conteúdo de mídia social aprovado e padronizado, permitindo que o sistema Fastdeal
              distribua esse conteúdo automaticamente, personalizado com o logo e dados individuais de cada franquia.
              Seus franqueados poderão receber via e-mail e/ou arquivos para baixar na sessão.
            </p>
          </section>

          <section id="acesso-plataforma" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Credenciais de Acesso ao Ambiente Fastdeal</h3>
            <p className="text-gray-700 mb-4">
              Você receberá suas credenciais de acesso (usuário e senha) pelo e-mail cadastrado na compra.
              Utilize-as para fazer login na plataforma Fastdeal.
            </p>
            <a href="https://netdeal.com.br/cms/#login" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-fastdeal text-white px-6 py-3 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity">
                Acessar plataforma
              </Button>
            </a>

            <h4 className="text-xl font-semibold mt-8 mb-2 text-gray-800">Recuperação de Senha</h4>
            <p className="text-gray-700">
              Caso esqueça sua senha, utilize a opção "Esqueci minha senha" na tela de login.
              Um link para redefinição será enviado ao seu e-mail cadastrado.
            </p>
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

          {/* Geração de Conteúdos */}
          <section id="geracao-conteudos" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Geração de <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text inline-block">Conteúdos</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aprenda a utilizar as principais funcionalidades da Fastdeal para criar e gerenciar suas campanhas.
            </p>
          </section>

          <section id="geracao-midias" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Gerando Templates: O que são Templates e Modelos</h3>
            <p className="text-gray-700 mb-6">
              Os templates são a base do seu conteúdo na Fastdeal. Eles são modelos (como Post para Feed, Stories, Banners etc) que a franqueadora irá disponibilizar e que podem ser personalizados para cada franquia com atributos dinâmicos, como logo e telefone.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="rounded-lg shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">1. Navegando na Seção de Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Após fazer login, localize o menu lateral "Campanhas e Ações" e clique em "Templates". Para criar um novo template clique no botão direito "+ Novo Template".
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de navegação na seção de templates" className="w-full h-32 object-cover rounded-md" />
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">2. Criando um Novo Template</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Após criar um novo template, escolha o tipo de mídia (modelo) que deseja criar (ex: Post para Instagram, Story para Facebook, Banner para WhatsApp).
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de criação de novo template" className="w-full h-32 object-cover rounded-md" />
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Edição de Templates e Atributos Dinâmicos</h3>
            <p className="text-gray-700 mb-6">
              A edição de templates permite que você personalize o conteúdo com atributos dinâmicos que serão preenchidos automaticamente com os dados de cada franquia.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="rounded-lg shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">1. Upload de Elementos Visuais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Faça o upload de imagens e outros elementos gráficos que farão parte do seu template.
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de upload de elementos visuais" className="w-full h-32 object-cover rounded-md" />
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">2. Adicionando Atributos Dinâmicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>a. Adicione um novo item no menu esquerdo e localize a opção "Tipo" para trocar para "Atributo dinâmico".</li>
                    <li>b. Em "Atributo", defina o tipo de atributo que deseja incluir na mídia, como:
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li><span className="font-mono">[LOGO_FRANQUIA]</span>: Será substituído pelo logo individual de cada franquia quando a Fastdeal distribuir.</li>
                        <li><span className="font-mono">[TELEFONE_FRANQUIA]</span>: Será substituído pelo telefone de contato da franquia.</li>
                      </ul>
                    </li>
                    <li>c. Defina uma imagem ou texto de exemplo para visualizar suas edições. Edite as propriedades como largura máxima e posição na mídia para posicionar corretamente o dado. Salve o conteúdo para seguir adiante.</li>
                  </ul>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de adição de atributos dinâmicos" className="w-full h-32 object-cover rounded-md" />
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Compartilhamento de Modelos com suas Franquias</h3>
            <p className="text-gray-700 mb-4">
              Após criar seus templates, o próximo passo é compartilhá-los com suas franquias. Para isso, no mesmo modal "Content Media" onde você criou os modelos, selecione "Compartilhamento" &gt; "Adicionar perfis" &gt; "Contas vinculadas à minha". Altere para "Visualizar" e Salve os ajustes.
            </p>
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
              <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de compartilhamento de modelos" className="w-full h-48 object-cover rounded-md mt-2" />
            </div>
          </section>

          <Separator className="my-10" />

          {/* Novo Bloco: Configurando a Distribuição Automática para os Franqueados */}
          <section id="configuracao-distribuicao" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Configurando a <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text inline-block">Distribuição Automática</span> para os Franqueados
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A distribuição automática é o grande diferencial da Fastdeal, permitindo que as mídias personalizadas cheguem aos franqueados de forma eficiente, por e-mail e disponibilizando na sessão do franqueado para que ele faça download.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="rounded-lg shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">1. Criando uma Ação de Distribuição</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    No menu "Campanhas e Ações" clique na aba "Ações" e clique no botão "+ Nova ação". Selecione o tipo de ação "Content Media" &gt; "Selecionar template já existente" e na lista que aparecer, selecione o nosso template recém-criado e clique em Continuar.
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de criação de ação de distribuição" className="w-full h-32 object-cover rounded-md" />
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">2. Definindo Modelos e Canais de entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>a. Para quem irá gerar os conteúdos: normalmente será a opção "Para todas as contas vinculadas à esta".</li>
                    <li>b. Nome da pasta dos arquivos: Aqui você defini níveis de organização. Esses modelos estarão dentro de uma pasta que você pode definir, como nome de uma campanha, de uma remessa, de um evento etc.</li>
                    <li>c. Ação para enviar as mídias por e-mail: selecione nosso template de e-mail existente caso queira entregar as mídias por e-mail também. Não se preocupe, o conteúdo do e-mail é feito de forma automática.</li>
                  </ul>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de definição de modelos e canais" className="w-full h-32 object-cover rounded-md" />
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">3. Resumo da Distribuição e Ação final</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Após ter definido os canais e clicado em Salvar, confira se todas as configurações estão corretas e se há pendência de atributos dinâmicos para alguma das contas dos franqueados.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Se houver pendências, você pode optar por corrigir no ato clicando no atributo em falta. Ou então optar enviar as mídias com os dados da franqueadora.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Se estiver tudo ok, clique em "Gerar mídias" e verifique o status no Histórico de Processos.
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de resumo da distribuição" className="w-full h-32 object-cover rounded-md" />
                </CardContent>
              </Card>
            </div>
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
              <a href="mailto:marketing@thefastdeal.com.br" className="text-blue-600 hover:underline font-medium">
                marketing@thefastdeal.com.br
              </a>
            </div>
          </section>
          <MadeWithDyad />
        </div>
      </main>
    </div>
  );
};

export default FranqueadorPage;