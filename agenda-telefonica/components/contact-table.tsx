type Contact = {
    nome: string;
    telefone: string;
    email: string;
};

export default function ContactsTable({ contacts, deleteContact, }: 
  {contacts: Contact[]; deleteContact: (index: number) => void}) {

    return(

      <div>
        {/* Tabela */}
        <div className="border border-gray-400 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full">

            {/* Cabeçalho da Tabela*/}
            <thead className="font-sans text-gray-800 bg-white text-left">
              
              <tr>
                <th className="p-3">Nome</th>
                <th className="p-3">Telefone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Ações</th>
              </tr>

            </thead>

            {/* Corpo da Tabela */}
            <tbody>

              {contacts.map((contact, index) => ( 
              <tr key={index} className="font-sans border-t border-gray-400 text-gray-800 hover:bg-gray-100 transition">

                {/* Nome + Avatar */}
                  <td className="p-3 flex items-center gap-3 font-bold">

                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    {contact.nome.slice(0,2).toUpperCase()}
                  </div>
                  {contact.nome} 
                </td>
                
                <th className="p-3 text-left">{contact.telefone}</th>
                <th className="p-3 text-left">{contact.email}</th>

                {/* Ações */}
                <td className="p-3 flex gap-4">
                  <span className="cursor-pointer hover:bg-blue-200 rounded p-1">👁</span>
                  <span className="cursor-pointer hover:bg-blue-200 rounded p-1">✏️</span>
                  <span onClick={() => deleteContact(index)} className="cursor-pointer hover:bg-blue-200 rounded p-1">🗑</span>
                </td> 

              </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
        
    );
}