import { test } from "node:test";
import assert from "node:assert/strict";
import { projects, neighbours, formatArea, credits } from "../src/data/projects.js";
import { validateContact } from "../src/lib/contact.js";

test("cada proyecto tiene slug único, foto principal, galería y créditos", () => {
  assert.equal(new Set(projects.map((p) => p.slug)).size, projects.length);
  for (const p of projects) {
    for (const img of [p.hero, ...p.gallery]) {
      assert.ok(credits[img], `falta crédito de ${img}`);
      assert.ok(p.alts[img], `falta texto alternativo de ${img}`);
    }
  }
});

test("anterior y siguiente dan la vuelta", () => {
  const first = projects[0].slug;
  const last = projects.at(-1).slug;
  assert.equal(neighbours(first).prev.slug, last);
  assert.equal(neighbours(last).next.slug, first);
});

test("superficie en formato español", () => {
  assert.equal(formatArea(3180), "3180 m²".replace("3180", new Intl.NumberFormat("es-ES").format(3180)));
  assert.equal(formatArea(96), "96 m²");
});

const ok = { name: "Ana", email: "ana@correo.es", type: "reforma", budget: "", message: "Queremos reformar un piso de 1920 en el centro.", privacy: "on" };

test("contacto correcto", () => {
  assert.deepEqual(validateContact(ok), { ok: true, errors: {} });
});

test("contacto con errores: valores fuera de lista y mensaje corto", () => {
  const { errors } = validateContact({ ...ok, type: "hack", budget: "1€", message: "hola", privacy: undefined, email: "x" });
  assert.deepEqual(Object.keys(errors).sort(), ["budget", "email", "message", "privacy", "type"]);
});
