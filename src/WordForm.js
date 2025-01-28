import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Grid2,
  Autocomplete,
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
  Paper,
  CircularProgress,
  Alert,
  Snackbar,
} from '@mui/material';
import { Close, Add, Save, Image, Delete, Edit } from '@mui/icons-material';
import { wordService } from './firebaseConfig';

const categories = ['Food', 'Travel', 'Work', 'Home', 'Leisure'];
const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];

const WordForm = () => {
  const [words, setWords] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingWordId, setEditingWordId] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const [formData, setFormData] = useState({
    word: '',
    translation: '',
    category: '',
    level: 'A1',
    hint: '',
    usage: '',
    options: ['', '', '', ''],
    image: '',
    audio: '',
  });

  // Load words on component mount
  useEffect(() => {
    loadWords();
  }, []);

  const loadWords = async () => {
    try {
      setLoading(true);
      const loadedWords = await wordService.getWords();
      setWords(loadedWords);
    } catch (err) {
      setError(err.message);
      setSnackbar({ open: true, message: 'Error loading words', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData((prev) => ({
      ...prev,
      options: newOptions,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (editingWordId) {
        await wordService.updateWord(editingWordId, formData);
        setSnackbar({ open: true, message: 'Word updated successfully', severity: 'success' });
      } else {
        await wordService.addWord(formData);
        setSnackbar({ open: true, message: 'Word added successfully', severity: 'success' });
      }
      await loadWords();
      handleCloseDialog();
    } catch (err) {
      setError(err.message);
      setSnackbar({ open: true, message: 'Error saving word', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await wordService.deleteWord(id);
      await loadWords();
      setSnackbar({ open: true, message: 'Word deleted successfully', severity: 'success' });
    } catch (err) {
      setError(err.message);
      setSnackbar({ open: true, message: 'Error deleting word', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (word) => {
    setEditingWordId(word.id);
    setFormData(word);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingWordId(null);
    setFormData({
      word: '',
      translation: '',
      category: '',
      level: 'A1',
      hint: '',
      usage: '',
      options: ['', '', '', ''],
      image: '',
      audio: '',
    });
  };

  const handleImageSearch = async () => {
    setFormData((prev) => ({
      ...prev,
      image: `/images/${formData.word.toLowerCase()}.webp`,
    }));
  };

  if (loading && !words.length) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={currentTab} onChange={(e, newValue) => setCurrentTab(newValue)}>
          {categories.map((category) => (
            <Tab key={category} label={category} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">Words in {categories[currentTab]}</Typography>
        <Button variant="contained" startIcon={<Add />} onClick={() => setOpenDialog(true)}>
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
              .filter((word) => word.category === categories[currentTab])
              .map((word) => (
                <TableRow key={word.id}>
                  <TableCell>{word.word}</TableCell>
                  <TableCell>{word.translation}</TableCell>
                  <TableCell>{word.level}</TableCell>
                  <TableCell>
                    {word.image && (
                      <Box
                        component="img"
                        src={word.image}
                        alt={word.word}
                        sx={{ height: 50, width: 50, objectFit: 'cover', borderRadius: 1 }}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" onClick={() => handleEdit(word)}>
                      <Edit />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDelete(word.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingWordId ? 'Edit Word' : 'Add New Word'}
          <IconButton onClick={handleCloseDialog} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid2 container spacing={3} size={1}>
            <Grid2 item size={6}>
              <TextField fullWidth label="Word" name="word" value={formData.word} onChange={handleChange} />
            </Grid2>
            <Grid2 item size={6}>
              <TextField
                fullWidth
                label="Translation"
                name="translation"
                value={formData.translation}
                onChange={handleChange}
              />
            </Grid2>
            <Grid2 item size={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select name="category" value={formData.category} onChange={handleChange} label="Category">
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 item size={6}>
              <FormControl fullWidth>
                <InputLabel>Level</InputLabel>
                <Select name="level" value={formData.level} onChange={handleChange} label="Level">
                  {levels.map((level) => (
                    <MenuItem key={level} value={level}>
                      {level}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 item size={12}>
              <TextField fullWidth label="Hint" name="hint" value={formData.hint} onChange={handleChange} />
            </Grid2>
            <Grid2 item size={12}>
              <TextField fullWidth label="Usage Example" name="usage" value={formData.usage} onChange={handleChange} />
            </Grid2>
            <Grid2 item size={12}>
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
            <Grid2 item size={12}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField fullWidth label="Image URL" name="image" value={formData.image} onChange={handleChange} />
                <Button variant="contained" onClick={handleImageSearch} startIcon={<Image />}>
                  Search
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" startIcon={<Save />} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Save Word'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default WordForm;
