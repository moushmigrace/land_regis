// Type definitions for the application (using JSDoc comments for type hints)

/**
 * @typedef {Object} Property
 * @property {string} id
 * @property {string} [nftId]
 * @property {string} ownerId
 * @property {string} ownerName
 * @property {string} location
 * @property {string} address
 * @property {Document[]} documents
 * @property {'verified' | 'pending' | 'disputed'} status
 * @property {Date} registrationDate
 * @property {Date} lastUpdated
 * @property {{x: number, y: number}} [coordinates]
 */

/**
 * @typedef {Object} Document
 * @property {string} id
 * @property {string} name
 * @property {'pdf' | 'image' | 'video'} type
 * @property {string} hash
 * @property {Date} uploadDate
 */

/**
 * @typedef {Object} Transaction
 * @property {string} id
 * @property {string} propertyId
 * @property {string} fromOwner
 * @property {string} toOwner
 * @property {Date} date
 * @property {'registration' | 'transfer' | 'dispute' | 'verification'} action
 * @property {'completed' | 'pending' | 'failed'} status
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} walletAddress
 * @property {string[]} properties
 */

/**
 * @typedef {'landing' | 'map' | 'register' | 'transfer' | 'dashboard'} Page
 */

export {};