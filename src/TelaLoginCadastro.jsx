import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "./components/Input";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Label from "./components/Label";

export default function TelaLoginCadastro() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Imagem à esquerda */}
      <div className="hidden md:block w-full h-screen">
        <img
          src="assets/login-img.jpg"
          alt="Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Formulário à direita */}
      <div className="flex flex-col justify-center items-center h-screen px-6 sm:px-12">
        <div className="w-full max-w-sm space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <img
              src="assets/logo-Photoroom.png"
              alt="Logo"
              className="w-[200px] h-auto"
            />
          </div>

          {/* Formulário */}
          <form className="space-y-6">
            <div>
              <Label htmlFor="email">Usuário</Label>
              <Input
                id="email"
                type="email"
                placeholder="Usuário/Email"
              />
            </div>

            <div className="relative">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="************"
              />
              <div
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:underline">Esqueci minha senha</a>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
