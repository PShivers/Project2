
const MorningReportsApi = require('../api/morningReportsApi');

//controller has routes and behaviors
module.exports = function (app) {

  app.get('/morningReports/', (req, res) => {
    MorningReportsApi.listAllMorningReports().then(doc => {
      res.render("morningReports/listOfMorningReports", { mornings: doc })
    })
  });

  app.get('/morningReports/createMorningReport', (req, res) => {
    res.render("morningReports/createMorningReport")
  });

  app.post('/morningReports/createMorningReport', (req, res) => {
    //get data  from the view and pass it to mogodb 
    console.log(req.body)
    MorningReportsApi.createMorningReport(req.body.date, req.body.rating, req.body.mood, req.body.notes);
    res.render('morningReports/createdMorningReport', { morning: req.body })
  });

  app.get('/morningReports/:id', (req, res) => {
    MorningReportsApi
      .findMorningReport(req.params.id)
      .then(doc => {
        res.render('morningReports/singleMorningReport', { morning: doc });
      })
  });

  app.delete('/morningReports/:id', (req, res) => {
    MorningReportsApi
      .deleteMorningReport(req.params.id)
      .then(() => {
        res.redirect('/morningReports');
      })
  });

};