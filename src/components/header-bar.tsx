import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function HeaderBarComponent() {
  const user = {
    name: "John Doe",
  };

  return (
    <>
      <header className="border-border fixed top-0 right-0 left-0 z-50">
        <div className="container mx-auto border-b p-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-foreground font-medium">Olá, {user.name}</h2>
              <span className="text-muted-foreground">Bem-vindo de volta!</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
