const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key';

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://georg23kuz:Ld_Bni22RwscqjL@project-board.tb1of.mongodb.net/project-board?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected to Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Models
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});

const ProjectSchema = new mongoose.Schema({
    id: Number,
    title: String,
    tasks: [
        {
            title: String,
            description: String,
            date: String,
            priority: String,
        },
    ],
});

const User = mongoose.model('User', UserSchema);
const Project = mongoose.model('Project', ProjectSchema);

// Route to update project title
app.put('/projects/:projectId', async (req, res) => {
    const { projectId } = req.params;
    const { title } = req.body; // или другие поля, которые необходимо обновить

    try {
        const token = req.headers.authorization?.split(' ')[1];
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decoded.userId);

        if (!user.projects.includes(projectId)) {
            return res.status(403).json({ message: 'Access denied' });
        }

        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            { title }, // обновляемые поля проекта
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
    } catch (error) {
        res.status(500).json({ message: 'Error updating project', error });
    }
});

// Route to update tasks in project
app.post('/projects/:projectId', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { projectId } = req.params;
    const taskUpdates = req.body; // Updated task data

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decoded.userId);

        if (!user.projects.includes(projectId)) {
            return res.status(403).json({ message: 'Access denied' });
        }

        const project = await Project.findByIdAndUpdate(
            projectId,
            { $set: { tasks: taskUpdates } }, // Replace tasks with updated data
            { new: true }
        );

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({
            message: 'Task updated successfully',
            project,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
});

// Route to delete tasks from project
app.delete('/projects/:projectId', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { projectId } = req.params;
    const { taskId } = req.body;

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decoded.userId);

        if (!user.projects.includes(projectId)) {
            return res.status(403).json({ message: 'Access denied' });
        }

        const project = await Project.findByIdAndUpdate(
            projectId,
            { $pull: { tasks: { _id: taskId } } },
            { new: true }
        );

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({
            message: 'Task deleted successfully',
            project,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
});

// Route to create or update a project
app.post('/projects', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decoded.userId);
        const { _id, title, tasks } = req.body;

        let project;

        if (_id) {
            // Если передан _id, пытаемся найти и обновить проект
            project = await Project.findByIdAndUpdate(
                _id,
                { title, tasks },
                { new: true }
            );

            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
        } else {
            // Если _id отсутствует, создаём новый проект
            project = new Project({ title, tasks });
            await project.save();
            user.projects.push(project._id);
            await user.save();
        }

        res.status(200).json({
            message: _id ? 'Project updated successfully' : 'Project created successfully',
            project,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error processing project', error });
    }
});

// Route to delete a project
app.delete('/projects/:projectId', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { projectId } = req.params;
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decoded.userId);

        // Найти проект по ID и удалить его
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Удалить проект из списка проектов пользователя
        user.projects = user.projects.filter(p => p.toString() !== projectId);
        await user.save();

        // Удалить проект из базы данных
        await Project.findByIdAndDelete(projectId);

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project', error });
    }
});

// Route to register a new user
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// Route to login a user
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).populate('projects');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token, projects: user.projects });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

// Route to fetch projects for a user
app.get('/projects', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decoded.userId).populate('projects');
        res.status(200).json({ projects: user.projects });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
