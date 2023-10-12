import * as React from "react"
import { FiTrash2, FiSearch, FiLayout } from "react-icons/fi";


import {
  Card,
  CardContent,
} from "@/components/ui/card"


 
// const SideBar: React.FC = () => {

interface CardProps {
  texto1: String;
  texto2: String;
  icon: React.ReactNode;
}



function CardPresentation({ texto1, texto2, icon }: CardProps) {
  return (
    <Card className="mx-7 mt-4 shadow-md bg-secbackground text-center w-[17rem] text-white border-0  flex flex-col items-center p-8">
      <CardContent>
      {texto1}
      </CardContent>
      <CardContent>
        <Icon icon={icon}/>
      </CardContent>
      <CardContent>
      {texto2}
      </CardContent>
    </Card>
  )
}

interface IconProps {
  icon: React.ReactNode;
}

function Icon({ icon }: IconProps) {
  return (
    <div className="border-2 border-roxo1 rounded-full p-2 m-4 inline-flex h-48 w-48" >
      <div className="shadow-sm bg-gradient-to-r m-1 from-roxo1 to-roxo2 w-full rounded-full flex items-center justify-center">
        <div className="text-white"> {icon} </div>
      </div>
    </div>
  )
}

export default CardPresentation;



