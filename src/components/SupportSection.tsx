import React from 'react';

const SupportSection = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Suporte</h2>
      <p className="text-gray-700">Encontre ajuda e recursos para suas dúvidas.</p>
      <p className="mt-4 text-gray-700">Entre em contato conosco:</p>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>Email: marketing@thefastdeal.com.br</li>
        <li>Telefone: +55 (11) 99999-9999</li>
      </ul>
      {/* Adicione mais conteúdo aqui */}
    </div>
  );
};

export default SupportSection;