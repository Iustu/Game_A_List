export interface biblioteca {
  id: string | null;
  idUsuario: number | null;
  idJogo: number | null; 
  titulo: string |null;
  plataforma: string | null; 
  dataAdicao: string | Date | null; 
  estado: string | null; 
  feedback: string | null; 
  horasJogadas: number | null;
  nota: number | null;
}
