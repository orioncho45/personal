import React from 'react';
import { Box, Typography, TextField, Button, IconButton, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import './style.css';

const ContactSection = () => {
  
  // 1. Formik Setup
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    // Validation Schema
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().min(10, 'Must be at least 10 characters').required('Required'),
    }),
    // Submission Logic
    onSubmit: async (values, { resetForm }) => {
      try {
        // Replace URL with your actual API endpoint (e.g., Formspree, SendGrid, or custom backend)
        await axios.post('https://formspree.io/f/xkowdnpy', {email: values.email, message: `[Hi, I'm ${values.name}. \n ${values.message}]`});
        alert('Message sent successfully!');
        resetForm();
      } catch (error) {
        console.error("Error sending message", error);
        alert('Failed to send message. Please try again later.');
      }
    },
  });

  return (
    <Box className="contact-container">
      <Box className="contact-content">
        
        {/* Left Side: Info */}
        <Box className="contact-info">
          <Typography variant="h2" className="contact-title">Get In Touch</Typography>
          <Typography className="contact-description">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </Typography>
          
          <Box className="email-row">
            <EmailIcon sx={{ mr: 2 }} />
            <Typography>orioncho45@gmail.com</Typography>
          </Box>
          <Box className="email-row">
            <PhoneIcon sx={{ mr: 2 }} />
            <Typography>+8801984316591</Typography>
          </Box>
          <Box className="email-row">
            <WhatsappIcon sx={{ mr: 2 }} />
            <Typography>+8801614316591</Typography>
          </Box>

          <Box className="social-icons">
            <IconButton className="social-btn"><GitHubIcon /></IconButton>
          </Box>
        </Box>

        {/* Right Side: Formik Form */}
        <Box className="contact-form-wrapper">
          <form className="contact-form" onSubmit={formik.handleSubmit}>
            <div className="input-group">
              <label>Name</label>
              <TextField 
                fullWidth 
                name="name"
                placeholder="Your name" 
                variant="outlined" 
                margin="dense"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={textFieldStyle}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <TextField 
                fullWidth 
                name="email"
                placeholder="your@email.com" 
                variant="outlined" 
                margin="dense"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={textFieldStyle}
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <TextField 
                fullWidth 
                name="message"
                multiline 
                rows={4} 
                placeholder="Your message..." 
                variant="outlined" 
                margin="dense"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                sx={textFieldStyle}
              />
            </div>

            <Button 
              className="submit-btn" 
              fullWidth 
              variant="contained" 
              type="submit"
              disabled={formik.isSubmitting} // Disable while loading
            >
              {formik.isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
            </Button>
          </form>
        </Box>

      </Box>
    </Box>
  );
};

// Reusable style object for TextFields
const textFieldStyle = {
  input: { color: 'white' },
  textarea: { color: 'white' },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#444" },
    "&:hover fieldset": { borderColor: "#888" },
    "&.Mui-focused fieldset": { borderColor: "#fff" }
  },
  "& .MuiFormHelperText-root": { color: "#ff4444" }
};

export default ContactSection;