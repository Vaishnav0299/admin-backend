require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use('/admin/students', require('./routes/adminStudents'));
app.use('/admin/counselors', require('./routes/adminCounselors'));
app.use('/admin/analytics', require('./routes/adminAnalytics'));

app.listen(5000, () => console.log('Admin backend running'));
