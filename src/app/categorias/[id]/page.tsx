import { getById } from "@/app/actions/categorias/get-by-id";
import NavBar from "@/components/NavBar"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";


export default async function EditCategoria({params} : Params) {
  const id = params.id

  const categoria = await getById(id) 

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias"/>
      <EditForm {...categoria} />
    </main>
  );
}

