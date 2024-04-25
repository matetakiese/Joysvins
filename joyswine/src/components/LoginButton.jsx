import { Button } from "@/components/ui/button"
import Auth from "./Login"
import {
  Dialog,
  DialogContent,
  
  DialogHeader,
  
  DialogTrigger,
} from "@/components/ui/dialog"


export function DialogConnexion() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Se connecter</Button>
      </DialogTrigger>
      <DialogContent className="h-2/3  w-1/2">
        <DialogHeader >
        <Auth />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
