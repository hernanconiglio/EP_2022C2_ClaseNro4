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


/* crea varios Alumnos de la licenciatura en Informatica */

sequelize.sync()
  .then(() => Alumno.create({
    nombre: 'Matias',
    apellido: 'Gomez',
    email: 'matiasgomez@unahur.edu.ar',
    carrera: 'Lic en Sistemas'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  sequelize.sync()
  .then(() => Alumno.create({
    nombre: 'Joaquin',
    apellido: 'Parra',
    email: 'joaquinparra@unahur.edu.ar',
    carrera: 'Lic en Sistemas'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  sequelize.sync()
  .then(() => Alumno.create({
    nombre: 'Marcelo',
    apellido: 'Dominguez',
    email: 'marcelodominguez@unahur.edu.ar',
    carrera: 'Lic en Sistemas'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  

//actualiza la carrera a todos los alumnos de la licenciatura en Informatica
sequelize.sync()
  .then(() => Alumno.update({ carrera: "Licenciatura en Informatica" }, {
    where: {
      carrera: 'Lic en Sistemas'
    }
  }))
  .then(() => {
    console.log("Listo la actualizacion");
  });

