import pool from "../db.js"; 





export const getUsuarios = async (req, res) => {
    try {
      const roleId = req.params.roleId;
      const results = await pool.query("SELECT * FROM usuarios WHERE id_rol = $1", [roleId]);
  
      res.json(results.rows);
    } catch (error) {
      console.error("Error al obtener usuarios por ID de rol:", error);
      res.status(500).json({ message: "Error al obtener usuarios de la base de datos" });
    }
  };
  export const getAllusuarios= async(req,res)=>{
    try {
        const results= await pool.query("SELECT * FROM usuarios")
        res.json(results.rows)
    } catch (error) {
        console.error("Error al obtener usuarios",error)
        res.status(500).json({ message: "Error al obtener usuarios de la base de datos" });

    }
  }

export const registerUsuarios = async (req, res, next) => {
  const { identificacion, nombre, apellidos, telefono, email, contrasena, nombre_rol } = req.body;

  try {
    console.log("Valores recibidos en el servidor:", { identificacion, nombre, apellidos, telefono, email, contrasena, nombre_rol });

    // Inicia una transacción
    const client = await pool.connect();
    try {
      // Busca el id_rol correspondiente al nombre_rol
      const rolQuery = await client.query('SELECT id_rol FROM roles WHERE nombre_rol = $1', [nombre_rol]);

      if (rolQuery.rows.length === 0) {
        // El rol no existe, puedes manejarlo según tus requisitos
        throw new Error(`El rol '${nombre_rol}' no existe.`);
      }

      const id_rol = rolQuery.rows[0].id_rol;

      // Inserta el usuario con el id_rol correspondiente
      // Inserta el usuario con el id_rol correspondiente
const usuarioQuery = await client.query(
    'INSERT INTO usuarios (identificacion, nombre, apellidos, telefono, email, contrasena, id_rol) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING _id',
    [identificacion, nombre, apellidos, telefono, email, contrasena, id_rol]
  );
  
  const userId = usuarioQuery.rows[0]._id;
  
      // Commit la transacción
      await client.query('COMMIT');

      res.send(`Usuario con id ${userId} registrado correctamente.`);
    } catch (error) {
      // Rollback en caso de error
      await client.query('ROLLBACK');
      throw error;
    } finally {
      // Libera el cliente
      client.release();
    }
  } catch (error) {
    next(error);
  }
};

export const deleteUsuarios=async(req, res,next)=>{
    const {id}=req.params

    try {
        const emepleado= await pool.query('DELETE FROM usuarios WHERE _id= $1' , [id])

        if(emepleado.rowCount===0){
            return res.status(404).json({message: 'Not fount'})


        }
        
        return res.sendStatus(204)
        
    } catch (error) {
        next(error)
        
    }
}

export const updateUsuarios= async(req, res, next)=>{
    const {id}=req.params
    const {nombre,apellidos,telefono, email,contrasena}= req.body
    try {
        const update = await pool.query('UPDATE usuarios SET nombre=$1,apellidos=$2,telefono=$3,email=$4,contrasena=$5 WHERE _id= $6',[nombre,apellidos,telefono, email,contrasena, id])

        if(update.rowCount===0){
            return res.status(404).json({message: 'Not fount'})


        }
        res.sendStatus(204)
        
    } catch (error) {
        next(error)
        
    }


}


export const loginUsuario = async (req, res, next) => {
    const { email, contrasena } = req.body;
  
    try {
      const results = await pool.query("SELECT * FROM usuarios WHERE email = $1 AND contrasena = $2", [email, contrasena]);
  
      if (results.rows.length === 1) {
        // Usuario autenticado
        res.json({ message: "Inicio de sesión exitoso" });
      } else {
        // Credenciales incorrectas
        res.status(401).json({ message: "Credenciales incorrectas" });
      }
    } catch (error) {
      next(error);
    }
  };

  export const logoutUsuario = async (req, res) => {
  // Puedes realizar acciones de logout específicas si es necesario
  // (por ejemplo, revocar tokens almacenados en el servidor)

  // Envía una respuesta de éxito
  res.json({ message: "Logout exitoso" });
};

//CREATE TABLE usuarios (
//     _id SERIAL PRIMARY KEY,
//     identificacion INTEGER,
//     nombre VARCHAR(45),
//     apellidos VARCHAR(45),
//     telefono VARCHAR(45),
//     email VARCHAR(50),
//     contrasena VARCHAR(128);


