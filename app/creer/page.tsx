import Link from "next/link";

export default function Creer() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <h2>Nouveau questionnaire</h2>
          <p>Donnez un titre et une description à votre questionnaire.</p>
        </div>
        <form>
          <p>
            <label htmlFor="titre">Titre</label><br />
            <input id="titre" name="titre" type="text" placeholder="Quiz de révision Git" />
          </p>
          <p>
            <label htmlFor="description">Description</label><br />
            <textarea id="description" name="description" rows={4} />
          </p>
          <button className="btn btn-primary" type="submit" disabled>Enregistrer</button>
        </form>
        <p><Link href="/">← Retour à l&apos;accueil</Link></p>
      </div>
    </section>
  );
}
