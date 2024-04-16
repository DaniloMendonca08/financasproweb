import { icons } from "@/app/utils/icons"
import { Apple, Book, Bus } from "lucide-react"

interface IconProps {
    name: string,

}


export function Icon({name} : IconProps) {
    
    return icons.find(icon => icon.name == name)


    
}