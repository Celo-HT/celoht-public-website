import jsPDF from "jspdf";

export function generateGrantReport(data: {
  period: string;
  total: number;
  donors: number;
  transactions: number;
}) {
  const pdf = new jsPDF();

  pdf.setFontSize(18);
  pdf.text("CeloHT Grant Transparency Report", 14, 20);

  pdf.setFontSize(11);
  pdf.text(`Reporting Period: ${data.period}`, 14, 35);
  pdf.text(`Total Donations: ${data.total} cUSD`, 14, 45);
  pdf.text(`Unique Donors: ${data.donors}`, 14, 55);
  pdf.text(`Transactions: ${data.transactions}`, 14, 65);

  pdf.text(
    "All data is sourced directly from the Celo blockchain.\nCeloHT does not issue tokens and operates as a Web3 NGO.",
    14,
    85
  );

  pdf.save("celoht-grant-report.pdf");
}