import Image from "next/image";
import { useContext } from "react";
import { motion } from "framer-motion";

import Approved from "@/public/approved.png";
import Denied from "@/public/denied.png";

import { UserContext } from "@/contexts/user";

const valueFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumSignificantDigits: 1,
});

export default function Status() {
  const context = useContext(UserContext);
  const status = context?.user;

  if (!status) return null;

  const [approved, amount] = status.split(";");
  const isApproved = approved === "true";
  const img = isApproved ? Approved : Denied;

  return (
    <div className="flex flex-col h-full justify-center sm:col-start-2 sm:col-span-2">
      <div className="flex flex-col bg-gray-50 p-8 items-center gap-y-6 rounded">
        <motion.div
          animate={{
            scale: [0.5, 1],
            rotate: [0, 360],
            opacity: [0, 1],
          }}
          transition={{ duration: 0.7 }}
        >
          <Image src={img} alt="status image" width={180} height={180} />
        </motion.div>
        <p className="text-gray-900 sm:text-sm sm:leading-6">
          {isApproved
            ? `Parabéns! Seu crédito de ${valueFormatter.format(Number(amount))} foi aprovado e estará disponível em breve.`
            : "Infelizmente você não preencheu os requisitos para a aprovação do crédtio. Para mais informações, consulte nosso material no site oficial."}
        </p>
      </div>
    </div>
  );
}
