const LogReg = require('../models/logReg.model')
class logRegController {

  async index(req, res) {
    try {
      res.render('index')
    } catch (err) {
      throw err
    }
  }

  async getRegister(req, res) {
    try {
      res.render('registration')
    } catch (err) {
      throw err
    }
  }

  async register(req, res) {
    try {
      let saveData = await LogReg.create(req.body)
      if (saveData && saveData._id) {
        console.log('Registered..')
        res.redirect('/')
      }
    } catch (err) {
      throw err
    }
  }

  async getLogin(req, res) {
    try {
      res.render('login')
    } catch (err) {
      throw err
    }
  }

  async login(req, res) {
    try {
      let isUserExists = await LogReg.find({
        userName: req.body.userName,
        userPassword: req.body.userPassword,
      })
      if (!isUserExists.length) {
        console.log('Login Failed...')
        res.redirect('/')
      } else {
        console.log('Login Successfully...')
        res.redirect('/getlogin')
      }
    } catch (err) {
      throw err
    }
  }
}

module.exports = new logRegController()
