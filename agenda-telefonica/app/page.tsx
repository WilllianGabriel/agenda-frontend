"use client";

import ContactsTable from "@/components/contact-table";
import { useState } from "react";

export default function Home() {

  const [open, setOpen] = useState(false);

  const [contacts, setContacts] = useState([
    {nome:"Alice Johnson", telefone: "+55 (81) 9 1234-7867", email: "alice@email.com"},
    {nome:"Eduard Frost", telefone: "+55 (81) 9 4756-1954", email: "eduard@email.com"},
    {nome:"Lucas farfi", telefone:"+55 (81) 9 1234-0987", email: "lucas@email.com"}
  ]);

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  
  // Método para Criar Contatos
  function addContact() {
    const novoContato = {nome, telefone, email};

    setContacts ([...contacts, novoContato]);
    setNome("");
    setTelefone("");
    setEmail("");
    setOpen(false);
  }

  // Método para Deletar Contatos
  function deleteContact(index: number) {
    const novaLista = contacts.filter((_,i) => i !== index);
    setContacts(novaLista);
  }
  
  return (

    <main className="p-6">

      {/* Barra de Ações */}
      <div className="flex items-center gap-8 mb-4">

        {/* Barra de Busca */}
        <input type="text" 
        placeholder="Pesquisar por nome ou telefone..." 
        className="font-sans border border-gray-300 rounded px-4 py-2 w-1/4 shadow-md hover:border-gray-500"/>

        {/* Contador de Contatos + Botão de Adicionar */}
        <div className="flex items-center gap-4">
          <span className="shadow-md font-sans text-sm bg-gray-100 rounded px-2 py-2">6 contatos</span>

          <button onClick={() => setOpen(true)}
           className="font-bold bg-blue-600 shadow-sm rounded-xl text-white px-4 py-2 hover:bg-blue-500 cursor-pointer transition"> + Adicionar Contato</button>

        </div>
      </div>

      <ContactsTable contacts={contacts} deleteContact={deleteContact}/>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-6 rounded-lg w-96">

            <h2 className="text-xl font-bold mb-4">Adiconar Contato</h2>

            <input placeholder="Nome"
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            className="border w-full p-2 mb-2 rounded"/>

            <input placeholder="Telefone" 
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="border w-full p-2 mb-2 rounded"/>

            <input placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full p-2 mb-4 rounded" />

            <div className="flex justify-end gap-2 font-bold">
              <button onClick={() => setOpen(false)} 
              className="font-bold border border-gray-200 text-gray-700 px-4 py-2 cursor-pointer rounded-xl hover:bg-gray-200">Cancelar</button>

              <button onClick={addContact} 
              className="bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-500">Adicionar Contato</button>

            </div>
          </div>
        </div>
      )}
      
    </main>
  );
}