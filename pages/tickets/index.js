import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box } from '@mui/material';

export default function TicketList() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        // Fetch all tickets when the component mounts
        fetch('/api/tickets')
            .then((response) => response.json())
            .then((data) => setTickets(data))
            .catch((error) => console.error('Error fetching tickets:', error));
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    List of All Tickets
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Ticket ID</TableCell>
                                <TableCell>Country</TableCell>
                                <TableCell>Company</TableCell>
                                <TableCell>Vice Presidency</TableCell>
                                <TableCell>Priority</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tickets.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center">
                                        No tickets available.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                tickets.map((ticket) => (
                                    <TableRow key={ticket.id}>
                                        <TableCell>{ticket.ticketNumber}</TableCell>
                                        <TableCell>{ticket.country}</TableCell>
                                        <TableCell>{ticket.company}</TableCell>
                                        <TableCell>{ticket.vicePresidency}</TableCell>
                                        <TableCell>{ticket.priority}</TableCell>
                                        <TableCell>
                                            <Link href={`/tickets/${ticket.id}`} passHref>
                                                <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                                                    View/Edit
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
}
