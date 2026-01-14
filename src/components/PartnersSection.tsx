import { motion } from "framer-motion";
import partnerSSC from "@/assets/partner-ssc.jpg";
import partnerVSD from "@/assets/partner-vsd.jpg";
import partnerHNX from "@/assets/partner-hnx.jpg";
import partnerHOSE from "@/assets/partner-hose.jpg";
import partnerWFE from "@/assets/partner-wfe.jpg";

const partners = [
  { name: "SSC", logo: partnerSSC },
  { name: "VSD", logo: partnerVSD },
  { name: "HNX", logo: partnerHNX },
  { name: "HOSE", logo: partnerHOSE },
  { name: "WFE", logo: partnerWFE },
];

export default function PartnersSection() {
  const duplicatedPartners = [...partners, ...partners];

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

      <div className="relative">
        <div className="partner-scroll flex items-center gap-12 px-8">
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 h-16 flex items-center justify-center cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
