const {ChatClient} = require('./chat_grpc_web_pb.js');
const {ConnectRequest} = require('./chat_pb.js');





class ChatClientgRPC{
    constructor(height, width) {
        this.client = new ChatClient('http://localhost:8084');
    }

    connect(name, callback){

        const request = new ConnectRequest();
        request.setName(name);

        const metadata = {};

        this.client.connect(request, metadata, callback);
    }
}




export default ChatClientgRPC