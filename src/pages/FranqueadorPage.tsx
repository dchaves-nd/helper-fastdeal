import React, { useEffect, useState, useRef } from 'react';
import SidebarNav from '@/components/SidebarNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import { Key, Settings, LayoutTemplate, Edit, Share2, PlusCircle, Mail, CheckCircle } from 'lucide-react'; // Importando os ícones

// Lista plana de IDs para o IntersectionObserver
const sectionIds = [
  'bem-vindo',
  'acesso-plataforma',
  'configuracoes-iniciais',
  'geracao-conteudos',
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
      <SidebarNav activeSection={activeSection} sidebarTitle="Gerenciando Mídias para suas Franquias" />
      <main className="md:ml-64">
        <div ref={contentRef} className="p-8 space-y-12 max-w-4xl mx-auto"> {/* Aumentado o espaço entre seções */}
          {/* Bem-vindo à Fastdeal! */}
          <section id="bem-vindo" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Franqueador, bem-vindo à <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text inline-block">Fastdeal!</span>
            </h2>
            <img 
              src="https://s3.amazonaws.com/producao.spayce.com.br/1756163869995_imaghero.png" 
              alt="Hero Image" 
              className="w-full h-auto object-contain rounded-lg mb-6" 
            />
            <p className="text-lg text-gray-700 leading-relaxed">
              A Fastdeal cria e publica conteúdos no Instagram, Facebook e WhatsApp para a sua franquia,
              gerando presença, engajamento e vendas. <br /><br /> Este guia foi desenvolvido para franqueadores que desejam
              entregar conteúdo de mídia social aprovado e padronizado, permitindo que o sistema Fastdeal
              distribua esse conteúdo automaticamente, personalizado com o logo e dados individuais de cada franquia.
              Seus franqueados poderão receber via e-mail e/ou arquivos para baixar na sessão.
            </p>
          </section>

          {/* Credenciais de Acesso ao Ambiente Fastdeal */}
          <section id="acesso-plataforma" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Key className="h-6 w-6 mr-3 text-purple-600" /> Credenciais de Acesso ao Ambiente Fastdeal
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Você receberá suas credenciais de acesso (<span className="font-semibold">usuário e senha</span>) pelo e-mail cadastrado na compra.
              Utilize-as para fazer login na plataforma Fastdeal.
            </p>
            <a href="https://netdeal.com.br/cms/#login" target="_blank" rel="noopener noreferrer" className="inline-block mb-8">
              <Button className="bg-gradient-fastdeal text-white px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity">
                Acessar plataforma
              </Button>
            </a>

            <h4 className="text-xl font-semibold mb-3 text-gray-800">Recuperação de Senha</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              Caso esqueça sua senha, utilize a opção "<span className="font-semibold">Esqueci minha senha</span>" na tela de login.
              Um link para redefinição será enviado ao seu e-mail cadastrado.
            </p>
          </section>

          {/* Configurações iniciais */}
          <section id="configuracoes-iniciais" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Settings className="h-6 w-6 mr-3 text-purple-600" /> Configurações Iniciais
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Para personalizar as mídias com os dados de cada franqueado, é preciso definir o que exatamente você quer personalizar. Pense em <span className="font-semibold">logotipo, dados de contato</span> ou outro dado que achar relevante. Siga os passos para definir um atributo personalizado.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700 mb-8 pl-4">
              <li>Faça login e no menu lateral acesse "<span className="font-semibold">Configurações</span>" &gt; "<span className="font-semibold">Arquivos conteúdos de mídia</span>" &gt; "<span className="font-semibold">Atributos dinâmicos</span>"</li>
              <li>Por padrão, a <span className="font-semibold">Logo principal</span> e <span className="font-semibold">Telefone da unidade</span> estão compartilhados com as unidades vinculadas à sua franquia. A Fastdeal também instrui cada franqueado a enviar estes dados na plataforma, pois, sem eles, o sistema não conseguirá personalizar as mídias.</li>
            </ol>
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
              <img src="https://www.netdeal.com.br/api/images/producao.spayce.com.br/1760783928603_captura_de_tela_2025_10_18_102903.png" alt="Imagem de Configurações Iniciais" className="w-full h-auto object-contain rounded-md mt-2" />
            </div>

            <h4 className="text-xl font-semibold mb-3 text-gray-800 mt-8">Criando novos atributos</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ao criar novos atributos, clique no botão "<span className="font-semibold">+ Adicionar novo</span>" e siga os passos na tela, escolhendo qual tipo de campo personalizado deseja adicionar. É importante salientar que é preciso ajustar as configurações de compartilhamento para novos atributos, clicando em "<span className="font-semibold">Compartilhamento</span>" na caixa do atributo, logo em seguida "<span className="font-semibold">Adicionar perfis</span>" &gt; "<span className="font-semibold">Contas vinculadas à minha</span>" e deixar a opção "<span className="font-semibold">Visualizar</span>".
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dessa forma os franqueados também verão em suas sessões este novo atributo/dado.
            </p>
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
              <img src="https://www.netdeal.com.br/api/images/producao.spayce.com.br/1760800257006_captura_de_tela_2025_10_18_151032.png" alt="Imagem de criação de novos atributos" className="w-full h-auto object-contain rounded-md mt-2" />
            </div>
          </section>

          <Separator className="my-12" />

          {/* Geração de Conteúdos (Título Principal) */}
          <section id="geracao-conteudos" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Geração de <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text inline-block">Conteúdos</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Siga os passos abaixo para aprender a rotina de geração de conteúdo e distribuição para seus franqueados.
            </p>
          </section>

          {/* Gerando Templates: O que são Templates e Modelos */}
          <section id="geracao-midias" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <LayoutTemplate className="h-6 w-6 mr-3 text-purple-600" /> Gerando Templates: O que são Templates e Modelos
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Os <span className="font-semibold">templates</span> são a base do seu conteúdo na Fastdeal. Eles são modelos (como Post para Feed, Stories, Banners etc) que a franqueadora irá disponibilizar e que podem ser personalizados para cada franquia com <span className="font-semibold">atributos dinâmicos</span>, como logo e telefone.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <Card className="rounded-lg shadow-sm border border-gray-200 p-6 bg-gradient-card-light"> {/* Aplicado o novo gradiente */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-800">1. Navegando na Seção de Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed"> {/* Cor do texto ajustada */}
                    Após fazer login, localize o menu lateral "<span className="font-semibold">Campanhas e Ações</span>" e clique em "<span className="font-semibold">Templates</span>". Para criar um novo template clique no botão direito "<span className="font-semibold">+ Novo Template</span>".
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de navegação na seção de templates" className="w-full h-auto object-contain rounded-md" />
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm border border-gray-200 p-6 bg-gradient-card-light"> {/* Aplicado o novo gradiente */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-800">2. Criando um Novo Template</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed"> {/* Cor do texto ajustada */}
                    Após criar um novo template, escolha o <span className="font-semibold">tipo de mídia (modelo)</span> que deseja criar (ex: Post para Instagram, Story para Facebook, Banner para WhatsApp).
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de criação de novo template" className="w-full h-auto object-contain rounded-md" />
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <Edit className="h-6 w-6 mr-3 text-purple-600" /> Edição de Templates e Atributos Dinâmicos
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A edição de templates permite que você personalize o conteúdo com <span className="font-semibold">atributos dinâmicos</span> que serão preenchidos automaticamente com os dados de cada franquia.
            </p>

            <div className="space-y-8 mb-10">
              <Card className="rounded-lg shadow-sm border border-gray-200 p-6 bg-gradient-card-light"> {/* Aplicado o novo gradiente */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-800">1. Upload de Elementos Visuais + Legendas e Hashtags</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed"> {/* Cor do texto ajustada */}
                    Faça o <span className="font-semibold">upload de imagens e outros elementos gráficos</span> que farão parte do seu template.
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de upload de elementos visuais" className="w-full h-auto object-contain rounded-md mb-6" />
                  <p className="text-base text-gray-600 mb-4 leading-relaxed"> {/* Cor do texto ajustada */}
                    Defina uma legenda ou hashtag vinculado ao modelo preenchendo o campo "<span className="font-semibold">Descrição</span>".
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de definição de legenda ou hashtag" className="w-full h-auto object-contain rounded-md" />
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm border border-gray-200 p-6 bg-gradient-card-light"> {/* Aplicado o novo gradiente */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-800">2. Adicionando Atributos Dinâmicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-3 text-base text-gray-600 mb-4 pl-4 leading-relaxed"> {/* Cor do texto ajustada */}
                    <li>a. Adicione um novo item no menu esquerdo e localize a opção "<span className="font-semibold">Tipo</span>" para trocar para "<span className="font-semibold">Atributo dinâmico</span>".</li>
                    <li>b. Em "<span className="font-semibold">Atributo</span>", defina o tipo de atributo que deseja incluir na mídia, como:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                        <li><span className="font-mono font-semibold">[LOGO_FRANQUIA]</span>: Será substituído pelo logo individual de cada franquia quando a Fastdeal distribuir.</li>
                        <li><span className="font-mono font-semibold">[TELEFONE_FRANQUIA]</span>: Será substituído pelo telefone de contato da franquia.</li>
                      </ul>
                    </li>
                    <li>c. Defina uma imagem ou texto de exemplo para visualizar suas edições. Edite as propriedades como largura máxima e posição na mídia para posicionar corretamente o dado. <span className="font-semibold">Salve o conteúdo</span> para seguir adiante.</li>
                  </ul>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de adição de atributos dinâmicos" className="w-full h-auto object-contain rounded-md" />
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <Share2 className="h-6 w-6 mr-3 text-purple-600" /> Compartilhamento de Modelos com suas Franquias
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Após criar seus templates, o próximo passo é <span className="font-semibold">compartilhá-los com suas franquias</span>. Para isso, no mesmo modal "Content Media" onde você criou os modelos, selecione "<span className="font-semibold">Compartilhamento</span>" &gt; "<span className="font-semibold">Adicionar perfis</span>" &gt; "<span className="font-semibold">Contas vinculadas à minha</span>". Altere para "<span className="font-semibold">Visualizar</span>" e <span className="font-semibold">Salve os ajustes</span>.
            </p>
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
              <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de compartilhamento de modelos" className="w-full h-auto object-contain rounded-md mt-2" />
            </div>
          </section>

          <Separator className="my-12" />

          {/* Configurando a Distribuição Automática para os Franqueados */}
          <section id="configuracao-distribuicao" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Configurando a <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text inline-block">Distribuição Automática</span> para os Franqueados
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A distribuição automática é o grande diferencial da Fastdeal, permitindo que as mídias personalizadas cheguem aos franqueados de forma eficiente, por e-mail e disponibilizando na sessão do franqueado para que ele faça download.
            </p>

            <div className="space-y-8">
              <Card className="rounded-lg shadow-sm border border-gray-200 p-6 bg-gradient-card-light"> {/* Aplicado o novo gradiente */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                    <PlusCircle className="h-5 w-5 mr-2 text-purple-600" /> 1. Criando uma Ação de Distribuição
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed"> {/* Cor do texto ajustada */}
                    No menu "<span className="font-semibold">Campanhas e Ações</span>" clique na aba "<span className="font-semibold">Ações</span>" e clique no botão "<span className="font-semibold">+ Nova ação</span>". Selecione o tipo de ação "<span className="font-semibold">Content Media</span>" &gt; "<span className="font-semibold">Selecionar template já existente</span>" e na lista que aparecer, selecione o nosso template recém-criado e clique em <span className="font-semibold">Continuar</span>.
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de criação de ação de distribuição" className="w-full h-auto object-contain rounded-md" />
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm border border-gray-200 p-6 bg-gradient-card-light"> {/* Aplicado o novo gradiente */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-purple-600" /> 2. Definindo Modelos e Canais de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-3 text-base text-gray-600 mb-4 pl-4 leading-relaxed"> {/* Cor do texto ajustada */}
                    <li>a. Para quem irá gerar os conteúdos: normalmente será a opção "<span className="font-semibold">Para todas as contas vinculadas à esta</span>".</li>
                    <li>b. Nome da pasta dos arquivos: Aqui você define níveis de organização. Esses modelos estarão dentro de uma pasta que você pode definir, como nome de uma campanha, de uma remessa, de um evento etc.</li>
                    <li>c. Ação para enviar as mídias por e-mail: selecione nosso template de e-mail existente caso queira entregar as mídias por e-mail também. Não se preocupe, o conteúdo do e-mail é feito de forma automática.</li>
                  </ul>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de definição de modelos e canais" className="w-full h-auto object-contain rounded-md" />
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm border border-gray-200 p-6 bg-gradient-card-light"> {/* Aplicado o novo gradiente */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-purple-600" /> 3. Resumo da Distribuição e Ação Final
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed"> {/* Cor do texto ajustada */}
                    Após ter definido os canais e clicado em <span className="font-semibold">Salvar</span>, confira se todas as configurações estão corretas e se há pendência de atributos dinâmicos para alguma das contas dos franqueados.
                  </p>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed"> {/* Cor do texto ajustada */}
                    Se houver pendências, você pode optar por corrigir no ato clicando no atributo em falta. Ou então optar enviar as mídias com os dados da franqueadora.
                  </p>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed"> {/* Cor do texto ajustada */}
                    Se estiver tudo ok, clique em "<span className="font-semibold">Gerar mídias</span>" e verifique o status no <span className="font-semibold">Histórico de Processos</span>.
                  </p>
                  <img src="https://s3.amazonaws.com/producao.spayce.com.br/1756167781062_grid1img.png" alt="Imagem de resumo da distribuição" className="w-full h-auto object-contain rounded-md" />
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Suporte */}
          <section id="suporte" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text inline-block">Suporte</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Precisa de ajuda? Nossa equipe de suporte está pronta para auxiliar você em qualquer dúvida ou problema.
            </p>
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
              <h4 className="text-xl font-semibold mb-3">Entre em contato</h4>
              <p className="text-lg mb-2">Envie um e-mail para nossa equipe de suporte:</p>
              <a href="mailto:marketing@thefastdeal.com.br" className="text-blue-600 hover:underline font-medium text-lg">
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