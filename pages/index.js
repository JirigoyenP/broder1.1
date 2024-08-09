import React, { useState, useEffect } from 'react';
import { countryAbbreviations, companyAbbreviations, vicePresidencyAbbreviations } from '../config/abbreviations';

export default function Home() {
    const [tickets, setTickets] = useState([]);
    const [country, setCountry] = useState('');
    const [company, setCompany] = useState('');
    const [vicePresidency, setVicePresidency] = useState('');
    const [description, setDescription] = useState('');

    // Convertir objetos de abreviaturas en arrays para usar en selectores
    const countries = Object.entries(countryAbbreviations).map(([name, code]) => ({ name, code }));
    const companies = Object.entries(companyAbbreviations).map(([name, code]) => ({ name, code }));
    const vicePresidencies = Object.entries(vicePresidencyAbbreviations).map(([name, code]) => ({ name, code }));

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const ticketData = {
            country,
            company,
            vicePresidency,
            description,
        };
    
        try {
            const response = await fetch('/api/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketData)
            });
    
            if (response.ok) {
                const newTicket = await response.json();
                setTickets(currentTickets => [...currentTickets, newTicket]);
                setCountry('');
                setCompany('');
                setVicePresidency('');
                setDescription('');
            } else {
                throw new Error('Algo salió mal al tratar de crear el ticket');
            }
        } catch (error) {
            console.error('Error al crear el ticket:', error);
        }
    };

    return (
        <div>
            <h1>Sistema de Administración de Tickets 1.1</h1>
            <form onSubmit={handleSubmit}>
                <select value={country} onChange={e => setCountry(e.target.value)}>
                    <option value="">Seleccione País</option>
                    {countries.map(({ name, code }) => (
                        <option key={code} value={code}>{name}</option>
                    ))}
                </select>

                <select value={company} onChange={e => setCompany(e.target.value)}>
                    <option value="">Seleccione Sociedad</option>
                    {companies.map(({ name, code }) => (
                        <option key={code} value={code}>{name}</option>
                    ))}
                </select>

                <select value={vicePresidency} onChange={e => setVicePresidency(e.target.value)}>
                    <option value="">Seleccione Vicepresidencia</option>
                    {vicePresidencies.map(({ name, code }) => (
                        <option key={code} value={code}>{name}</option>
                    ))}
                </select>

                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción del Ticket"></textarea>

                <button type="submit">Crear Ticket</button>
            </form>

            <h2>Tickets Creados</h2>
            <ul>
                {tickets.map((ticket, index) => (
                    <li key={index}>
                        <strong>Ticket ID:</strong> {ticket.ticketNumber}<br />
                        <strong>País:</strong> {ticket.country}<br />
                        <strong>Sociedad:</strong> {ticket.company}<br />
                        <strong>Vicepresidencia:</strong> {ticket.vicePresidency}<br />
                        <strong>Descripción:</strong> {ticket.description}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
}
