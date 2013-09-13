require.config({
  shim: {
    'vendor/underscore/underscore': {
      exports: '_'
    },
    'vendor/jquery/jquery.min': {
      exports: '$'
    },
    'vendor/jquery-migrate/jquery-migrate.min': {
      deps: ['vendor/jquery/jquery.min']
    },
    'vendor/jquery.console': {
      deps: ['vendor/jquery/jquery.min']
    },
    'vendor/websockify/web-socket-js/swfobject': {
    },
    'vendor/websockify/web-socket-js/web_socket': {
    },
    'vendor/websockify/util': {
    },
    'vendor/websockify/webutil': {
    },
    'vendor/websockify/base64': {
    },
    'vendor/websockify/websock': {
      deps: ['vendor/websockify/base64', 'vendor/websockify/webutil', 'vendor/websockify/util', 'vendor/websockify/web-socket-js/web_socket', 'vendor/websockify/web-socket-js/swfobject']
    }
  }
});