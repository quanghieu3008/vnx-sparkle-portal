import { motion } from "framer-motion";
import partnerSSC from "@/assets/partner-ssc.jpg";
import partnerVSD from "@/assets/partner-vsd.jpg";
import partnerHNX from "@/assets/partner-hnx.jpg";
import partnerHOSE from "@/assets/partner-hose.jpg";
import partnerMOF from "@/assets/partner-mof.png";

const partners = [
  { name: "SSC", logo: partnerSSC },
  { name: "VSD", logo: partnerVSD },
  { name: "HNX", logo: partnerHNX },
  { name: "HOSE", logo: partnerHOSE },
  { name: "Bộ Tài Chính", logo: partnerMOF },
];

export default function PartnersSection() {
  // Duplicate 3 times for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-8 border-y border-border/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-display font-semibold text-foreground">
            Liên kết tổ chức
          </h3>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="partner-scroll-seamless flex items-center">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-16 px-8 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
