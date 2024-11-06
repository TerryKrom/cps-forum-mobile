export function cn(...inputs) {
  return inputs.filter(Boolean).join(' '); // ou retorne apenas inputs diretamente
}
