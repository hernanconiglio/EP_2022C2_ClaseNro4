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


/* inserta otro Alumno */

sequelize.sync()
  .then(() => Alumno.create({
    nombre: 'Alberto',
    apellido: 'Ramirez',
    email: 'albertoramirez@unahur.edu.ar',
    carrera: 'Lic en Disenio Industrial'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  

//elimina el Alumno
sequelize.sync()
  .then(() => Alumno.destroy({
    where: {
      apellido: 'Ramirez'
    }
  }))
  .then(() => {
    console.log("Elimine el registro");
  });

