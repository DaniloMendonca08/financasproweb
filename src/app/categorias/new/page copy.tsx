import NavBar from "@/components/NavBar"
import { Plus } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/react";
import next from "next/types";

export default async function Categorias() {

  const categorias : Array<Categoria> = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias"/>
      
      <section className="flex flex-col gap-3 bg-slate-900 p-6 mt-6 rounded min-w-96">

        <div className="flex justify-between gap-4">
        <h2 className="text-2xl font-bold">Categorias Cadastradas</h2>
        <Button color="primary" startContent={<Plus size={18}/>}>Nova categoria</Button>
        </div>

        {categorias.map(categoria => <CategoriaItem  categoria={categoria}/> )}
        
      </section>

    </main>
  );
}
