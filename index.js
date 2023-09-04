export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: sayHello('Hello Tejas! This message is from lambda sayHello met'),
    };
    
    
    return response;
  };
  
  function sayHello(message){
    return message;
  }
  