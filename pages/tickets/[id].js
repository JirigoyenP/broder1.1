import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Grid, Typography, Container, Paper, MenuItem } from '@mui/material';

export default function EditTicket() {
    const router = useRouter();
    const { id } = router.query; // Obtener el ID del ticket desde la URL
    const [ticket, setTicket] = useState(null);

    const [country, setCountry] = useState('');
    const [company, setCompany] = useState('');
    const [vicePresidency, setVicePresidency] = useState('');
    const [requestType, setRequestType] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');

    // Ejemplos de abreviaturas (deberían importarse desde config/abbreviations.js)
    const countryAbbreviations = {
        "Perú": "PE",
        "México": "MX",
        "Colombia":"CO",
        "El Salvador":"ES",
        "Chile":"CH"
    };
    const companyAbbreviations = {
        "Ransa Comercial": "RCO",
        "Servicios Logisticos Automotrices":"SLA",
        "Depositos SAC": "DEP",
        "Procesadora Torre Blanca": "PTB"
    };
    const vicePresidencyAbbreviations = {
        "Gestión de Personas": "GP",
        // Otras vicepresidencias
    };

    const requestTypes = [
        { value: 'new_app', label: 'New Application' },
        { value: 'modification', label: 'Modification' },
        { value: 'automation', label: 'Automation' },
    ];

    const priorities = [
        { value: 'high', label: 'High' },
        { value: 'medium', label: 'Medium' },
        { value: 'low', label: 'Low' },
    ];

    useEffect(() => {
        // Fetch the ticket data when the component mounts
        if (id) {
            fetch(`/api/tickets/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setTicket(data);
                    setCountry(data.country);
                    setCompany(data.company);
                    setVicePresidency(data.vicePresidency);
                    setRequestType(data.requestType);
                    setPriority(data.priority);
                    setDescription(data.description);
                })
                .catch((error) => console.error('Error fetching ticket:', error));
        }
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedData = {
            country,
            company,
            vicePresidency,
            requestType,
            priority,
            description,
        };

        try {
            const response = await fetch(`/api/tickets/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                alert('Ticket updated successfully!');
                router.push('/'); // Redirige a la página principal o a la lista de tickets
            } else {
                throw new Error('Error updating the ticket');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updating the ticket.');
        }
    };

    if (!ticket) {
        return (
            <Container maxWidth="md" sx={{ mt: 5 }}>
                <Typography variant="h6" align="center">
                    Loading ticket details...
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Edit Ticket #{id}
                </Typography>
                <form onSubmit={handleUpdate}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                label="Seleccione País"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                variant="outlined"
                                required
                            >
                                {Object.entries(countryAbbreviations).map(([name, code]) => (
                                    <MenuItem key={code} value={code}>{name}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                label="Seleccione Sociedad"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                variant="outlined"
                                required
                            >
                                {Object.entries(companyAbbreviations).map(([name, code]) => (
                                    <MenuItem key={code} value={code}>{name}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                label="Seleccione Vicepresidencia"
                                value={vicePresidency}
                                onChange={(e) => setVicePresidency(e.target.value)}
                                variant="outlined"
                                required
                            >
                                {Object.entries(vicePresidencyAbbreviations).map(([name, code]) => (
                                    <MenuItem key={code} value={code}>{name}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                label="Tipo de Solicitud"
                                value={requestType}
                                onChange={(e) => setRequestType(e.target.value)}
                                variant="outlined"
                                required
                            >
                                {requestTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                label="Prioridad"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                variant="outlined"
                                required
                            >
                                {priorities.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Descripción del Ticket"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                variant="outlined"
                                placeholder="Describa brevemente el problema o solicitud"
                                required
                            />
                        </Grid>

                        <Grid item xs={12} display="flex" justifyContent="center">
                            <Button type="submit" variant="contained" color="primary" sx={{ px: 5 }}>
                                Actualizar Ticket
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}
