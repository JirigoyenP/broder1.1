import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const ticket = await prisma.ticket.findUnique({ where: { id: parseInt(id) } });
            if (!ticket) {
                return res.status(404).json({ error: 'Ticket not found' });
            }
            res.status(200).json(ticket);
        } catch (error) {
            console.error('Error fetching ticket:', error);
            res.status(500).json({ error: 'Error fetching ticket' });
        }
    } else if (req.method === 'PUT') {
        const { country, company, vicePresidency, requestType, priority, description } = req.body;

        try {
            // Verificar que todos los campos requeridos estén presentes
            if (!country || !company || !vicePresidency || !requestType || !priority || !description) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            const updatedTicket = await prisma.ticket.update({
                where: { id: parseInt(id) },
                data: { country, company, vicePresidency, requestType, priority, description },
            });

            res.status(200).json(updatedTicket);
        } catch (error) {
            console.error('Error updating ticket:', error);
            res.status(500).json({ error: 'Error updating ticket' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
