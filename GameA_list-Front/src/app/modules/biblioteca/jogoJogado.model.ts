export interface jogoJogado {
  id: string | null;
  titulo: string | null; 
  imagem: string | null; 
  publicadora: string | null; 
  estudio: string | null; 
  plataforma: string | null; 
  dataAdicao: string | null; 
  estado: string | null; 
  feedback: string | Date | null; 
  horasJogadas: number | null;
  nota: number | null;
}
