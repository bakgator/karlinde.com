import { Mail, Instagram } from "lucide-react";

interface AboutProps {
  onShowPasswordModal?: () => void;
}

const About = ({ onShowPasswordModal }: AboutProps) => {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 font-sans">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold mb-1">KARL INDE</h1>
            <h2 className="text-xl mb-8">FOTOGRAF/ REGISSÖR</h2>
          </div>

          {/* About Section */}
          <section>
            <h2 className="text-xl font-bold mb-4">OM MIG</h2>
            <p className="text-black">
              Jag är en passionerad fotograf och videoregissör med erfarenhet av att skapa visuellt estetiska bilder inom konserter, musikvideor, spelfilm och fashion. Jag brinner för att förmedla berättelser genom ljus, ljud och kreativ regi.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-xl font-bold mb-4">KONTAKT</h2>
            <div className="space-y-1">
              <p>karl@inde.se</p>
              <p>+46725432110</p>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a 
                  href="https://instagram.com/bakgator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @bakgator
                </a>
              </div>
              <p>karlinde.com</p>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-xl font-bold mb-4">UTBILDNING</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Newton Yrkeshögskola, 2024-2026</p>
                <p>Specialist TV- & Digitalproduktion</p>
              </div>
              <div>
                <p className="font-bold">Berghs SOC, 2020 (3 månader)</p>
                <p>Art Direction</p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-xl font-bold mb-4">KOMPETENS</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Kamera & Ljus</span>
                <span>★★★★★</span>
              </div>
              <div className="flex justify-between">
                <span>Premiere Pro</span>
                <span>★★★★★</span>
              </div>
              <div className="flex justify-between">
                <span>After Effects</span>
                <span>★★★</span>
              </div>
              <div className="flex justify-between">
                <span>Ljud</span>
                <span>★★★</span>
              </div>
            </div>
          </section>

          {/* Selected Projects */}
          <section>
            <h2 className="text-xl font-bold mb-4">UTVALDA PROJEKT</h2>
            <ul className="space-y-1">
              <li>Molly Sanden</li>
              <li>Norrsken Foundations</li>
              <li>SEAMS</li>
              <li>French Fries Magasine</li>
              <li>Jhon Allan</li>
              <li>Nadja Evelina</li>
              <li>Mares</li>
            </ul>
          </section>
        </div>

        <div className="space-y-12">
          {/* Work Experience Section */}
          <section>
            <h2 className="text-xl font-bold mb-4">ARBETSLIVSERFARENHET</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold">Eltra Store</h3>
                <p className="font-bold mb-2">Grundare, 2019-2025</p>
                <p>Jag har byggt upp Eltra Store till ett starkt varumärke. Jag var marknadsansvarig samt gjorde allt visuellt innehåll för vår butik, sociala medier och hemsida</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Jade Recordings</h3>
                <p className="font-bold mb-2">Hemsida, foto & film</p>
                <p>Jag har jobbat med att bygga varumärket genom att fotografera och filma spelningar och nysläppta produkter, samt haft ansvar över hemsidan</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Älskade Traditioner</h3>
                <p className="font-bold mb-2">Hovmästare och producent</p>
                <p>Extrajobb som hovmästare och annordnare av vinylspelningar och liveuppträdanden.</p>
              </div>
            </div>
          </section>

          {/* Other Section */}
          <section>
            <h2 className="text-xl font-bold mb-4">ÖVRIGT</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>SVENSKA</span>
                <span>★★★★★</span>
              </div>
              <div className="flex justify-between">
                <span>ENGELSKA</span>
                <span>★★★★★</span>
              </div>
              <div className="flex justify-between">
                <span>ITALIENSKA</span>
                <span>★★</span>
              </div>
              <p className="mt-4">B-KÖRKORT</p>
            </div>
          </section>

          {/* Admin Button - preserved from original */}
          {onShowPasswordModal && (
            <button
              onClick={onShowPasswordModal}
              className="mt-8 px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded"
            >
              Admin Access
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
