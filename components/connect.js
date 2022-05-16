import {useState} from 'react'
import {ButtonToolbar, Button, Schema, InputGroup, Form} from 'rsuite';
import WechatIcon from '@rsuite/icons/Wechat';

export default function ConnectForm() {

    const [name, setName] = useState('')
    
    const model = Schema.Model({
        name: Schema.Types.StringType().isRequired('The username is required.')
    });

    const handleSubmit = (check, event) => {
        console.log(check, event);
        
        if (check) window.location.href = "/chat?name=" + name
        
    }

    return (
        <Form model={model} action="/chat" onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <InputGroup inside onChange={(e) => {
                    setName(e.target.value)
                }}>
              <Form.Control
                name="name"
                placeholder="Your Username"
                value={name}
              />
              <InputGroup.Addon>
                <WechatIcon />
              </InputGroup.Addon>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <ButtonToolbar>
                <Button appearance="primary" type="submit"><WechatIcon /> Go to the chat room</Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
    );
}