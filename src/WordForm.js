import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Typography,
    Grid2,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Tab,
    Tabs,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import { Close, Add, Save, Image } from '@mui/icons-material';

const categories = ['Food', 'Travel', 'Work', 'Home', 'Leisure'];
const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];

const WordForm = () => {
    const [words, setWords] = useState([]);
    const [currentTab, setCurrentTab] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [formData, setFormData] = useState({
        word: '',
        translation: '',
        category: '',
        level: 'A1',
        hint: '',
        usage: '',
        options: ['', '', '', ''],
        image: '',
        audio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...formData.options];
        newOptions[index] = value;
        setFormData(prev => ({
            ...prev,
            options: newOptions
        }));
    };

    const handleSubmit = () => {
        const newWord = {
            ...formData,
            id: words.length + 1
        };
        setWords(prev => [...prev, newWord]);
        setOpenDialog(false);
        setFormData({
            word: '',
            translation: '',
            category: '',
            level: 'A1',
            hint: '',
            usage: '',
            options: ['', '', '', ''],
            image: '',
            audio: ''
        });
    };

    const handleImageSearch = async () => {
        // Here you would integrate with an image search API
        // For now, we'll just set a placeholder
        setFormData(prev => ({
            ...prev,
            image: `/images/${formData.word.toLowerCase()}.webp`
        }));
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                <Tabs value={currentTab} onChange={(e, newValue) => setCurrentTab(newValue)}>
                    {categories.map((category) => (
                        <Tab key={category} label={category} />
                    ))}
                </Tabs>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6">Words in {categories[currentTab]}</Typography>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => setOpenDialog(true)}
                >
                    Add New Word
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Word</TableCell>
                            <TableCell>Translation</TableCell>
                            <TableCell>Level</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {words
                            .filter(word => word.category === categories[currentTab])
                            .map((word) => (
                                <TableRow key={word.id}>
                                    <TableCell>{word.word}</TableCell>
                                    <TableCell>{word.translation}</TableCell>
                                    <TableCell>{word.level}</TableCell>
                                    <TableCell>
                                        <Box
                                            component="img"
                                            src={word.image}
                                            alt={word.word}
                                            sx={{ height: 50, width: 50, objectFit: 'cover' }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton size="small">
                                            <Image />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
                <DialogTitle>
                    Add New Word
                    <IconButton
                        onClick={() => setOpenDialog(false)}
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Grid2 container spacing={3} sx={{ mt: 1 }}>
                        <Grid2 item xs={6}>
                            <TextField
                                fullWidth
                                label="Word"
                                name="word"
                                value={formData.word}
                                onChange={handleChange}
                            />
                        </Grid2>
                        <Grid2 item xs={6}>
                            <TextField
                                fullWidth
                                label="Translation"
                                name="translation"
                                value={formData.translation}
                                onChange={handleChange}
                            />
                        </Grid2>
                        <Grid2 item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    label="Category"
                                >
                                    {categories.map((category) => (
                                        <MenuItem key={category} value={category}>
                                            {category}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid2>
                        <Grid2 item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel>Level</InputLabel>
                                <Select
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                    label="Level"
                                >
                                    {levels.map((level) => (
                                        <MenuItem key={level} value={level}>
                                            {level}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid2>
                        <Grid2 item xs={12}>
                            <TextField
                                fullWidth
                                label="Hint"
                                name="hint"
                                value={formData.hint}
                                onChange={handleChange}
                            />
                        </Grid2>
                        <Grid2 item xs={12}>
                            <TextField
                                fullWidth
                                label="Usage Example"
                                name="usage"
                                value={formData.usage}
                                onChange={handleChange}
                            />
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Typography variant="subtitle1" gutterBottom>
                                Answer Options
                            </Typography>
                            <Grid2 container spacing={2}>
                                {formData.options.map((option, index) => (
                                    <Grid2 item xs={6} key={index}>
                                        <TextField
                                            fullWidth
                                            label={`Option ${index + 1}`}
                                            value={option}
                                            onChange={(e) => handleOptionChange(index, e.target.value)}
                                        />
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <TextField
                                    fullWidth
                                    label="Image URL"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                />
                                <Button
                                    variant="contained"
                                    onClick={handleImageSearch}
                                    startIcon={<Image />}
                                >
                                    Search
                                </Button>
                            </Box>
                        </Grid2>
                    </Grid2>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained" startIcon={<Save />}>
                        Save Word
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default WordForm;