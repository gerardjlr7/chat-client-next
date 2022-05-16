/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.protos = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.ChatClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.ChatPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.StatusRequest,
 *   !proto.protos.StatusReply>}
 */
const methodDescriptor_Chat_Writing = new grpc.web.MethodDescriptor(
  '/protos.Chat/Writing',
  grpc.web.MethodType.UNARY,
  proto.protos.StatusRequest,
  proto.protos.StatusReply,
  /**
   * @param {!proto.protos.StatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.StatusReply.deserializeBinary
);


/**
 * @param {!proto.protos.StatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protos.StatusReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.StatusReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ChatClient.prototype.writing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.Chat/Writing',
      request,
      metadata || {},
      methodDescriptor_Chat_Writing,
      callback);
};


/**
 * @param {!proto.protos.StatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.StatusReply>}
 *     Promise that resolves to the response
 */
proto.protos.ChatPromiseClient.prototype.writing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.Chat/Writing',
      request,
      metadata || {},
      methodDescriptor_Chat_Writing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.StatusRequest,
 *   !proto.protos.StatusReply>}
 */
const methodDescriptor_Chat_WhoIsWriting = new grpc.web.MethodDescriptor(
  '/protos.Chat/WhoIsWriting',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.protos.StatusRequest,
  proto.protos.StatusReply,
  /**
   * @param {!proto.protos.StatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.StatusReply.deserializeBinary
);


/**
 * @param {!proto.protos.StatusRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.protos.StatusReply>}
 *     The XHR Node Readable Stream
 */
proto.protos.ChatClient.prototype.whoIsWriting =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/protos.Chat/WhoIsWriting',
      request,
      metadata || {},
      methodDescriptor_Chat_WhoIsWriting);
};


/**
 * @param {!proto.protos.StatusRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.protos.StatusReply>}
 *     The XHR Node Readable Stream
 */
proto.protos.ChatPromiseClient.prototype.whoIsWriting =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/protos.Chat/WhoIsWriting',
      request,
      metadata || {},
      methodDescriptor_Chat_WhoIsWriting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.MessageRequest,
 *   !proto.protos.MessageReply>}
 */
const methodDescriptor_Chat_SendMessage = new grpc.web.MethodDescriptor(
  '/protos.Chat/SendMessage',
  grpc.web.MethodType.UNARY,
  proto.protos.MessageRequest,
  proto.protos.MessageReply,
  /**
   * @param {!proto.protos.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.MessageReply.deserializeBinary
);


/**
 * @param {!proto.protos.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protos.MessageReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.MessageReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ChatClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.Chat/SendMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_SendMessage,
      callback);
};


/**
 * @param {!proto.protos.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.MessageReply>}
 *     Promise that resolves to the response
 */
proto.protos.ChatPromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.Chat/SendMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_SendMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.MessageRequest,
 *   !proto.protos.MessageReply>}
 */
const methodDescriptor_Chat_ReceiveMessage = new grpc.web.MethodDescriptor(
  '/protos.Chat/ReceiveMessage',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.protos.MessageRequest,
  proto.protos.MessageReply,
  /**
   * @param {!proto.protos.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.MessageReply.deserializeBinary
);


/**
 * @param {!proto.protos.MessageRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.protos.MessageReply>}
 *     The XHR Node Readable Stream
 */
proto.protos.ChatClient.prototype.receiveMessage =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/protos.Chat/ReceiveMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_ReceiveMessage);
};


/**
 * @param {!proto.protos.MessageRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.protos.MessageReply>}
 *     The XHR Node Readable Stream
 */
proto.protos.ChatPromiseClient.prototype.receiveMessage =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/protos.Chat/ReceiveMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_ReceiveMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.ConnectRequest,
 *   !proto.protos.ConnectReply>}
 */
const methodDescriptor_Chat_Connect = new grpc.web.MethodDescriptor(
  '/protos.Chat/Connect',
  grpc.web.MethodType.UNARY,
  proto.protos.ConnectRequest,
  proto.protos.ConnectReply,
  /**
   * @param {!proto.protos.ConnectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.ConnectReply.deserializeBinary
);


/**
 * @param {!proto.protos.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protos.ConnectReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.ConnectReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ChatClient.prototype.connect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.Chat/Connect',
      request,
      metadata || {},
      methodDescriptor_Chat_Connect,
      callback);
};


/**
 * @param {!proto.protos.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.ConnectReply>}
 *     Promise that resolves to the response
 */
proto.protos.ChatPromiseClient.prototype.connect =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.Chat/Connect',
      request,
      metadata || {},
      methodDescriptor_Chat_Connect);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.ConnectRequest,
 *   !proto.protos.ConnectReply>}
 */
const methodDescriptor_Chat_Disconnect = new grpc.web.MethodDescriptor(
  '/protos.Chat/Disconnect',
  grpc.web.MethodType.UNARY,
  proto.protos.ConnectRequest,
  proto.protos.ConnectReply,
  /**
   * @param {!proto.protos.ConnectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.ConnectReply.deserializeBinary
);


/**
 * @param {!proto.protos.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protos.ConnectReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.ConnectReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.ChatClient.prototype.disconnect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.Chat/Disconnect',
      request,
      metadata || {},
      methodDescriptor_Chat_Disconnect,
      callback);
};


/**
 * @param {!proto.protos.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.ConnectReply>}
 *     Promise that resolves to the response
 */
proto.protos.ChatPromiseClient.prototype.disconnect =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.Chat/Disconnect',
      request,
      metadata || {},
      methodDescriptor_Chat_Disconnect);
};


module.exports = proto.protos;

