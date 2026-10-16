const modeles = [
  { titre: "Quiz de cours", texte: "Dix questions à choix multiple, corrigées automatiquement." },
  { titre: "Sondage de satisfaction", texte: "Des échelles de 1 à 5 et un commentaire libre." },
  { titre: "Évaluation de TP", texte: "Des questions ouvertes et un barème par critère." },
];

export default function Modeles() {
  return (
    <section id="modeles" className="section-surface">
      <div className="container">
        <div className="section-head">
          <h2>Modèles de questionnaires</h2>
          <p>Partez d&apos;un modèle prêt à l&apos;emploi.</p>
        </div>
        <div className="cards">
          {modeles.map((m) => (
            <div className="card" key={m.titre}>
              <h3>{m.titre}</h3>
              <p>{m.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
