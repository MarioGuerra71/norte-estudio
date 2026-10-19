// Validación del formulario de contacto (simulado: no se envía a ningún servidor).

export const TYPES = {
  vivienda: "Vivienda nueva",
  reforma: "Reforma o rehabilitación",
  equipamiento: "Equipamiento o edificio público",
  otro: "Otro",
};

export const BUDGETS = {
  "": "Prefiero no decirlo",
  "<100": "Menos de 100.000 €",
  "100-300": "Entre 100.000 y 300.000 €",
  ">300": "Más de 300.000 €",
};

export function validateContact(data) {
  const errors = {};
  const s = (k) => String(data[k] ?? "").trim();
  if (s("name").length < 2) errors.name = "Escribe tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s("email"))) errors.email = "Revisa el correo (por ejemplo, nombre@correo.es).";
  if (!Object.hasOwn(TYPES, s("type"))) errors.type = "Elige qué tipo de proyecto tienes en mente.";
  if (!Object.hasOwn(BUDGETS, s("budget"))) errors.budget = "Elige un rango de la lista.";
  const msg = s("message");
  if (msg.length < 20) errors.message = "Cuéntanos un poco más (al menos 20 caracteres).";
  else if (msg.length > 1500) errors.message = "El mensaje no puede pasar de 1.500 caracteres.";
  if (data.privacy !== true && data.privacy !== "on") errors.privacy = "Necesitamos tu permiso para responderte.";
  return { ok: Object.keys(errors).length === 0, errors };
}
