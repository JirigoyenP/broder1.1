import { PrismaClient } from '@prisma/client';
import { countryAbbreviations, companyAbbreviations, vicePresidencyAbbreviations } from '../../config/abbreviations';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const tickets = await prisma.ticket.findMany();
        res.status(200).json(tickets);
    } else if (req.method === 'POST') {
        const { country, company, vicePresidency, description } = req.body;
        const ticketNumber = generateTicketNumber(country, company, vicePresidency, description);
        const ticket = await prisma.ticket.create({
            data: {
                country,
                company,
                vicePresidency,
                description,
                ticketNumber,
            },
        });
        res.status(201).json(ticket);
    }
}

function generateTicketNumber(country, company, vicePresidency, description) {
    const countryCode = countryAbbreviations[country] || "Unknown";
    const companyCode = companyAbbreviations[company] || "Unknown";
    const vpCode = vicePresidencyAbbreviations[vicePresidency] || "Unknown";
    const ticketId = getNextTicketId(); // Necesitas implementar esta función para obtener el ID
    const descriptionKeyWord = extractKeyWord(description); // Extrae una palabra clave de la descripción
    return `${countryCode}${companyCode}${vpCode}${ticketId}${descriptionKeyWord}`;
}

async function getNextTicketId() {
  const count = await prisma.ticket.count();
  return (count + 1).toString().padStart(3, '0'); // Rellena con ceros para formar un número como '001'
}


function extractKeyWord(description) {
    // Extrae la primera palabra de la descripción como palabra clave
    // Esta es una implementación básica, ajústala según tus necesidades
    return description.split(' ')[0];
}
