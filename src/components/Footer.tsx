import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Identité */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-conipas.jpeg"
                alt="Logo CONIPAS"
                width={40}
                height={40}
              />
              <span className="font-semibold text-lg text-white">
                CONIPAS
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Le Conseil Interprofessionnel de la Pêche Artisanale au Sénégal
              est l’organe national de concertation et de représentation des
              acteurs de la pêche artisanale.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Accueil</Link></li>
              <li><Link href="/conipas" className="hover:underline">Le CONIPAS</Link></li>
              <li><Link href="/gouvernance" className="hover:underline">Gouvernance</Link></li>
              <li><Link href="/actions" className="hover:underline">Actions</Link></li>
              <li><Link href="/donnees" className="hover:underline">Données</Link></li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Ressources
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/actualites" className="hover:underline">Actualités</Link></li>
              <li><Link href="/ressources" className="hover:underline">Documents</Link></li>
              <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="hover:underline">Confidentialité</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Dakar, Sénégal</li>
              <li>
                <a
                  href="mailto:contact@conipas.sn"
                  className="hover:underline"
                >
                  contact@conipas.sn
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bas de footer */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CONIPAS – Conseil Interprofessionnel de la
        Pêche Artisanale au Sénégal. Tous droits réservés.
      </div>
    </footer>
  );
}
