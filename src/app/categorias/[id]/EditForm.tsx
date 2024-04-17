"use client"

import { SubmitButton } from "@/components/SubmitButton";
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react";
import { Link } from "lucide-react";
import { icons } from "@/app/utils/icons";
import { useFormState } from "react-dom";
import { update } from "@/app/actions/categorias/update";

export function EditForm(categoria : Categoria) {

    const initialState = {
        message: ""
      }

    const [state, formAction] = useFormState(update, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-4 p-6 m-6 bg-slate-900 rounded min-w-[500px]">
        <input type="hidden" name="id" value={categoria.id} />
        <h2 className="text-2xl font-bold">Editar categoria {categoria.nome}</h2>
        <Input 
        key="nome"
        label = "Nome"
        name = "nome"
        variant="bordered"
        defaultValue={categoria.icone}
        labelPlacement="outside"
        isInvalid={state?.message != ""}
        errorMessage={state?.message}
        />
      
      <Autocomplete
          label="Icone"
          placeholder="Buscar icone"
          defaultInputValue={categoria.icone}
          variant="bordered"
          name = "icone"
          labelPlacement="outside"
          defaultItems={icons}      >

        {(icon) => 
        <AutocompleteItem key={icon.name} startContent={icon.icon}>
          {icon.name}
          </AutocompleteItem>}
          </Autocomplete >
      
      <div className="flex justify-around">
        <Link href="/categorias">
          <Button variant="bordered">cancelar</Button>
        </Link>

       <SubmitButton />
      </div>
      </form>
    )
}