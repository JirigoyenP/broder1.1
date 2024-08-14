import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Typography, Box, Container, Paper } from '@mui/material';
import { countryAbbreviations, companyAbbreviations, vicePresidencyAbbreviations } from '../config/abbreviations';

export default function RequestForm() {
    const [country, setCountry] = useState('');
    const [company, setCompany] = useState('');
    const [vicePresidency, setVicePresidency] = useState('');
    const [requestType, setRequestType] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');

    const requestTypes = [
        { value: 'new_app', label: 'Nuevo Requerimiento (Empezar APP desde 0)' },
        { value: 'modification', label: 'Mejorar o Modificar un PowerApp o Automatización' },
        { value: 'automation', label: 'Automatizaciónes en otras Plataformas' },
    ];

    const priorities = [
        { value: 'high', label: 'Alta' },
        { value: 'medium', label: 'Media' },
        { value: 'low', label: 'Baja' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            country,
            company,
            vicePresidency,
            requestType,
            priority,
            description,
        };

        try {
            const response = await fetch('/api/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                alert('Request submitted successfully!');
                setCountry('');
                setCompany('');
                setVicePresidency('');
                setRequestType('');
                setPriority('');
                setDescription('');
            } else {
                throw new Error('Error submitting the request');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the request.');
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Submit a New Request
                </Typography>
                <form onSubmit={handleSubmit}>
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
                                Crear Solicitud
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}
