

const websiteController = {
  async index(req, res) {

    res.status(200).render('home');
  }
};

export default websiteController;