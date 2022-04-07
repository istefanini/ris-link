import { Timestamp } from "rxjs"

export interface PacienteInterface {
  pacienteId: number,
  nombres: string,
  apellido: string,
  apyNom: string,
  fechaNacim: any,
  sexo: string,
  estadoCivilId: number,
  tipoDocumentoId: string,
  tipoDocumentoIdDesc: string,
  nroDocumento: string,
  calle: string,
  alturaCalle: string,
  piso: string,
  departamento: string,
  localidadId: number,
  provinciaId: number,
  paisId: number,
  codPos: string,
  ctaCte: string,
  historiaClinica: number,
  ondicionIVAId: number,
  email: string,
  emailActivo: string,
  exentoIIBBPciaBsas: string,
  tipoImpuestoIIBBId: number,
  impuestoIIBBPciaBsasId: number,
  sysInactivo: number,
  sysFechac: any,
  sysLoginc: string,
  sysHostc: string,
  sysFecham: any,
  sysLoginm: string,
  sysHostm: string,
  paisNacimientoId: number,
  beneficiario: string,
  exentoIIBBCapfed: string,
  impuestoIIBBCapfedId: number,
  mor: string,
  telemedicina: string,
  benefactor: string,
  carpetaHc: string,
  respApellido: string,
  respNombre: string,
  respTipoDocId: number,
  respNroDoc: string,
  respEmail: any,
  respSexo: string,
  respParentescoId: number,
  respTel1: string,
  respCalle: string,
  respLocalidadId: number,
  respProvinciaId: number,
  respPaisId: number,
  respCodPos: string,
  consentEstudioInternet: string,
  alerta: string,
  empadronado: string,
  direccion: string,
  habilitarPortal: string,
  habilitarPortalResp: string,
  telefonos: [
      {
          telefonoId: string,
          numero: string,
          tipoTelefonoId: string
      }
  ]
}