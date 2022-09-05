const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Alumno extends Sequelize.Model {}
Alumno.init({
  nombre: Sequelize.STRING,
  apellido: Sequelize.STRING,
  email: Sequelize.STRING,
  carrera: Sequelize.STRING
}, { sequelize, modelName: 'alumnos' });


/* crea un Alumno */

sequelize.sync()
  .then(() => Alumno.create({
    nombre: 'Carlos',
    apellido: 'Rodriguez',
    email: 'carlosrodriguez@unahur.edu.ar',
    carrera: 'Lic en Sistemas'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  

//actualiza Alumno

sequelize.sync()
  .then(() => Alumno.update({ nombre: "Carlos Esteban" }, {
    where: {
      apellido: 'Rodriguez'
    }
  }))
  .then(() => {
    console.log("Done");
  });

