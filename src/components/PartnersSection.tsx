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
    <section className="py-16 border-y border-border/30 overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            Strategic Partners
          </h3>
          <p className="text-sm text-muted-foreground">
            Collaborating with trusted organizations worldwide
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="partner-scroll flex items-center gap-16 px-8">
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-32 h-20 bg-card/80 rounded-lg flex items-center justify-center p-4 border border-border/50 hover:border-primary/50 transition-all cursor-pointer group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
