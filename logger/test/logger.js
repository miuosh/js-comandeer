/* global logger:false */
/* eslint no-console:0 */

describe('Logger', () => {
  it( 'is and object', () => {
    if ( typeof logger !== 'object' ) {
      throw Error( ' Logger should be an object.')
    }
  } );

  it( 'has success method', () => {
    if (typeof logger.success !== 'function' ){
      throw Error('Logger.success should be a function.')
    }
  } );

  it( 'has warning method', () => {
    if (typeof logger.warning !== 'function' ){
      throw Error('Logger.warning should be a function.')
    }
  } );

  it( 'has error method', () => {
    if (typeof logger.error !== 'function' ){
      throw Error('Logger.error should be a function.')
    }
  } );

  it( 'has info method', () => {
    if (typeof logger.info !== 'function' ){
      throw Error('Logger.info should be a function.')
    }
  } );

} );
