import Image from "next/image";

import Approved from "@/public/approved.png";
import Denied from "@/public/denied.png";

const valueFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumSignificantDigits: 1,
});

export default function Status({ status }: { status: string }) {
  const [approved, amount] = status.split(";");
  const isApproved = approved === "true";
  const img = isApproved ? Approved : Denied;

  return (
    <div className="flex flex-col h-full justify-center sm:col-start-2 sm:col-span-2">
      <div className="flex flex-col bg-gray-50 p-8 items-center gap-y-6 rounded">
        <Image src={img} alt="status image" width={180} height={180} />
        <p className="text-gray-900 sm:text-sm sm:leading-6">
          {isApproved
            ? `Parabéns! Seu crédito de ${valueFormatter.format(Number(amount))} foi aprovado e estará disponível em breve.`
            : "Infelizmente você não preencheu os requisitos para a aprovação do crédtio. Para mais informações, consulte nosso material no site oficial."}
        </p>
      </div>
    </div>
  );
}
