import { CartItem } from "@/types";

export const generateWhatsAppOrderMessage = (cartItems: CartItem[], total: number): string => {
  const phoneNumber = "55089122"; // Numéro local sans indicatif
  const itemsList = cartItems
    .map(
      (item) =>
        `- ${item.quantity}x ${item.name} (${item.price} DT)`
    )
    .join("%0A");
  
  const totalPrice = total.toFixed(3);
  
  return `https://wa.me/21652956361?text=Bonjour,%20je%20souhaite%20commander%20les%20articles%20suivants%20:%0A%0A${itemsList}%0A%0ATotal : ${totalPrice} DT%0A%0AMerci !`;
};
