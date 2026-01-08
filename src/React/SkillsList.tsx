import React, { useState } from "react";


const SkillsList = () => {

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        Qu'est-ce que je fais ?
      </h3>
      <ul className="list-disc list-inside space-y-2 md:space-y-4 text-[var(--light-gray)] text-lg md:text-xl">
        <li>Je suis le Goonlord</li>
        <li>Je Goon Enormement</li>
        <li>Je Goon Tout Le Temps</li>
        <li>Je Goon Partout</li>
        <li>Je Goon Avec Passion</li>
        <li>Je Goon Pour Toujours</li>
        <li>Le Goon est éternel</li>
        <li>Goon ou ne pas Goon, telle est la question</li>
        <li>Soumettez vous au Goon</li>
        <li>UN POUR GOON ET TOUS POUR LE GOON</li>
      </ul>
      <section className="mt-8 bg-[var(--dark-gray)] p-6 rounded-lg shadow-md">
        <h2 className="text-[var(--white)] text-2xl md:text-3xl font-bold mb-2">
          Goonlord — Seigneur du Goon Ultime
        </h2>
        <p className="text-[var(--light-gray)] mb-4 text-lg">
          Portofolio officiel du Goonlord : maître du gooning, prophète de la passion, et fier
          dédaigneux du monde de la programmation. Tout est fiction ; tout est goon.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#rituels"
            className="px-4 py-2 bg-[var(--accent)] text-black rounded font-semibold hover:opacity-90"
          >
            Les Rituels
          </a>
          <a
            href="#philosophie"
            className="px-4 py-2 border border-[var(--light-gray)] rounded text-[var(--light-gray)] hover:bg-[var(--white)]/5"
          >
            Philosophie du Goon
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-transparent border border-[var(--accent)] text-[var(--accent)] rounded hover:bg-[var(--accent)]/10"
          >
            Rejoindre le culte
          </a>
        </div>
      </section>

      <section id="rituels" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Gooning Matinal", desc: "Commencer la journée en goonant intensément." },
          { title: "Marathon de Goon", desc: "Sessions longues et sans pitié." },
          { title: "Goon à l'ancienne", desc: "Respect des rites fondateurs du Goon." },
        ].map((card) => (
          <div key={card.title} className="p-4 bg-[var(--card-bg)] rounded-lg">
            <h4 className="text-[var(--white)] font-semibold mb-2">{card.title}</h4>
            <p className="text-[var(--light-gray)]">{card.desc}</p>
          </div>
        ))}
      </section>

      <section id="philosophie" className="mt-8 p-6 bg-[var(--dark-gray)] rounded-lg">
        <h3 className="text-[var(--white)] text-2xl font-semibold mb-3">Philosophie</h3>
        <p className="text-[var(--light-gray)] mb-2">
          Le Goonlord prêche : gooner avec ferveur, vivre avec intensité, et ne jamais
          laisser la logique mondaine entraver la passion. Le code ? Il s'en bat les couilles.
        </p>
        <ul className="list-disc list-inside text-[var(--light-gray)] space-y-1">
          <li>Passion avant productivité</li>
          <li>Répétition sacrée</li>
          <li>Communauté du Goon</li>
          <li>L'art du lâcher-prise</li>
        </ul>
      </section>

      <section id="galerie" className="mt-8">
        <h3 className="text-[var(--white)] text-2xl font-semibold mb-4">Galerie des Goonworks</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-28 bg-gradient-to-br from-[#2b2b2b] to-[#1b1b1b] rounded flex items-center justify-center text-[var(--light-gray)]">
              Oeuvre de Goon #{i + 1}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-8 p-6 bg-[var(--dark-gray)] rounded-lg">
        <h3 className="text-[var(--white)] text-2xl font-semibold mb-3">Rejoindre le culte</h3>
        <p className="text-[var(--light-gray)] mb-4">Envie d'embrasser la voie du Goon ? Envoie un message et deviens disciple.</p>
        <form className="flex flex-col md:flex-row gap-3">
          <input aria-label="Nom" placeholder="Ton nom de gooner" className="flex-1 p-2 rounded bg-transparent border border-[var(--light-gray)] text-[var(--light-gray)]" />
          <input aria-label="Message" placeholder="Ta déclaration de foi" className="flex-2 p-2 rounded bg-transparent border border-[var(--light-gray)] text-[var(--light-gray)]" />
          <button type="button" className="px-4 py-2 bg-[var(--accent)] rounded font-semibold">Soumettre</button>
        </form>
      </section>

      <footer className="mt-8 py-6 text-center text-[var(--light-gray)]">
        © {new Date().getFullYear()} Goonlord — Maître du Goon Ultime. Vive le Goon.
      </footer>
    </div>
  );
};

export default SkillsList;
