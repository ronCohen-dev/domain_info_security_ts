// 'use strict';
//
//
// export const WHO_IS_API_KEY : string = process.env.WHO_IS_API_KEY!
// export const VIRUS_TOTAL_API_KEY : string = process.env.VIRUS_TOTAL_API_KEY!
// export const SQL_PORT : string = process.env.SQL_PORT!
// export const EXPRESS_PORT : string = process.env.EXPRESS_PORT!
// export const SQL_ROOT_PASSWORD : string = process.env.SQL_ROOT_PASSWORD!
// export const SQL_DATABASE : string = process.env.SQL_DATABASE!
// export const SQL_TYPE : string = process.env.SQL_TYPE!
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TYPE = exports.SQL_DATABASE = exports.SQL_ROOT_PASSWORD = exports.EXPRESS_PORT = exports.SQL_PORT = exports.VIRUS_TOTAL_API_KEY = exports.WHO_IS_API_KEY = void 0;
exports.WHO_IS_API_KEY = process.env.WHO_IS_API_KEY || 'at_vxYe0Hc1GSx8ZuPt1Cd5CCYz6rtxR';
exports.VIRUS_TOTAL_API_KEY = process.env.VIRUS_TOTAL_API_KEY || 'e313b6edef963ad6d0e1b4f418a4bd97ceebb62d383ab4f6cbbf4017ad0522be';
exports.SQL_PORT = process.env.SQL_PORT || '3306';
exports.EXPRESS_PORT = process.env.EXPRESS_PORT || '3000';
exports.SQL_ROOT_PASSWORD = process.env.SQL_ROOT_PASSWORD || 'pass';
exports.SQL_DATABASE = process.env.SQL_DATABASE || 'main';
exports.SQL_TYPE = process.env.SQL_TYPE || 'mysql';
