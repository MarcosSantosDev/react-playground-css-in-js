import React from 'react';

interface FormData {
  [key: string]: string;
}

/**
 * Função utilitária para lidar com o submit do formulário
 * @param handleSubmit Função a ser chamada com os dados do formulário
 * @returns Função para ser usada no onSubmit do formulário
 */
export const useFormSubmit = (handleSubmit: (formData: FormData) => void) => {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevenir o comportamento padrão de recarregar a página

    const formData = new FormData(event.currentTarget);
    const data: FormData = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    handleSubmit(data); // Chamar a função passada com os dados do formulário
  };
};
