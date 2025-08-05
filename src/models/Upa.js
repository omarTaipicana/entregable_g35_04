const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Upa = sequelize.define("upa", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  ruc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nombre_upa: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  usuario_sistema_guia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contraseña_sistema_guia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fecha_de_inicio: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  fecha_de_expiracion: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  provincia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  canton: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  parroquia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  barrio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitud: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  longitud: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tiene_reservorio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitud_reservorio: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  longitud_reservorio: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  largo_reservorio: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  ancho_reservorio: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  profundidad_reservorio: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  cultivo_ha: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  ampliaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cultivos_1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cultivos_2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cultivos_anteriores: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  año_inicio_produccion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fuentes_de_agua: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ph_suelo: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  ce_suelo: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  ph_agua: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  ce_agua: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  dureza: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  fecha_inicio_poe: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  fecha_actualizacion_poe: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  celular: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  permisos_nitrato: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  extencion_nitrato: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  usuario_nitrato: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contraseña_nitrato: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bodega: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitud_bodega_nitrato: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  longitud_bodega_nitrato: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  servicio_seguridad: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
});

module.exports = Upa;
