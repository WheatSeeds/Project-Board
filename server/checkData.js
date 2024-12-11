const mongoose = require('mongoose');

const uri = 'mongodb+srv://georg23kuz:Ld_Bni22RwscqjL@project-board.tb1of.mongodb.net/project-board';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const Project = mongoose.model('Project', new mongoose.Schema({
    title: String,
    tasks: Array,
}));

(async () => {
    try {
        const project = await Project.findById("6759a922dbd4e949c7b8e3ad");
        if (project) {
            console.log('Project found:', project);
        } else {
            console.log('Project not found');
        }
        process.exit();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
})();
