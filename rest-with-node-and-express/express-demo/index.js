const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.get('/api/courses', (req, res) => {
//     res.send([1, 2, 3, 4])
// })

// // /api/courses/1 - single parameters
// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id)
// })

// // Request with multiple parameters
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params)
// })

// // Request with query parameters
// app.get('/api/comments', (req, res) => {
//     res.send(req.query)
// })

const courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' },
    { id: 4, name: 'course 4' }
]

app.get('/', (_, res) => {
    res.send('Welcome hello world')
})

app.get('/api/courses', (_, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));

    if (!course) res.send('The course with the given course ID was not found');
    res.send(course);
})

// PORT
const port = process.env.PORT || 3000; // Assign custom assignable ports. 
// To assign custom ports in terminal you can use keyword export(in windows = set). eg. export PORT=5001

app.listen(port, () => console.log(`Listening the port ${port}...`))