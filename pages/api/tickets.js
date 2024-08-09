import { PrismaClient } from '@prisma/client';
import { countryAbbreviations, companyAbbreviations, vicePresidencyAbbreviations } from '../../config/abbreviations';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const tickets = await prisma.ticket.findMany();
            res.status(200).json(tickets);
        } catch (error) {
            console.error('Error al obtener los tickets:', error);
            res.status(500).json({ error: 'Error al obtener los tickets' });
        }
    } else if (req.method === 'POST') {
        const { country, company, vicePresidency, description } = req.body;

        if (!country || !company || !vicePresidency || !description) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        try {
            const ticketNumber = await generateTicketNumber(country, company, vicePresidency, description);
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
        } catch (error) {
            console.error('Error al crear el ticket:', error);
            res.status(500).json({ error: 'Error al crear el ticket' });
        }
    } else {
        // Este bloque maneja cualquier método HTTP no soportado
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

async function generateTicketNumber(country, company, vicePresidency, description) {
    const countryCode = countryAbbreviations[country] || "Unknown";
    const companyCode = companyAbbreviations[company] || "Unknown";
    const vpCode = vicePresidencyAbbreviations[vicePresidency] || "Unknown";
    const ticketId = await getNextTicketId();
    const descriptionKeyWord = extractKeyWord(description);
    return `${countryCode}${companyCode}${vpCode}${ticketId}${descriptionKeyWord}`;
}

async function getNextTicketId() {
    const count = await prisma.ticket.count();
    return (count + 1).toString().padStart(3, '0');
}

function extractKeyWord(description) {
    return description.split(' ')[0];
}
