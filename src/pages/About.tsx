import { Mail, Phone, Instagram, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">KARL INDE</h1>
          <h2 className="text-xl mb-8">PHOTOGRAPHER / DIRECTOR</h2>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Me Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">OM MIG</h2>
              <p className="text-base">
               Karl Inde is a photographer and video director with experience in creating visuals for feature films, concert, music videos, and fashion. His work focuses on storytelling through light, sound, and creative direction.
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
                </div
              </div>
            </section>
                  <p className="font-bold">Berghs SOC, 2020</p>
                  <p>Art Direction</p>
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
        
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
