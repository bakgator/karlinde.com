import { Mail, Phone, Instagram, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">KARL INDE</h1>
          <h2 className="text-xl mb-8">FOTOGRAF/ REGISSÖR</h2>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Me Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">OM MIG</h2>
              <p className="text-base">
                Jag är en passionerad fotograf och videoregissör med erfarenhet av att skapa visuellt estetiska bilder inom konserter, musikvideor, spelfilm och fashion. Jag brinner för att förmedla berättelser genom ljus, ljud och kreativ regi.
              </p>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">KONTAKT</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:karl@inde.se" className="hover:underline">karl@inde.se</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+46725432110</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  <a href="https://instagram.com/bakgator" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    @bakgator
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <a href="https://karlinde.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    karlinde.com
                  </a>
                </div>
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

            {/* Selected Projects Section */}
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

          {/* Right Column */}
          <div className="space-y-8">
            {/* Work Experience Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">ARBETSLIVSERFARENHET</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold">Eltra Store</h3>
                  <p className="text-sm mb-2">Grundare, 2019-2025</p>
                  <p>Jag har byggt upp Eltra Store till ett starkt varumärke. Jag var marknadsansvarig samt gjorde allt visuellt innehåll för vår butik, sociala medier och hemsida</p>
                </div>
                <div>
                  <h3 className="font-bold">Jade Recordings</h3>
                  <p className="text-sm mb-2">Hemsida, foto & film</p>
                  <p>Jag har jobbat med att bygga varumärket genom att fotografera och filma spelningar och nysläppta produkter, samt haft ansvar över hemsidan</p>
                </div>
                <div>
                  <h3 className="font-bold">Älskade Traditioner</h3>
                  <p className="text-sm mb-2">Hovmästare och producent</p>
                  <p>Extrajobb som hovmästare och anordnare av vinylspelningar och liveuppträdanden.</p>
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
                <div className="mt-4">
                  <p className="font-bold">B-KÖRKORT</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
