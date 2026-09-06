// WhatsApp integration helpers

export const WHATSAPP_NUMBER = '5531983532534'; // +55 31 98353-2534
export const WHATSAPP_DISPLAY = '(31) 98353-2534';

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function whatsappProductUrl(productName: string): string {
  const msg = `Olá! Vim pelo site Souza Beats Equipamentos e tenho interesse no produto ${productName}. Gostaria de receber um orçamento.`;
  return whatsappUrl(msg);
}

export function whatsappGenericUrl(): string {
  const msg = 'Olá! Vim pelo site Souza Beats Equipamentos e gostaria de solicitar um orçamento para um equipamento.';
  return whatsappUrl(msg);
}

export function whatsappContactUrl(): string {
  const msg = 'Olá! Vim pelo site Souza Beats Equipamentos e gostaria de mais informações.';
  return whatsappUrl(msg);
}
