import NavBar from "@/components/NavBar"
import { Plus } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";
import { Button, Skeleton, Spinner } from "@nextui-org/react";
import next from "next/types";

export default function Loading() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias"/>
      
      <section className="flex flex-col gap-3 bg-slate-900 p-6 mt-6 rounded min-w-96">

        <div className="flex justify-between gap-4">
        <h2 className="text-2xl font-bold">Categorias Cadastradas</h2>
        <Button color="primary" startContent={<Plus size={18}/>}>Nova categoria</Button>
        </div>
        
        { [1,2,3].map( () => { return ( 
           <div className="max-w-[300px] w-full flex items-center gap-3">
           <div>
           <Skeleton className="flex rounded-full size-10"/>
           </div>  
           <div className="w-full flex flex-col gap-2">
           <Skeleton className="h-3 w-3/5 rounded-lg"/>
         </div>
     </div>
         ) }) }
       
      </section>

    </main>
  );
}
