import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
  Snackbar,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from '@mui/material';
import { Close, Add, Save, Image, Delete, Edit } from '@mui/icons-material';
import { wordService } from '../services/wordService';

const categories = ['Food', 'Travel', 'Work', 'Home', 'Leisure'];
const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];

const WordForm = () => {
  const [words, setWords] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
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
      setOpenDialog(false);
      loadWords();
      resetForm();
    } catch (err) {
      setSnackbar({ open: true, message: 'Error saving word', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await wordService.deleteWord(id);
      setSnackbar({ open: true, message: 'Word deleted successfully', severity: 'success' });
      loadWords();
    } catch (err) {
      setSnackbar({ open: true, message: 'Error deleting word', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (word) => {
    setEditingWordId(word.id);
    setFormData({
      word: word.word,
      translation: word.translation,
      category: word.category,
      level: word.level,
      hint: word.hint,
      usage: word.usage,
      options: word.options || ['', '', '', ''],
      image: word.image,
      audio: word.audio,
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    resetForm();
  };

  const resetForm = () => {
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
    setEditingWordId(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Word Management</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpenDialog(true)}
        >
          Add Word
        </Button>
      </Box>

      <Tabs value={currentTab} onChange={(e, newValue) => setCurrentTab(newValue)}>
        <Tab label="Words List" />
        <Tab label="Categories" />
      </Tabs>

      {currentTab === 0 && (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Word</TableCell>
                <TableCell>Translation</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Level</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {words.map((word) => (
                <TableRow key={word.id}>
                  <TableCell>{word.word}</TableCell>
                  <TableCell>{word.translation}</TableCell>
                  <TableCell>{word.category}</TableCell>
                  <TableCell>{word.level}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(word)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(word.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{editingWordId ? 'Edit Word' : 'Add New Word'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Word"
                name="word"
                value={formData.word}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Translation"
                name="translation"
                value={formData.translation}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Hint"
                name="hint"
                value={formData.hint}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Usage Example"
                name="usage"
                value={formData.usage}
                onChange={handleChange}
                multiline
                rows={2}
              />
            </Grid>
            {formData.options.map((option, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  fullWidth
                  label={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <Save />}
          >
            {editingWordId ? 'Update' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default WordForm;
