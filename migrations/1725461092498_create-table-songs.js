/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('songs', {
        id: {
          type: 'VARCHAR(50)',
          primaryKey: true,
        },
        title: {
          type: 'TEXT',
          notNull: true,
        },
        year: {
          type: 'SMALLINT',
          notNull: true,
        },
        genre: {
          type: 'VARCHAR(255)',
          notNull: true,
        },
        performer: {
          type: 'TEXT',
          notNull: true,
        },
        duration: {
          type: 'INT',
          notNull: false,
        },
        album_id: {
            type: 'VARCHAR(50)',
            notNull: false,
        }
      });    
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
    pgm.dropTable('songs');
};
