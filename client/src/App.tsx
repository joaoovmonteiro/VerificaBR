import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CpfCnpjPage from "@/pages/cpf-cnpj";
import TelefonePage from "@/pages/telefone";
import CepPage from "@/pages/cep";
import EmailPage from "@/pages/email";
import ConversorPdfPage from "@/pages/conversor-pdf";
import ConversorWordPage from "@/pages/conversor-word";
import ConversorImagemPage from "@/pages/conversor-imagem";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cpf-cnpj" component={CpfCnpjPage} />
      <Route path="/telefone" component={TelefonePage} />
      <Route path="/cep" component={CepPage} />
      <Route path="/email" component={EmailPage} />
      <Route path="/conversor-pdf" component={ConversorPdfPage} />
      <Route path="/conversor-word" component={ConversorWordPage} />
      <Route path="/conversor-imagem" component={ConversorImagemPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
